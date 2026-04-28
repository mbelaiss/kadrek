import { Metadata } from "next";
import SquareButton from "@/components/SquareButton";

export const metadata: Metadata = {
  title: "Résultats & ROI | Kadrek",
  description: "Chiffres concrets, témoignages clients et retour sur investissement de la transformation digitale avec Kadrek.",
};

const roiMetrics = [
  { value: "40%",    label: "réduction des coûts opérationnels",  sub: "En automatisant les processus manuels" },
  { value: "15h",    label: "économisées par employé par semaine", sub: "Tâches répétitives éliminées" },
  { value: "-90%",   label: "d'erreurs de saisie",                 sub: "Grâce à la synchronisation automatique" },
  { value: "3.5×",   label: "retour sur investissement moyen",     sub: "Sur les 12 premiers mois" },
  { value: "+28%",   label: "satisfaction client améliorée",       sub: "Réponses plus rapides, moins d'erreurs" },
  { value: "2 sem.", label: "pour les premiers résultats",         sub: "On livre vite, on prouve avant de scaler" },
];

const testimonials = [
  {
    initials: "SL", name: "Sophie Laurent",   role: "CEO · Atelier Lumière (retail, 28 employés)",           stars: 5,
    result: "2 800 € économisés le 1er mois",
    text: "La facturation entièrement automatisée nous a économisé 2 800 € le premier mois. L'équipe est enfin concentrée sur la vente, pas sur l'administration. C'est un avant/après total.",
  },
  {
    initials: "MR", name: "Marc Renault",     role: "Directeur Opérations · TransExpress (65 employés)",    stars: 5,
    result: "Taux d'erreur : 11% → 0,4%",
    text: "On était sceptiques — on est une entreprise logistique traditionnelle. Six mois plus tard, notre taux d'erreur commandes est passé de 11% à 0,4%. Les clients ont arrêté d'appeler pour se plaindre.",
  },
  {
    initials: "AK", name: "Aïcha Koné",       role: "Fondatrice · MediConsult (services de santé, 12 employés)", stars: 5,
    result: "Vue complète en 30 secondes",
    text: "Le dashboard me donne une vue complète de mon activité en 30 secondes chaque matin. Je prends de meilleures décisions maintenant qu'avec toute une équipe d'analystes. C'est remarquable.",
  },
  {
    initials: "YB", name: "Youssef Benali",   role: "DG · GroupeAtlas (distribution, 120 employés)",         stars: 5,
    result: "+38% de conversion web",
    text: "Après la refonte de notre parcours de commande et la mise en place du dashboard commercial, notre taux de conversion a augmenté de 38% en 3 mois. Le ROI était évident dès la 6ème semaine.",
  },
  {
    initials: "NC", name: "Nadia Chraibi",    role: "DRH · CabRH Plus (conseil RH, 35 employés)",            stars: 5,
    result: "Onboarding : 3 jours → 4 heures",
    text: "L'automatisation de notre onboarding a réduit le temps d'intégration de 3 jours à 4 heures. Les nouveaux collaborateurs sont opérationnels beaucoup plus vite et l'expérience est professionnelle.",
  },
  {
    initials: "HM", name: "Hassan Moussaoui", role: "Fondateur · TechBuild (BTP digital, 18 employés)",      stars: 5,
    result: "0 rapport manuel depuis 4 mois",
    text: "Plus un seul rapport manuel depuis 4 mois. Tout est généré automatiquement et distribué aux bons destinataires. On a récupéré l'équivalent de 2 jours de travail par semaine dans l'équipe.",
  },
];

const caseStudies = [
  {
    sector: "Logistique & Transport",
    company: "TransExpress — 65 employés",
    challenge: "Taux d'erreur de 11% sur les commandes, réclamations clients quotidiennes, rapports manuels chronophages.",
    solution: "Automatisation du traitement des commandes, synchronisation ERP-CRM, dashboard opérationnel temps réel.",
    results: [
      { metric: "11% → 0,4%", label: "taux d'erreur" },
      { metric: "-65%",        label: "réclamations clients" },
      { metric: "3h → 5 min", label: "rapports hebdo" },
    ],
    timeline: "3 mois",
  },
  {
    sector: "Retail & Commerce",
    company: "Atelier Lumière — 28 employés",
    challenge: "Facturation manuelle chronophage, relances clients oubliées, pas de visibilité sur la trésorerie en temps réel.",
    solution: "Automatisation complète de la facturation et des relances, dashboard trésorerie live, agent IA support client.",
    results: [
      { metric: "2 800€",  label: "économisés / mois" },
      { metric: "-80%",    label: "temps admin facturation" },
      { metric: "+22%",    label: "taux de recouvrement" },
    ],
    timeline: "6 semaines",
  },
  {
    sector: "Services de Santé",
    company: "MediConsult — 12 employés",
    challenge: "Données éparpillées dans 5 outils, impossible de voir la performance globale, décisions basées sur des intuitions.",
    solution: "Centralisation des données, dashboard exécutif temps réel, rapports automatiques hebdomadaires.",
    results: [
      { metric: "30 sec",       label: "pour voir toute l'activité" },
      { metric: "+15%",         label: "croissance du CA en 6 mois" },
      { metric: "5 outils → 1", label: "source de vérité unique" },
    ],
    timeline: "2 mois",
  },
];

const faqs = [
  { q: "Les résultats sont-ils garantis ?",       a: "Pas dans l'absolu — mais on commence par l'audit pour identifier exactement ce qui est atteignable dans votre contexte. On ne vend pas de promesses sans mesure : chaque sprint a des indicateurs de succès définis avant de démarrer." },
  { q: "Quel est le budget minimum ?",            a: "Un projet d'automatisation ciblé démarre à partir de 2 000 €. Une transformation complète est tarifée selon la complexité et le périmètre. L'audit gratuit vous donne un devis précis et sans surprise." },
  { q: "Combien de temps avant de voir un ROI ?", a: "Les premiers résultats arrivent en 2 à 4 semaines sur un périmètre ciblé. Le ROI complet sur un programme de transformation est visible à 3-6 mois. On construit une feuille de route par étapes pour que vous validiez avant d'aller plus loin." },
  { q: "Et si ça ne fonctionne pas pour nous ?",  a: "C'est pourquoi on commence par un sprint de 2 semaines avant tout engagement plus large. Si le premier livrable ne vous convainc pas, vous ne payez pas la suite. Notre modèle est construit sur la preuve, pas la promesse." },
];

export default function ResultatsPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pb-24 pt-36 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              Preuves &amp; Résultats
            </div>
            <h1 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[64px]">
              Des chiffres concrets, pas des promesses
            </h1>
            <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-500">
              Chaque résultat présenté ici a été obtenu par une vraie entreprise. On mesure tout avant, pendant et après.
            </p>
            <SquareButton href="/contact" accent="#2563eb">Obtenir un audit gratuit</SquareButton>
          </div>
        </div>
      </section>

      {/* ── ROI Stats ── */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 border-b border-white/10 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">Impact moyen</div>
            <h2 className="text-4xl font-black tracking-tight lg:text-[50px]">
              Ce que nos clients gagnent
            </h2>
          </div>
          <div className="grid gap-0 divide-y divide-white/5 lg:divide-y-0 lg:grid-cols-3 lg:divide-x">
            {roiMetrics.map((m) => (
              <div key={m.value} className="py-8 lg:py-0 lg:px-10 first:pl-0 last:pr-0">
                <div className="mb-2 text-[42px] font-black leading-none text-blue-400">{m.value}</div>
                <div className="mb-1 text-[14px] font-semibold text-white/70">{m.label}</div>
                <p className="text-[13px] leading-relaxed text-white/30">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 border-b border-slate-200 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Études de cas</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">
              Comment on l&apos;a fait, étape par étape
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="border border-slate-200 bg-white overflow-hidden">
                <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
                  <div className="mb-1 text-[11px] font-black uppercase tracking-widest text-blue-600">{cs.sector}</div>
                  <div className="font-black text-slate-800">{cs.company}</div>
                  <div className="mt-1 text-[12px] text-slate-400">Résultats en {cs.timeline}</div>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <div className="mb-2 text-[11px] font-black uppercase tracking-widest text-red-400">Problème</div>
                    <p className="text-[13px] leading-relaxed text-slate-600">{cs.challenge}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-[11px] font-black uppercase tracking-widest text-blue-500">Solution Kadrek</div>
                    <p className="text-[13px] leading-relaxed text-slate-600">{cs.solution}</p>
                  </div>
                  <div>
                    <div className="mb-3 text-[11px] font-black uppercase tracking-widest text-emerald-500">Résultats</div>
                    <div className="grid grid-cols-3 gap-2">
                      {cs.results.map((r) => (
                        <div key={r.label} className="border border-emerald-100 bg-emerald-50 p-2.5 text-center">
                          <div className="text-base font-black text-emerald-700">{r.metric}</div>
                          <div className="text-[10px] text-emerald-600">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 border-b border-slate-100 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Témoignages</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col border border-slate-200 bg-white p-6 hover:bg-slate-50 transition-colors">
                <div className="mb-3 inline-flex self-start items-center gap-1.5 border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] font-black text-emerald-700">
                  ✓ {t.result}
                </div>
                <div className="mb-3 text-yellow-400 tracking-wider">{"★".repeat(t.stars)}</div>
                <p className="flex-1 text-[14px] leading-relaxed text-slate-600 italic mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-blue-600 text-xs font-black text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-black text-slate-800">{t.name}</div>
                    <div className="text-[11px] text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financial Before/After ── */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 border-b border-slate-200 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Avant / Après</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">
              L&apos;impact financier en chiffres
            </h2>
            <p className="mt-4 text-lg text-slate-500">Exemple concret pour une PME de 20 personnes</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            <div className="border-l-4 border-red-400 bg-red-50 p-8">
              <p className="mb-6 text-[11px] font-black uppercase tracking-widest text-red-500">Sans digitalisation — coûts réels</p>
              <ul className="space-y-3">
                {[
                  ["3 200 €/mois", "admin & saisie manuelle"],
                  ["12%",          "taux d'erreur sur les commandes"],
                  ["5 jours",      "délai moyen de réponse client"],
                  ["3 jours",      "pour compiler le rapport mensuel"],
                  ["40%",          "du budget marketing gaspillé"],
                ].map(([v, l]) => (
                  <li key={l} className="flex items-center gap-3 text-[14px] text-slate-700">
                    <span className="flex-shrink-0 font-black text-red-400">✕</span>
                    <span className="font-black text-red-600">{v}</span>
                    <span className="text-slate-500">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-4 border-emerald-400 bg-emerald-50 p-8">
              <p className="mb-6 text-[11px] font-black uppercase tracking-widest text-emerald-600">Avec Kadrek — après 6 mois</p>
              <ul className="space-y-3">
                {[
                  ["800 €/mois",  "économie nette de 2 400 €/mois"],
                  ["0,3%",         "taux d'erreur — quasi zéro"],
                  ["Instantané",   "réponse client via agent IA"],
                  ["30 secondes",  "rapport généré automatiquement"],
                  ["100%",         "du budget marketing tracé"],
                ].map(([v, l]) => (
                  <li key={l} className="flex items-center gap-3 text-[14px] text-slate-700">
                    <span className="flex-shrink-0 font-black text-emerald-500">✓</span>
                    <span className="font-black text-emerald-700">{v}</span>
                    <span className="text-slate-500">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="mb-12 border-b border-slate-100 pb-8">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">FAQ</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900">Vos questions sur le ROI</h2>
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
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[50px]">Ces résultats peuvent être les vôtres</h2>
              <p className="text-lg text-white/50">Commencez par un audit gratuit. On identifie vos opportunités et on vous donne un plan concret — en 45 minutes.</p>
            </div>
            <SquareButton href="/contact" accent="#2563eb">Réserver mon audit gratuit</SquareButton>
          </div>
        </div>
      </section>

    </div>
  );
}
