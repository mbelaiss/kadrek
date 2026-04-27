import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Comprendre la Digitalisation | Kadrek",
  description: "Qu'est-ce que la transformation digitale ? Pourquoi agir maintenant ? Avant / après en chiffres concrets. Le guide complet par Kadrek.",
};

const pillars = [
  { icon: "🏗️", title: "Digitaliser les processus",   desc: "Remplacer les tâches manuelles par des workflows automatisés qui tracent chaque étape sans intervention humaine." },
  { icon: "🔗", title: "Connecter les systèmes",       desc: "CRM, ERP, comptabilité, logistique — tous reliés. Les données circulent sans silos ni ressaisies." },
  { icon: "📡", title: "Visibilité en temps réel",     desc: "Savoir ce qui se passe dans votre entreprise à tout moment : revenus, stock, équipes, clients." },
  { icon: "🤖", title: "Intelligence artificielle",    desc: "Déléguer les tâches répétitives à des agents IA. Vos équipes se concentrent sur ce qui crée de la valeur." },
  { icon: "📊", title: "Décisions basées sur les données", desc: "Analyser les tendances, anticiper la demande, réduire les risques — avec des faits, pas des intuitions." },
  { icon: "🌐", title: "Présence digitale forte",      desc: "Être trouvé en ligne, convertir les visiteurs en clients, gérer sa réputation — automatiquement." },
];

const whyNow = [
  { stat: "97%", desc: "des acheteurs B2B font des recherches en ligne avant tout achat" },
  { stat: "2–3×", desc: "plus de croissance pour les entreprises data-driven vs. leurs concurrents" },
  { stat: "68%", desc: "des PME qui n'ont pas amorcé leur transition numérique risquent de disparaître d'ici 10 ans" },
  { stat: "1,7 poste", desc: "l'équivalent en salaires perdus chaque année en tâches manuelles dans une PME de 20 personnes" },
];

const journey = [
  { num: "01", phase: "Diagnostic",    title: "Où en êtes-vous ?",        desc: "Cartographie de vos processus, identification des goulots d'étranglement et des opportunités à fort ROI. Livré en 48h." },
  { num: "02", phase: "Sprint",        title: "Premier résultat rapide",  desc: "En 2 semaines : une automatisation, un dashboard ou un agent IA en production. Vous voyez les résultats avant de vous engager plus loin." },
  { num: "03", phase: "Intégration",   title: "Connecter les outils",     desc: "Vos systèmes parlent entre eux. Plus de copier-coller, plus de fichiers Excel perdus entre les équipes." },
  { num: "04", phase: "Formation",     title: "Adopter sans friction",    desc: "Vos équipes sont formées, outillées, et autonomes. L'adoption est progressive et accompagnée." },
  { num: "05", phase: "Optimisation",  title: "Améliorer continuellement", desc: "Les données terrain pilotent l'amélioration continue. Chaque mois, vos systèmes deviennent un peu plus efficaces." },
];

const faqs = [
  { q: "Combien de temps dure une transformation digitale ?",      a: "Les premiers résultats arrivent en 2 à 4 semaines (automatisation ciblée, chatbot). Une transformation complète prend 3 à 6 mois. On commence toujours par ce qui rapporte le plus vite." },
  { q: "Faut-il du personnel technique pour gérer les outils ?",   a: "Non. Nos solutions sont conçues pour des équipes non-techniques. On forme votre personnel et on assure un support continu. Vous restez autonomes." },
  { q: "La digitalisation est-elle réservée aux grandes entreprises ?", a: "Pas du tout. Une PME de 10 personnes qui automatise son admin économise l'équivalent d'un CDI. Les PME sont souvent celles qui en profitent le plus, proportionnellement." },
  { q: "L'IA va-t-elle remplacer mes employés ?",                  a: "Non. L'IA traite les tâches répétitives — saisie, scheduling, rapports. Vos équipes font un travail à plus haute valeur et sont plus satisfaites au travail." },
  { q: "Et si nos données sont désorganisées ?",                   a: "C'est le point de départ le plus fréquent. L'audit permet de faire l'inventaire. On s'occupe de la migration et du nettoyage — vous n'avez pas à le faire." },
];

export default function DigitalisationPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-cyan-50/40 pb-24 pt-36">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-blue-600">
            Guide Complet
          </div>
          <h1 className="mx-auto mb-5 max-w-4xl text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-6xl">
            La digitalisation expliquée{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              simplement
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-500">
            Ce qu'est réellement la transformation digitale, pourquoi votre entreprise ne peut plus attendre, et ce que vous gagnez concrètement — chiffres à l'appui.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-[14px] font-black text-white shadow-[0_4px_20px_rgba(37,99,235,.3)] transition-all hover:-translate-y-0.5">
              Obtenir un audit gratuit <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#pillars"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-7 py-3.5 text-[14px] font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
              Lire le guide ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── What is it ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-blue-600">
                Définition
              </div>
              <h2 className="mb-5 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
                Ce que veut vraiment dire "digitaliser"
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-500">
                Digitaliser ne veut pas dire "avoir un site web" ou "utiliser Excel". C'est <strong className="text-slate-800">remplacer les processus lents, manuels et coûteux</strong> par des systèmes intelligents qui travaillent automatiquement, vous donnent des données fiables et libèrent votre équipe.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-slate-500">
                En pratique, ça veut dire : moins d'emails manuels, moins d'erreurs, moins de temps perdu — et plus de visibilité sur ce qui se passe réellement dans votre entreprise.
              </p>
              <Link href="/services"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-blue-600 hover:gap-3 transition-all">
                Voir nos solutions concrètes <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Before / After */}
            <div className="space-y-3">
              <div className="rounded-2xl border-2 border-red-100 bg-red-50 p-6">
                <p className="mb-4 text-[11px] font-black uppercase tracking-widest text-red-500">⏪ Avant — ce que vous vivez probablement</p>
                <ul className="space-y-2.5">
                  {["Des heures perdues sur des tableurs et rapports manuels","Décisions basées sur des données obsolètes ou incomplètes","Erreurs de saisie coûteuses et impossibles à tracer","Équipes noyées dans des tâches répétitives sans valeur","Aucune visibilité en temps réel sur votre activité"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="mt-0.5 font-black text-red-400 flex-shrink-0">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50 p-6">
                <p className="mb-4 text-[11px] font-black uppercase tracking-widest text-emerald-600">⏩ Après — ce que vous obtenez</p>
                <ul className="space-y-2.5">
                  {["Dashboards mis à jour automatiquement, en temps réel","Décisions basées sur des données fiables en quelques minutes","Zéro double-saisie — les systèmes se parlent","Équipes focalisées sur la relation client et la stratégie","Vue complète sur revenus, tâches et activité — d'un coup d'œil"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Now ── */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
              Pourquoi maintenant
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              Attendre, c'est choisir de{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">perdre du terrain</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              Vos concurrents digitalisent. Chaque mois d'attente creuse l'écart.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyNow.map((w) => (
              <div key={w.stat} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="mb-2 text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{w.stat}</div>
                <p className="text-sm leading-relaxed text-slate-500">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 Pillars ── */}
      <section id="pillars" className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-blue-600">
              Les 6 piliers
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              Une transformation qui couvre tout
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title}
                className="group rounded-2xl border border-slate-100 p-6 hover:border-blue-100 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,99,235,.08)] transition-all duration-300">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {p.icon}
                </div>
                <div className="mb-1 text-[11px] font-black uppercase tracking-widest text-blue-400">0{i + 1}</div>
                <h3 className="mb-2 text-lg font-black text-slate-800">{p.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
              Le parcours
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              5 étapes pour transformer votre entreprise
            </h2>
          </div>
          <div className="space-y-4">
            {journey.map((step) => (
              <div key={step.num}
                className="flex gap-6 items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-100 hover:shadow-md hover:translate-x-1 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex flex-col items-center justify-center shadow-[0_4px_14px_rgba(37,99,235,.25)]">
                  <span className="text-[10px] font-black text-white/60">{step.num}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">{step.phase}</span>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-black text-slate-800">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-900">Questions fréquentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q}
                className="group rounded-2xl border border-slate-100 open:border-blue-100 open:shadow-[0_0_20px_rgba(37,99,235,.07)] transition-all">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-[15px] font-black text-slate-800 list-none select-none hover:bg-blue-50/50 transition-colors">
                  {faq.q}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-600 group-open:rotate-45 group-open:bg-blue-600 group-open:text-white transition-all duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-[14px] leading-relaxed text-slate-500">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <h2 className="mb-5 text-4xl font-black text-white lg:text-5xl">Prêt à franchir le pas ?</h2>
          <p className="mb-10 text-xl text-white/60">Un audit gratuit. Une feuille de route concrète. Sans engagement.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-10 py-4 text-[15px] font-black text-white shadow-[0_4px_24px_rgba(34,211,238,.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(34,211,238,.45)]">
            Réserver mon audit gratuit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
