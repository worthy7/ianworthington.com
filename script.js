const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -60px 0px'
  }
);

revealElements.forEach((element, index) => {
  element.style.animationDelay = `${Math.min(index * 80, 420)}ms`;
  observer.observe(element);
});

const translations = {
  en: {
    title: 'Ian Worthington | Consulting and Solution Building',
    metaDescription: 'I help teams remove operational bottlenecks and technical debt through hands-on consulting and practical solution delivery.',
    'nav.pain': 'Bottlenecks',
    'nav.process': 'Process',
    'nav.features': 'Consulting',
    'nav.proof': 'Results',
    'nav.modelling': 'Modelling',
    'hero.kicker': 'Work With Ian Worthington',
    'hero.title': 'I help teams remove the silent productivity killers slowing down daily operations.',
    'hero.body': 'I partner with middle managers and frontline teams to replace manual workarounds, ghost spreadsheets, and outdated approval loops with practical automation and targeted AI support that fits your current stack.',
    'hero.ctaPrimary': 'Find Your Bottleneck',
    'hero.ctaSecondary': 'Stop the Manual Work',
    'hero.highlightsTitle': 'What I Help Fix First',
    'hero.highlight1': 'Hidden handoffs between disconnected tools',
    'hero.highlight2': 'Approval loops that disappear into inbox chains',
    'hero.highlight3': 'Legacy systems your teams depend on but cannot evolve',
    'pmp.kicker': 'Credential',
    'pmp.badgeAlt': 'Project Management Professional certification badge',
    'pmp.title': 'PMP means your project gets disciplined execution, not just ideas.',
    'pmp.body': 'PMP certification signals proven leadership across scope, risk, quality, and stakeholder alignment. In practical terms, I help your team move from firefighting to predictable delivery with clear milestones, accountable ownership, and outcomes you can measure.',
    'ai.kicker': 'AI Delivery',
    'ai.title': 'Where I use AI to create practical business impact',
    'ai.body': 'I apply AI where it clearly improves speed, quality, and decision clarity, without forcing unnecessary complexity into your operations.',
    'ai.card1.title': 'Workflow Copilots',
    'ai.card1.body': 'Bring AI guidance into recurring operational tasks so teams move faster with fewer errors.',
    'ai.card2.title': 'Decision Support',
    'ai.card2.body': 'Use AI-assisted summaries and analysis to shorten review cycles and improve manager visibility.',
    'ai.card3.title': 'Automation Plus Human Control',
    'ai.card3.body': 'Combine automation and AI with clear approval checkpoints so quality and accountability stay intact.',
    'profile.imageAlt': 'Portrait of Ian Worthington',
    'profile.kicker': 'Why Work With Ian',
    'profile.title': 'I do both strategy and hands-on delivery, so your team gets momentum instead of another slide deck.',
    'profile.line1': 'I work directly with managers and frontline staff to map where work gets stuck, then fix those points with practical integrations, automation, and selective AI support.',
    'profile.line2': 'You get one partner who can diagnose operational bottlenecks, design the technical approach, and build the solution with your team.',
    'profile.line3': 'The result is less manual rework, faster decisions, and systems people can trust again.',
    'pain.kicker': 'Problem / Solution',
    'pain.title': 'Three Bottlenecks I Solve With Your Team',
    'pain.body': 'You are not imagining the friction. These are the most common enterprise bottlenecks I see, and the first ones I help teams eliminate.',
    'pain.card1.title': 'The Excel Trap',
    'pain.card1.body': 'Eliminate manual data entry between disconnected enterprise tools.',
    'pain.card2.title': 'The Approval Black Hole',
    'pain.card2.body': 'Turn manual sign-off loops into automated, transparent workflows.',
    'pain.card3.title': 'Legacy Stagnation',
    'pain.card3.body': 'Bridge the gap between outdated legacy software and modern efficiency without the risk of a total overhaul.',
    'process.kicker': 'How I Work',
    'process.title': 'A clear on-premise process from discovery to proof-of-concept.',
    'process.body': 'My role is to design and build your internal glue layer: a master workflow, approval, and integration system for companies that want to keep sensitive data on-premise.',
    'process.step1.title': 'Map the bottleneck',
    'process.step1.body': 'I work with your managers and frontline teams to map current workflow gaps, approval delays, and manual handoffs.',
    'process.step2.title': 'Secure access and ownership',
    'process.step2.body': 'To build a prototype, we need access to your infrastructure, relevant data, and a responsible internal owner for on-prem integration.',
    'process.step3.title': 'Build proof-of-concept',
    'process.step3.body': 'I implement a working on-prem proof-of-concept that centralizes workflow orchestration, approvals, and integrations.',
    'process.step4.title': 'Handover without lock-in',
    'process.step4.body': 'The system is vendor-neutral. Any experienced n8n partner can maintain or extend it, so you stay in control.',
    'process.warning': 'Without infrastructure access, relevant data, and a designated integration owner, we cannot build a reliable proof-of-concept.',
    'process.success': 'With those prerequisites in place, we can move quickly and validate value on your own environment.',
    'features.kicker': 'Consulting and Build',
    'features.title': 'I consult, design, and build solutions your teams can adopt quickly.',
    'features.body': 'Integration-first. Practical automation. AI where it creates clear value.',
    'features.card1.title': 'Works Where You Already Work',
    'features.card1.body': 'I connect your current systems first, then remove manual bridges and duplicate entry.',
    'features.card2.title': 'Self-Service Workflow Control',
    'features.card2.body': 'I build workflows your operations teams can adjust without waiting on long IT queues.',
    'features.card3.title': 'CEO Visibility, Frontline Simplicity',
    'features.card3.body': 'I deliver CEO-level visibility while keeping frontline workflows simple and low-friction.',
    'proof.kicker': 'Results and Trust',
    'proof.title': 'What teams say after working with me.',
    'proof.body': 'From middle management to frontline staff, I hear the same outcome: less rework, faster decisions, and clearer accountability.',
    'proof.quote1': '"We finally killed the spreadsheet relay race between departments. Cycle time dropped in weeks."',
    'proof.role1': 'Operations Manager',
    'proof.quote2': '"Approval status is now visible end-to-end. No more chasing email threads."',
    'proof.role2': 'Frontline Team Lead',
    'proof.quote3': '"We modernized around our legacy core instead of pausing the business for a rewrite."',
    'proof.role3': 'Program Director',
    'proof.cta1': 'Find Your Bottleneck',
    'proof.cta2': 'Stop the Manual Work',
    'modelling.kicker': 'Modelling',
    'modelling.title': 'Portfolio',
    'modelling.body': 'A curated gallery with editorial and lifestyle direction.',
    'modelling.galleryAria': 'Modelling portfolio images',
    'modelling.image1': 'Portfolio image 1',
    'modelling.image2': 'Portfolio image 2',
    'modelling.image3': 'Portfolio image 3',
    'modelling.image4': 'Portfolio image 4',
    'modelling.image5': 'Portfolio image 5',
    'footer.tagline': 'I solve operational bottlenecks through practical consulting and solution delivery, with AI where it adds clear value.'
  },
  ja: {
    title: 'Ian Worthington | コンサルティングとソリューション構築',
    metaDescription: '実務に寄り添うコンサルティングと実装で、業務ボトルネックと技術的負債を解消します。',
    'nav.pain': 'ボトルネック',
    'nav.process': '進め方',
    'nav.features': 'コンサルティング',
    'nav.proof': '実績',
    'nav.modelling': 'モデル',
    'hero.kicker': 'Ian Worthingtonと進める改善',
    'hero.title': '日々の業務を遅らせる「静かな生産性キラー」を、私が現場と一緒に解消します。',
    'hero.body': '中間管理職と現場メンバーに伴走し、手作業の回避策、ゴーストスプレッドシート、古い承認ループを、既存環境に合う実用的な自動化と必要なAI活用へ置き換えます。',
    'hero.ctaPrimary': 'ボトルネックを見つける',
    'hero.ctaSecondary': '手作業を止める',
    'hero.highlightsTitle': '私が最初に改善するポイント',
    'hero.highlight1': '分断されたツール間の見えない引き継ぎ',
    'hero.highlight2': 'メール連鎖の中で消える承認ループ',
    'hero.highlight3': '依存はしているが改善できないレガシー基盤',
    'pmp.kicker': '資格',
    'pmp.badgeAlt': 'PMP資格認定バッジ',
    'pmp.title': 'PMPは、アイデアだけでなく、規律ある実行で成果を出すための証明です。',
    'pmp.body': 'PMP資格は、スコープ管理、リスク管理、品質管理、そしてステークホルダー調整を含む実践的なプロジェクト推進力を示します。実務では、場当たり対応から予測可能な進行へ移行し、明確なマイルストーン、責任の所在、測定可能な成果をチームにもたらします。',
    'ai.kicker': 'AI活用',
    'ai.title': '私がAIを使って実務成果を高める領域',
    'ai.body': 'AIは、速度・品質・意思決定の明確さが確実に上がる場面に絞って実装します。無理な複雑化は持ち込みません。',
    'ai.card1.title': 'ワークフローコパイロット',
    'ai.card1.body': '繰り返し業務にAI支援を組み込み、ミスを減らしながら処理速度を高めます。',
    'ai.card2.title': '意思決定サポート',
    'ai.card2.body': 'AI要約と分析により、レビュー時間を短縮し、管理職の可視性を高めます。',
    'ai.card3.title': '自動化と人の統制',
    'ai.card3.body': '自動化とAIに明確な承認ポイントを組み合わせ、品質と説明責任を維持します。',
    'profile.imageAlt': 'Ian Worthingtonのポートレート',
    'profile.kicker': 'Ianに相談する理由',
    'profile.title': '戦略だけで終わらせず、実装まで担うので、チームに実際の前進が生まれます。',
    'profile.line1': '管理職と現場の両方と直接対話し、業務が詰まるポイントを可視化して、実用的な連携・自動化・必要なAI活用で解消します。',
    'profile.line2': '業務課題の診断、技術設計、実装までを一人のパートナーとして一貫して支援します。',
    'profile.line3': '結果として、手戻りは減り、意思決定は速くなり、現場が信頼できる仕組みに戻ります。',
    'pain.kicker': '課題 / 解決',
    'pain.title': '私がチームと最初に解消する3つのボトルネック',
    'pain.body': 'その非効率は気のせいではありません。私が現場で繰り返し見てきた、最優先で解消すべき詰まりです。',
    'pain.card1.title': 'Excelトラップ',
    'pain.card1.body': '分断された業務ツール間の手入力転記をなくします。',
    'pain.card2.title': '承認ブラックホール',
    'pain.card2.body': '手動の承認ループを、自動で透明性の高いワークフローに変えます。',
    'pain.card3.title': 'レガシー停滞',
    'pain.card3.body': '全面刷新のリスクを避けながら、古い基幹システムと現代的な効率をつなぎます。',
    'process.kicker': '進め方',
    'process.title': '発見からPoCまで、明確なオンプレミス実行フロー。',
    'process.body': '私の役割は、社内の接着層となる仕組みを設計・構築することです。機密データをクラウドに出したくない企業向けに、マスターワークフロー、承認、連携基盤をオンプレミスで実装します。',
    'process.step1.title': 'ボトルネックの可視化',
    'process.step1.body': '管理職と現場担当者にヒアリングし、ワークフローの詰まり、承認遅延、手作業の引き継ぎを特定します。',
    'process.step2.title': 'アクセスと責任者の確保',
    'process.step2.body': 'プロトタイプ構築には、インフラへのアクセス、関連データ、オンプレ連携の社内責任者が必要です。',
    'process.step3.title': 'PoCを構築',
    'process.step3.body': 'ワークフロー制御、承認、システム連携を一元化するオンプレPoCを実装します。',
    'process.step4.title': 'ロックインなしで引き渡し',
    'process.step4.body': '仕組みはベンダー非依存です。n8n経験のある他ベンダーでも保守・拡張できるため、主導権は常に御社側にあります。',
    'process.warning': 'インフラアクセス、関連データ、連携責任者のいずれかが欠けると、信頼できるPoCは構築できません。',
    'process.success': 'これらの前提が揃えば、御社環境で素早く価値検証まで進められます。',
    'features.kicker': 'コンサルティングと構築',
    'features.title': '私は、現場がすぐ使える解決策を設計し、実装まで担います。',
    'features.body': '連携ファースト。実用自動化。必要なところにAI。',
    'features.card1.title': '今の業務環境でそのまま動く',
    'features.card1.body': 'まず既存システムを私がつなぎ、手作業の橋渡しと二重入力をなくします。',
    'features.card2.title': '現場主導のセルフサービス運用',
    'features.card2.body': '長いIT待ちなしで、運用チームがルールやルーティングを調整できる仕組みを構築します。',
    'features.card3.title': '経営可視化と現場シンプル化の両立',
    'features.card3.body': '経営層には明確な可視化を、現場には少ない手順と摩擦のない運用を実現します。',
    'proof.kicker': '実績と信頼',
    'proof.title': '一緒に改善したチームからの声',
    'proof.body': '中間管理職から現場担当まで、同じ成果が語られます。やり直しが減り、意思決定が速くなり、責任範囲が明確になります。',
    'proof.quote1': '"部門間のスプレッドシート受け渡しがなくなり、処理時間が数週間で短縮されました。"',
    'proof.role1': 'オペレーションマネージャー',
    'proof.quote2': '"承認状況が端から端まで見えるようになり、メール追跡が不要になりました。"',
    'proof.role2': '現場チームリーダー',
    'proof.quote3': '"業務を止める全面改修ではなく、レガシーを活かした近代化ができました。"',
    'proof.role3': 'プログラムディレクター',
    'proof.cta1': 'ボトルネックを見つける',
    'proof.cta2': '手作業を止める',
    'modelling.kicker': 'モデル',
    'modelling.title': 'ポートフォリオ',
    'modelling.body': 'エディトリアルとライフスタイルを軸にしたギャラリーです。',
    'modelling.galleryAria': 'モデルポートフォリオ画像',
    'modelling.image1': 'ポートフォリオ画像 1',
    'modelling.image2': 'ポートフォリオ画像 2',
    'modelling.image3': 'ポートフォリオ画像 3',
    'modelling.image4': 'ポートフォリオ画像 4',
    'modelling.image5': 'ポートフォリオ画像 5',
    'footer.tagline': '実務に寄り添うコンサルティングと実装で業務ボトルネックを解消。必要な場面ではAIも活用。'
  }
};

const langButtons = document.querySelectorAll('.lang-btn');
const translatableNodes = document.querySelectorAll('[data-i18n]');
const translatableAttrs = document.querySelectorAll('[data-i18n-attr]');
const metaDescription = document.getElementById('meta-description');

function applyLanguage(lang) {
  const chosen = translations[lang] ? lang : 'en';
  const dict = translations[chosen];

  document.documentElement.lang = chosen;
  document.title = dict.title;

  if (metaDescription) {
    metaDescription.setAttribute('content', dict.metaDescription);
  }

  translatableNodes.forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  translatableAttrs.forEach((node) => {
    const pairs = (node.getAttribute('data-i18n-attr') || '').split(',');
    pairs.forEach((rawPair) => {
      const pair = rawPair.trim();
      if (!pair.includes(':')) {
        return;
      }
      const [attrName, key] = pair.split(':').map((part) => part.trim());
      if (attrName && key && dict[key]) {
        node.setAttribute(attrName, dict[key]);
      }
    });
  });

  langButtons.forEach((btn) => {
    const isActive = btn.getAttribute('data-lang') === chosen;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  localStorage.setItem('preferredLanguage', chosen);
}

function detectInitialLanguage() {
  const saved = localStorage.getItem('preferredLanguage');
  if (saved && translations[saved]) {
    return saved;
  }

  const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  return browserLang.toLowerCase().startsWith('ja') ? 'ja' : 'en';
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.getAttribute('data-lang'));
  });
});

applyLanguage(detectInitialLanguage());
