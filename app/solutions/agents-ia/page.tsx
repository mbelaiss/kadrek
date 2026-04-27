import { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Agents IA | Kadrek",
  description: "Des agents IA qui travaillent pour vous 24h/24 : support client, triage email, rapports automatiques, détection d'anomalies.",
};

export default function AgentsIAPage() {
  return (
    <SolutionPage
      eyebrow="Agents IA"
      title="Une IA qui travaille pendant que vous dormez"
      subtitle="Les agents IA gèrent vos tâches répétitives en temps réel — réponses clients, triage d'emails, génération de rapports, détection d'anomalies. Votre équipe se concentre sur ce qui crée vraiment de la valeur."
      heroIcon="🤖"
      accentFrom="#7c3aed"
      accentTo="#2563eb"
      bgFrom="from-purple-50"
      problem={{
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
      }}
      benefits={[
        { icon: "⚡", title: "Disponibilité 24h/24, 7j/7",       desc: "Vos agents IA ne dorment pas. Ils répondent aux clients, traitent les données et surveillent vos systèmes sans interruption." },
        { icon: "🎯", title: "80% des requêtes résolues auto",    desc: "Quatre requêtes sur cinq sont traitées sans intervention humaine. Votre équipe ne gère que les cas complexes." },
        { icon: "📉", title: "Réduction des coûts de support",   desc: "Moins de personnel dédié aux tâches répétitives. Les agents IA gèrent le volume sans que les coûts n'explosent." },
        { icon: "🧠", title: "Apprentissage continu",             desc: "Plus l'agent traite de cas, plus il devient précis. Le système s'améliore automatiquement avec l'usage." },
        { icon: "🔒", title: "Détection d'anomalies proactive",  desc: "L'IA surveille vos données en continu et vous alerte avant qu'un problème ne devienne une crise." },
        { icon: "📊", title: "Rapports sans effort",             desc: "Chaque rapport est généré, formaté et distribué automatiquement. Zéro intervention manuelle requise." },
      ]}
      useCases={[
        {
          icon: "💬",
          scenario: "E-commerce — Support client automatisé",
          challenge: "4 agents support pour 800 tickets/jour. Temps de réponse moyen : 6 heures. Satisfaction client en chute.",
          solution: "Agent IA connecté à la base de connaissance et au système de commandes. Répond aux questions de suivi, retours et livraisons.",
          result: "80% des tickets résolus en < 30 secondes. Agents libérés pour les cas complexes. NPS +24 points.",
        },
        {
          icon: "📧",
          scenario: "PME — Triage et réponse email",
          challenge: "Directeur reçoit 180 emails/jour. 60% ne nécessitent qu'une réponse standard. 3h perdues chaque matin.",
          solution: "Agent IA lit, catégorise et rédige les réponses aux emails courants. Signale uniquement ceux nécessitant une décision.",
          result: "3h économisées chaque jour. Taux de réponse dans l'heure passé de 20% à 95%.",
        },
        {
          icon: "🏦",
          scenario: "Finance — Détection de fraude et anomalies",
          challenge: "Équipe comptable détecte les anomalies lors des clôtures mensuelles. Trop tard pour corriger sans impact.",
          solution: "Agent IA surveille toutes les transactions en temps réel. Alerte immédiate si un écart sort des patterns habituels.",
          result: "3 fraudes détectées en 6 mois. 45k€ préservés. Aucune anomalie passée inaperçue.",
        },
        {
          icon: "📋",
          scenario: "Direction — Rapports automatiques",
          challenge: "Responsable data passe 8h par semaine à compiler des rapports depuis 6 sources différentes.",
          solution: "Agent IA collecte, nettoie et formate les données de toutes les sources. Rapport envoyé automatiquement chaque lundi 8h.",
          result: "8h économisées / semaine. Données plus fraîches, plus fiables. Zéro erreur de compilation.",
        },
      ]}
      features={[
        { icon: "💬", name: "Chatbot IA multicanal",          desc: "Web, WhatsApp, email, app mobile" },
        { icon: "📧", name: "Triage et réponse email",        desc: "Catégorisation + brouillons automatiques" },
        { icon: "📊", name: "Génération de rapports",         desc: "Planifiés, formatés, distribués auto" },
        { icon: "🔔", name: "Alertes et anomalies",          desc: "Surveillance continue de vos données" },
        { icon: "🗓️", name: "Planification intelligente",     desc: "Gestion d'agendas et de ressources" },
        { icon: "📦", name: "Traitement des commandes",       desc: "Saisie et mise à jour automatiques" },
        { icon: "🧠", name: "Apprentissage continu",         desc: "Le modèle s'améliore avec l'usage" },
        { icon: "🔗", name: "Intégration CRM/ERP",           desc: "Accès aux données métier en temps réel" },
        { icon: "🌐", name: "Support multilingue",            desc: "Français, anglais, arabe et plus" },
        { icon: "📈", name: "Analytics de performance",      desc: "Taux de résolution, satisfaction, temps" },
      ]}
      gains={[
        { label: "Tickets résolus auto",  before: "10%",      after: "80%",       delta: "+700% d'autonomie" },
        { label: "Temps de réponse",      before: "6 heures", after: "< 30 sec",  delta: "720× plus rapide" },
        { label: "Coût par interaction",  before: "8,50 €",   after: "0,12 €",    delta: "-99% du coût" },
        { label: "Heures admin récupérées", before: "0h",     after: "15h/sem",   delta: "Par employé" },
      ]}
      cta={{
        title: "Déployez votre premier agent IA en 2 semaines",
        subtitle: "On identifie les tâches à plus fort volume dans votre activité et on déploie un agent IA opérationnel en 10 à 14 jours.",
      }}
      relatedSolutions={[
        { icon: "📊", title: "Data & Analytics",        href: "/solutions/data-analytics" },
        { icon: "⚙️", title: "Automatisation",           href: "/solutions/automatisation" },
        { icon: "🎓", title: "Formation IA",             href: "/solutions/formation-ia" },
      ]}
    />
  );
}
