import SolutionPage from "@/components/SolutionPage";
import type { Locale } from "@/routing";

const content = {
  fr: {
    meta: { title: "Automatisation des Processus | Kadrek", description: "Automatisez la facturation, les commandes, l'onboarding et les rapports. Économisez jusqu'à 40% de vos coûts opérationnels." },
    eyebrow: "Automatisation",
    title: "Arrêtez de payer pour ce que les machines font mieux",
    subtitle: "Facturation, commandes, onboarding, relances, conformité — chaque tâche manuelle est un coût caché. On automatise vos processus critiques pour que votre équipe se concentre sur ce qui génère vraiment de la croissance.",
    problem: {
      title: "Les tâches manuelles coûtent plus cher qu'elles ne semblent",
      intro: "Pour une PME de 20 personnes, les tâches répétitives représentent en moyenne 1,7 équivalent temps plein par an — soit 50 000 à 80 000 € de masse salariale consacrée à des activités que l'automatisation résout à une fraction du coût.",
      points: [
        "Facturation manuelle : ressaisies, oublis de relance, retards de paiement récurrents",
        "Gestion des commandes saisie à la main dans plusieurs systèmes successifs",
        "Onboarding de nouveaux employés : processus ad hoc, oublis fréquents, mauvaise expérience",
        "Rapports compilés manuellement depuis plusieurs sources — 3 à 8 heures par semaine",
        "Relances commerciales oubliées : opportunités perdues par manque de suivi",
        "Conformité et audits chronophages sans traçabilité automatique",
      ],
    },
    benefits: [
      { icon: "💰", title: "Réduction des coûts opérationnels", desc: "Les processus automatisés coûtent 60 à 80% moins cher que leur équivalent manuel. Le ROI est visible dès le premier mois." },
      { icon: "❌", title: "Zéro erreur de saisie", desc: "Les données circulent automatiquement entre les systèmes. Plus de doublon, plus d'oubli, plus de copier-coller risqué." },
      { icon: "⚡", title: "Vitesse d'exécution multipliée", desc: "Un processus qui prenait 45 minutes à la main prend 12 secondes automatisé. Vos délais clients s'améliorent drastiquement." },
      { icon: "📊", title: "Traçabilité totale", desc: "Chaque action est horodatée, documentée et accessible. Audits, litiges et réclamations résolus en quelques clics." },
      { icon: "🌱", title: "Scalabilité sans embauche", desc: "Doublez votre volume sans doubler vos effectifs. Les systèmes automatisés absorbent la croissance naturellement." },
      { icon: "😊", title: "Équipes plus motivées", desc: "Personne n'aime passer des heures à copier des données. Supprimez le travail ingrat et regardez l'engagement grimper." },
    ],
    useCases: [
      { icon: "🧾", scenario: "Facturation automatique bout-en-bout", challenge: "Comptable passe 3h/jour à créer des factures, les envoyer et suivre les paiements. Retards fréquents, oublis de relance.", solution: "Workflow automatisé : facture créée à la validation commande, envoyée au client, relancée à J+7 et J+14 si impayée.", result: "3h économisées/jour. Délai de paiement moyen réduit de 18 à 9 jours. Cash-flow amélioré." },
      { icon: "👤", scenario: "Onboarding collaborateurs", challenge: "RH gère l'intégration manuellement : contrat, accès informatique, formation, matériel — souvent incomplet ou tardif.", solution: "Workflow déclenché à la signature du contrat : création des accès, envoi des documents, planning de formation, check-lists.", result: "Temps RH -70%. Délai d'opérationnalité 3j → 4h. Score d'expérience candidat +40 points." },
      { icon: "📦", scenario: "Gestion des commandes et stock", challenge: "Chaque commande est saisie manuellement dans 3 systèmes différents. Erreurs fréquentes, délais de traitement de 24h.", solution: "Connecteur automatique entre boutique, ERP et entrepôt. Bon de préparation généré en temps réel. Alerte si stock sous le seuil.", result: "Délai de traitement 24h → 8 min. Erreurs commandes -94%. Ruptures de stock évitées." },
      { icon: "📋", scenario: "Rapports et conformité", challenge: "Responsable qualité compile un rapport de conformité chaque mois. 2 jours de collecte de données dans 8 systèmes.", solution: "Rapport généré automatiquement depuis toutes les sources. Distribué aux bons destinataires le 1er du mois à 7h.", result: "2 jours → 0 minute. Rapport plus complet, plus fiable, jamais en retard." },
    ],
    features: [
      { icon: "🧾", name: "Automatisation facturation", desc: "Création, envoi, relance, réconciliation" },
      { icon: "👤", name: "Workflows RH et onboarding", desc: "De la signature au premier jour" },
      { icon: "📦", name: "Gestion commandes et stock", desc: "Synchronisation multi-systèmes" },
      { icon: "📧", name: "Séquences email automatiques", desc: "Relances, confirmations, nurturing" },
      { icon: "📊", name: "Reporting automatisé", desc: "Compilé, formaté, distribué" },
      { icon: "🔔", name: "Alertes et escalades", desc: "Selon seuils définis par vos équipes" },
      { icon: "🔗", name: "Intégrations no-code", desc: "Zapier, Make, n8n, API directes" },
      { icon: "📋", name: "Audit trail complet", desc: "Chaque action tracée et horodatée" },
      { icon: "⚡", name: "Déclencheurs multi-événements", desc: "Temps réel, planifié, conditionnel" },
      { icon: "🔄", name: "Boucles de validation", desc: "Approbation humaine quand nécessaire" },
    ],
    gains: [
      { label: "Coûts opérationnels", before: "3 200€/mois", after: "800€/mois", delta: "-75% de coûts" },
      { label: "Erreurs de saisie", before: "12%", after: "0,3%", delta: "-97% d'erreurs" },
      { label: "Délai de traitement", before: "24 heures", after: "8 minutes", delta: "180× plus rapide" },
      { label: "Heures admin récupérées", before: "20h/semaine", after: "2h/semaine", delta: "18h libérées" },
    ],
    cta: { title: "Automatisez votre premier processus cette semaine", subtitle: "On identifie le processus qui vous coûte le plus, on le modélise et on livre une première automatisation en 10 jours." },
    relatedSolutions: [
      { icon: "🤖", title: "Agents IA", href: "/solutions/agents-ia" },
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
      { icon: "💻", title: "Interfaces clients", href: "/solutions/interfaces-clients" },
    ],
  },
  en: {
    meta: { title: "Process Automation | Kadrek", description: "Automate invoicing, orders, onboarding and reports. Save up to 40% of your operational costs." },
    eyebrow: "Automation",
    title: "Stop paying for what machines do better",
    subtitle: "Invoicing, orders, onboarding, follow-ups, compliance — every manual task is a hidden cost. We automate your critical processes so your team can focus on what actually drives growth.",
    problem: {
      title: "Manual tasks cost more than they appear to",
      intro: "For a 20-person SME, repetitive tasks represent an average of 1.7 full-time equivalents per year — that's €50,000–€80,000 in payroll spent on activities automation can solve at a fraction of the cost.",
      points: [
        "Manual invoicing: re-entries, forgotten reminders, recurring payment delays",
        "Order management entered by hand across multiple systems",
        "New employee onboarding: ad-hoc process, frequent omissions, poor experience",
        "Reports compiled manually from multiple sources — 3–8 hours per week",
        "Missed sales follow-ups: opportunities lost for lack of timely action",
        "Time-consuming compliance and audits with no automatic traceability",
      ],
    },
    benefits: [
      { icon: "💰", title: "Lower operational costs", desc: "Automated processes cost 60–80% less than their manual equivalent. ROI is visible from the first month." },
      { icon: "❌", title: "Zero data-entry errors", desc: "Data flows automatically between systems. No duplicates, no omissions, no risky copy-pasting." },
      { icon: "⚡", title: "Execution speed multiplied", desc: "A process that took 45 minutes by hand takes 12 seconds automated. Your customer lead times improve dramatically." },
      { icon: "📊", title: "Complete traceability", desc: "Every action is timestamped, documented and accessible. Audits, disputes and complaints resolved in a few clicks." },
      { icon: "🌱", title: "Scalability without hiring", desc: "Double your volume without doubling headcount. Automated systems absorb growth naturally." },
      { icon: "😊", title: "More motivated teams", desc: "Nobody enjoys copying data for hours. Remove the drudge work and watch engagement rise." },
    ],
    useCases: [
      { icon: "🧾", scenario: "End-to-end automated invoicing", challenge: "Accountant spends 3 hours/day creating invoices, sending them and chasing payments. Frequent delays, forgotten reminders.", solution: "Automated workflow: invoice created on order confirmation, sent to customer, chased at day 7 and 14 if unpaid.", result: "3 hours saved/day. Average payment time cut from 18 to 9 days. Improved cash flow." },
      { icon: "👤", scenario: "Employee onboarding", challenge: "HR manages integration manually: contract, IT access, training, equipment — often incomplete or late.", solution: "Workflow triggered at contract signing: account creation, document sending, training schedule, checklists at each step.", result: "HR time -70%. Time to productivity: 3 days → 4 hours. Candidate experience score +40 points." },
      { icon: "📦", scenario: "Order & stock management", challenge: "Every order entered manually into 3 different systems. Frequent errors, 24-hour processing delays.", solution: "Automatic connector between shop, ERP and warehouse. Pick slip generated in real time. Alert if stock falls below threshold.", result: "Processing time 24h → 8 min. Order errors -94%. Stock-outs prevented." },
      { icon: "📋", scenario: "Reports & compliance", challenge: "Quality manager compiles a compliance report every month. 2 days collecting data from 8 systems.", solution: "Report generated automatically from all sources. Sent to the right recipients on the 1st of each month at 7 am.", result: "2 days → 0 minutes. More complete, more reliable, never late." },
    ],
    features: [
      { icon: "🧾", name: "Invoicing automation", desc: "Creation, sending, chasing, reconciliation" },
      { icon: "👤", name: "HR & onboarding workflows", desc: "From signature to first day" },
      { icon: "📦", name: "Order & stock management", desc: "Multi-system synchronisation" },
      { icon: "📧", name: "Automatic email sequences", desc: "Follow-ups, confirmations, nurturing" },
      { icon: "📊", name: "Automated reporting", desc: "Compiled, formatted, distributed" },
      { icon: "🔔", name: "Alerts & escalations", desc: "Based on thresholds set by your teams" },
      { icon: "🔗", name: "No-code integrations", desc: "Zapier, Make, n8n, direct APIs" },
      { icon: "📋", name: "Full audit trail", desc: "Every action logged and timestamped" },
      { icon: "⚡", name: "Multi-event triggers", desc: "Real-time, scheduled, conditional" },
      { icon: "🔄", name: "Approval loops", desc: "Human sign-off where needed" },
    ],
    gains: [
      { label: "Operational costs", before: "€3,200/month", after: "€800/month", delta: "-75% costs" },
      { label: "Data-entry errors", before: "12%", after: "0.3%", delta: "-97% errors" },
      { label: "Processing time", before: "24 hours", after: "8 minutes", delta: "180× faster" },
      { label: "Admin hours recovered", before: "20h/week", after: "2h/week", delta: "18h freed up" },
    ],
    cta: { title: "Automate your first process this week", subtitle: "We identify the process costing you the most, model it, and deliver a first automation in 10 days." },
    relatedSolutions: [
      { icon: "🤖", title: "AI Agents", href: "/solutions/agents-ia" },
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
      { icon: "💻", title: "Client interfaces", href: "/solutions/interfaces-clients" },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (content[(locale as Locale)] ?? content.fr).meta;
}

export default async function AutomatisationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;
  return (
    <SolutionPage
      eyebrow={c.eyebrow}
      title={c.title}
      subtitle={c.subtitle}
      heroIcon="⚙️"
      accentFrom="#0891b2"
      accentTo="#2563eb"
      bgFrom="from-cyan-50"
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
