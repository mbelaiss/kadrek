import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import SquareButton from "@/components/SquareButton";

export const metadata: Metadata = {
  title: "Nos Services | Kadrek",
  description: "Data, IA, automatisation, présence digitale, formation et dashboards. Découvrez toutes les solutions Kadrek.",
};

const services = [
  {
    id: "data",
    num: "01",
    eyebrow: "Data & Analytics",
    title: "Transformez vos données en avantage concurrentiel",
    desc: "Chaque vente, chaque commande, chaque interaction génère de la data. Les entreprises qui l'exploitent croissent 2 à 3× plus vite. On vous aide à la collecter, la structurer et l'utiliser pour décider mieux et plus vite.",
    benefits: [
      "Dashboards temps réel connectés à tous vos outils",
      "KPIs sur-mesure pour chaque niveau de l'organisation",
      "Alertes automatiques sur les indicateurs critiques",
      "Rapports hebdomadaires / mensuels générés automatiquement",
      "Identification des clients les plus rentables",
      "Détection des coûts cachés et des inefficacités",
    ],
    accent: "#2563eb",
    href: "/solutions/data-analytics",
  },
  {
    id: "ia",
    num: "02",
    eyebrow: "Agents IA",
    title: "Une IA qui travaille pour vous 24h/24, 7j/7",
    desc: "Les agents IA gèrent les tâches répétitives à votre place : répondre aux clients, trier les emails, générer des rapports, détecter les anomalies. Vos équipes se concentrent sur ce qui crée vraiment de la valeur.",
    benefits: [
      "Chatbot IA — 80% des requêtes résolues instantanément",
      "Triage automatique des emails avec réponses suggérées",
      "Génération de rapports en quelques secondes",
      "Détection d'anomalies en temps réel (fraude, ruptures)",
      "Planification intelligente des réunions et ressources",
      "Traitement des commandes et mises à jour de stock auto",
    ],
    accent: "#7c3aed",
    href: "/solutions/agents-ia",
  },
  {
    id: "automatisation",
    num: "03",
    eyebrow: "Automatisation",
    title: "Supprimez les tâches répétitives une bonne fois pour toutes",
    desc: "Facturation, onboarding, commandes, relances, conformité — chaque processus manuel est un coût caché. On les automatise pour que votre équipe arrête de faire ce que les machines font mieux.",
    benefits: [
      "Facturation et relances clients automatiques",
      "Onboarding employés — contrat, accès, formation planifiés",
      "Gestion des commandes et supply chain automatisée",
      "Campagnes email et marketing en workflow",
      "Rapports de conformité générés automatiquement",
      "Alertes et escalades selon des seuils définis",
    ],
    accent: "#0891b2",
    href: "/solutions/automatisation",
  },
  {
    id: "presence",
    num: "04",
    eyebrow: "Présence Digitale",
    title: "Soyez trouvé, choisi, et mémorable en ligne",
    desc: "97% des acheteurs cherchent en ligne avant d'acheter. Votre présence digitale est votre commercial le plus disponible — et il doit être au niveau. Site rapide, SEO solide, réputation gérée.",
    benefits: [
      "Site web haute performance (100 Lighthouse, mobile-first)",
      "SEO technique et éditorial — apparaître avant vos concurrents",
      "Gestion de la réputation et des avis en ligne",
      "Campagnes email marketing avec ROI tracé",
      "Stratégie réseaux sociaux et contenu",
      "Analytics : savoir exactement ce qui convertit",
    ],
    accent: "#2563eb",
    href: "/solutions/presence-seo",
  },
  {
    id: "formation",
    num: "05",
    eyebrow: "Formation IA",
    title: "Votre équipe, augmentée par l'intelligence artificielle",
    desc: "La technologie la plus puissante ne sert à rien si votre équipe ne l'utilise pas. On forme vos collaborateurs à travailler avec l'IA — pratiquement, par rôle, sur vos vrais outils.",
    benefits: [
      "Diagnostic des compétences et des lacunes par poste",
      "Formation pratique sur vos outils réels",
      "Ateliers Humain + IA : déléguer sans perdre le contrôle",
      "Champions internes — relais pour l'adoption continue",
      "Tutoriels et documentation adaptés à chaque équipe",
      "Suivi de l'adoption avec indicateurs mesurables",
    ],
    accent: "#7c3aed",
    href: "/solutions/formation-ia",
  },
  {
    id: "dashboards",
    num: "06",
    eyebrow: "Dashboards & Interfaces",
    title: "Toute votre activité sur un seul écran",
    desc: "Un dashboard bien conçu vous fait gagner 30 minutes par matin. On conçoit des interfaces métier sur-mesure — simples, rapides, connectées à vos systèmes — pour que vous et vos équipes agissent, pas cherchez.",
    benefits: [
      "Dashboards exécutifs — revenus, marges, clients en temps réel",
      "Interfaces opérationnelles pour les équipes terrain",
      "Portail client — suivi des commandes, factures, tickets",
      "Rapports automatisés envoyés aux bons destinataires",
      "Connexion à tous vos outils (CRM, ERP, comptabilité)",
      "Design responsive — desktop, tablette, mobile",
    ],
    accent: "#0891b2",
    href: "/solutions/interfaces-clients",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pb-24 pt-36 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              Nos Solutions
            </div>
            <h1 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[64px]">
              Six expertises pour une entreprise plus performante
            </h1>
            <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-500">
              Data, IA, automatisation, présence digitale, formation et interfaces sur-mesure. Chaque brique rend votre organisation plus rapide, plus intelligente et plus rentable.
            </p>
            {/* Quick nav */}
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <a key={s.id} href={`#${s.id}`}
                  className="border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-slate-600 transition-all hover:border-slate-400 hover:text-slate-900">
                  {s.num} · {s.eyebrow}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      {services.map((s, i) => {
        const isEven = i % 2 === 0;
        return (
          <section key={s.id} id={s.id} className={`py-24 ${isEven ? "bg-white" : "bg-slate-50"}`}>
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
              <div className={`grid items-start gap-16 lg:grid-cols-2`}>

                {/* Content */}
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="mb-5 inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white"
                    style={{ background: s.accent }}>
                    {s.num} · {s.eyebrow}
                  </div>
                  <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[44px]">
                    {s.title}
                  </h2>
                  <p className="mb-7 text-lg leading-relaxed text-slate-500">{s.desc}</p>
                  <ul className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" style={{ color: s.accent }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <SquareButton href="/contact" accent={s.accent}>Discuter de mon projet</SquareButton>
                </div>

                {/* Visual card */}
                <div className={`border border-slate-200 bg-white ${isEven ? "" : "lg:order-1"}`}>
                  <div className="border-b border-slate-100 px-6 py-4" style={{ borderLeftWidth: 4, borderLeftColor: s.accent }}>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1">{s.eyebrow}</div>
                    <div className="text-[13px] font-black text-slate-700">{s.title.split(" ").slice(0, 5).join(" ")}</div>
                  </div>
                  <ul className="divide-y divide-slate-100">
                    {s.benefits.slice(0, 5).map((b) => (
                      <li key={b} className="flex items-center gap-4 px-6 py-3.5">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center text-[10px] font-black text-white"
                          style={{ background: s.accent }}>
                          ✓
                        </span>
                        <span className="text-[13px] font-semibold text-slate-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-slate-100 px-6 py-3 text-[12px] font-semibold text-slate-400">
                    + {s.benefits.length - 5} fonctionnalités supplémentaires
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">Prochaine étape</div>
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[50px]">Quelle solution vous correspond ?</h2>
              <p className="text-lg text-white/50">En 45 minutes, on identifie exactement ce dont votre entreprise a besoin et on vous donne un plan d'action chiffré.</p>
            </div>
            <SquareButton href="/contact" accent="#2563eb">Réserver mon audit gratuit</SquareButton>
          </div>
        </div>
      </section>

    </div>
  );
}
