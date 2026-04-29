import SolutionPage from "@/components/SolutionPage";
import type { Locale } from "@/routing";

const content = {
  fr: {
    meta: { title: "Interfaces & Dashboards Clients | Kadrek", description: "Dashboards sur-mesure, portails clients, interfaces opérationnelles. Une vision complète de votre activité sur un seul écran." },
    eyebrow: "Interfaces & Dashboards",
    title: "Toute votre activité sur un seul écran, enfin",
    subtitle: "Un dashboard bien conçu vous fait gagner 30 minutes chaque matin. On crée des interfaces métier sur-mesure — simples, rapides, connectées à tous vos systèmes — pour que vous et vos clients ayez une vision claire et instantanée.",
    problem: {
      title: "Vous gérez votre entreprise dans le brouillard",
      intro: "Quand les données sont dispersées dans 6 outils différents, impossible d'avoir une vue claire sur ce qui se passe. Chaque décision nécessite une heure de collecte d'information — ce temps est perdu.",
      points: [
        "Données dispersées dans CRM, ERP, comptabilité, sheets : vue fragmentée impossible",
        "Rapports manuels chronophages pour savoir où en est l'activité",
        "Clients qui appellent pour savoir où en est leur commande, leur dossier, leur facture",
        "Direction sans KPIs fiables en temps réel pour piloter avec confiance",
        "Équipes terrain sans visibilité sur leurs tâches, priorités et délais",
        "Interfaces achetées trop génériques, jamais vraiment adaptées à votre métier",
      ],
    },
    benefits: [
      { icon: "👁️", title: "Visibilité totale en 30 secondes", desc: "Un seul écran pour voir revenus, marges, pipeline, satisfaction client, opérations. Plus besoin de chercher." },
      { icon: "🤝", title: "Clients autonomes et satisfaits", desc: "Un portail client où ils suivent commandes, factures et dossiers en temps réel. -60% de sollicitations support." },
      { icon: "⚡", title: "Décisions plus rapides", desc: "Les managers disposent d'informations fiables en permanence. Pas d'attente, pas de doute — juste l'action." },
      { icon: "🎯", title: "Interfaces pensées pour vos métiers", desc: "Pas d'outil générique imposé. Chaque interface est conçue autour de vos workflows et de la réalité terrain." },
      { icon: "📱", title: "Accessible partout, sur tout", desc: "Desktop, tablette, mobile — vos équipes terrain ont la même visibilité que ceux au bureau." },
      { icon: "🔗", title: "Tout connecté, rien à ressaisir", desc: "Les données remontent automatiquement de vos systèmes existants. Zéro saisie manuelle, zéro décalage." },
    ],
    useCases: [
      { icon: "📊", scenario: "Direction générale — Dashboard exécutif", challenge: "DG reçoit 6 rapports différents chaque lundi. 45 min pour les consolider. Données parfois contradictoires.", solution: "Dashboard exécutif unifié : revenus, marges, pipeline, NPS, KPIs opérationnels. Mis à jour en temps réel.", result: "45 min → 2 min de lecture. Décisions hebdomadaires basées sur des données fraîches et cohérentes." },
      { icon: "🛒", scenario: "E-commerce — Portail client self-service", challenge: "50 appels/jour de clients qui demandent le statut de leur commande. Équipe support surchargée.", solution: "Portail client : suivi de commande, factures téléchargeables, historique, formulaire de retour — sans appel.", result: "Appels support -65%. Satisfaction client +32%. Équipe support recentrée sur les vrais problèmes." },
      { icon: "🏗️", scenario: "BTP — Suivi de chantier en temps réel", challenge: "Directeur travaux reçoit les avancements par SMS et appels téléphoniques. Aucune vue consolidée.", solution: "Interface chantier : avancement par lot, photos terrain, blocages signalés, planning actualisé.", result: "Réunions de chantier réduites de 2h à 30 min. Retards détectés 3 jours plus tôt en moyenne." },
      { icon: "💼", scenario: "Cabinet — Espace client sécurisé", challenge: "Échanges de documents sensibles par email. Clients perdent les fichiers, version non contrôlée.", solution: "Portail sécurisé : dépôt et signature de documents, suivi de dossier, messagerie intégrée.", result: "0 document perdu. Délai de traitement -40%. Satisfaction client en hausse mesurable." },
    ],
    features: [
      { icon: "📊", name: "Dashboards exécutifs", desc: "KPIs temps réel pour la direction" },
      { icon: "🏭", name: "Interfaces opérationnelles", desc: "Terrain, entrepôt, production" },
      { icon: "👤", name: "Portail client self-service", desc: "Commandes, factures, dossiers" },
      { icon: "📋", name: "Rapports automatisés", desc: "Générés et distribués sans action" },
      { icon: "🔗", name: "Connecteurs multi-systèmes", desc: "CRM, ERP, comptabilité, API" },
      { icon: "📱", name: "Design responsive total", desc: "Desktop, tablette, mobile" },
      { icon: "🔒", name: "Gestion des droits d'accès", desc: "Rôles et permissions par profil" },
      { icon: "🎨", name: "Charte graphique sur-mesure", desc: "Cohérence avec votre identité" },
      { icon: "⚡", name: "Performance ultra-rapide", desc: "< 1,5s de chargement" },
      { icon: "🔔", name: "Notifications intelligentes", desc: "Alertes selon vos seuils définis" },
    ],
    gains: [
      { label: "Temps de reporting direction", before: "45 min/sem", after: "2 min/sem", delta: "-96% du temps" },
      { label: "Appels support client", before: "50/jour", after: "18/jour", delta: "-65% de sollicitations" },
      { label: "Délai de décision opérationnel", before: "48h", after: "Temps réel", delta: "Décisions immédiates" },
      { label: "Satisfaction utilisateurs", before: "58/100", after: "87/100", delta: "+50% de satisfaction" },
    ],
    cta: { title: "Voyez votre activité comme vous ne l'avez jamais vue", subtitle: "Un prototype de votre dashboard en 5 jours. Vous validez avant que nous construisions. Zéro risque, valeur immédiate." },
    relatedSolutions: [
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
      { icon: "⚙️", title: "Automatisation", href: "/solutions/automatisation" },
      { icon: "🌐", title: "Présence digitale", href: "/solutions/presence-seo" },
    ],
  },
  en: {
    meta: { title: "Client Interfaces & Dashboards | Kadrek", description: "Custom dashboards, client portals, operational interfaces. A complete view of your business on a single screen." },
    eyebrow: "Interfaces & Dashboards",
    title: "Your entire operation on one screen, at last",
    subtitle: "A well-designed dashboard saves you 30 minutes every morning. We build custom business interfaces — simple, fast, connected to all your systems — so you and your clients have instant, clear visibility.",
    problem: {
      title: "You're managing your business in the fog",
      intro: "When data is scattered across 6 different tools, a clear view of what's happening is impossible. Every decision requires an hour of information gathering — that time is wasted.",
      points: [
        "Data scattered across CRM, ERP, accounting, spreadsheets: no coherent overview",
        "Time-consuming manual reports just to know where the business stands",
        "Customers calling to ask about their order, file or invoice status",
        "Leadership without reliable real-time KPIs to steer with confidence",
        "Field teams with no visibility into their tasks, priorities and deadlines",
        "Off-the-shelf interfaces that are too generic, never truly adapted to your business",
      ],
    },
    benefits: [
      { icon: "👁️", title: "Total visibility in 30 seconds", desc: "One screen for revenue, margins, pipeline, customer satisfaction and operations. No more searching." },
      { icon: "🤝", title: "Autonomous, satisfied customers", desc: "A client portal where they track orders, invoices and files in real time. -60% support requests." },
      { icon: "⚡", title: "Faster decisions", desc: "Managers have reliable information at all times. No waiting, no guessing — just action." },
      { icon: "🎯", title: "Interfaces built for your business", desc: "No generic tool imposed. Each interface is designed around your workflows and operational reality." },
      { icon: "📱", title: "Accessible anywhere, on anything", desc: "Desktop, tablet, mobile — field teams have the same visibility as those in the office." },
      { icon: "🔗", title: "Everything connected, nothing re-entered", desc: "Data flows automatically from your existing systems. Zero manual entry, zero lag." },
    ],
    useCases: [
      { icon: "📊", scenario: "Executive management — Executive dashboard", challenge: "CEO receives 6 separate reports every Monday. 45 minutes to consolidate them. Data sometimes contradictory.", solution: "Unified executive dashboard: revenue, margins, pipeline, NPS, operational KPIs. Updated in real time.", result: "45 min → 2 min reading time. Weekly decisions based on fresh, consistent data." },
      { icon: "🛒", scenario: "E-commerce — Self-service client portal", challenge: "50 calls/day from customers asking about their order status. Support team overwhelmed.", solution: "Client portal: order tracking, downloadable invoices, history, returns form — no call needed.", result: "Support calls -65%. Customer satisfaction +32%. Support team refocused on real problems." },
      { icon: "🏗️", scenario: "Construction — Real-time site monitoring", challenge: "Site director receives progress updates by SMS and phone calls. No consolidated view.", solution: "Site interface: progress by lot, field photos, reported blockers, updated schedule.", result: "Site meetings cut from 2h to 30 min. Delays detected 3 days earlier on average." },
      { icon: "💼", scenario: "Professional services — Secure client space", challenge: "Sensitive documents exchanged by email. Clients lose files, version control impossible.", solution: "Secure portal: document upload and signing, file tracking, integrated messaging.", result: "0 documents lost. Processing time -40%. Measurably higher client satisfaction." },
    ],
    features: [
      { icon: "📊", name: "Executive dashboards", desc: "Real-time KPIs for leadership" },
      { icon: "🏭", name: "Operational interfaces", desc: "Field, warehouse, production" },
      { icon: "👤", name: "Self-service client portal", desc: "Orders, invoices, files" },
      { icon: "📋", name: "Automated reports", desc: "Generated and distributed without action" },
      { icon: "🔗", name: "Multi-system connectors", desc: "CRM, ERP, accounting, APIs" },
      { icon: "📱", name: "Fully responsive design", desc: "Desktop, tablet, mobile" },
      { icon: "🔒", name: "Access rights management", desc: "Roles and permissions by profile" },
      { icon: "🎨", name: "Custom brand identity", desc: "Consistent with your visual identity" },
      { icon: "⚡", name: "Ultra-fast performance", desc: "< 1.5s load time" },
      { icon: "🔔", name: "Smart notifications", desc: "Alerts based on your defined thresholds" },
    ],
    gains: [
      { label: "Executive reporting time", before: "45 min/week", after: "2 min/week", delta: "-96% time" },
      { label: "Customer support calls", before: "50/day", after: "18/day", delta: "-65% requests" },
      { label: "Operational decision lag", before: "48h", after: "Real-time", delta: "Immediate decisions" },
      { label: "User satisfaction", before: "58/100", after: "87/100", delta: "+50% satisfaction" },
    ],
    cta: { title: "See your business as you've never seen it before", subtitle: "A prototype of your dashboard in 5 days. You validate before we build. Zero risk, immediate value." },
    relatedSolutions: [
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
      { icon: "⚙️", title: "Automation", href: "/solutions/automatisation" },
      { icon: "🌐", title: "Digital presence", href: "/solutions/presence-seo" },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (content[(locale as Locale)] ?? content.fr).meta;
}

export default async function InterfacesClientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;
  return (
    <SolutionPage
      eyebrow={c.eyebrow}
      title={c.title}
      subtitle={c.subtitle}
      heroIcon="💻"
      accentFrom="#2563eb"
      accentTo="#7c3aed"
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
