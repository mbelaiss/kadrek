import { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Optimisation Digitale | Kadrek",
  description: "Audit digital, stratégie de transformation, intégration de systèmes et optimisation continue pour maximiser votre ROI digital.",
};

export default function OptimisationDigitalePage() {
  return (
    <SolutionPage
      eyebrow="Optimisation Digitale"
      title="Votre stack digital travaille contre vous sans le savoir"
      subtitle="Des outils mal intégrés, des données en silos, des workflows inefficaces — votre transformation digitale est peut-être déjà commencée, mais pas encore optimisée. On identifie les freins et on les supprime."
      heroIcon="🔧"
      accentFrom="#0f766e"
      accentTo="#2563eb"
      bgFrom="from-teal-50"
      problem={{
        title: "Beaucoup d'outils, peu d'impact réel",
        intro: "La plupart des entreprises paient pour 8 à 15 outils SaaS qui ne se parlent pas, dont 40% sont sous-utilisés. Résultat : coûts multipliés, données fragmentées, équipes frustrées par des systèmes qui compliquent au lieu de simplifier.",
        points: [
          "Multiplication des outils SaaS qui ne s'intègrent pas entre eux",
          "Données dupliquées, incohérentes ou contradictoires d'un système à l'autre",
          "Abonnements payés pour des fonctionnalités jamais utilisées",
          "Processus digitaux théoriques qui ne correspondent pas à la réalité terrain",
          "Stratégie digitale sans priorités claires ni mesure de succès définie",
          "ROI des investissements digitaux non mesuré, impossible à justifier",
        ],
      }}
      benefits={[
        { icon: "🗺️", title: "Cartographie de votre maturité digitale", desc: "Savoir exactement où vous en êtes, quels outils méritent d'être gardés, lesquels doivent être remplacés ou mieux utilisés." },
        { icon: "💰", title: "Réduction du gaspillage tech",           desc: "Identifier et supprimer les abonnements inutiles, les fonctionnalités redondantes, les processus inefficaces." },
        { icon: "🔗", title: "Intégrations qui font vraiment circuler la data", desc: "Connecter les bons outils entre eux pour que les données circulent sans perte ni ressaisie." },
        { icon: "📈", title: "Feuille de route prioritisée",           desc: "Un plan d'action clair, séquencé par impact et faisabilité. Pas de grand projet nébuleux — des étapes concrètes." },
        { icon: "📊", title: "Mesure du ROI digital",                  desc: "Des indicateurs définis pour chaque initiative. Savoir ce qui rapporte, ce qui n'apporte pas de valeur." },
        { icon: "🔄", title: "Amélioration continue systématisée",     desc: "Un processus de revue régulière pour s'assurer que vos systèmes s'améliorent avec votre croissance." },
      ]}
      useCases={[
        {
          icon: "🏢",
          scenario: "PME — Audit et rationalisation de la stack tech",
          challenge: "PME de 35 personnes avec 22 outils SaaS différents. 6 200€/mois de licences. Beaucoup de redondance.",
          solution: "Audit complet de la stack, cartographie des usages réels, recommandations de consolidation et de remplacement.",
          result: "Stack réduite à 11 outils essentiels. 2 800€/mois économisés. Équipes plus cohérentes.",
        },
        {
          icon: "🔗",
          scenario: "Groupe — Intégration de systèmes multi-entités",
          challenge: "Groupe de 3 entreprises avec 3 CRM, 2 ERP et 4 outils comptables différents. Aucune consolidation possible.",
          solution: "Architecture d'intégration centralisée. Couche data commune. Dashboards consolidés groupe.",
          result: "Vue groupe unifiée. Délai de clôture mensuelle 5j → 1j. Synergies inter-entités visibles.",
        },
        {
          icon: "📋",
          scenario: "Scale-up — Stratégie digitale et priorisation",
          challenge: "Start-up en phase de scale : 50 idées de digitalisation, aucune priorité, ressources limitées.",
          solution: "Workshop de priorisation, scoring par impact/effort, feuille de route sur 12 mois avec jalons mesurables.",
          result: "3 initiatives lancées en parallèle. ROI de chacune défini et mesuré. Équipe alignée.",
        },
        {
          icon: "⚡",
          scenario: "Industrie — Performance des systèmes existants",
          challenge: "ERP sous-utilisé à 20% de ses capacités. Équipes qui contournent le système avec des Excel.",
          solution: "Audit d'utilisation, formation ciblée, personnalisation des workflows, suppression des frictions.",
          result: "Taux d'utilisation ERP 20% → 78%. Abandon des Excel parallèles. Données fiables enfin.",
        },
      ]}
      features={[
        { icon: "🔍", name: "Audit digital 360°",              desc: "Maturité, stack, processus, ROI" },
        { icon: "🗺️", name: "Cartographie des systèmes",       desc: "Flux de données et intégrations" },
        { icon: "📋", name: "Roadmap digitale prioritisée",    desc: "12 mois, séquencée par impact" },
        { icon: "🔗", name: "Architecture d'intégration",      desc: "Connecteurs et couche data centrale" },
        { icon: "💰", name: "Analyse ROI par initiative",      desc: "Chiffrage et projection de valeur" },
        { icon: "⚡", name: "Optimisation des outils existants", desc: "Mieux utiliser ce que vous payez" },
        { icon: "📊", name: "Indicateurs de maturité",         desc: "Score et benchmarks sectoriels" },
        { icon: "🔄", name: "Processus de revue continue",    desc: "Revues trimestrielles de performance" },
        { icon: "👥", name: "Accompagnement au changement",   desc: "Adoption et conduite du changement" },
        { icon: "📈", name: "Tableau de bord de transformation", desc: "Suivi de l'avancement en temps réel" },
      ]}
      gains={[
        { label: "Coût de la stack SaaS",      before: "6 200€/mois", after: "3 400€/mois", delta: "-45% de licences" },
        { label: "Utilisation des outils",     before: "22%",         after: "74%",          delta: "×3,4 d'utilisation" },
        { label: "Cohérence des données",      before: "Fragmentée",  after: "Unifiée",      delta: "Source de vérité unique" },
        { label: "ROI digital mesuré",         before: "Inconnu",     after: "Tracé à 100%", delta: "Décisions éclairées" },
      ]}
      cta={{
        title: "Votre transformation digitale mérite d'être optimisée",
        subtitle: "Un audit de maturité digitale gratuit pour identifier vos gaspillages, vos blocages et vos meilleures opportunités — en 48 heures.",
      }}
      relatedSolutions={[
        { icon: "📊", title: "Data & Analytics",    href: "/solutions/data-analytics" },
        { icon: "⚙️", title: "Automatisation",       href: "/solutions/automatisation" },
        { icon: "💻", title: "Interfaces clients",   href: "/solutions/interfaces-clients" },
      ]}
    />
  );
}
