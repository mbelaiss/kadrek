import { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Data & Analytics | Kadrek",
  description: "Transformez vos données en décisions intelligentes. Dashboards temps réel, KPIs sur-mesure, rapports automatisés.",
};

export default function DataAnalyticsPage() {
  return (
    <SolutionPage
      eyebrow="Data & Analytics"
      title="Vos données méritent mieux qu'un tableur Excel"
      subtitle="Chaque vente, commande, et interaction génère de la data précieuse. On transforme cette donnée brute en tableaux de bord clairs, décisions plus rapides, et avantage concurrentiel mesurable."
      heroIcon="📊"
      accentFrom="#2563eb"
      accentTo="#06b6d4"
      bgFrom="from-blue-50"
      problem={{
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
      }}
      benefits={[
        { icon: "🎯", title: "Décisions en temps réel", desc: "Voir ce qui se passe dans votre entreprise à l'instant — revenus, marges, pipeline — sans attendre le rapport mensuel." },
        { icon: "📈", title: "Identifier les leviers de croissance", desc: "Savoir précisément quels produits, canaux et clients génèrent le plus de valeur. Investir là où ça rapporte." },
        { icon: "💡", title: "Anticiper les problèmes", desc: "Des alertes automatiques vous notifient avant qu'un retard, une rupture ou une anomalie ne devienne une crise." },
        { icon: "💰", title: "Réduire les coûts cachés", desc: "La data révèle les gaspillages invisibles : processus redondants, stocks dormants, ressources sous-utilisées." },
        { icon: "⚡", title: "Réunions plus courtes, plus efficaces", desc: "Chaque réunion démarre avec les mêmes données fiables. Moins de débats sur les chiffres, plus de décisions." },
        { icon: "🌍", title: "Pilotage multi-sites et multi-équipes", desc: "Vue consolidée sur toutes vos entités, équipes et canaux. Un seul écran pour diriger avec clarté." },
      ]}
      useCases={[
        {
          icon: "🏪",
          scenario: "Retail — Suivi des ventes en temps réel",
          challenge: "Directeur commercial sans visibilité sur les ventes du jour. Attente du rapport hebdomadaire pour agir.",
          solution: "Dashboard live connecté au POS et CRM. Alertes si une catégorie décroche par rapport à la période précédente.",
          result: "Réactivité le jour même. Promotions ciblées lancées en 2h. CA mensuel +12%.",
        },
        {
          icon: "🏭",
          scenario: "Industrie — Suivi de la production",
          challenge: "Responsable production calcule les indicateurs à la main chaque semaine. 4h perdues, données approximatives.",
          solution: "Connecteurs ERP + capteurs atelier. Taux de rendement synthétique (TRS) calculé automatiquement en continu.",
          result: "4h économisées / semaine. Pannes anticipées. TRS amélioré de 8%.",
        },
        {
          icon: "💼",
          scenario: "Services — Pipeline commercial",
          challenge: "Équipe commerciale de 8 personnes, pipeline mal suivi, opportunités perdues faute de relance au bon moment.",
          solution: "Dashboard pipeline CRM connecté. Scoring automatique des leads. Alertes de relance pour les deals chauds.",
          result: "Taux de conversion +22%. Cycle de vente réduit de 18 jours.",
        },
        {
          icon: "🏥",
          scenario: "Santé — Reporting direction",
          challenge: "Directeur clinique reçoit 6 rapports différents chaque semaine. Impossible de les consolider rapidement.",
          solution: "Rapport exécutif unifié généré automatiquement chaque lundi 8h. Une page. Tous les KPIs critiques.",
          result: "30 min gagnées chaque matin. Décisions stratégiques plus rapides. Zéro donnée manquante.",
        },
      ]}
      features={[
        { icon: "📊", name: "Dashboards temps réel",          desc: "Mise à jour automatique depuis vos sources" },
        { icon: "🎛️", name: "KPIs personnalisés",              desc: "Indicateurs calibrés sur votre secteur" },
        { icon: "🔔", name: "Alertes intelligentes",          desc: "Notification dès qu'un seuil est franchi" },
        { icon: "📋", name: "Rapports automatisés",           desc: "Générés et distribués selon planning" },
        { icon: "🔗", name: "Connecteurs multi-sources",      desc: "CRM, ERP, e-commerce, POS, sheets" },
        { icon: "📱", name: "Accès mobile",                   desc: "Vos KPIs dans votre poche" },
        { icon: "👥", name: "Multi-utilisateurs et rôles",    desc: "Vue adaptée à chaque niveau" },
        { icon: "📦", name: "Historique & tendances",         desc: "Comparaisons périodiques automatiques" },
        { icon: "🔍", name: "Analyse de rentabilité",         desc: "Par produit, client, canal, région" },
        { icon: "🧮", name: "Prévisions et projections",      desc: "Modèles prédictifs simples et lisibles" },
      ]}
      gains={[
        { label: "Temps de reporting",    before: "3 jours/mois", after: "0 minute",      delta: "100% automatisé" },
        { label: "Délai de décision",     before: "30 jours",     after: "Temps réel",    delta: "30× plus rapide" },
        { label: "Coûts cachés détectés", before: "Invisibles",   after: "Tracés à 100%", delta: "Économies immédiates" },
        { label: "Taux d'erreur data",    before: "12%",          after: "< 0.5%",        delta: "-96% d'erreurs" },
      ]}
      cta={{
        title: "Voyez votre activité en temps réel dès cette semaine",
        subtitle: "Un audit data gratuit pour identifier vos sources, vos KPIs prioritaires et vous montrer ce qu'un dashboard peut changer concrètement.",
      }}
      relatedSolutions={[
        { icon: "🤖", title: "Agents IA",         href: "/solutions/agents-ia" },
        { icon: "⚙️", title: "Automatisation",     href: "/solutions/automatisation" },
        { icon: "💻", title: "Interfaces clients", href: "/solutions/interfaces-clients" },
      ]}
    />
  );
}
