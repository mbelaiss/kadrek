import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Services | Kadrek",
  description: "Data, IA, automatisation, présence digitale, formation et dashboards. Découvrez toutes les solutions Kadrek.",
};

const services = [
  {
    id: "data",
    icon: "📊",
    eyebrow: "01 · Data & Analytics",
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
    accent: "blue",
    gradient: "from-blue-600 to-blue-400",
    bg: "from-blue-50/60 to-slate-50",
  },
  {
    id: "ia",
    icon: "🤖",
    eyebrow: "02 · Agents IA",
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
    accent: "purple",
    gradient: "from-purple-600 to-blue-500",
    bg: "from-purple-50/60 to-slate-50",
  },
  {
    id: "automatisation",
    icon: "⚙️",
    eyebrow: "03 · Automatisation",
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
    accent: "cyan",
    gradient: "from-cyan-500 to-blue-600",
    bg: "from-cyan-50/60 to-slate-50",
  },
  {
    id: "presence",
    icon: "🌐",
    eyebrow: "04 · Présence Digitale",
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
    accent: "blue",
    gradient: "from-blue-500 to-cyan-400",
    bg: "from-blue-50/40 to-slate-50",
  },
  {
    id: "formation",
    icon: "🎓",
    eyebrow: "05 · Formation IA",
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
    accent: "purple",
    gradient: "from-purple-500 to-pink-400",
    bg: "from-purple-50/40 to-slate-50",
  },
  {
    id: "dashboards",
    icon: "💻",
    eyebrow: "06 · Dashboards & Interfaces",
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
    accent: "cyan",
    gradient: "from-cyan-400 to-blue-600",
    bg: "from-cyan-50/40 to-slate-50",
  },
];

const accentClasses: Record<string, { badge: string; icon: string; check: string }> = {
  blue:   { badge: "bg-blue-50 border-blue-100 text-blue-600",     icon: "bg-blue-100 text-blue-600",     check: "text-blue-500"   },
  purple: { badge: "bg-purple-50 border-purple-100 text-purple-600", icon: "bg-purple-100 text-purple-600", check: "text-purple-500" },
  cyan:   { badge: "bg-cyan-50 border-cyan-100 text-cyan-600",     icon: "bg-cyan-100 text-cyan-600",     check: "text-cyan-500"   },
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/40 pb-20 pt-36">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-blue-600">
            Nos Solutions
          </div>
          <h1 className="mx-auto mb-5 max-w-4xl text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-6xl">
            Six expertises pour une entreprise{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              plus performante
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-500">
            Data, IA, automatisation, présence digitale, formation et interfaces sur-mesure. Chaque brique rend votre organisation plus rapide, plus intelligente et plus rentable.
          </p>
          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-slate-600 shadow-sm transition-all hover:border-blue-200 hover:text-blue-600 hover:shadow-md">
                {s.icon} {s.title.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      {services.map((s, i) => {
        const ac = accentClasses[s.accent];
        const isEven = i % 2 === 0;
        return (
          <section key={s.id} id={s.id}
            className={`py-24 ${isEven ? "bg-white" : "bg-slate-50"}`}>
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
              <div className={`grid items-center gap-12 lg:grid-cols-2 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                style={{ direction: !isEven ? "rtl" : "ltr" }}>
                <div style={{ direction: "ltr" }}>
                  <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-black uppercase tracking-widest ${ac.badge}`}>
                    {s.eyebrow}
                  </div>
                  <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mb-7 text-lg leading-relaxed text-slate-500">{s.desc}</p>
                  <ul className="mb-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-none ${ac.check}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${s.gradient} px-7 py-3.5 text-[14px] font-black text-white shadow-[0_4px_20px_rgba(37,99,235,.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,.35)]`}>
                    Discuter de mon projet <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Visual card */}
                <div style={{ direction: "ltr" }}
                  className={`rounded-3xl bg-gradient-to-br ${s.bg} border border-slate-100 p-8 shadow-sm`}>
                  <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-4xl ${ac.icon}`}>
                    {s.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-black text-slate-800">{s.title.split(" ").slice(0, 4).join(" ")}</h3>
                  <ul className="space-y-3">
                    {s.benefits.slice(0, 4).map((b) => (
                      <li key={b} className="flex items-center gap-3 rounded-xl border border-white/70 bg-white px-4 py-3 text-[13px] font-semibold text-slate-700 shadow-sm">
                        <CheckCircle2 className={`h-4 w-4 flex-none ${ac.check}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-xl bg-white/70 p-3 text-center text-[12px] font-bold text-slate-500 border border-white">
                    + {s.benefits.length - 4} autres fonctionnalités incluses
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <h2 className="mb-5 text-4xl font-black text-white lg:text-5xl">Quelle solution vous correspond ?</h2>
          <p className="mb-10 text-xl text-white/60 max-w-xl mx-auto">
            En 45 minutes, on identifie exactement ce dont votre entreprise a besoin et on vous donne un plan d'action chiffré.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-10 py-4 text-[15px] font-black text-white shadow-[0_4px_24px_rgba(34,211,238,.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(34,211,238,.45)]">
            Réserver mon audit gratuit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
