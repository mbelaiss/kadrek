import SolutionPage from "@/components/SolutionPage";
import type { Locale } from "@/routing";

const content = {
  fr: {
    meta: { title: "Formation IA pour Équipes | Kadrek", description: "Formez vos équipes à travailler avec l'IA. Adoption rapide, productivité augmentée, résultats durables." },
    eyebrow: "Formation IA",
    title: "L'IA ne remplace pas vos équipes — elle les rend 10× plus efficaces",
    subtitle: "La technologie la plus puissante ne sert à rien si personne ne sait l'utiliser. On forme vos collaborateurs à intégrer l'IA dans leur quotidien — par rôle, sur vos vrais outils, avec des résultats mesurables dès la première semaine.",
    problem: {
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
    },
    benefits: [
      { icon: "🚀", title: "Productivité augmentée dès J+7", desc: "Des équipes formées correctement gagnent 2 à 4 heures par semaine dès la première semaine d'utilisation active." },
      { icon: "🤝", title: "Adoption sans friction", desc: "Une formation pratique et rassurante supprime la résistance au changement. Les outils sont adoptés, pas subis." },
      { icon: "🎯", title: "Formation par rôle et métier", desc: "Commerciaux, RH, finance, opérations — chaque équipe apprend ce qui est directement utile à son poste." },
      { icon: "📊", title: "ROI sur vos investissements IA", desc: "Chaque outil IA déjà payé commence à délivrer sa vraie valeur quand les équipes savent l'exploiter." },
      { icon: "🔒", title: "Utilisation responsable", desc: "Formation aux bonnes pratiques : confidentialité des données, limites de l'IA, validation humaine obligatoire." },
      { icon: "🌱", title: "Culture d'amélioration continue", desc: "Des champions internes formés pour propager les bonnes pratiques et accélérer l'adoption dans le temps." },
    ],
    useCases: [
      { icon: "💼", scenario: "Équipe commerciale — IA pour la prospection", challenge: "8 commerciaux perdent 3h/jour à rédiger des emails de prospection personnalisés. Taux de réponse faible.", solution: "Formation à l'utilisation de l'IA générative pour la prospection. Prompts sur-mesure par secteur cible.", result: "3h récupérées/jour par commercial. Volume de prospection ×3. Taux de réponse +28%." },
      { icon: "👥", scenario: "Équipe RH — IA pour le recrutement", challenge: "Chargée RH passe 5h à trier 200 CVs pour chaque poste. Risque de biais, manque de cohérence.", solution: "Formation à l'utilisation de l'IA pour le tri initial, la rédaction de fiches de poste et les entretiens structurés.", result: "5h → 45min par recrutement. Grille d'évaluation standardisée. Qualité des recrutements améliorée." },
      { icon: "📊", scenario: "Équipe finance — IA pour l'analyse", challenge: "Analyste financier passe 6h à préparer les présentations budget. Données dispersées, mises en forme chronophages.", solution: "Formation à l'utilisation de l'IA pour l'analyse de données, la génération de visualisations et la rédaction de synthèses.", result: "6h → 1h30. Présentations de meilleure qualité. Focus sur l'interprétation, pas la mise en forme." },
      { icon: "🏭", scenario: "Managers — IA pour le reporting", challenge: "Managers passent 4h/semaine à écrire des comptes rendus, plannings et reportings. Tâche perçue comme ingrate.", solution: "Atelier pratique : utiliser l'IA pour structurer, rédiger et mettre en forme tous les documents managériaux.", result: "4h → 40min. Managers plus disponibles pour leurs équipes. Qualité des livrables améliorée." },
    ],
    features: [
      { icon: "🎯", name: "Diagnostic des compétences", desc: "Évaluation par rôle avant la formation" },
      { icon: "🏫", name: "Ateliers pratiques sur-mesure", desc: "Sur vos vrais outils, vos vrais cas" },
      { icon: "📚", name: "Bibliothèque de prompts métier", desc: "Prompts testés et validés par secteur" },
      { icon: "🏆", name: "Programme Champions internes", desc: "Formation d'ambassadeurs IA" },
      { icon: "📊", name: "Suivi de l'adoption", desc: "Indicateurs de maîtrise mesurés" },
      { icon: "🔒", name: "Module bonnes pratiques IA", desc: "Éthique, confidentialité, limites" },
      { icon: "🎬", name: "Tutoriels vidéo sur-mesure", desc: "Accessibles à tout moment" },
      { icon: "💬", name: "Support Slack/Teams dédié", desc: "Questions répondues en < 2h" },
      { icon: "🔄", name: "Mise à jour continue", desc: "Nouveaux outils et prompts chaque mois" },
      { icon: "📜", name: "Attestation de formation", desc: "Reconnue et documentée" },
    ],
    gains: [
      { label: "Heures récupérées", before: "0h", after: "8h/sem/personne", delta: "Par employé formé" },
      { label: "Taux d'adoption IA", before: "15%", after: "85%", delta: "+467% d'utilisation" },
      { label: "Satisfaction équipes", before: "62/100", after: "84/100", delta: "+35% de satisfaction" },
      { label: "Délai de montée en compétence", before: "6 mois", after: "3 semaines", delta: "8× plus rapide" },
    ],
    cta: { title: "Donnez à vos équipes le superpouvoir de l'IA", subtitle: "Un programme de formation complet, adapté à vos rôles, vos outils et vos objectifs — avec des résultats mesurables dès la première semaine." },
    relatedSolutions: [
      { icon: "🤖", title: "Solutions IA", href: "/solutions/agents-ia" },
      { icon: "⚙️", title: "Automatisation", href: "/solutions/automatisation" },
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
    ],
  },
  en: {
    meta: { title: "AI Training for Teams | Kadrek", description: "Train your teams to work with AI. Fast adoption, increased productivity, lasting results." },
    eyebrow: "AI Training",
    title: "AI doesn't replace your teams — it makes them 10× more effective",
    subtitle: "The most powerful technology is useless if nobody knows how to use it. We train your staff to integrate AI into their daily work — by role, on your real tools, with measurable results from the first week.",
    problem: {
      title: "The AI you bought isn't the AI being used",
      intro: "Companies invest in AI tools and discover 6 months later that 80% of their teams aren't using them — out of fear, lack of training, or tools not matched to real needs.",
      points: [
        "AI tools purchased but under-used: negative ROI on the investment",
        "Resistance to change: fear of AI, lack of team confidence",
        "Generic training disconnected from real tools and business use cases",
        "No adoption tracking — impossible to know if training had any effect",
        "Untrained managers: unable to guide their teams on AI",
        "Risk of irresponsible AI use without training in best practices",
      ],
    },
    benefits: [
      { icon: "🚀", title: "Productivity gains from day 7", desc: "Properly trained teams gain 2–4 hours per week from their first week of active use." },
      { icon: "🤝", title: "Friction-free adoption", desc: "Practical, reassuring training removes resistance to change. Tools are adopted, not endured." },
      { icon: "🎯", title: "Training by role and function", desc: "Sales, HR, finance, operations — every team learns what is directly useful to their job." },
      { icon: "📊", title: "ROI on your AI investments", desc: "Every AI tool you've already paid for starts delivering its real value when teams know how to use it." },
      { icon: "🔒", title: "Responsible use", desc: "Training in best practices: data confidentiality, AI limitations, mandatory human validation." },
      { icon: "🌱", title: "Culture of continuous improvement", desc: "Internal champions trained to spread best practices and accelerate adoption over time." },
    ],
    useCases: [
      { icon: "💼", scenario: "Sales team — AI for prospecting", challenge: "8 salespeople losing 3 hours/day writing personalised prospecting emails. Low response rate.", solution: "Training in generative AI for prospecting. Custom prompts by target sector.", result: "3 hours recovered/day per salesperson. Prospecting volume ×3. Response rate +28%." },
      { icon: "👥", scenario: "HR team — AI for recruitment", challenge: "HR officer spends 5 hours sorting 200 CVs per role. Risk of bias, lack of consistency.", solution: "Training in using AI for initial screening, writing job descriptions and structured interviews.", result: "5h → 45 min per hire. Standardised evaluation grid. Improved recruitment quality." },
      { icon: "📊", scenario: "Finance team — AI for analysis", challenge: "Financial analyst spends 6 hours preparing budget presentations. Data scattered, formatting time-consuming.", solution: "Training in using AI for data analysis, generating visualisations and writing summaries.", result: "6h → 1.5h. Higher-quality presentations. Focus on interpretation, not formatting." },
      { icon: "🏭", scenario: "Managers — AI for reporting", challenge: "Managers spend 4 hours/week writing minutes, schedules and reports. Seen as thankless work.", solution: "Practical workshop: using AI to structure, write and format all management documents.", result: "4h → 40 min. Managers more available for their teams. Deliverable quality improved." },
    ],
    features: [
      { icon: "🎯", name: "Skills diagnostic", desc: "Role-by-role assessment before training" },
      { icon: "🏫", name: "Custom practical workshops", desc: "On your real tools, your real cases" },
      { icon: "📚", name: "Business prompt library", desc: "Tested and validated prompts by sector" },
      { icon: "🏆", name: "Internal champions programme", desc: "Training AI ambassadors" },
      { icon: "📊", name: "Adoption tracking", desc: "Measured proficiency indicators" },
      { icon: "🔒", name: "AI best-practice module", desc: "Ethics, confidentiality, limitations" },
      { icon: "🎬", name: "Custom video tutorials", desc: "Available at any time" },
      { icon: "💬", name: "Dedicated Slack/Teams support", desc: "Questions answered in < 2h" },
      { icon: "🔄", name: "Continuous updates", desc: "New tools and prompts every month" },
      { icon: "📜", name: "Training certificate", desc: "Recognised and documented" },
    ],
    gains: [
      { label: "Hours recovered", before: "0h", after: "8h/week/person", delta: "Per trained employee" },
      { label: "AI adoption rate", before: "15%", after: "85%", delta: "+467% usage" },
      { label: "Team satisfaction", before: "62/100", after: "84/100", delta: "+35% satisfaction" },
      { label: "Time to proficiency", before: "6 months", after: "3 weeks", delta: "8× faster" },
    ],
    cta: { title: "Give your teams the superpower of AI", subtitle: "A complete training programme, tailored to your roles, tools and goals — with measurable results from the first week." },
    relatedSolutions: [
      { icon: "🤖", title: "AI Solutions", href: "/solutions/agents-ia" },
      { icon: "⚙️", title: "Automation", href: "/solutions/automatisation" },
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (content[(locale as Locale)] ?? content.fr).meta;
}

export default async function FormationIAPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;
  return (
    <SolutionPage
      eyebrow={c.eyebrow}
      title={c.title}
      subtitle={c.subtitle}
      heroIcon="🎓"
      accentFrom="#7c3aed"
      accentTo="#ec4899"
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
