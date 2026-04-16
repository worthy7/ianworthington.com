param(
    [string]$WorkspaceRoot = $PSScriptRoot,
    [string]$OutputDir,
    [string]$BrowserPath
)

$ErrorActionPreference = "Stop"

if (-not $OutputDir -or [string]::IsNullOrWhiteSpace($OutputDir)) {
    $OutputDir = $WorkspaceRoot
}

$englishHtml = Join-Path $WorkspaceRoot "resume-print.html"
$japaneseHtml = Join-Path $WorkspaceRoot "resume-print.ja.html"

if (-not (Test-Path $englishHtml)) {
    throw "Missing file: $englishHtml"
}

if (-not (Test-Path $japaneseHtml)) {
    throw "Missing file: $japaneseHtml"
}

New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null

function Resolve-BrowserExecutable {
    param([string]$PreferredPath)

    if ($PreferredPath -and (Test-Path $PreferredPath)) {
        return $PreferredPath
    }

    $candidates = @(
        "$Env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
        "$Env:ProgramFiles(x86)\Microsoft\Edge\Application\msedge.exe",
        "$Env:ProgramFiles\Google\Chrome\Application\chrome.exe",
        "$Env:ProgramFiles(x86)\Google\Chrome\Application\chrome.exe"
    )

    foreach ($candidate in $candidates) {
        if (Test-Path $candidate) {
            return $candidate
        }
    }

    throw "Could not find Edge or Chrome. Install one or pass -BrowserPath explicitly."
}

function Convert-HtmlToPdf {
    param(
        [string]$Browser,
        [string]$HtmlPath,
        [string]$PdfPath
    )

    $resolvedHtmlPath = (Resolve-Path $HtmlPath).Path
    $htmlUri = [System.Uri]::new($resolvedHtmlPath).AbsoluteUri
    $resolvedPdfPath = [System.IO.Path]::GetFullPath($PdfPath)
    $pdfDirectory = Split-Path -Parent $resolvedPdfPath
    $tempPdfPath = "$resolvedPdfPath.tmp.pdf"
    $tempProfile = Join-Path ([System.IO.Path]::GetTempPath()) ("resume-print-" + [System.Guid]::NewGuid().ToString("N"))
    New-Item -ItemType Directory -Path $tempProfile -Force | Out-Null

    try {
        Remove-Item -Path $tempPdfPath -Force -ErrorAction SilentlyContinue

        $argsPrimary = @(
            "--headless",
            "--disable-gpu",
            "--run-all-compositor-stages-before-draw",
            "--virtual-time-budget=10000",
            "--no-pdf-header-footer",
            "--print-to-pdf-no-header",
            "--user-data-dir=$tempProfile",
            "--print-to-pdf=$resolvedPdfPath",
            $htmlUri
        )

        & $Browser @argsPrimary

        for ($i = 0; $i -lt 20 -and -not (Test-Path $resolvedPdfPath) -and -not (Test-Path $tempPdfPath); $i++) {
            Start-Sleep -Milliseconds 250
        }

        if ((-not (Test-Path $resolvedPdfPath)) -and ($LASTEXITCODE -eq 0)) {
            $argsFallback = @(
                "--headless=new",
                "--disable-gpu",
                "--virtual-time-budget=10000",
                "--no-pdf-header-footer",
                "--print-to-pdf-no-header",
                "--user-data-dir=$tempProfile",
                "--print-to-pdf=$resolvedPdfPath",
                $htmlUri
            )

            & $Browser @argsFallback

            for ($i = 0; $i -lt 20 -and -not (Test-Path $resolvedPdfPath) -and -not (Test-Path $tempPdfPath); $i++) {
                Start-Sleep -Milliseconds 250
            }
        }

        if ((-not (Test-Path $resolvedPdfPath)) -and ($LASTEXITCODE -eq 0)) {
            $argsTempOut = @(
                "--headless=new",
                "--disable-gpu",
                "--virtual-time-budget=10000",
                "--no-pdf-header-footer",
                "--print-to-pdf-no-header",
                "--user-data-dir=$tempProfile",
                "--print-to-pdf=$tempPdfPath",
                $htmlUri
            )

            & $Browser @argsTempOut

            for ($i = 0; $i -lt 20 -and -not (Test-Path $resolvedPdfPath) -and -not (Test-Path $tempPdfPath); $i++) {
                Start-Sleep -Milliseconds 250
            }

            if (Test-Path $tempPdfPath) {
                Move-Item -Path $tempPdfPath -Destination $resolvedPdfPath -Force
            }
        }

        if ($LASTEXITCODE -ne 0) {
            throw "Browser exited with code $LASTEXITCODE while printing $HtmlPath"
        }

        if (-not (Test-Path $resolvedPdfPath)) {
            throw "PDF was not created: $resolvedPdfPath"
        }
    }
    finally {
        if ((-not (Test-Path $resolvedPdfPath)) -and (Test-Path $tempPdfPath)) {
            Move-Item -Path $tempPdfPath -Destination $resolvedPdfPath -Force -ErrorAction SilentlyContinue
        }

        Remove-Item -Path $tempPdfPath -Force -ErrorAction SilentlyContinue
        Remove-Item -Path $tempProfile -Recurse -Force -ErrorAction SilentlyContinue
    }
}

$browser = Resolve-BrowserExecutable -PreferredPath $BrowserPath

$englishPdf = Join-Path $OutputDir "resume-print.pdf"
$japanesePdf = Join-Path $OutputDir "resume-print.ja.pdf"

Convert-HtmlToPdf -Browser $browser -HtmlPath $englishHtml -PdfPath $englishPdf
Convert-HtmlToPdf -Browser $browser -HtmlPath $japaneseHtml -PdfPath $japanesePdf

Write-Host "Created PDF: $englishPdf"
Write-Host "Created PDF: $japanesePdf"
