import { Metadata } from "next";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import PlatformSlider from "@/components/PlatformSlider";
import SquareButton from "@/components/SquareButton";
import { Link } from "@/navigation";
import type { Locale } from "@/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en"
    ? { title: "Kadrek | Digital Growth, Automation & AI", description: "Kadrek transforms businesses through data, AI and automation. Measurable results in 90 days." }
    : { title: "Kadrek | Croissance Digitale, Automatisation & IA", description: "Kadrek transforme les entreprises grâce à la data, l'IA et l'automatisation. Résultats concrets en 90 jours." };
}

const content = {
  fr: {
    stats: [
      { value: "40%",  label: "d'économies opérationnelles mesurées" },
      { value: "15h",  label: "récupérées par collaborateur, par semaine" },
      { value: "3,5×", label: "retour sur investissement, en moyenne" },
      { value: "90j",  label: "pour des résultats mesurables" },
    ],
    services: [
      { title: "Data & Analytics",        href: "/solutions/data-analytics",     desc: "Dashboards temps réel, KPI clairs, décisions basées sur des faits.", color: "#2563eb" },
      { title: "Solutions IA",             href: "/solutions/agents-ia",          desc: "Solutions intelligentes qui amplifient les capacités de vos équipes, en continu.", color: "#7c3aed" },
      { title: "Automatisation",          href: "/solutions/automatisation",     desc: "Opérations structurées. Facturation, stocks et onboarding automatisés.", color: "#0891b2" },
      { title: "Présence & SEO",          href: "/solutions/presence-seo",       desc: "SEO, site web haute performance, réputation en ligne.", color: "#2563eb" },
      { title: "Formation IA",            href: "/solutions/formation-ia",       desc: "Votre équipe, augmentée par l'IA. Adoption rapide, résultats durables.", color: "#7c3aed" },
      { title: "Interfaces & Dashboards", href: "/solutions/interfaces-clients", desc: "Interfaces sur-mesure. Un écran, toute votre activité.", color: "#0891b2" },
    ],
    servicesSection: {
      badge: "Solutions",
      title: "Tout ce dont votre entreprise\na besoin pour accélérer",
      subtitle: "Six domaines d'expertise, un seul objectif : rendre votre organisation plus rapide, plus intelligente et plus rentable.",
      cta: "Voir toutes nos solutions",
      linkLabel: "En savoir plus",
    },
    method: {
      badge: "Méthode Kadrek",
      title: "Simple, rapide, mesurable",
      subtitle: "Pas de projet fleuve. On livre une première valeur en 2 semaines puis on optimise.",
      steps: [
        { num: "01", title: "Diagnostic",          desc: "45 min pour cartographier vos processus, identifier les goulots et prioriser les gains rapides." },
        { num: "02", title: "Sprint de 2 semaines", desc: "On livre un premier résultat concret et mesurable — automatisation, dashboard ou agent IA." },
        { num: "03", title: "Scale & intégration",  desc: "On industrialise ce qui marche, on connecte vos outils et on forme vos équipes." },
        { num: "04", title: "Optimisation continue",desc: "Amélioration continue basée sur les données terrain. Vos systèmes s'améliorent chaque mois." },
      ],
    },
    digitalisation: {
      badge: "Comprendre la digitalisation",
      title: "Votre entreprise perd-elle de l'argent sans le savoir ?",
      text: "Les tâches manuelles, les erreurs de saisie et les données éparpillées coûtent aux PME l'équivalent de 1 à 2 postes par an.",
      points: ["Ce qu'est réellement la digitalisation", "Pourquoi agir maintenant (avant vos concurrents)", "La comparaison avant / après en chiffres"],
      ctaLabel: "Lire le guide complet",
      before: [
        ["3 200 €/mois", "admin & saisie manuelle"],
        ["12%", "taux d'erreur sur les commandes"],
        ["5 jours", "délai moyen de réponse client"],
      ],
      after: [
        ["800 €/mois", "économie nette de 2 400 €/mois"],
        ["0,3%", "taux d'erreur — quasi zéro"],
        ["Instantané", "réponse client via agent IA"],
      ],
      beforeLabel: "Avant",
      afterLabel: "Après",
    },
    problems: {
      badge: "Problèmes résolus",
      title: "Votre problème a probablement\nune solution chez nous",
      problemLabel: "Problème fréquent",
      solutionLabel: "Notre réponse",
      linkLabel: "Voir les résultats en détail",
      items: [
        { domain: "Data & Analytics", color: "#2563eb", problem: "Données éparpillées dans 5 outils, aucune vision globale, décisions prises à l'intuition.", solution: "Dashboard centralisé temps réel, KPIs automatiques, alertes sur seuils définis.", result: "Vue complète de l'activité en 30 secondes" },
        { domain: "Solutions IA", color: "#7c3aed", problem: "Support client débordé, délais de réponse trop longs, équipes mobilisées sur des demandes récurrentes.", solution: "Assistance IA qui traite les demandes courantes en temps réel, avec escalade intelligente vers vos équipes pour les cas complexes.", result: "-70% de tickets traités manuellement" },
        { domain: "Automatisation", color: "#0891b2", problem: "Facturation manuelle chronophage, relances oubliées, double saisie entre ERP et CRM.", solution: "Structuration et automatisation complète des flux : facturation, relances, synchronisation des outils.", result: "-80% de temps administratif, zéro oubli" },
        { domain: "Présence & SEO", color: "#2563eb", problem: "Invisible sur Google, site lent, concurrents mieux positionnés sur les requêtes clés.", solution: "Refonte SEO technique, contenu optimisé, profil Google Business structuré et suivi.", result: "+150% de trafic organique en 6 mois" },
        { domain: "Formation IA", color: "#7c3aed", problem: "Équipe réticente à l'IA, outils sous-exploités, adoption bloquée faute d'accompagnement.", solution: "Ateliers pratiques sur vos vrais outils et cas métier, suivi sur 90 jours.", result: "80% d'adoption active après 3 mois" },
        { domain: "Interfaces & Dashboards", color: "#0891b2", problem: "Interface interne obsolète, portail client inexistant, données inaccessibles sur mobile.", solution: "Interface sur-mesure connectée à vos systèmes, accessible partout, design intuitif.", result: "-50% de temps passé à chercher l'information" },
      ],
    },
    about: {
      badge: "À propos de Kadrek",
      title: "Belgique, Maroc — et l'Afrique en ligne de mire.",
      p1: "Kadrek est un cabinet de conseil en transformation digitale basé entre la Belgique et le Maroc. Nous accompagnons les PME dans leur développement en leur construisant les outils dont elles ont besoin — pas des solutions génériques, mais des systèmes pensés pour leur réalité.",
      p2: "Notre priorité immédiate : digitaliser les PME marocaines. Notre ambition à long terme : contribuer à faire de l'Afrique une puissance numérique mondiale.",
      cta: "Découvrir notre histoire",
      tiles: [
        { label: "Sur-mesure uniquement", accent: "#2563eb", desc: "Chaque entreprise est unique. Nous construisons ce dont elle a besoin — pas ce qu'un catalogue prédéfinit." },
        { label: "Belgique & Maroc", accent: "#7c3aed", desc: "Des projets concrets sur deux marchés. Des standards européens appliqués à la réalité africaine." },
        { label: "PME en priorité", accent: "#0891b2", desc: "Nous nous concentrons sur les entreprises de 5 à 200 personnes qui ont tout à gagner d'une bonne digitalisation." },
        { label: "Vision Afrique", accent: "#2563eb", desc: "Le Maroc est notre point de départ. L'Afrique est notre horizon. La digitalisation en est le chemin." },
      ],
    },
    cta: {
      badge: "Prochaine étape",
      title: "Prêt à passer à la vitesse supérieure ?",
      text: "Un diagnostic de 45 minutes. On identifie vos plus grandes opportunités et on vous donne un plan d'action concret.",
      features: ["Sans engagement", "Premiers résultats en 2 semaines", "Feuille de route personnalisée"],
      btn1: "Demander un diagnostic",
      btn2: "Explorer nos solutions",
    },
  },
  en: {
    stats: [
      { value: "40%",  label: "reduction in operational costs" },
      { value: "15h",  label: "recovered per team member, per week" },
      { value: "3.5×", label: "average return on investment" },
      { value: "90d",  label: "to measurable results" },
    ],
    services: [
      { title: "Data & Analytics",        href: "/solutions/data-analytics",     desc: "Real-time dashboards, clear KPIs, fact-based decisions.", color: "#2563eb" },
      { title: "AI Solutions",             href: "/solutions/agents-ia",          desc: "Intelligent solutions that extend your teams' capabilities, around the clock.", color: "#7c3aed" },
      { title: "Automation",              href: "/solutions/automatisation",     desc: "Streamlined operations. Invoicing, stock and onboarding structured and automated.", color: "#0891b2" },
      { title: "Presence & SEO",          href: "/solutions/presence-seo",       desc: "SEO, high-performance website, online reputation.", color: "#2563eb" },
      { title: "AI Training",             href: "/solutions/formation-ia",       desc: "Your team, augmented by AI. Fast adoption, lasting results.", color: "#7c3aed" },
      { title: "Interfaces & Dashboards", href: "/solutions/interfaces-clients", desc: "Custom interfaces. One screen, your entire operation.", color: "#0891b2" },
    ],
    servicesSection: {
      badge: "Solutions",
      title: "Everything your business\nneeds to accelerate",
      subtitle: "Six areas of expertise, one goal: make your organisation faster, smarter and more profitable.",
      cta: "View all our solutions",
      linkLabel: "Learn more",
    },
    method: {
      badge: "The Kadrek Method",
      title: "Simple, fast, measurable",
      subtitle: "No endless projects. We deliver first value in 2 weeks, then keep optimising.",
      steps: [
        { num: "01", title: "Diagnostic",        desc: "45 min to map your processes, identify bottlenecks and prioritise quick wins." },
        { num: "02", title: "2-week sprint",      desc: "We deliver a concrete, measurable first result — automation, dashboard or AI agent." },
        { num: "03", title: "Scale & integrate",  desc: "We industrialise what works, connect your tools and train your teams." },
        { num: "04", title: "Ongoing optimisation",desc: "Continuous improvement driven by field data. Your systems get better every month." },
      ],
    },
    digitalisation: {
      badge: "Understanding digitalisation",
      title: "Is your business losing money without knowing it?",
      text: "Manual tasks, data-entry errors and scattered data cost SMEs the equivalent of 1–2 full-time positions per year.",
      points: ["What digitalisation really means", "Why to act now (before your competitors)", "A before / after comparison in figures"],
      ctaLabel: "Read the full guide",
      before: [
        ["€3,200/mo", "admin & manual data entry"],
        ["12%", "order error rate"],
        ["5 days", "average customer response time"],
      ],
      after: [
        ["€800/mo", "net saving of €2,400/month"],
        ["0.3%", "error rate — near zero"],
        ["Instant", "customer response via AI agent"],
      ],
      beforeLabel: "Before",
      afterLabel: "After",
    },
    problems: {
      badge: "Problems solved",
      title: "Your problem probably has\na solution here",
      problemLabel: "Common problem",
      solutionLabel: "Our response",
      linkLabel: "See detailed results",
      items: [
        { domain: "Data & Analytics", color: "#2563eb", problem: "Data scattered across 5 tools, no global view, decisions made on gut feel.", solution: "Centralised real-time dashboard, automatic KPIs, alerts on defined thresholds.", result: "Complete view of activity in 30 seconds" },
        { domain: "AI Solutions", color: "#7c3aed", problem: "Overloaded support team, slow response times, staff tied up handling recurring requests.", solution: "AI assistance that handles routine requests in real time, with intelligent escalation to your team for complex cases.", result: "-70% of tickets handled manually" },
        { domain: "Automation", color: "#0891b2", problem: "Time-consuming manual invoicing, forgotten follow-ups, double data entry between ERP and CRM.", solution: "Full structuring and automation of flows: invoicing, reminders, tool synchronisation.", result: "-80% admin time, zero missed tasks" },
        { domain: "Presence & SEO", color: "#2563eb", problem: "Invisible on Google, slow site, competitors better ranked on key searches.", solution: "Technical SEO overhaul, optimised content, structured and tracked Google Business profile.", result: "+150% organic traffic in 6 months" },
        { domain: "AI Training", color: "#7c3aed", problem: "Team resistant to AI, tools under-used, adoption stalled for lack of support.", solution: "Hands-on workshops on your real tools and use cases, 90-day follow-up.", result: "80% active adoption after 3 months" },
        { domain: "Interfaces & Dashboards", color: "#0891b2", problem: "Outdated internal interface, no client portal, data inaccessible on mobile.", solution: "Custom interface connected to your systems, accessible anywhere, intuitive design.", result: "-50% time spent searching for information" },
      ],
    },
    about: {
      badge: "About Kadrek",
      title: "Belgium, Morocco — and Africa in our sights.",
      p1: "Kadrek is a digital transformation consultancy based between Belgium and Morocco. We help SMEs grow by building the tools they actually need — not generic solutions, but systems designed for their specific reality.",
      p2: "Our immediate priority: digitalise Moroccan SMEs. Our long-term ambition: contribute to making Africa a global digital powerhouse.",
      cta: "Discover our story",
      tiles: [
        { label: "Custom only", accent: "#2563eb", desc: "Every company is unique. We build what it needs — not what a pre-defined catalogue offers." },
        { label: "Belgium & Morocco", accent: "#7c3aed", desc: "Concrete projects on two markets. European standards applied to African reality." },
        { label: "SMEs first", accent: "#0891b2", desc: "We focus on businesses with 5 to 200 people — those who stand to gain the most from the right digitalisation." },
        { label: "Africa vision", accent: "#2563eb", desc: "Morocco is our starting point. Africa is our horizon. Digitalisation is the path." },
      ],
    },
    cta: {
      badge: "Next step",
      title: "Ready to move to the next level?",
      text: "A 45-minute diagnostic. We identify your biggest opportunities and give you a concrete action plan.",
      features: ["No commitment", "First results in 2 weeks", "Personalised roadmap"],
      btn1: "Request a diagnostic",
      btn2: "Explore our solutions",
    },
  },
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;

  return (
    <div className="bg-white text-slate-900">
      <HeroSlider />
      <PlatformSlider />

      {/* ══ TRUST BAR ══ */}
      <div className="border-y border-slate-100 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <p className="text-[12px] font-bold uppercase tracking-widest text-slate-400">
            {locale === "en" ? "Results achieved by our clients" : "Résultats obtenus par nos clients"}
          </p>
          <div className="flex flex-wrap items-center gap-8">
            {c.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-black text-blue-600">{s.value}</div>
                <div className="text-[11px] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 grid lg:grid-cols-2 items-end gap-6">
            <div>
              <div className="mb-4 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                {c.servicesSection.badge}
              </div>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[50px]">
                {c.servicesSection.title.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-slate-500 lg:ml-auto">{c.servicesSection.subtitle}</p>
          </div>
          <div className="grid gap-px bg-slate-100 border border-slate-100 md:grid-cols-2 lg:grid-cols-3">
            {c.services.map((s) => (
              <Link key={s.title} href={s.href}
                className="group flex flex-col bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,.08)] transition-shadow duration-200">
                <div className="flex h-44 items-center justify-center border-b border-slate-100" style={{ background: `${s.color}08` }}>
                  <div className="relative flex h-14 w-14 items-center justify-center" style={{ background: s.color }}>
                    <div className="h-px w-6 bg-white/60 absolute" />
                    <div className="w-px h-6 bg-white/60 absolute" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-[16px] font-black text-slate-900">{s.title}</h3>
                  <p className="flex-1 text-[14px] leading-relaxed text-slate-500">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                    {c.servicesSection.linkLabel} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <SquareButton href="/services" accent="#2563eb">{c.servicesSection.cta}</SquareButton>
          </div>
        </div>
      </section>

      {/* ══ METHOD ══ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 border-b border-slate-200 pb-10">
            <div className="mb-4 inline-block bg-slate-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              {c.method.badge}
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">{c.method.title}</h2>
            <p className="mt-4 max-w-xl text-lg text-slate-500">{c.method.subtitle}</p>
          </div>
          <div className="grid gap-px bg-slate-200 border border-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {c.method.steps.map((step, i) => (
              <div key={step.num} className="relative bg-white p-8 hover:bg-slate-50 transition-colors">
                {i < c.method.steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden translate-x-1/2 z-10 bg-slate-200 lg:block">
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                )}
                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-blue-600 text-[13px] font-black text-white">{step.num}</div>
                <h3 className="mb-2 text-[15px] font-black text-slate-800">{step.title}</h3>
                <p className="text-[13px] leading-relaxed text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIGITALISATION TEASER ══ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="border border-slate-200 bg-white overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-slate-200 p-10 lg:border-b-0 lg:border-r lg:p-14">
                <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                  {c.digitalisation.badge}
                </div>
                <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900">{c.digitalisation.title}</h2>
                <p className="mb-6 text-lg leading-relaxed text-slate-500">{c.digitalisation.text}</p>
                <ul className="mb-8 space-y-3">
                  {c.digitalisation.points.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px] font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 flex-none text-blue-500" />{item}
                    </li>
                  ))}
                </ul>
                <SquareButton href="/digitalisation" accent="#2563eb">{c.digitalisation.ctaLabel}</SquareButton>
              </div>
              <div className="flex items-center bg-slate-50 p-8 lg:p-12">
                <div className="w-full divide-y divide-slate-200">
                  {c.digitalisation.before.map(([v, l], i) => (
                    <>
                      <div key={`b${i}`} className="flex items-center gap-4 px-5 py-4">
                        <span className="w-12 flex-shrink-0 text-[10px] font-black uppercase tracking-widest text-red-400">{c.digitalisation.beforeLabel}</span>
                        <span className="text-[13px] font-semibold text-slate-500 line-through decoration-red-300">{v} — {l}</span>
                      </div>
                      <div key={`a${i}`} className="flex items-center gap-4 px-5 py-4">
                        <span className="w-12 flex-shrink-0 text-[10px] font-black uppercase tracking-widest text-emerald-500">{c.digitalisation.afterLabel}</span>
                        <span className="text-[13px] font-semibold text-slate-800">{c.digitalisation.after[i][0]} — {c.digitalisation.after[i][1]}</span>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROBLÈMES / SOLUTIONS ══ */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 border-b border-slate-200 pb-10">
            <div className="mb-4 inline-block bg-slate-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              {c.problems.badge}
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">
              {c.problems.title.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
          </div>
          <div className="grid gap-px bg-slate-200 border border-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {c.problems.items.map((ps) => (
              <div key={ps.domain} className="flex flex-col bg-white p-8">
                <div className="mb-5 inline-flex self-start items-center gap-2 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white"
                  style={{ background: ps.color }}>{ps.domain}</div>
                <div className="mb-4">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-red-400">{c.problems.problemLabel}</p>
                  <p className="text-[14px] leading-relaxed text-slate-600">{ps.problem}</p>
                </div>
                <div className="mb-4">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-blue-500">{c.problems.solutionLabel}</p>
                  <p className="text-[14px] leading-relaxed text-slate-600">{ps.solution}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[12px] font-black text-emerald-700">
                    ✓ {ps.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/resultats" className="inline-flex items-center gap-2 text-[14px] font-bold text-blue-600 hover:gap-3 transition-all">
              {c.problems.linkLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ À PROPOS ══ */}
      <section id="about" className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                {c.about.badge}
              </div>
              <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[50px]">{c.about.title}</h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-500">{c.about.p1}</p>
              <p className="mb-8 text-lg leading-relaxed text-slate-500">{c.about.p2}</p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[14px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors">
                {c.about.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-px bg-slate-100 border border-slate-100 sm:grid-cols-2">
              {c.about.tiles.map((item) => (
                <div key={item.label} className="bg-white p-7 hover:bg-slate-50 transition-colors">
                  <div className="mb-3 h-1 w-8" style={{ background: item.accent }} />
                  <h3 className="mb-2 text-[15px] font-black text-slate-900">{item.label}</h3>
                  <p className="text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BAND ══ */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">{c.cta.badge}</div>
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[50px]">{c.cta.title}</h2>
              <p className="mb-5 text-lg text-white/50">{c.cta.text}</p>
              <div className="flex flex-wrap gap-4 text-[13px] text-white/40">
                {c.cta.features.map((f) => (
                  <span key={f} className="flex items-center gap-1.5">
                    <span className="text-blue-400 font-bold">✓</span> {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <SquareButton href="/contact" accent="#2563eb">{c.cta.btn1}</SquareButton>
              <SquareButton href="/services" variant="dark" accent="#334155">{c.cta.btn2}</SquareButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
