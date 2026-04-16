import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

from pypdf import PdfReader


root = Path(__file__).resolve().parents[2]
agent_temp = root / "agent" / "temp"
agent_temp.mkdir(parents=True, exist_ok=True)

pdf_path = root / "Resume Long.pdf"
pdf_text_out = agent_temp / "resume_long_extracted.txt"
reader = PdfReader(str(pdf_path))
chunks = []
for i, page in enumerate(reader.pages, start=1):
    text = (page.extract_text() or "").strip()
    chunks.append(f"\n\n===== PAGE {i} =====\n\n{text}")
pdf_text_out.write_text("".join(chunks), encoding="utf-8")

pptx_path = root / "FPT_イアン_履歴書.pptx"
pptx_text_out = agent_temp / "resume_pptx_extracted.txt"
slides = []
with zipfile.ZipFile(pptx_path, "r") as zf:
    slide_names = sorted(
        [
            name
            for name in zf.namelist()
            if name.startswith("ppt/slides/slide") and name.endswith(".xml")
        ],
        key=lambda name: int(re.search(r"slide(\d+)\.xml", name).group(1)),
    )

    ns = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main"}
    for idx, slide_name in enumerate(slide_names, start=1):
        xml = ET.fromstring(zf.read(slide_name))
        texts = [
            node.text.strip()
            for node in xml.findall(".//a:t", ns)
            if node.text and node.text.strip()
        ]
        slides.append(f"\n\n===== SLIDE {idx} =====\n\n" + "\n".join(texts))

pptx_text_out.write_text("".join(slides), encoding="utf-8")

print(f"WROTE {pdf_text_out}")
print(f"WROTE {pptx_text_out}")
