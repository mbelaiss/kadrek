import { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Automatisation des Processus | Kadrek",
  description: "Automatisez la facturation, les commandes, l'onboarding et les rapports. Économisez jusqu'à 40% de vos coûts opérationnels.",
};

export default function AutomatisationPage() {
  return (
    <SolutionPage
      eyebrow="Automatisation"
      title="Arrêtez de payer pour ce que les machines font mieux"
      subtitle="Facturation, commandes, onboarding, relances, conformité — chaque tâche manuelle est un coût caché. On automatise vos processus critiques pour que votre équipe se concentre sur ce qui génère vraiment de la croissance."
      heroIcon="⚙️"
      accentFrom="#0891b2"
      accentTo="#2563eb"
      bgFrom="from-cyan-50"
      problem={{
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
      }}
      benefits={[
        { icon: "💰", title: "Réduction des coûts opérationnels", desc: "Les processus automatisés coûtent 60 à 80% moins cher que leur équivalent manuel. Le ROI est visible dès le premier mois." },
        { icon: "❌", title: "Zéro erreur de saisie",             desc: "Les données circulent automatiquement entre les systèmes. Plus de doublon, plus d'oubli, plus de copier-coller risqué." },
        { icon: "⚡", title: "Vitesse d'exécution multipliée",    desc: "Un processus qui prenait 45 minutes à la main prend 12 secondes automatisé. Vos délais clients s'améliorent drastiquement." },
        { icon: "📊", title: "Traçabilité totale",                desc: "Chaque action est horodatée, documentée et accessible. Audits, litiges et réclamations résolus en quelques clics." },
        { icon: "🌱", title: "Scalabilité sans embauche",          desc: "Doublez votre volume sans doubler vos effectifs. Les systèmes automatisés absorbent la croissance naturellement." },
        { icon: "😊", title: "Équipes plus motivées",             desc: "Personne n'aime passer des heures à copier des données. Supprimez le travail ingrat et regardez l'engagement grimper." },
      ]}
      useCases={[
        {
          icon: "🧾",
          scenario: "Facturation automatique bout-en-bout",
          challenge: "Comptable passe 3h/jour à créer des factures, les envoyer et suivre les paiements. Retards fréquents, oublis de relance.",
          solution: "Workflow automatisé : facture créée à la validation commande, envoyée au client, relancée à J+7 et J+14 si impayée.",
          result: "3h économisées/jour. Délai de paiement moyen réduit de 18 à 9 jours. Cash-flow amélioré.",
        },
        {
          icon: "👤",
          scenario: "Onboarding collaborateurs",
          challenge: "RH gère l'intégration manuellement : contrat, accès informatique, formation, matériel — souvent incomplet ou tardif.",
          solution: "Workflow déclenché à la signature du contrat : création des accès, envoi des documents, planning de formation, check-lists validées à chaque étape.",
          result: "Temps RH -70%. Délai d'opérationnalité 3j → 4h. Score d'expérience candidat +40 points.",
        },
        {
          icon: "📦",
          scenario: "Gestion des commandes et stock",
          challenge: "Chaque commande est saisie manuellement dans 3 systèmes différents. Erreurs fréquentes, délais de traitement de 24h.",
          solution: "Connecteur automatique entre boutique, ERP et entrepôt. Bon de préparation généré en temps réel. Alerte si stock sous le seuil.",
          result: "Délai de traitement 24h → 8 min. Erreurs commandes -94%. Ruptures de stock évitées.",
        },
        {
          icon: "📋",
          scenario: "Rapports et conformité",
          challenge: "Responsable qualité compile un rapport de conformité chaque mois. 2 jours de collecte de données dans 8 systèmes.",
          solution: "Rapport généré automatiquement depuis toutes les sources. Distribué aux bons destinataires le 1er du mois à 7h.",
          result: "2 jours → 0 minute. Rapport plus complet, plus fiable, jamais en retard.",
        },
      ]}
      features={[
        { icon: "🧾", name: "Automatisation facturation",      desc: "Création, envoi, relance, réconciliation" },
        { icon: "👤", name: "Workflows RH et onboarding",      desc: "De la signature au premier jour" },
        { icon: "📦", name: "Gestion commandes et stock",      desc: "Synchronisation multi-systèmes" },
        { icon: "📧", name: "Séquences email automatiques",    desc: "Relances, confirmations, nurturing" },
        { icon: "📊", name: "Reporting automatisé",            desc: "Compilé, formaté, distribué" },
        { icon: "🔔", name: "Alertes et escalades",           desc: "Selon seuils définis par vos équipes" },
        { icon: "🔗", name: "Intégrations no-code",            desc: "Zapier, Make, n8n, API directes" },
        { icon: "📋", name: "Audit trail complet",             desc: "Chaque action tracée et horodatée" },
        { icon: "⚡", name: "Déclencheurs multi-événements",   desc: "Temps réel, planifié, conditionnel" },
        { icon: "🔄", name: "Boucles de validation",          desc: "Approbation humaine quand nécessaire" },
      ]}
      gains={[
        { label: "Coûts opérationnels",     before: "3 200€/mois", after: "800€/mois",  delta: "-75% de coûts" },
        { label: "Erreurs de saisie",       before: "12%",         after: "0,3%",       delta: "-97% d'erreurs" },
        { label: "Délai de traitement",     before: "24 heures",   after: "8 minutes",  delta: "180× plus rapide" },
        { label: "Heures admin récupérées", before: "20h/semaine", after: "2h/semaine", delta: "18h libérées" },
      ]}
      cta={{
        title: "Automatisez votre premier processus cette semaine",
        subtitle: "On identifie le processus qui vous coûte le plus, on le modélise et on livre une première automatisation en 10 jours.",
      }}
      relatedSolutions={[
        { icon: "🤖", title: "Agents IA",         href: "/solutions/agents-ia" },
        { icon: "📊", title: "Data & Analytics",   href: "/solutions/data-analytics" },
        { icon: "💻", title: "Interfaces clients", href: "/solutions/interfaces-clients" },
      ]}
    />
  );
}
