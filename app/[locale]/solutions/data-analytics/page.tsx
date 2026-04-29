import SolutionPage from "@/components/SolutionPage";
import type { Locale } from "@/routing";

const content = {
  fr: {
    meta: { title: "Data & Analytics | Kadrek", description: "Transformez vos données en décisions intelligentes. Dashboards temps réel, KPIs sur-mesure, rapports automatisés." },
    eyebrow: "Data & Analytics",
    title: "Vos données méritent mieux qu'un tableur Excel",
    subtitle: "Chaque vente, commande, et interaction génère de la data précieuse. On transforme cette donnée brute en tableaux de bord clairs, décisions plus rapides, et avantage concurrentiel mesurable.",
    problem: {
      title: "Les entreprises naviguent à l'aveugle",
      intro: "La plupart des PME prennent des décisions basées sur des fichiers Excel éparpillés, des rapports mensuels obsolètes et des intuitions. Résultat : opportunités ratées, coûts non détectés, croissance bridée.",
      points: [
        "Des données éparpillées dans 5 à 10 outils différents impossibles à réconcilier",
        "Rapports manuels qui prennent 2 à 3 jours à compiler chaque mois",
        "Impossible de savoir en temps réel si l'activité est en hausse ou en baisse",
        "Décisions basées sur des données vieilles de 30 jours quand le marché change en 24h",
        "Clients les plus rentables et produits phares invisibles dans la masse de données",
        "Aucune alerte quand un indicateur critique passe sous le seuil critique",
      ],
    },
    benefits: [
      { icon: "🎯", title: "Décisions en temps réel", desc: "Voir ce qui se passe dans votre entreprise à l'instant — revenus, marges, pipeline — sans attendre le rapport mensuel." },
      { icon: "📈", title: "Identifier les leviers de croissance", desc: "Savoir précisément quels produits, canaux et clients génèrent le plus de valeur. Investir là où ça rapporte." },
      { icon: "💡", title: "Anticiper les problèmes", desc: "Des alertes automatiques vous notifient avant qu'un retard, une rupture ou une anomalie ne devienne une crise." },
      { icon: "💰", title: "Réduire les coûts cachés", desc: "La data révèle les gaspillages invisibles : processus redondants, stocks dormants, ressources sous-utilisées." },
      { icon: "⚡", title: "Réunions plus courtes, plus efficaces", desc: "Chaque réunion démarre avec les mêmes données fiables. Moins de débats sur les chiffres, plus de décisions." },
      { icon: "🌍", title: "Pilotage multi-sites et multi-équipes", desc: "Vue consolidée sur toutes vos entités, équipes et canaux. Un seul écran pour diriger avec clarté." },
    ],
    useCases: [
      { icon: "🏪", scenario: "Retail — Suivi des ventes en temps réel", challenge: "Directeur commercial sans visibilité sur les ventes du jour. Attente du rapport hebdomadaire pour agir.", solution: "Dashboard live connecté au POS et CRM. Alertes si une catégorie décroche par rapport à la période précédente.", result: "Réactivité le jour même. Promotions ciblées lancées en 2h. CA mensuel +12%." },
      { icon: "🏭", scenario: "Industrie — Suivi de la production", challenge: "Responsable production calcule les indicateurs à la main chaque semaine. 4h perdues, données approximatives.", solution: "Connecteurs ERP + capteurs atelier. Taux de rendement synthétique calculé automatiquement en continu.", result: "4h économisées / semaine. Pannes anticipées. TRS amélioré de 8%." },
      { icon: "💼", scenario: "Services — Pipeline commercial", challenge: "Équipe commerciale de 8 personnes, pipeline mal suivi, opportunités perdues faute de relance au bon moment.", solution: "Dashboard pipeline CRM connecté. Scoring automatique des leads. Alertes de relance pour les deals chauds.", result: "Taux de conversion +22%. Cycle de vente réduit de 18 jours." },
      { icon: "🏥", scenario: "Santé — Reporting direction", challenge: "Directeur clinique reçoit 6 rapports différents chaque semaine. Impossible de les consolider rapidement.", solution: "Rapport exécutif unifié généré automatiquement chaque lundi 8h. Une page. Tous les KPIs critiques.", result: "30 min gagnées chaque matin. Décisions stratégiques plus rapides. Zéro donnée manquante." },
    ],
    features: [
      { icon: "📊", name: "Dashboards temps réel", desc: "Mise à jour automatique depuis vos sources" },
      { icon: "🎛️", name: "KPIs personnalisés", desc: "Indicateurs calibrés sur votre secteur" },
      { icon: "🔔", name: "Alertes intelligentes", desc: "Notification dès qu'un seuil est franchi" },
      { icon: "📋", name: "Rapports automatisés", desc: "Générés et distribués selon planning" },
      { icon: "🔗", name: "Connecteurs multi-sources", desc: "CRM, ERP, e-commerce, POS, sheets" },
      { icon: "📱", name: "Accès mobile", desc: "Vos KPIs dans votre poche" },
      { icon: "👥", name: "Multi-utilisateurs et rôles", desc: "Vue adaptée à chaque niveau" },
      { icon: "📦", name: "Historique & tendances", desc: "Comparaisons périodiques automatiques" },
      { icon: "🔍", name: "Analyse de rentabilité", desc: "Par produit, client, canal, région" },
      { icon: "🧮", name: "Prévisions et projections", desc: "Modèles prédictifs simples et lisibles" },
    ],
    gains: [
      { label: "Temps de reporting", before: "3 jours/mois", after: "0 minute", delta: "100% automatisé" },
      { label: "Délai de décision", before: "30 jours", after: "Temps réel", delta: "30× plus rapide" },
      { label: "Coûts cachés détectés", before: "Invisibles", after: "Tracés à 100%", delta: "Économies immédiates" },
      { label: "Taux d'erreur data", before: "12%", after: "< 0.5%", delta: "-96% d'erreurs" },
    ],
    cta: { title: "Voyez votre activité en temps réel dès cette semaine", subtitle: "Un diagnostic data pour identifier vos sources, vos KPIs prioritaires et vous montrer ce qu'un dashboard peut changer concrètement." },
    relatedSolutions: [
      { icon: "🤖", title: "Solutions IA", href: "/solutions/agents-ia" },
      { icon: "⚙️", title: "Automatisation", href: "/solutions/automatisation" },
      { icon: "💻", title: "Interfaces clients", href: "/solutions/interfaces-clients" },
    ],
  },
  en: {
    meta: { title: "Data & Analytics | Kadrek", description: "Turn your data into smart decisions. Real-time dashboards, custom KPIs, automated reports." },
    eyebrow: "Data & Analytics",
    title: "Your data deserves better than a spreadsheet",
    subtitle: "Every sale, order and interaction generates valuable data. We transform raw data into clear dashboards, faster decisions, and measurable competitive advantage.",
    problem: {
      title: "Businesses are flying blind",
      intro: "Most SMEs make decisions based on scattered spreadsheets, stale monthly reports and gut feel. The result: missed opportunities, hidden costs, and capped growth.",
      points: [
        "Data scattered across 5–10 different tools with no way to reconcile it",
        "Manual reports taking 2–3 days to compile every month",
        "No real-time visibility into whether business is up or down",
        "Decisions based on 30-day-old data when the market shifts in 24 hours",
        "Most profitable customers and top products invisible in the data noise",
        "No alerts when a critical indicator drops below its threshold",
      ],
    },
    benefits: [
      { icon: "🎯", title: "Real-time decisions", desc: "See what's happening in your business right now — revenue, margins, pipeline — without waiting for the monthly report." },
      { icon: "📈", title: "Identify growth levers", desc: "Know exactly which products, channels and customers generate the most value. Invest where it pays off." },
      { icon: "💡", title: "Anticipate problems", desc: "Automatic alerts notify you before a delay, stock-out or anomaly becomes a crisis." },
      { icon: "💰", title: "Reduce hidden costs", desc: "Data reveals invisible waste: redundant processes, dormant stock, underused resources." },
      { icon: "⚡", title: "Shorter, sharper meetings", desc: "Every meeting starts with the same reliable data. Less arguing about numbers, more decisions made." },
      { icon: "🌍", title: "Multi-site & multi-team oversight", desc: "Consolidated view across all your entities, teams and channels. One screen to lead with clarity." },
    ],
    useCases: [
      { icon: "🏪", scenario: "Retail — Real-time sales tracking", challenge: "Sales director with no visibility into the day's sales. Waiting for the weekly report to act.", solution: "Live dashboard connected to POS and CRM. Alerts if a category drops vs. the previous period.", result: "Same-day reactivity. Targeted promotions launched in 2 hours. Monthly revenue +12%." },
      { icon: "🏭", scenario: "Industry — Production monitoring", challenge: "Production manager calculates KPIs by hand each week. 4 hours lost, approximate figures.", solution: "ERP connectors + workshop sensors. OEE calculated automatically and continuously.", result: "4 hours saved per week. Breakdowns anticipated. OEE improved by 8%." },
      { icon: "💼", scenario: "Services — Commercial pipeline", challenge: "8-person sales team, poorly tracked pipeline, opportunities lost for lack of timely follow-up.", solution: "Connected CRM pipeline dashboard. Automatic lead scoring. Follow-up alerts for hot deals.", result: "Conversion rate +22%. Sales cycle shortened by 18 days." },
      { icon: "🏥", scenario: "Healthcare — Executive reporting", challenge: "Clinic director receives 6 separate reports every week. Impossible to consolidate quickly.", solution: "Unified executive report generated automatically every Monday at 8 am. One page. All critical KPIs.", result: "30 minutes saved every morning. Faster strategic decisions. Zero missing data." },
    ],
    features: [
      { icon: "📊", name: "Real-time dashboards", desc: "Auto-updated from all your sources" },
      { icon: "🎛️", name: "Custom KPIs", desc: "Indicators calibrated to your sector" },
      { icon: "🔔", name: "Smart alerts", desc: "Notification the moment a threshold is crossed" },
      { icon: "📋", name: "Automated reports", desc: "Generated and distributed on schedule" },
      { icon: "🔗", name: "Multi-source connectors", desc: "CRM, ERP, e-commerce, POS, sheets" },
      { icon: "📱", name: "Mobile access", desc: "Your KPIs in your pocket" },
      { icon: "👥", name: "Multi-user & roles", desc: "View tailored to each level" },
      { icon: "📦", name: "History & trends", desc: "Automatic period-over-period comparisons" },
      { icon: "🔍", name: "Profitability analysis", desc: "By product, customer, channel, region" },
      { icon: "🧮", name: "Forecasts & projections", desc: "Simple, readable predictive models" },
    ],
    gains: [
      { label: "Reporting time", before: "3 days/month", after: "0 minutes", delta: "100% automated" },
      { label: "Decision lag", before: "30 days", after: "Real-time", delta: "30× faster" },
      { label: "Hidden costs detected", before: "Invisible", after: "100% tracked", delta: "Immediate savings" },
      { label: "Data error rate", before: "12%", after: "< 0.5%", delta: "-96% errors" },
    ],
    cta: { title: "See your business in real time this week", subtitle: "A data diagnostic to identify your sources, your top KPIs and show you exactly what a dashboard can change." },
    relatedSolutions: [
      { icon: "🤖", title: "AI Solutions", href: "/solutions/agents-ia" },
      { icon: "⚙️", title: "Automation", href: "/solutions/automatisation" },
      { icon: "💻", title: "Client interfaces", href: "/solutions/interfaces-clients" },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (content[(locale as Locale)] ?? content.fr).meta;
}

export default async function DataAnalyticsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;
  return (
    <SolutionPage
      eyebrow={c.eyebrow}
      title={c.title}
      subtitle={c.subtitle}
      heroIcon="📊"
      accentFrom="#2563eb"
      accentTo="#06b6d4"
      bgFrom="from-blue-50"
      problem={c.problem}
      benefits={c.benefits}
      useCases={c.useCases}
      features={c.features}
      gains={c.gains}
      cta={c.cta}
      relatedSolutions={c.relatedSolutions}
      locale={locale}
    />
  );
}
