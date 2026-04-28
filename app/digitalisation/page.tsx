import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SquareButton from "@/components/SquareButton";

export const metadata: Metadata = {
  title: "Comprendre la Digitalisation | Kadrek",
  description: "Qu'est-ce que la transformation digitale ? Pourquoi agir maintenant ? Avant / après en chiffres concrets. Le guide complet par Kadrek.",
};

const pillars = [
  { title: "Digitaliser les processus",       desc: "Remplacer les tâches manuelles par des workflows automatisés qui tracent chaque étape sans intervention humaine." },
  { title: "Connecter les systèmes",           desc: "CRM, ERP, comptabilité, logistique — tous reliés. Les données circulent sans silos ni ressaisies." },
  { title: "Visibilité en temps réel",         desc: "Savoir ce qui se passe dans votre entreprise à tout moment : revenus, stock, équipes, clients." },
  { title: "Intelligence artificielle",        desc: "Déléguer les tâches répétitives à des agents IA. Vos équipes se concentrent sur ce qui crée de la valeur." },
  { title: "Décisions basées sur les données", desc: "Analyser les tendances, anticiper la demande, réduire les risques — avec des faits, pas des intuitions." },
  { title: "Présence digitale forte",          desc: "Être trouvé en ligne, convertir les visiteurs en clients, gérer sa réputation — automatiquement." },
];

const whyNow = [
  { stat: "97%",     desc: "des acheteurs B2B font des recherches en ligne avant tout achat" },
  { stat: "2–3×",    desc: "plus de croissance pour les entreprises data-driven vs. leurs concurrents" },
  { stat: "68%",     desc: "des PME qui n'ont pas amorcé leur transition risquent de disparaître d'ici 10 ans" },
  { stat: "1,7 ETP", desc: "perdus chaque année en tâches manuelles dans une PME de 20 personnes" },
];

const journey = [
  { num: "01", phase: "Diagnostic",   title: "Où en êtes-vous ?",         desc: "Cartographie de vos processus, identification des goulots d'étranglement et des opportunités à fort ROI. Livré en 48h." },
  { num: "02", phase: "Sprint",       title: "Premier résultat rapide",   desc: "En 2 semaines : une automatisation, un dashboard ou un agent IA en production. Vous voyez les résultats avant de vous engager plus loin." },
  { num: "03", phase: "Intégration",  title: "Connecter les outils",      desc: "Vos systèmes parlent entre eux. Plus de copier-coller, plus de fichiers Excel perdus entre les équipes." },
  { num: "04", phase: "Formation",    title: "Adopter sans friction",     desc: "Vos équipes sont formées, outillées, et autonomes. L'adoption est progressive et accompagnée." },
  { num: "05", phase: "Optimisation", title: "Améliorer continuellement", desc: "Les données terrain pilotent l'amélioration continue. Chaque mois, vos systèmes deviennent un peu plus efficaces." },
];

const faqs = [
  { q: "Combien de temps dure une transformation digitale ?",          a: "Les premiers résultats arrivent en 2 à 4 semaines (automatisation ciblée, chatbot). Une transformation complète prend 3 à 6 mois. On commence toujours par ce qui rapporte le plus vite." },
  { q: "Faut-il du personnel technique pour gérer les outils ?",       a: "Non. Nos solutions sont conçues pour des équipes non-techniques. On forme votre personnel et on assure un support continu. Vous restez autonomes." },
  { q: "La digitalisation est-elle réservée aux grandes entreprises ?", a: "Pas du tout. Une PME de 10 personnes qui automatise son admin économise l'équivalent d'un CDI. Les PME sont souvent celles qui en profitent le plus, proportionnellement." },
  { q: "L'IA va-t-elle remplacer mes employés ?",                      a: "Non. L'IA traite les tâches répétitives — saisie, scheduling, rapports. Vos équipes font un travail à plus haute valeur et sont plus satisfaites au travail." },
  { q: "Et si nos données sont désorganisées ?",                       a: "C'est le point de départ le plus fréquent. L'audit permet de faire l'inventaire. On s'occupe de la migration et du nettoyage — vous n'avez pas à le faire." },
];

export default function DigitalisationPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pb-24 pt-36 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              Guide Complet
            </div>
            <h1 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[64px]">
              La digitalisation expliquée simplement
            </h1>
            <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-500">
              Ce qu'est réellement la transformation digitale, pourquoi votre entreprise ne peut plus attendre, et ce que vous gagnez concrètement — chiffres à l'appui.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <SquareButton href="/contact" accent="#2563eb">Obtenir un audit gratuit</SquareButton>
              <SquareButton href="#piliers" accent="#64748b">Lire le guide</SquareButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ce que veut dire digitaliser ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Définition</div>
              <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[44px]">
                Ce que veut vraiment dire &ldquo;digitaliser&rdquo;
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-500">
                Digitaliser ne veut pas dire "avoir un site web" ou "utiliser Excel". C'est <strong className="text-slate-800">remplacer les processus lents, manuels et coûteux</strong> par des systèmes intelligents qui travaillent automatiquement, vous donnent des données fiables et libèrent votre équipe.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-slate-500">
                En pratique : moins d'emails manuels, moins d'erreurs, moins de temps perdu — et plus de visibilité sur ce qui se passe réellement dans votre entreprise.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-[14px] font-semibold text-blue-600 hover:gap-3 transition-all">
                Voir nos solutions concrètes <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-3">
              <div className="border-l-4 border-red-400 bg-red-50 p-6">
                <p className="mb-4 text-[11px] font-black uppercase tracking-widest text-red-500">Avant — ce que vous vivez probablement</p>
                <ul className="space-y-2.5">
                  {["Des heures perdues sur des tableurs et rapports manuels","Décisions basées sur des données obsolètes ou incomplètes","Erreurs de saisie coûteuses et impossibles à tracer","Équipes noyées dans des tâches répétitives sans valeur","Aucune visibilité en temps réel sur votre activité"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                      <span className="mt-0.5 font-black text-red-400 flex-shrink-0">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-l-4 border-emerald-400 bg-emerald-50 p-6">
                <p className="mb-4 text-[11px] font-black uppercase tracking-widest text-emerald-600">Après — ce que vous obtenez</p>
                <ul className="space-y-2.5">
                  {["Dashboards mis à jour automatiquement, en temps réel","Décisions basées sur des données fiables en quelques minutes","Zéro double-saisie — les systèmes se parlent","Équipes focalisées sur la relation client et la stratégie","Vue complète sur revenus, tâches et activité — d'un coup d'œil"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-slate-700">
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
      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 border-b border-white/10 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">Pourquoi maintenant</div>
            <h2 className="text-4xl font-black tracking-tight lg:text-[50px]">
              Attendre, c&apos;est choisir de perdre du terrain
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/40">
              Vos concurrents digitalisent. Chaque mois d&apos;attente creuse l&apos;écart.
            </p>
          </div>
          <div className="grid gap-0 divide-y divide-white/5 lg:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {whyNow.map((w) => (
              <div key={w.stat} className="py-8 lg:py-0 lg:px-10 first:pl-0 last:pr-0">
                <div className="mb-2 text-[42px] font-black leading-none text-blue-400">{w.stat}</div>
                <p className="text-[14px] leading-relaxed text-white/40">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 Pillars ── */}
      <section id="piliers" className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 border-b border-slate-100 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Les 6 piliers</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">
              Une transformation qui couvre tout
            </h2>
          </div>
          <div className="grid gap-px bg-slate-100 border border-slate-100 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-white p-8 hover:bg-slate-50 transition-colors duration-200">
                <div className="mb-5 text-[11px] font-black uppercase tracking-widest text-blue-600">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2.5 text-[16px] font-black text-slate-900">{p.title}</h3>
                <p className="text-[14px] leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 border-b border-slate-200 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Le parcours</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">
              5 étapes pour transformer votre entreprise
            </h2>
          </div>
          <div className="divide-y divide-slate-200">
            {journey.map((step) => (
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

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="mb-12 border-b border-slate-100 pb-8">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">FAQ</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900">Questions fréquentes</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {faqs.map((faq) => (
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

      {/* ── CTA ── */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">Prochaine étape</div>
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[50px]">Prêt à franchir le pas ?</h2>
              <p className="text-lg text-white/50">Un audit gratuit. Une feuille de route concrète. Sans engagement.</p>
            </div>
            <SquareButton href="/contact" accent="#2563eb">Réserver mon audit gratuit</SquareButton>
          </div>
        </div>
      </section>

    </div>
  );
}
