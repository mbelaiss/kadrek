import SolutionPage from "@/components/SolutionPage";
import type { Locale } from "@/routing";

const content = {
  fr: {
    meta: { title: "Solutions IA | Kadrek", description: "Des solutions IA qui amplifient vos équipes : support client, triage email, rapports automatiques, détection d'anomalies." },
    eyebrow: "Solutions IA",
    title: "L'intelligence artificielle qui amplifie chaque collaborateur",
    subtitle: "Nos solutions IA prennent en charge les tâches répétitives — réponses clients, triage d'emails, génération de rapports, détection d'anomalies — pour que vos équipes se concentrent sur ce qui exige leur expertise.",
    problem: {
      title: "Vos équipes passent 40% de leur temps sur des tâches que l'IA peut faire",
      intro: "Support client chronophage, emails non triés, rapports manuels répétitifs, anomalies détectées trop tard — chaque heure perdue sur ces tâches est une heure non investie sur la croissance.",
      points: [
        "Clients qui attendent des heures pour des réponses à des questions simples",
        "200+ emails par jour sans priorisation — l'urgent se noie dans le banal",
        "Rapports compilés manuellement chaque semaine : 4 à 8 heures de travail",
        "Anomalies financières, ruptures de stock et fraudes détectées trop tard",
        "Planification et coordination : des heures perdues pour aligner des agendas",
        "Traitement des commandes : saisies manuelles, erreurs, délais inutiles",
      ],
    },
    benefits: [
      { icon: "⚡", title: "Disponibilité en continu", desc: "Nos solutions IA traitent les demandes, surveillent vos systèmes et analysent vos données sans interruption, quelle que soit l'heure." },
      { icon: "🎯", title: "80% des requêtes traitées automatiquement", desc: "Quatre requêtes sur cinq sont résolues sans intervention. Vos collaborateurs concentrent leur attention sur les cas qui exigent leur jugement." },
      { icon: "📉", title: "Réduction des coûts de support", desc: "Moins de personnel dédié aux tâches répétitives. Les agents IA gèrent le volume sans que les coûts n'explosent." },
      { icon: "🧠", title: "Apprentissage continu", desc: "Plus l'agent traite de cas, plus il devient précis. Le système s'améliore automatiquement avec l'usage." },
      { icon: "🔒", title: "Détection d'anomalies proactive", desc: "L'IA surveille vos données en continu et vous alerte avant qu'un problème ne devienne une crise." },
      { icon: "📊", title: "Rapports automatiques", desc: "Chaque rapport est généré, formaté et distribué automatiquement. Aucune ressaisie manuelle." },
    ],
    useCases: [
      { icon: "💬", scenario: "E-commerce — Support client automatisé", challenge: "4 agents support pour 800 tickets/jour. Temps de réponse moyen : 6 heures. Satisfaction client en chute.", solution: "Agent IA connecté à la base de connaissance et au système de commandes. Répond aux questions de suivi, retours et livraisons.", result: "80% des tickets résolus en < 30 secondes. Agents libérés pour les cas complexes. NPS +24 points." },
      { icon: "📧", scenario: "PME — Triage et réponse email", challenge: "Directeur reçoit 180 emails/jour. 60% ne nécessitent qu'une réponse standard. 3h perdues chaque matin.", solution: "Agent IA lit, catégorise et rédige les réponses aux emails courants. Signale uniquement ceux nécessitant une décision.", result: "3h économisées chaque jour. Taux de réponse dans l'heure passé de 20% à 95%." },
      { icon: "🏦", scenario: "Finance — Détection de fraude et anomalies", challenge: "Équipe comptable détecte les anomalies lors des clôtures mensuelles. Trop tard pour corriger sans impact.", solution: "Agent IA surveille toutes les transactions en temps réel. Alerte immédiate si un écart sort des patterns habituels.", result: "3 fraudes détectées en 6 mois. 45k€ préservés. Aucune anomalie passée inaperçue." },
      { icon: "📋", scenario: "Direction — Rapports automatiques", challenge: "Responsable data passe 8h par semaine à compiler des rapports depuis 6 sources différentes.", solution: "Agent IA collecte, nettoie et formate les données de toutes les sources. Rapport envoyé automatiquement chaque lundi 8h.", result: "8h économisées / semaine. Données plus fraîches, plus fiables. Zéro erreur de compilation." },
    ],
    features: [
      { icon: "💬", name: "Chatbot IA multicanal", desc: "Web, WhatsApp, email, app mobile" },
      { icon: "📧", name: "Triage et réponse email", desc: "Catégorisation + brouillons automatiques" },
      { icon: "📊", name: "Génération de rapports", desc: "Planifiés, formatés, distribués auto" },
      { icon: "🔔", name: "Alertes et anomalies", desc: "Surveillance continue de vos données" },
      { icon: "🗓️", name: "Planification intelligente", desc: "Gestion d'agendas et de ressources" },
      { icon: "📦", name: "Traitement des commandes", desc: "Saisie et mise à jour automatiques" },
      { icon: "🧠", name: "Apprentissage continu", desc: "Le modèle s'améliore avec l'usage" },
      { icon: "🔗", name: "Intégration CRM/ERP", desc: "Accès aux données métier en temps réel" },
      { icon: "🌐", name: "Support multilingue", desc: "Français, anglais, arabe et plus" },
      { icon: "📈", name: "Analytics de performance", desc: "Taux de résolution, satisfaction, temps" },
    ],
    gains: [
      { label: "Tickets résolus auto", before: "10%", after: "80%", delta: "+700% d'autonomie" },
      { label: "Temps de réponse", before: "6 heures", after: "< 30 sec", delta: "720× plus rapide" },
      { label: "Coût par interaction", before: "8,50 €", after: "0,12 €", delta: "-99% du coût" },
      { label: "Heures admin récupérées", before: "0h", after: "15h/sem", delta: "Par employé" },
    ],
    cta: { title: "Déployez votre premier agent IA en 2 semaines", subtitle: "On identifie les tâches à plus fort volume dans votre activité et on déploie un agent IA opérationnel en 10 à 14 jours." },
    relatedSolutions: [
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
      { icon: "⚙️", title: "Automatisation", href: "/solutions/automatisation" },
      { icon: "🎓", title: "Formation IA", href: "/solutions/formation-ia" },
    ],
  },
  en: {
    meta: { title: "AI Solutions | Kadrek", description: "AI solutions that amplify your teams: customer support, email triage, automatic reports, anomaly detection." },
    eyebrow: "AI Solutions",
    title: "Artificial intelligence that amplifies every team member",
    subtitle: "Our AI solutions handle repetitive tasks — customer replies, email triage, report generation, anomaly detection — so your teams can focus on work that demands their expertise.",
    problem: {
      title: "Your teams spend 40% of their time on tasks AI can handle",
      intro: "Time-consuming customer support, unsorted emails, repetitive manual reports, anomalies detected too late — every hour lost on these tasks is an hour not invested in growth.",
      points: [
        "Customers waiting hours for answers to simple questions",
        "200+ emails per day with no prioritisation — urgent drowns in the mundane",
        "Reports compiled manually each week: 4–8 hours of work",
        "Financial anomalies, stock-outs and fraud detected too late",
        "Scheduling and coordination: hours lost aligning calendars",
        "Order processing: manual entry, errors, unnecessary delays",
      ],
    },
    benefits: [
      { icon: "⚡", title: "Continuous availability", desc: "Our AI solutions process requests, monitor your systems and analyse your data without interruption, at any hour." },
      { icon: "🎯", title: "80% of requests handled automatically", desc: "Four out of five requests are resolved without intervention. Your teams focus their attention on cases that require their judgement." },
      { icon: "📉", title: "Lower support costs", desc: "Less staff dedicated to repetitive tasks. AI agents absorb volume without costs exploding." },
      { icon: "🧠", title: "Continuous learning", desc: "The more cases the agent handles, the more accurate it becomes. The system improves automatically with use." },
      { icon: "🔒", title: "Proactive anomaly detection", desc: "AI monitors your data continuously and alerts you before a problem becomes a crisis." },
      { icon: "📊", title: "Automatic reports", desc: "Every report is generated, formatted and distributed automatically. No manual re-entry required." },
    ],
    useCases: [
      { icon: "💬", scenario: "E-commerce — Automated customer support", challenge: "4 support agents for 800 tickets/day. Average response time: 6 hours. Customer satisfaction falling.", solution: "AI agent connected to the knowledge base and order system. Answers tracking, returns and delivery questions.", result: "80% of tickets resolved in < 30 seconds. Agents freed for complex cases. NPS +24 points." },
      { icon: "📧", scenario: "SME — Email triage & response", challenge: "Director receives 180 emails/day. 60% only need a standard reply. 3 hours lost every morning.", solution: "AI agent reads, categorises and drafts responses to routine emails. Flags only those requiring a decision.", result: "3 hours saved every day. Response-within-the-hour rate up from 20% to 95%." },
      { icon: "🏦", scenario: "Finance — Fraud & anomaly detection", challenge: "Accounting team detects anomalies during monthly close. Too late to correct without impact.", solution: "AI agent monitors all transactions in real time. Immediate alert if a discrepancy falls outside normal patterns.", result: "3 frauds detected in 6 months. €45k preserved. No anomaly went unnoticed." },
      { icon: "📋", scenario: "Management — Automatic reports", challenge: "Data manager spends 8 hours a week compiling reports from 6 different sources.", solution: "AI agent collects, cleans and formats data from all sources. Report sent automatically every Monday at 8 am.", result: "8 hours saved per week. Fresher, more reliable data. Zero compilation errors." },
    ],
    features: [
      { icon: "💬", name: "Multi-channel AI chatbot", desc: "Web, WhatsApp, email, mobile app" },
      { icon: "📧", name: "Email triage & response", desc: "Categorisation + automatic drafts" },
      { icon: "📊", name: "Report generation", desc: "Scheduled, formatted, auto-distributed" },
      { icon: "🔔", name: "Alerts & anomalies", desc: "Continuous monitoring of your data" },
      { icon: "🗓️", name: "Smart scheduling", desc: "Calendar and resource management" },
      { icon: "📦", name: "Order processing", desc: "Automatic entry and updates" },
      { icon: "🧠", name: "Continuous learning", desc: "The model improves with use" },
      { icon: "🔗", name: "CRM/ERP integration", desc: "Real-time access to business data" },
      { icon: "🌐", name: "Multilingual support", desc: "French, English, Arabic and more" },
      { icon: "📈", name: "Performance analytics", desc: "Resolution rate, satisfaction, speed" },
    ],
    gains: [
      { label: "Tickets auto-resolved", before: "10%", after: "80%", delta: "+700% autonomy" },
      { label: "Response time", before: "6 hours", after: "< 30 sec", delta: "720× faster" },
      { label: "Cost per interaction", before: "€8.50", after: "€0.12", delta: "-99% cost" },
      { label: "Admin hours recovered", before: "0h", after: "15h/week", delta: "Per employee" },
    ],
    cta: { title: "Deploy your first AI agent in 2 weeks", subtitle: "We identify your highest-volume tasks and deploy a fully operational AI agent in 10–14 days." },
    relatedSolutions: [
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
      { icon: "⚙️", title: "Automation", href: "/solutions/automatisation" },
      { icon: "🎓", title: "AI Training", href: "/solutions/formation-ia" },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (content[(locale as Locale)] ?? content.fr).meta;
}

export default async function AgentsIAPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;
  return (
    <SolutionPage
      eyebrow={c.eyebrow}
      title={c.title}
      subtitle={c.subtitle}
      heroIcon="🤖"
      accentFrom="#7c3aed"
      accentTo="#2563eb"
      bgFrom="from-purple-50"
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
