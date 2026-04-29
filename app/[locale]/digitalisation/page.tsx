import { ArrowRight, CheckCircle2 } from "lucide-react";
import SquareButton from "@/components/SquareButton";
import { Link } from "@/navigation";
import type { Locale } from "@/routing";

const content = {
  fr: {
    badge: "Guide Complet",
    title: "La digitalisation expliquée simplement",
    subtitle: "Ce qu'est réellement la transformation digitale, pourquoi votre entreprise ne peut plus attendre, et ce que vous gagnez concrètement — chiffres à l'appui.",
    cta1: "Demander un diagnostic", cta2: "Lire le guide",
    defBadge: "Définition",
    defTitle: "Ce que veut vraiment dire « digitaliser »",
    defP1: "Digitaliser ne veut pas dire « avoir un site web » ou « utiliser Excel ». C'est structurer vos opérations avec des systèmes intelligents : des flux automatisés qui vous donnent des données fiables, éliminent les ressaisies et permettent à vos équipes de se concentrer sur ce qui compte vraiment.",
    defP2: "En pratique : moins d'emails manuels, moins d'erreurs, moins de temps perdu — et plus de visibilité sur ce qui se passe réellement dans votre entreprise.",
    defLink: "Voir nos solutions concrètes",
    beforeLabel: "Avant — ce que vous vivez probablement",
    before: ["Des heures perdues sur des tableurs et rapports manuels","Décisions basées sur des données obsolètes ou incomplètes","Erreurs de saisie coûteuses et impossibles à tracer","Équipes noyées dans des tâches répétitives sans valeur","Aucune visibilité en temps réel sur votre activité"],
    afterLabel: "Après — ce que vous obtenez",
    after: ["Dashboards mis à jour automatiquement, en temps réel","Décisions basées sur des données fiables en quelques minutes","Zéro double-saisie — les systèmes se parlent","Équipes focalisées sur la relation client et la stratégie","Vue complète sur revenus, tâches et activité — d'un coup d'œil"],
    whyBadge: "Pourquoi maintenant",
    whyTitle: "Attendre, c'est choisir de perdre du terrain",
    whyText: "Vos concurrents digitalisent. Chaque mois d'attente creuse l'écart.",
    whyNow: [
      { stat: "97%",     desc: "des acheteurs B2B font des recherches en ligne avant tout achat" },
      { stat: "2–3×",    desc: "plus de croissance pour les entreprises data-driven vs. leurs concurrents" },
      { stat: "68%",     desc: "des PME qui n'ont pas amorcé leur transition risquent de disparaître d'ici 10 ans" },
      { stat: "1,7 ETP", desc: "perdus chaque année en tâches manuelles dans une PME de 20 personnes" },
    ],
    pillarsBadge: "Les 6 piliers", pillarsTitle: "Une transformation qui couvre tout",
    pillars: [
      { title: "Digitaliser les processus",       desc: "Remplacer les tâches manuelles par des workflows automatisés qui tracent chaque étape sans intervention humaine." },
      { title: "Connecter les systèmes",           desc: "CRM, ERP, comptabilité, logistique — tous reliés. Les données circulent sans silos ni ressaisies." },
      { title: "Visibilité en temps réel",         desc: "Savoir ce qui se passe dans votre entreprise à tout moment : revenus, stock, équipes, clients." },
      { title: "Intelligence artificielle",        desc: "Des solutions IA qui amplifient les capacités de chaque collaborateur. Moins de friction opérationnelle, plus de temps pour la relation client et la stratégie." },
      { title: "Décisions basées sur les données", desc: "Analyser les tendances, anticiper la demande, réduire les risques — avec des faits, pas des intuitions." },
      { title: "Présence digitale forte",          desc: "Être trouvé en ligne, convertir les visiteurs en clients, gérer sa réputation — automatiquement." },
    ],
    journeyBadge: "Le parcours", journeyTitle: "5 étapes pour transformer votre entreprise",
    journey: [
      { num: "01", phase: "Diagnostic",   title: "Où en êtes-vous ?",         desc: "Cartographie de vos processus, identification des goulots d'étranglement et des opportunités à fort ROI. Livré en 48h." },
      { num: "02", phase: "Sprint",       title: "Premier résultat rapide",   desc: "En 2 semaines : une automatisation, un dashboard ou un agent IA en production. Vous voyez les résultats avant de vous engager plus loin." },
      { num: "03", phase: "Intégration",  title: "Connecter les outils",      desc: "Vos systèmes parlent entre eux. Plus de copier-coller, plus de fichiers Excel perdus entre les équipes." },
      { num: "04", phase: "Formation",    title: "Adopter sans friction",     desc: "Vos équipes sont formées, outillées, et autonomes. L'adoption est progressive et accompagnée." },
      { num: "05", phase: "Optimisation", title: "Améliorer continuellement", desc: "Les données terrain pilotent l'amélioration continue. Chaque mois, vos systèmes deviennent un peu plus efficaces." },
    ],
    faqBadge: "FAQ", faqTitle: "Questions fréquentes",
    faqs: [
      { q: "Combien de temps dure une transformation digitale ?",          a: "Les premiers résultats arrivent en 2 à 4 semaines (automatisation ciblée, chatbot). Une transformation complète prend 3 à 6 mois. On commence toujours par ce qui rapporte le plus vite." },
      { q: "Faut-il du personnel technique pour gérer les outils ?",       a: "Non. Nos solutions sont conçues pour des équipes non-techniques. On forme votre personnel et on assure un support continu. Vous restez autonomes." },
      { q: "La digitalisation est-elle réservée aux grandes entreprises ?", a: "Pas du tout. Une PME de 10 personnes qui automatise son admin économise l'équivalent d'un CDI. Les PME sont souvent celles qui en profitent le plus, proportionnellement." },
      { q: "L'IA va-t-elle impacter les métiers de mes équipes ?",          a: "L'intelligence artificielle prend en charge les tâches à faible valeur ajoutée — saisie, planification, génération de rapports. Vos collaborateurs se consacrent à des missions plus complexes, plus stratégiques, et généralement plus satisfaisantes." },
      { q: "Et si nos données sont désorganisées ?",                       a: "C'est le point de départ le plus fréquent. L'audit permet de faire l'inventaire. On s'occupe de la migration et du nettoyage — vous n'avez pas à le faire." },
    ],
    ctaBadge: "Prochaine étape", ctaFinalTitle: "Prêt à franchir le pas ?",
    ctaFinalText: "Un diagnostic. Une feuille de route concrète. Sans engagement.",
    ctaFinalBtn: "Demander un diagnostic",
  },
  en: {
    badge: "Complete Guide",
    title: "Digitalisation explained simply",
    subtitle: "What digital transformation really means, why your business can't wait, and what you concretely gain — backed by numbers.",
    cta1: "Request a diagnostic", cta2: "Read the guide",
    defBadge: "Definition",
    defTitle: "What 'going digital' actually means",
    defP1: "Digitalising doesn't mean 'having a website' or 'using Excel'. It means structuring your operations with intelligent systems: automated flows that give you reliable data, eliminate re-entry and allow your teams to focus on what truly matters.",
    defP2: "In practice: fewer manual emails, fewer errors, less wasted time — and more visibility into what's really happening in your business.",
    defLink: "See our concrete solutions",
    beforeLabel: "Before — what you're probably experiencing",
    before: ["Hours lost on spreadsheets and manual reports","Decisions based on outdated or incomplete data","Costly data-entry errors impossible to trace","Teams buried in repetitive, low-value tasks","No real-time visibility into your business"],
    afterLabel: "After — what you get",
    after: ["Dashboards updated automatically, in real time","Decisions based on reliable data in minutes","Zero double entry — systems talk to each other","Teams focused on client relationships and strategy","Full view of revenue, tasks and activity — at a glance"],
    whyBadge: "Why now",
    whyTitle: "Waiting means choosing to fall behind",
    whyText: "Your competitors are digitalising. Every month you wait widens the gap.",
    whyNow: [
      { stat: "97%",     desc: "of B2B buyers research online before any purchase" },
      { stat: "2–3×",    desc: "more growth for data-driven companies vs. their competitors" },
      { stat: "68%",     desc: "of SMEs that haven't started their transition risk disappearing within 10 years" },
      { stat: "1.7 FTE", desc: "lost each year to manual tasks in a 20-person SME" },
    ],
    pillarsBadge: "The 6 pillars", pillarsTitle: "A transformation that covers everything",
    pillars: [
      { title: "Digitalise processes",     desc: "Replace manual tasks with automated workflows that trace every step without human intervention." },
      { title: "Connect systems",          desc: "CRM, ERP, accounting, logistics — all linked. Data flows without silos or re-entry." },
      { title: "Real-time visibility",     desc: "Know what's happening in your business at any moment: revenue, stock, teams, clients." },
      { title: "Artificial intelligence",  desc: "AI solutions that amplify every team member's capabilities. Less operational friction, more time for client relationships and strategy." },
      { title: "Data-based decisions",     desc: "Analyse trends, anticipate demand, reduce risks — with facts, not gut feelings." },
      { title: "Strong digital presence",  desc: "Be found online, convert visitors into clients, manage your reputation — automatically." },
    ],
    journeyBadge: "The journey", journeyTitle: "5 steps to transform your business",
    journey: [
      { num: "01", phase: "Diagnostic",    title: "Where do you stand?",        desc: "Process mapping, bottleneck identification and high-ROI opportunity prioritisation. Delivered in 48h." },
      { num: "02", phase: "Sprint",        title: "First quick result",         desc: "In 2 weeks: an automation, a dashboard or an AI agent in production. You see results before committing further." },
      { num: "03", phase: "Integration",   title: "Connect the tools",          desc: "Your systems talk to each other. No more copy-paste, no more Excel files lost between teams." },
      { num: "04", phase: "Training",      title: "Adopt without friction",     desc: "Your teams are trained, equipped and autonomous. Adoption is gradual and supported." },
      { num: "05", phase: "Optimisation",  title: "Improve continuously",       desc: "Field data drives continuous improvement. Every month, your systems become a little more efficient." },
    ],
    faqBadge: "FAQ", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "How long does a digital transformation take?",              a: "First results arrive in 2–4 weeks (targeted automation, chatbot). A full transformation takes 3–6 months. We always start with what pays back fastest." },
      { q: "Do we need technical staff to manage the tools?",           a: "No. Our solutions are designed for non-technical teams. We train your staff and provide ongoing support. You stay autonomous." },
      { q: "Is digitalisation only for large companies?",               a: "Not at all. A 10-person SME that automates its admin saves the equivalent of one full-time role. SMEs are often those who benefit the most, proportionally." },
      { q: "How will AI affect my teams' roles?",                       a: "Artificial intelligence handles low-value tasks — data entry, scheduling, report generation. Your teams focus on more complex, more strategic, and generally more fulfilling work." },
      { q: "What if our data is disorganised?",                        a: "That's the most common starting point. The diagnostic takes stock of everything. We handle the migration and cleanup — you don't have to." },
    ],
    ctaBadge: "Next step", ctaFinalTitle: "Ready to take the leap?",
    ctaFinalText: "One diagnostic. A concrete roadmap. No commitment.",
    ctaFinalBtn: "Request a diagnostic",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return locale === "en"
    ? { title: "Understanding Digitalisation | Kadrek", description: "What is digital transformation? Why act now? A before/after in concrete figures. The complete guide by Kadrek." }
    : { title: "Comprendre la Digitalisation | Kadrek", description: "Qu'est-ce que la transformation digitale ? Pourquoi agir maintenant ? Avant / après en chiffres concrets. Le guide complet par Kadrek." };
}

export default async function DigitalisationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pb-24 pt-36 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">{c.badge}</div>
            <h1 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[64px]">{c.title}</h1>
            <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-500">{c.subtitle}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <SquareButton href="/contact" accent="#2563eb">{c.cta1}</SquareButton>
              <SquareButton href="#piliers" accent="#64748b">{c.cta2}</SquareButton>
            </div>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.defBadge}</div>
              <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[44px]">{c.defTitle}</h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-500">{c.defP1}</p>
              <p className="mb-8 text-lg leading-relaxed text-slate-500">{c.defP2}</p>
              <Link href="/services" className="inline-flex items-center gap-2 text-[14px] font-semibold text-blue-600 hover:gap-3 transition-all">
                {c.defLink} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-red-400 bg-red-50 p-6">
                <p className="mb-4 text-[11px] font-black uppercase tracking-widest text-red-500">{c.beforeLabel}</p>
                <ul className="space-y-2.5">{c.before.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                    <span className="mt-0.5 font-black text-red-400 flex-shrink-0">✕</span> {item}
                  </li>
                ))}</ul>
              </div>
              <div className="border-l-4 border-emerald-400 bg-emerald-50 p-6">
                <p className="mb-4 text-[11px] font-black uppercase tracking-widest text-emerald-600">{c.afterLabel}</p>
                <ul className="space-y-2.5">{c.after.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-500" /> {item}
                  </li>
                ))}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 border-b border-white/10 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">{c.whyBadge}</div>
            <h2 className="text-4xl font-black tracking-tight lg:text-[50px]">{c.whyTitle}</h2>
            <p className="mt-4 max-w-xl text-lg text-white/40">{c.whyText}</p>
          </div>
          <div className="grid gap-0 divide-y divide-white/5 lg:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {c.whyNow.map((w) => (
              <div key={w.stat} className="py-8 lg:py-0 lg:px-10 first:pl-0 last:pr-0">
                <div className="mb-2 text-[42px] font-black leading-none text-blue-400">{w.stat}</div>
                <p className="text-[14px] leading-relaxed text-white/40">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Pillars */}
      <section id="piliers" className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 border-b border-slate-100 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.pillarsBadge}</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">{c.pillarsTitle}</h2>
          </div>
          <div className="grid gap-px bg-slate-100 border border-slate-100 md:grid-cols-2 lg:grid-cols-3">
            {c.pillars.map((p, i) => (
              <div key={p.title} className="bg-white p-8 hover:bg-slate-50 transition-colors duration-200">
                <div className="mb-5 text-[11px] font-black uppercase tracking-widest text-blue-600">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mb-2.5 text-[16px] font-black text-slate-900">{p.title}</h3>
                <p className="text-[14px] leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 border-b border-slate-200 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.journeyBadge}</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">{c.journeyTitle}</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {c.journey.map((step) => (
              <div key={step.num} className="flex items-start gap-8 bg-white border-x border-slate-200 px-8 py-6 hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-14 text-center">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{step.phase}</div>
                  <div className="text-[28px] font-black leading-tight text-slate-200">{step.num}</div>
                </div>
                <div className="pt-1">
                  <h3 className="mb-1 text-[16px] font-black text-slate-900">{step.title}</h3>
                  <p className="text-[14px] leading-relaxed text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="mb-12 border-b border-slate-100 pb-8">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.faqBadge}</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900">{c.faqTitle}</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {c.faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-[15px] font-bold text-slate-800 list-none select-none hover:text-slate-900 transition-colors">
                  {faq.q}
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center border border-slate-200 bg-white font-black text-slate-500 group-open:bg-blue-600 group-open:text-white group-open:border-blue-600 transition-all text-sm">+</span>
                </summary>
                <div className="pb-5 text-[14px] leading-relaxed text-slate-500">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">{c.ctaBadge}</div>
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[50px]">{c.ctaFinalTitle}</h2>
              <p className="text-lg text-white/50">{c.ctaFinalText}</p>
            </div>
            <SquareButton href="/contact" accent="#2563eb">{c.ctaFinalBtn}</SquareButton>
          </div>
        </div>
      </section>
    </div>
  );
}
