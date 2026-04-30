import SquareButton from "@/components/SquareButton";
import type { Locale } from "@/routing";

const content = {
  fr: {
    meta: {
      title: "À propos | Kadrek",
      description: "Kadrek est un cabinet de conseil en transformation digitale basé entre la Belgique et le Maroc. Notre mission : digitaliser les PME africaines et faire de l'Afrique une puissance numérique mondiale.",
    },
    hero: {
      badge: "Notre mission",
      title: "Bâtir l'Afrique digitale",
      subtitle: "Nous accompagnons les PME dans leur transformation numérique — pour qu'elles gagnent en efficacité aujourd'hui et qu'elles soient prêtes pour ce qui arrive.",
    },
    origin: {
      badge: "Pourquoi Kadrek existe",
      title: "Un constat. Une conviction.",
      p1: "Les PME marocaines et africaines ont la capacité de rivaliser avec n'importe quelle entreprise dans le monde. Il leur manque un seul élément : les outils et l'accompagnement pour franchir le pas.",
      p2: "Kadrek est né de cette conviction. Nous sommes des spécialistes basés entre la Belgique et le Maroc, avec une certitude commune : la digitalisation n'est pas un privilège réservé aux grandes entreprises. C'est un levier de compétitivité accessible à toute organisation qui décide de l'adopter.",
    },
    presence: {
      badge: "Où nous opérons",
      title: "Deux marchés. Une expertise.",
      locations: [
        {
          city: "Casablanca",
          country: "Maroc",
          color: "#2563eb",
          desc: "Notre base opérationnelle principale. Depuis Casablanca, nous accompagnons les PME marocaines sur l'ensemble du territoire — et nous rayonnons vers toute la région Afrique.",
        },
        {
          city: "Belgique",
          country: "Europe",
          color: "#7c3aed",
          desc: "Notre présence en Belgique est opérationnelle. Nous y menons des projets concrets avec des PME belges — en les accompagnant dans leur développement et en leur construisant les outils dont elles ont besoin. Cette expérience terrain européenne nourrit directement notre savoir-faire au Maroc.",
        },
      ],
    },
    mission: {
      badge: "Notre priorité",
      title: "Les PME marocaines, d'abord.",
      p1: "Le Maroc concentre des milliers d'entreprises de 5 à 200 personnes qui fonctionnent encore avec des processus entièrement manuels. Des heures perdues sur des tâches répétitives. Des décisions prises sans données. Des opportunités manquées faute d'outils.",
      p2: "C'est ce marché que nous servons en priorité. Pas avec des solutions génériques importées d'ailleurs — mais avec des systèmes construits pour la réalité marocaine, adaptés aux contraintes locales et déployés par des équipes qui comprennent le terrain.",
    },
    vision: {
      badge: "Notre vision",
      title: "L'Afrique est la prochaine grande puissance numérique.",
      p1: "Le continent africain porte une jeunesse, une énergie et un potentiel entrepreneurial que très peu d'autres régions du monde possèdent. Ce qui lui manque, ce ne sont pas les ambitions — c'est l'infrastructure numérique pour les réaliser.",
      p2: "Notre objectif à long terme est de contribuer à combler cet écart. Pays par pays, entreprise par entreprise, nous voulons aider l'Afrique à construire les fondations digitales qui lui permettront d'affronter le monde qui vient — et d'en être un acteur central.",
      quote: "La digitalisation n'est pas une option pour l'Afrique. C'est le chemin le plus direct vers la compétitivité mondiale.",
    },
    values: {
      badge: "Notre philosophie",
      title: "Chaque entreprise est unique. Son projet aussi.",
      intro: "Nous ne proposons pas de produit générique auquel vous devez vous adapter. Nous construisons ce dont votre entreprise a besoin — selon votre réalité, vos processus et vos objectifs. Pas de solution standard. Pas de compromis.",
      items: [
        { num: "01", title: "Développement sur-mesure", desc: "Chaque client reçoit une solution conçue pour lui. Nous partons de votre métier, de vos contraintes et de vos ambitions — pas d'un catalogue de fonctionnalités prédéfinies." },
        { num: "02", title: "Résultats mesurables", desc: "Chaque engagement commence par un audit. Chaque livraison se mesure. On ne s'arrête pas à la livraison technique — on valide l'impact réel sur votre activité." },
        { num: "03", title: "Proximité terrain", desc: "Nous intervenons en immersion dans vos processus, pas depuis un bureau. Nos équipes comprennent votre métier avant de toucher au moindre outil." },
        { num: "04", title: "Transfert de compétences", desc: "Notre objectif n'est pas de créer une dépendance. Chaque projet inclut la formation de vos équipes pour qu'elles maîtrisent ce qui a été construit." },
      ],
    },
    cta: {
      title: "Vous voulez en savoir plus ?",
      subtitle: "Un échange de 30 minutes pour comprendre votre contexte et voir si nous pouvons vous aider.",
      btn: "Nous contacter",
    },
  },
  en: {
    meta: {
      title: "About | Kadrek",
      description: "Kadrek is a digital transformation consultancy based between Belgium and Morocco. Our mission: digitalise African SMEs and make Africa a global digital powerhouse.",
    },
    hero: {
      badge: "Our mission",
      title: "Building digital Africa",
      subtitle: "We guide SMEs through their digital transformation — so they gain efficiency today and are ready for what's coming.",
    },
    origin: {
      badge: "Why Kadrek exists",
      title: "One observation. One conviction.",
      p1: "Moroccan and African SMEs have the capacity to compete with any company in the world. They are missing one thing: the tools and support to take the step.",
      p2: "Kadrek was built on this conviction. We are specialists based between Belgium and Morocco, with a shared certainty: digitalisation is not a privilege reserved for large corporations. It is a lever of competitiveness available to any organisation that decides to embrace it.",
    },
    presence: {
      badge: "Where we operate",
      title: "Two markets. One expertise.",
      locations: [
        {
          city: "Casablanca",
          country: "Morocco",
          color: "#2563eb",
          desc: "Our primary operational base. From Casablanca, we support Moroccan SMEs across the country — and extend our reach across the African region.",
        },
        {
          city: "Belgium",
          country: "Europe",
          color: "#7c3aed",
          desc: "Our Belgian presence is operational. We run concrete projects with Belgian SMEs — supporting their development and building the tools they need. This hands-on European experience feeds directly into our work in Morocco.",
        },
      ],
    },
    mission: {
      badge: "Our priority",
      title: "Moroccan SMEs, first.",
      p1: "Morocco is home to thousands of businesses with 5 to 200 employees still running entirely on manual processes. Hours lost on repetitive tasks. Decisions made without data. Opportunities missed for lack of the right tools.",
      p2: "This is the market we serve first. Not with generic solutions imported from elsewhere — but with systems built for the Moroccan reality, adapted to local constraints, and deployed by teams who understand the terrain.",
    },
    vision: {
      badge: "Our vision",
      title: "Africa is the next great digital power.",
      p1: "The African continent carries a youth, an energy and an entrepreneurial potential that few other regions in the world possess. What it lacks is not ambition — it is the digital infrastructure to realise it.",
      p2: "Our long-term goal is to help close that gap. Country by country, business by business, we want to help Africa build the digital foundations that will allow it to face the world ahead — and be a central force within it.",
      quote: "Digitalisation is not optional for Africa. It is the most direct path to global competitiveness.",
    },
    values: {
      badge: "Our philosophy",
      title: "Every company is unique. Its project should be too.",
      intro: "We don't offer a generic product you have to adapt to. We build what your company needs — according to your reality, your processes and your ambitions. No standard solution. No compromise.",
      items: [
        { num: "01", title: "Custom development", desc: "Every client receives a solution designed for them. We start from your business, your constraints and your ambitions — not a catalogue of pre-defined features." },
        { num: "02", title: "Measurable results", desc: "Every engagement starts with an audit. Every delivery is measured. We don't stop at technical handover — we validate real impact on your business." },
        { num: "03", title: "On-the-ground proximity", desc: "We work immersed in your processes, not from a remote office. Our teams understand your business before touching a single tool." },
        { num: "04", title: "Knowledge transfer", desc: "Our goal is not to create dependency. Every project includes training your teams so they fully own what was built." },
      ],
    },
    cta: {
      title: "Want to learn more?",
      subtitle: "A 30-minute conversation to understand your context and see how we can help.",
      btn: "Contact us",
    },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (content[(locale as Locale)] ?? content.fr).meta;
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;

  return (
    <div className="bg-white text-slate-900">

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden bg-white pb-20 pt-36 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              {c.hero.badge}
            </div>
            <h1 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[72px]">
              {c.hero.title}
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-slate-500">{c.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* ══ ORIGIN ══ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.origin.badge}</div>
              <h2 className="mb-8 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[44px]">
                {c.origin.title}
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-500">{c.origin.p1}</p>
              <p className="text-lg leading-relaxed text-slate-500">{c.origin.p2}</p>
            </div>
            <div className="grid gap-4">
              {c.presence.locations.map((loc) => (
                <div key={loc.city} className="border border-slate-200 bg-white p-8" style={{ borderLeftWidth: 4, borderLeftColor: loc.color }}>
                  <div className="mb-2 flex items-baseline gap-3">
                    <span className="text-2xl font-black text-slate-900">{loc.city}</span>
                    <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: loc.color }}>{loc.country}</span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-slate-500">{loc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              {/* Stat tiles */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "95%",  label: "des PME marocaines\nnon digitalisées", color: "#ef4444" },
                  { value: "40%",  label: "du temps perdu\nen tâches manuelles", color: "#f59e0b" },
                  { value: "3.5×", label: "ROI moyen\naprès digitalisation", color: "#10b981" },
                  { value: "90j",  label: "pour des résultats\nmesurables", color: "#2563eb" },
                ].map((s) => (
                  <div key={s.label} className="border border-slate-200 bg-white p-6">
                    <div className="mb-2 text-3xl font-black" style={{ color: s.color }}>{s.value}</div>
                    <div className="whitespace-pre-line text-[12px] font-semibold leading-relaxed text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.mission.badge}</div>
              <h2 className="mb-8 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[44px]">
                {c.mission.title}
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-500">{c.mission.p1}</p>
              <p className="text-lg leading-relaxed text-slate-500">{c.mission.p2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VISION ══ */}
      <section className="py-24 bg-[#030712] overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }} />
          <div className="relative max-w-3xl">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-blue-400">{c.vision.badge}</div>
            <h2 className="mb-8 text-4xl font-black leading-tight tracking-tight text-white lg:text-[52px]">
              {c.vision.title}
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-slate-400">{c.vision.p1}</p>
            <p className="mb-12 text-lg leading-relaxed text-slate-400">{c.vision.p2}</p>
            <blockquote className="border-l-4 border-blue-600 pl-6">
              <p className="text-xl font-semibold leading-relaxed text-white">{c.vision.quote}</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.values.badge}</div>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 lg:text-[44px]">{c.values.title}</h2>
            <p className="text-lg leading-relaxed text-slate-500">{c.values.intro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.values.items.map((item) => (
              <div key={item.num} className="border border-slate-100 bg-slate-50 p-8">
                <div className="mb-4 text-[11px] font-black uppercase tracking-widest text-blue-600">{item.num}</div>
                <h3 className="mb-3 text-xl font-black text-slate-900">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-24 bg-slate-900">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[44px]">{c.cta.title}</h2>
              <p className="text-lg text-white/50">{c.cta.subtitle}</p>
            </div>
            <SquareButton href="/contact" accent="#2563eb">{c.cta.btn}</SquareButton>
          </div>
        </div>
      </section>

    </div>
  );
}
