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
    title: 'Ian Worthington | AI Consulting and Modelling',
    metaDescription: 'Personal website for Ian Worthington featuring AI consulting and a modelling portfolio.',
    'nav.about': 'About',
    'nav.consulting': 'Consulting',
    'nav.modelling': 'Modelling',
    'hero.kicker': 'AI Architecture and Intelligent Automation',
    'hero.title': 'I design AI-driven solutions that are practical, robust, and built to perform in the real world.',
    'hero.body': 'Strategic architect and modernization leader focused on turning complex operations into measurable outcomes through clear architecture, automation, and execution.',
    'hero.ctaAbout': 'About My Work',
    'hero.ctaConsulting': 'Explore Consulting',
    'hero.ctaPortfolio': 'View Portfolio',
    'hero.highlightsTitle': 'What You Can Expect',
    'hero.highlight1': 'AI-first strategy tied to practical business outcomes',
    'hero.highlight2': 'Vendor-agnostic architecture and modular system design',
    'hero.highlight3': 'Automation that improves reliability, speed, and accuracy',
    'about.kicker': 'About Me',
    'about.title': 'Systems thinker, architect, and execution-focused builder.',
    'about.intro': 'I help hospitals and clinics move from slow, fragmented, legacy systems to unified, flexible platforms without disruption, lock-in, or unnecessary complexity.',
    'about.body': 'I design modular infrastructure, integrate data across core healthcare platforms, and implement AI-driven automation that reduces manual workload while improving operational quality. My goal is simple: make complex systems smoother, safer, and easier for the people who rely on them.',
    'about.card1.title': 'How I Approach Healthcare Modernization',
    'about.card1.body': 'Modernization should be incremental, low-risk, and grounded in real operational needs.',
    'about.card1.item1': 'Build unified data layers that eliminate silos',
    'about.card1.item2': 'Introduce automation that removes repetitive tasks',
    'about.card1.item3': 'Improve workflow reliability and transparency',
    'about.card1.item4': 'Strengthen vendor positioning as trusted infrastructure',
    'about.card1.item5': 'Explain complexity through visuals, scripts, and clear language',
    'about.card2.title': 'My Work in AI and Trading Systems',
    'about.card2.body': 'I build robust, interpretable trading models with Python, PyTorch, and MQL5.',
    'about.card2.item1': 'Sequence-aware models with asymmetric, sign-weighted losses',
    'about.card2.item2': 'Quantile-based risk measures and expectancy in R-units',
    'about.card2.item3': 'Regime classification and microstructure-aware features',
    'about.card2.item4': 'Cost-aware targets that reflect real trading conditions',
    'about.card2.item5': 'Clear auditability via decision trees and flowcharts',
    'about.card3.title': 'How I Communicate',
    'about.card3.body': 'Good communication accelerates alignment and delivery.',
    'about.card3.item1': 'Visual diagrams',
    'about.card3.item2': 'Short educational scripts',
    'about.card3.item3': 'Natural Japanese translations',
    'about.card3.item4': 'ELI5-style explanations when needed',
    'about.card4.title': 'What Drives Me',
    'about.card4.body1': 'I interrogate assumptions, challenge defaults, and design systems that are:',
    'about.card4.item1': 'Practical',
    'about.card4.item2': 'Auditable',
    'about.card4.item3': 'Modular',
    'about.card4.item4': 'Future-proof',
    'about.card4.body2': 'Whether I am modernizing hospital infrastructure or building a trading model, I bring the same mindset: clarity, rigor, and useful outcomes.',
    'consulting.kicker': 'Consulting',
    'consulting.title': 'Modernization leadership from architecture through execution.',
    'consulting.card1.title': 'Healthcare Platform Strategy',
    'consulting.card1.body': 'Define practical, phased modernization roadmaps aligned to operational realities.',
    'consulting.card2.title': 'Integration Architecture',
    'consulting.card2.body': 'Connect EMRs, labs, imaging, and billing into resilient, interoperable data flows.',
    'consulting.card3.title': 'AI Workflow Automation',
    'consulting.card3.body': 'Reduce manual workload and improve accuracy with targeted, auditable automation.',
    'modelling.kicker': 'Modelling',
    'modelling.title': 'Portfolio',
    'modelling.body': 'A curated gallery with editorial and lifestyle direction.',
    'modelling.galleryAria': 'Modelling portfolio images',
    'modelling.image1': 'Portfolio image 1',
    'modelling.image2': 'Portfolio image 2',
    'modelling.image3': 'Portfolio image 3',
    'modelling.image4': 'Portfolio image 4',
    'modelling.image5': 'Portfolio image 5',
    'footer.tagline': 'Consulting and Modelling'
  },
  ja: {
    title: 'Ian Worthington | AIコンサルティングとモデル',
    metaDescription: 'Ian WorthingtonのAIコンサルティングとモデルポートフォリオを紹介する個人サイトです。',
    'nav.about': 'プロフィール',
    'nav.consulting': 'コンサルティング',
    'nav.modelling': 'モデル',
    'hero.kicker': 'AIアーキテクチャとインテリジェント自動化',
    'hero.title': '実運用で機能する、実践的で堅牢なAIソリューションを設計します。',
    'hero.body': '複雑な業務を、明確なアーキテクチャ、自動化、実行力によって測定可能な成果へと変えることに注力しています。',
    'hero.ctaAbout': '私の取り組み',
    'hero.ctaConsulting': 'コンサルティングを見る',
    'hero.ctaPortfolio': 'ポートフォリオを見る',
    'hero.highlightsTitle': '提供できる価値',
    'hero.highlight1': '実務成果に直結するAIファースト戦略',
    'hero.highlight2': 'ベンダー非依存のアーキテクチャとモジュール設計',
    'hero.highlight3': '信頼性・速度・精度を高める自動化',
    'about.kicker': 'プロフィール',
    'about.title': 'システム思考を軸に、設計から実行まで担います。',
    'about.intro': '病院やクリニックの分断されたレガシー環境を、停止やロックインを避けながら、柔軟で統合されたプラットフォームへ段階的に移行します。',
    'about.body': 'モジュール型インフラを設計し、医療基幹データを統合し、AI自動化で手作業を減らし品質を高めます。目標は常に同じで、複雑なシステムを現場にとってより安全で使いやすくすることです。',
    'about.card1.title': '医療モダナイゼーションへのアプローチ',
    'about.card1.body': 'モダナイゼーションは、低リスクで段階的、かつ現場運用に根ざしているべきです。',
    'about.card1.item1': 'サイロを解消する統合データレイヤーを構築',
    'about.card1.item2': '反復作業をなくす自動化を導入',
    'about.card1.item3': 'ワークフローの信頼性と可視性を向上',
    'about.card1.item4': '医療インフラとしての信頼性を強化',
    'about.card1.item5': '図解・スクリプト・平易な説明で複雑さを整理',
    'about.card2.title': 'AIとトレーディングシステムの取り組み',
    'about.card2.body': 'Python、PyTorch、MQL5で、解釈可能かつ堅牢な売買モデルを構築しています。',
    'about.card2.item1': '非対称・符号重み付き損失を用いた系列モデル',
    'about.card2.item2': '分位点ベースのリスク指標とR単位の期待値',
    'about.card2.item3': 'レジーム分類とマイクロストラクチャ特徴量',
    'about.card2.item4': '実運用コストを反映したターゲット設計',
    'about.card2.item5': '決定木やフローチャートによる監査可能性',
    'about.card3.title': 'コミュニケーション',
    'about.card3.body': '良いコミュニケーションは合意形成と実行を加速させます。',
    'about.card3.item1': '視覚的な図解',
    'about.card3.item2': '短い教育用スクリプト',
    'about.card3.item3': '自然な日本語翻訳',
    'about.card3.item4': '必要に応じたELI5形式の説明',
    'about.card4.title': '原動力',
    'about.card4.body1': '前提を問い直し、既定路線を疑い、次の要件を満たす設計を追求します。',
    'about.card4.item1': '実用性',
    'about.card4.item2': '監査可能性',
    'about.card4.item3': 'モジュール性',
    'about.card4.item4': '将来耐性',
    'about.card4.body2': '病院インフラの刷新でもトレーディングモデル開発でも、明確さ・厳密さ・実効性を一貫して重視します。',
    'consulting.kicker': 'コンサルティング',
    'consulting.title': 'アーキテクチャ設計から実行まで一貫して推進します。',
    'consulting.card1.title': '医療プラットフォーム戦略',
    'consulting.card1.body': '運用実態に沿った、段階的で実現可能なモダナイズ計画を設計します。',
    'consulting.card2.title': '統合アーキテクチャ',
    'consulting.card2.body': 'EMR・検査・画像・請求をつなぎ、回復力ある相互運用データ基盤を構築します。',
    'consulting.card3.title': 'AIワークフロー自動化',
    'consulting.card3.body': '監査可能な自動化で、手作業を減らし精度を高めます。',
    'modelling.kicker': 'モデル',
    'modelling.title': 'ポートフォリオ',
    'modelling.body': 'エディトリアルとライフスタイルを軸にしたギャラリーです。',
    'modelling.galleryAria': 'モデルポートフォリオ画像',
    'modelling.image1': 'ポートフォリオ画像 1',
    'modelling.image2': 'ポートフォリオ画像 2',
    'modelling.image3': 'ポートフォリオ画像 3',
    'modelling.image4': 'ポートフォリオ画像 4',
    'modelling.image5': 'ポートフォリオ画像 5',
    'footer.tagline': 'コンサルティングとモデル'
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
