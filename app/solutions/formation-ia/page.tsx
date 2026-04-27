import { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Formation IA pour Équipes | Kadrek",
  description: "Formez vos équipes à travailler avec l'IA. Adoption rapide, productivité augmentée, résultats durables.",
};

export default function FormationIAPage() {
  return (
    <SolutionPage
      eyebrow="Formation IA"
      title="L'IA ne remplace pas vos équipes — elle les rend 10× plus efficaces"
      subtitle="La technologie la plus puissante ne sert à rien si personne ne sait l'utiliser. On forme vos collaborateurs à intégrer l'IA dans leur quotidien — par rôle, sur vos vrais outils, avec des résultats mesurables dès la première semaine."
      heroIcon="🎓"
      accentFrom="#7c3aed"
      accentTo="#ec4899"
      bgFrom="from-purple-50"
      problem={{
        title: "L'IA achetée n'est pas l'IA utilisée",
        intro: "Des entreprises investissent dans des outils IA et constatent 6 mois plus tard que 80% des équipes ne les utilisent pas — par peur, manque de formation, ou outils mal adaptés aux vrais besoins.",
        points: [
          "Outils IA achetés mais sous-utilisés : ROI négatif sur l'investissement",
          "Résistance au changement : peur de l'IA, manque de confiance des équipes",
          "Formation générique déconnectée des vrais outils et cas d'usage métier",
          "Pas de suivi de l'adoption — on ne sait pas si la formation a eu un effet",
          "Managers non formés : impossible de guider leur équipe sur l'IA",
          "Risque d'usage irresponsable de l'IA sans formation aux bonnes pratiques",
        ],
      }}
      benefits={[
        { icon: "🚀", title: "Productivité augmentée dès J+7", desc: "Des équipes formées correctement gagnent 2 à 4 heures par semaine dès la première semaine d'utilisation active." },
        { icon: "🤝", title: "Adoption sans friction",         desc: "Une formation pratique et rassurante supprime la résistance au changement. Les outils sont adoptés, pas subis." },
        { icon: "🎯", title: "Formation par rôle et métier",  desc: "Commerciaux, RH, finance, opérations — chaque équipe apprend ce qui est directement utile à son poste." },
        { icon: "📊", title: "ROI sur vos investissements IA", desc: "Chaque outil IA déjà payé commence à délivrer sa vraie valeur quand les équipes savent l'exploiter." },
        { icon: "🔒", title: "Utilisation responsable",        desc: "Formation aux bonnes pratiques : confidentialité des données, limites de l'IA, validation humaine obligatoire." },
        { icon: "🌱", title: "Culture d'amélioration continue", desc: "Des champions internes formés pour propager les bonnes pratiques et accélérer l'adoption dans le temps." },
      ]}
      useCases={[
        {
          icon: "💼",
          scenario: "Équipe commerciale — IA pour la prospection",
          challenge: "8 commerciaux perdent 3h/jour à rédiger des emails de prospection personnalisés. Taux de réponse faible.",
          solution: "Formation à l'utilisation de l'IA générative pour la prospection. Prompts sur-mesure par secteur cible.",
          result: "3h récupérées/jour par commercial. Volume de prospection ×3. Taux de réponse +28%.",
        },
        {
          icon: "👥",
          scenario: "Équipe RH — IA pour le recrutement",
          challenge: "Chargée RH passe 5h à trier 200 CVs pour chaque poste. Risque de biais, manque de cohérence.",
          solution: "Formation à l'utilisation de l'IA pour le tri initial, la rédaction de fiches de poste et les entretiens structurés.",
          result: "5h → 45min par recrutement. Grille d'évaluation standardisée. Qualité des recrutements améliorée.",
        },
        {
          icon: "📊",
          scenario: "Équipe finance — IA pour l'analyse",
          challenge: "Analyste financier passe 6h à préparer les présentations budget. Données dispersées, mises en forme chronophages.",
          solution: "Formation à l'utilisation de l'IA pour l'analyse de données, la génération de visualisations et la rédaction de synthèses.",
          result: "6h → 1h30. Présentations de meilleure qualité. Focus sur l'interprétation, pas la mise en forme.",
        },
        {
          icon: "🏭",
          scenario: "Managers — IA pour le reporting",
          challenge: "Managers passent 4h/semaine à écrire des comptes rendus, plannings et reportings. Tâche perçue comme ingrate.",
          solution: "Atelier pratique : utiliser l'IA pour structurer, rédiger et mettre en forme tous les documents managériaux.",
          result: "4h → 40min. Managers plus disponibles pour leurs équipes. Qualité des livrables améliorée.",
        },
      ]}
      features={[
        { icon: "🎯", name: "Diagnostic des compétences",     desc: "Évaluation par rôle avant la formation" },
        { icon: "🏫", name: "Ateliers pratiques sur-mesure",  desc: "Sur vos vrais outils, vos vrais cas" },
        { icon: "📚", name: "Bibliothèque de prompts métier", desc: "Prompts testés et validés par secteur" },
        { icon: "🏆", name: "Programme Champions internes",   desc: "Formation d'ambassadeurs IA" },
        { icon: "📊", name: "Suivi de l'adoption",            desc: "Indicateurs de maîtrise mesurés" },
        { icon: "🔒", name: "Module bonnes pratiques IA",     desc: "Éthique, confidentialité, limites" },
        { icon: "🎬", name: "Tutoriels vidéo sur-mesure",    desc: "Accessibles à tout moment" },
        { icon: "💬", name: "Support Slack/Teams dédié",     desc: "Questions répondues en < 2h" },
        { icon: "🔄", name: "Mise à jour continue",          desc: "Nouveaux outils et prompts chaque mois" },
        { icon: "📜", name: "Attestation de formation",      desc: "Reconnue et documentée" },
      ]}
      gains={[
        { label: "Heures récupérées",      before: "0h",         after: "8h/sem/personne", delta: "Par employé formé" },
        { label: "Taux d'adoption IA",     before: "15%",        after: "85%",             delta: "+467% d'utilisation" },
        { label: "Satisfaction équipes",   before: "62/100",     after: "84/100",          delta: "+35% de satisfaction" },
        { label: "Délai de montée en compétence", before: "6 mois", after: "3 semaines",  delta: "8× plus rapide" },
      ]}
      cta={{
        title: "Donnez à vos équipes le superpouvoir de l'IA",
        subtitle: "Un programme de formation complet, adapté à vos rôles, vos outils et vos objectifs — avec des résultats mesurables dès la première semaine.",
      }}
      relatedSolutions={[
        { icon: "🤖", title: "Agents IA",           href: "/solutions/agents-ia" },
        { icon: "⚙️", title: "Automatisation",       href: "/solutions/automatisation" },
        { icon: "📊", title: "Data & Analytics",     href: "/solutions/data-analytics" },
      ]}
    />
  );
}
