import SolutionPage from "@/components/SolutionPage";
import type { Locale } from "@/routing";

const content = {
  fr: {
    meta: { title: "Optimisation Digitale | Kadrek", description: "Audit digital, stratégie de transformation, intégration de systèmes et optimisation continue pour maximiser votre ROI digital." },
    eyebrow: "Optimisation Digitale",
    title: "Votre stack digital travaille contre vous sans le savoir",
    subtitle: "Des outils mal intégrés, des données en silos, des workflows inefficaces — votre transformation digitale est peut-être déjà commencée, mais pas encore optimisée. On identifie les freins et on les supprime.",
    problem: {
      title: "Beaucoup d'outils, peu d'impact réel",
      intro: "La plupart des entreprises paient pour 8 à 15 outils SaaS qui ne se parlent pas, dont 40% sont sous-utilisés. Résultat : coûts multipliés, données fragmentées, équipes frustrées par des systèmes qui compliquent au lieu de simplifier.",
      points: [
        "Multiplication des outils SaaS qui ne s'intègrent pas entre eux",
        "Données dupliquées, incohérentes ou contradictoires d'un système à l'autre",
        "Abonnements payés pour des fonctionnalités jamais utilisées",
        "Processus digitaux théoriques qui ne correspondent pas à la réalité terrain",
        "Stratégie digitale sans priorités claires ni mesure de succès définie",
        "ROI des investissements digitaux non mesuré, impossible à justifier",
      ],
    },
    benefits: [
      { icon: "🗺️", title: "Cartographie de votre maturité digitale", desc: "Savoir exactement où vous en êtes, quels outils méritent d'être gardés, lesquels doivent être remplacés ou mieux utilisés." },
      { icon: "💰", title: "Réduction du gaspillage tech", desc: "Identifier et supprimer les abonnements inutiles, les fonctionnalités redondantes, les processus inefficaces." },
      { icon: "🔗", title: "Intégrations qui font vraiment circuler la data", desc: "Connecter les bons outils entre eux pour que les données circulent sans perte ni ressaisie." },
      { icon: "📈", title: "Feuille de route prioritisée", desc: "Un plan d'action clair, séquencé par impact et faisabilité. Pas de grand projet nébuleux — des étapes concrètes." },
      { icon: "📊", title: "Mesure du ROI digital", desc: "Des indicateurs définis pour chaque initiative. Savoir ce qui rapporte, ce qui n'apporte pas de valeur." },
      { icon: "🔄", title: "Amélioration continue systématisée", desc: "Un processus de revue régulière pour s'assurer que vos systèmes s'améliorent avec votre croissance." },
    ],
    useCases: [
      { icon: "🏢", scenario: "PME — Audit et rationalisation de la stack tech", challenge: "PME de 35 personnes avec 22 outils SaaS différents. 6 200€/mois de licences. Beaucoup de redondance.", solution: "Audit complet de la stack, cartographie des usages réels, recommandations de consolidation et de remplacement.", result: "Stack réduite à 11 outils essentiels. 2 800€/mois économisés. Équipes plus cohérentes." },
      { icon: "🔗", scenario: "Groupe — Intégration de systèmes multi-entités", challenge: "Groupe de 3 entreprises avec 3 CRM, 2 ERP et 4 outils comptables différents. Aucune consolidation possible.", solution: "Architecture d'intégration centralisée. Couche data commune. Dashboards consolidés groupe.", result: "Vue groupe unifiée. Délai de clôture mensuelle 5j → 1j. Synergies inter-entités visibles." },
      { icon: "📋", scenario: "Scale-up — Stratégie digitale et priorisation", challenge: "Start-up en phase de scale : 50 idées de digitalisation, aucune priorité, ressources limitées.", solution: "Workshop de priorisation, scoring par impact/effort, feuille de route sur 12 mois avec jalons mesurables.", result: "3 initiatives lancées en parallèle. ROI de chacune défini et mesuré. Équipe alignée." },
      { icon: "⚡", scenario: "Industrie — Performance des systèmes existants", challenge: "ERP sous-utilisé à 20% de ses capacités. Équipes qui contournent le système avec des Excel.", solution: "Audit d'utilisation, formation ciblée, personnalisation des workflows, suppression des frictions.", result: "Taux d'utilisation ERP 20% → 78%. Abandon des Excel parallèles. Données fiables enfin." },
    ],
    features: [
      { icon: "🔍", name: "Audit digital 360°", desc: "Maturité, stack, processus, ROI" },
      { icon: "🗺️", name: "Cartographie des systèmes", desc: "Flux de données et intégrations" },
      { icon: "📋", name: "Roadmap digitale prioritisée", desc: "12 mois, séquencée par impact" },
      { icon: "🔗", name: "Architecture d'intégration", desc: "Connecteurs et couche data centrale" },
      { icon: "💰", name: "Analyse ROI par initiative", desc: "Chiffrage et projection de valeur" },
      { icon: "⚡", name: "Optimisation des outils existants", desc: "Mieux utiliser ce que vous payez" },
      { icon: "📊", name: "Indicateurs de maturité", desc: "Score et benchmarks sectoriels" },
      { icon: "🔄", name: "Processus de revue continue", desc: "Revues trimestrielles de performance" },
      { icon: "👥", name: "Accompagnement au changement", desc: "Adoption et conduite du changement" },
      { icon: "📈", name: "Tableau de bord de transformation", desc: "Suivi de l'avancement en temps réel" },
    ],
    gains: [
      { label: "Coût de la stack SaaS", before: "6 200€/mois", after: "3 400€/mois", delta: "-45% de licences" },
      { label: "Utilisation des outils", before: "22%", after: "74%", delta: "×3,4 d'utilisation" },
      { label: "Cohérence des données", before: "Fragmentée", after: "Unifiée", delta: "Source de vérité unique" },
      { label: "ROI digital mesuré", before: "Inconnu", after: "Tracé à 100%", delta: "Décisions éclairées" },
    ],
    cta: { title: "Votre transformation digitale mérite d'être optimisée", subtitle: "Un audit de maturité digitale pour identifier vos gaspillages, vos blocages et vos meilleures opportunités — en 48 heures." },
    relatedSolutions: [
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
      { icon: "⚙️", title: "Automatisation", href: "/solutions/automatisation" },
      { icon: "💻", title: "Interfaces clients", href: "/solutions/interfaces-clients" },
    ],
  },
  en: {
    meta: { title: "Digital Optimisation | Kadrek", description: "Digital audit, transformation strategy, system integration and continuous optimisation to maximise your digital ROI." },
    eyebrow: "Digital Optimisation",
    title: "Your digital stack is working against you without knowing it",
    subtitle: "Poorly integrated tools, siloed data, inefficient workflows — your digital transformation may already be underway, but not yet optimised. We identify the blockers and remove them.",
    problem: {
      title: "Lots of tools, little real impact",
      intro: "Most businesses pay for 8–15 SaaS tools that don't talk to each other, 40% of which are under-used. The result: multiplied costs, fragmented data, teams frustrated by systems that complicate instead of simplify.",
      points: [
        "SaaS tool sprawl with no integration between them",
        "Duplicated, inconsistent or contradictory data across systems",
        "Subscriptions paid for features never used",
        "Digital processes on paper that don't match operational reality",
        "Digital strategy with no clear priorities or defined success metrics",
        "ROI of digital investments unmeasured and impossible to justify",
      ],
    },
    benefits: [
      { icon: "🗺️", title: "Map your digital maturity", desc: "Know exactly where you stand, which tools are worth keeping, and which need replacing or better use." },
      { icon: "💰", title: "Reduce tech waste", desc: "Identify and cut unnecessary subscriptions, redundant features and inefficient processes." },
      { icon: "🔗", title: "Integrations that actually move data", desc: "Connect the right tools so data flows without loss or re-entry." },
      { icon: "📈", title: "Prioritised roadmap", desc: "A clear action plan, sequenced by impact and feasibility. No nebulous mega-project — concrete steps." },
      { icon: "📊", title: "Measure digital ROI", desc: "Defined indicators for each initiative. Know what delivers value and what doesn't." },
      { icon: "🔄", title: "Systematic continuous improvement", desc: "A regular review process to ensure your systems improve as you grow." },
    ],
    useCases: [
      { icon: "🏢", scenario: "SME — Tech stack audit and rationalisation", challenge: "35-person SME with 22 different SaaS tools. €6,200/month in licences. A lot of redundancy.", solution: "Full stack audit, mapping of actual usage, consolidation and replacement recommendations.", result: "Stack reduced to 11 essential tools. €2,800/month saved. More cohesive teams." },
      { icon: "🔗", scenario: "Group — Multi-entity system integration", challenge: "Group of 3 companies with 3 CRMs, 2 ERPs and 4 different accounting tools. No consolidation possible.", solution: "Centralised integration architecture. Common data layer. Consolidated group dashboards.", result: "Unified group view. Monthly close time: 5 days → 1 day. Inter-entity synergies visible." },
      { icon: "📋", scenario: "Scale-up — Digital strategy and prioritisation", challenge: "Start-up in scaling phase: 50 digitalisation ideas, no priorities, limited resources.", solution: "Prioritisation workshop, impact/effort scoring, 12-month roadmap with measurable milestones.", result: "3 initiatives launched in parallel. ROI defined and measured for each. Team aligned." },
      { icon: "⚡", scenario: "Industry — Performance of existing systems", challenge: "ERP used at 20% of its capacity. Teams bypassing the system with Excel files.", solution: "Usage audit, targeted training, workflow customisation, friction removal.", result: "ERP usage rate 20% → 78%. Parallel Excel files abandoned. Reliable data at last." },
    ],
    features: [
      { icon: "🔍", name: "360° digital audit", desc: "Maturity, stack, processes, ROI" },
      { icon: "🗺️", name: "Systems mapping", desc: "Data flows and integrations" },
      { icon: "📋", name: "Prioritised digital roadmap", desc: "12 months, sequenced by impact" },
      { icon: "🔗", name: "Integration architecture", desc: "Connectors and central data layer" },
      { icon: "💰", name: "ROI analysis by initiative", desc: "Costing and value projection" },
      { icon: "⚡", name: "Existing tool optimisation", desc: "Get more from what you already pay for" },
      { icon: "📊", name: "Maturity indicators", desc: "Score and sector benchmarks" },
      { icon: "🔄", name: "Continuous review process", desc: "Quarterly performance reviews" },
      { icon: "👥", name: "Change management", desc: "Adoption and change facilitation" },
      { icon: "📈", name: "Transformation dashboard", desc: "Real-time progress tracking" },
    ],
    gains: [
      { label: "SaaS stack cost", before: "€6,200/month", after: "€3,400/month", delta: "-45% licences" },
      { label: "Tool utilisation", before: "22%", after: "74%", delta: "×3.4 usage" },
      { label: "Data consistency", before: "Fragmented", after: "Unified", delta: "Single source of truth" },
      { label: "Digital ROI measured", before: "Unknown", after: "100% tracked", delta: "Informed decisions" },
    ],
    cta: { title: "Your digital transformation deserves to be optimised", subtitle: "A digital maturity audit to identify your waste, blockers and best opportunities — in 48 hours." },
    relatedSolutions: [
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
      { icon: "⚙️", title: "Automation", href: "/solutions/automatisation" },
      { icon: "💻", title: "Client interfaces", href: "/solutions/interfaces-clients" },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (content[(locale as Locale)] ?? content.fr).meta;
}

export default async function OptimisationDigitalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;
  return (
    <SolutionPage
      eyebrow={c.eyebrow}
      title={c.title}
      subtitle={c.subtitle}
      heroIcon="🔧"
      accentFrom="#0f766e"
      accentTo="#2563eb"
      bgFrom="from-teal-50"
      problem={c.problem}
      benefits={c.benefits}
      useCases={c.useCases}
      features={c.features}
      gains={c.gains}
      cta={c.cta}
      relatedSolutions={c.relatedSolutions}
    />
  );
}
