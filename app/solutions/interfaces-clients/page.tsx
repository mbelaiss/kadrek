import { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Interfaces & Dashboards Clients | Kadrek",
  description: "Dashboards sur-mesure, portails clients, interfaces opérationnelles. Une vision complète de votre activité sur un seul écran.",
};

export default function InterfacesClientsPage() {
  return (
    <SolutionPage
      eyebrow="Interfaces & Dashboards"
      title="Toute votre activité sur un seul écran, enfin"
      subtitle="Un dashboard bien conçu vous fait gagner 30 minutes chaque matin. On crée des interfaces métier sur-mesure — simples, rapides, connectées à tous vos systèmes — pour que vous et vos clients ayez une vision claire et instantanée."
      heroIcon="💻"
      accentFrom="#2563eb"
      accentTo="#7c3aed"
      bgFrom="from-blue-50"
      problem={{
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
      }}
      benefits={[
        { icon: "👁️", title: "Visibilité totale en 30 secondes",  desc: "Un seul écran pour voir revenus, marges, pipeline, satisfaction client, opérations. Plus besoin de chercher." },
        { icon: "🤝", title: "Clients autonomes et satisfaits",   desc: "Un portail client où ils suivent commandes, factures et dossiers en temps réel. -60% de sollicitations support." },
        { icon: "⚡", title: "Décisions plus rapides",            desc: "Les managers disposent d'informations fiables en permanence. Pas d'attente, pas de doute — juste l'action." },
        { icon: "🎯", title: "Interfaces pensées pour vos métiers", desc: "Pas d'outil générique imposé. Chaque interface est conçue autour de vos workflows et de la réalité terrain." },
        { icon: "📱", title: "Accessible partout, sur tout",      desc: "Desktop, tablette, mobile — vos équipes terrain ont la même visibilité que ceux au bureau." },
        { icon: "🔗", title: "Tout connecté, rien à ressaisir",   desc: "Les données remontent automatiquement de vos systèmes existants. Zéro saisie manuelle, zéro décalage." },
      ]}
      useCases={[
        {
          icon: "📊",
          scenario: "Direction générale — Dashboard exécutif",
          challenge: "DG reçoit 6 rapports différents chaque lundi. 45 min pour les consolider. Données parfois contradictoires.",
          solution: "Dashboard exécutif unifié : revenus, marges, pipeline, NPS, KPIs opérationnels. Mis à jour en temps réel.",
          result: "45 min → 2 min de lecture. Décisions hebdomadaires basées sur des données fraîches et cohérentes.",
        },
        {
          icon: "🛒",
          scenario: "E-commerce — Portail client self-service",
          challenge: "50 appels/jour de clients qui demandent le statut de leur commande. Équipe support surchargée.",
          solution: "Portail client : suivi de commande, factures téléchargeables, historique, formulaire de retour — sans appel.",
          result: "Appels support -65%. Satisfaction client +32%. Équipe support recentrée sur les vrais problèmes.",
        },
        {
          icon: "🏗️",
          scenario: "BTP — Suivi de chantier en temps réel",
          challenge: "Directeur travaux reçoit les avancements par SMS et appels téléphoniques. Aucune vue consolidée.",
          solution: "Interface chantier : avancement par lot, photos terrain, blocages signalés, planning actualisé.",
          result: "Réunions de chantier réduites de 2h à 30 min. Retards détectés 3 jours plus tôt en moyenne.",
        },
        {
          icon: "💼",
          scenario: "Cabinet — Espace client sécurisé",
          challenge: "Échanges de documents sensibles par email. Clients perdent les fichiers, version non contrôlée.",
          solution: "Portail sécurisé : dépôt et signature de documents, suivi de dossier, messagerie intégrée.",
          result: "0 document perdu. Délai de traitement -40%. Satisfaction client en hausse mesurable.",
        },
      ]}
      features={[
        { icon: "📊", name: "Dashboards exécutifs",          desc: "KPIs temps réel pour la direction" },
        { icon: "🏭", name: "Interfaces opérationnelles",    desc: "Terrain, entrepôt, production" },
        { icon: "👤", name: "Portail client self-service",   desc: "Commandes, factures, dossiers" },
        { icon: "📋", name: "Rapports automatisés",          desc: "Générés et distribués sans action" },
        { icon: "🔗", name: "Connecteurs multi-systèmes",    desc: "CRM, ERP, comptabilité, API" },
        { icon: "📱", name: "Design responsive total",       desc: "Desktop, tablette, mobile" },
        { icon: "🔒", name: "Gestion des droits d'accès",   desc: "Rôles et permissions par profil" },
        { icon: "🎨", name: "Charte graphique sur-mesure",  desc: "Cohérence avec votre identité" },
        { icon: "⚡", name: "Performance ultra-rapide",      desc: "< 1,5s de chargement" },
        { icon: "🔔", name: "Notifications intelligentes",  desc: "Alertes selon vos seuils définis" },
      ]}
      gains={[
        { label: "Temps de reporting direction", before: "45 min/sem", after: "2 min/sem",   delta: "-96% du temps" },
        { label: "Appels support client",        before: "50/jour",    after: "18/jour",      delta: "-65% de sollicitations" },
        { label: "Délai de décision opérationnel", before: "48h",      after: "Temps réel",   delta: "Décisions immédiates" },
        { label: "Satisfaction utilisateurs",    before: "58/100",     after: "87/100",       delta: "+50% de satisfaction" },
      ]}
      cta={{
        title: "Voyez votre activité comme vous ne l'avez jamais vue",
        subtitle: "Un prototype de votre dashboard en 5 jours. Vous validez avant que nous construisions. Zéro risque, valeur immédiate.",
      }}
      relatedSolutions={[
        { icon: "📊", title: "Data & Analytics",    href: "/solutions/data-analytics" },
        { icon: "⚙️", title: "Automatisation",       href: "/solutions/automatisation" },
        { icon: "🌐", title: "Présence digitale",    href: "/solutions/presence-seo" },
      ]}
    />
  );
}
