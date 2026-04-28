import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import SquareButton from "@/components/SquareButton";

export const metadata: Metadata = {
  title: "Kadrek | Digital Growth, Automation & AI",
  description: "Kadrek transforme les entreprises grâce à la data, l'IA et l'automatisation. Résultats concrets en 90 jours.",
};

const services = [
  { title: "Data & Analytics",       href: "/solutions/data-analytics",     desc: "Dashboards temps réel, KPI clairs, décisions basées sur des faits.", color: "#2563eb" },
  { title: "Agents IA",              href: "/solutions/agents-ia",          desc: "Support client, triage email, rapports automatiques — 24h/24.", color: "#7c3aed" },
  { title: "Automatisation",         href: "/solutions/automatisation",     desc: "Processus zéro friction. Factures, stocks, onboarding automatisés.", color: "#0891b2" },
  { title: "Présence & SEO",         href: "/solutions/presence-seo",       desc: "SEO, site web haute performance, réputation en ligne.", color: "#2563eb" },
  { title: "Formation IA",           href: "/solutions/formation-ia",       desc: "Votre équipe, augmentée par l'IA. Adoption rapide, résultats durables.", color: "#7c3aed" },
  { title: "Interfaces & Dashboards",href: "/solutions/interfaces-clients", desc: "Interfaces sur-mesure. Un écran, toute votre activité.", color: "#0891b2" },
];

const stats = [
  { value: "40%",  label: "réduction des coûts opérationnels" },
  { value: "15h",  label: "économisées par employé / semaine" },
  { value: "3.5×", label: "retour sur investissement moyen" },
  { value: "90j",  label: "pour voir les premiers résultats" },
];

const testimonials = [
  { initials: "SL", name: "Sophie Laurent",  role: "CEO · Atelier Lumière",              text: "La facturation entièrement automatisée nous a économisé 2 800 € le premier mois. L'équipe est enfin concentrée sur ce qui compte." },
  { initials: "MR", name: "Marc Renault",    role: "Directeur Opérations · TransExpress", text: "Notre taux d'erreur est passé de 11 % à 0,4 % en 6 mois. Les clients ont arrêté d'appeler pour se plaindre." },
  { initials: "AK", name: "Aïcha Koné",      role: "Fondatrice · MediConsult",            text: "Je vois toute mon activité en 30 secondes chaque matin. Je prends de meilleures décisions qu'avec toute une équipe d'analystes." },
];

const process = [
  { num: "01", title: "Diagnostic",         desc: "45 min pour cartographier vos processus, identifier les goulots et prioriser les gains rapides." },
  { num: "02", title: "Sprint de 2 semaines",  desc: "On livre un premier résultat concret et mesurable — automatisation, dashboard ou agent IA." },
  { num: "03", title: "Scale & intégration",   desc: "On industrialise ce qui marche, on connecte vos outils et on forme vos équipes." },
  { num: "04", title: "Optimisation continue", desc: "Amélioration continue basée sur les données terrain. Vos systèmes s'améliorent chaque mois." },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900">

      {/* ══ HERO SLIDER ══ */}
      <HeroSlider />

      {/* ══ TRUST BAR ══ */}
      <div className="border-y border-slate-100 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <p className="text-[12px] font-bold uppercase tracking-widest text-slate-400">Résultats obtenus par nos clients</p>
          <div className="flex flex-wrap items-center gap-8">
            {stats.map((s) => (
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
                Solutions
              </div>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[50px]">
                Tout ce dont votre entreprise<br />a besoin pour accélérer
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-slate-500 lg:ml-auto">
              Six domaines d&apos;expertise, un seul objectif : rendre votre organisation plus rapide, plus intelligente et plus rentable.
            </p>
          </div>

          {/* Microsoft product tile grid */}
          <div className="grid gap-px bg-slate-100 border border-slate-100 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} href={s.href}
                className="group flex flex-col bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,.08)] transition-shadow duration-200">
                {/* Visual area — Microsoft tile top */}
                <div className="flex h-44 items-center justify-center border-b border-slate-100"
                  style={{ background: `${s.color}08` }}>
                  <div className="flex h-14 w-14 items-center justify-center"
                    style={{ background: s.color }}>
                    <div className="h-px w-6 bg-white/60 absolute" />
                    <div className="w-px h-6 bg-white/60 absolute" />
                  </div>
                </div>
                {/* Content area */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-[16px] font-black text-slate-900">{s.title}</h3>
                  <p className="flex-1 text-[14px] leading-relaxed text-slate-500">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                    En savoir plus <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <SquareButton href="/services" accent="#2563eb">
              Voir toutes nos solutions
            </SquareButton>
          </div>
        </div>
      </section>

      {/* ══ METHOD ══ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 border-b border-slate-200 pb-10">
            <div className="mb-4 inline-block bg-slate-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              Méthode Kadrek
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">
              Simple, rapide, mesurable
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-500">
              Pas de projet fleuve. On livre une première valeur en 2 semaines puis on optimise.
            </p>
          </div>

          <div className="grid gap-px bg-slate-200 border border-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.num} className="relative bg-white p-8 hover:bg-slate-50 transition-colors">
                {i < process.length - 1 && (
                  <div className="absolute right-0 top-8 hidden translate-x-1/2 z-10 bg-slate-200 lg:block">
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                )}
                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-blue-600 text-[13px] font-black text-white">
                  {step.num}
                </div>
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
              {/* Left */}
              <div className="border-b border-slate-200 p-10 lg:border-b-0 lg:border-r lg:p-14">
                <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                  Comprendre la digitalisation
                </div>
                <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900">
                  Votre entreprise perd-elle de l&apos;argent sans le savoir ?
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-slate-500">
                  Les tâches manuelles, les erreurs de saisie et les données éparpillées coûtent aux PME l&apos;équivalent de 1 à 2 postes par an.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Ce qu'est réellement la digitalisation",
                    "Pourquoi agir maintenant (avant vos concurrents)",
                    "La comparaison avant / après en chiffres",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px] font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 flex-none text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <SquareButton href="/digitalisation" accent="#2563eb">Lire le guide complet</SquareButton>
              </div>

              {/* Right — before/after */}
              <div className="flex items-center bg-slate-50 p-8 lg:p-12">
                <div className="w-full divide-y divide-slate-200">
                  {[
                    { ba: "Avant", item: "3 200 €/mois en admin manuel",       red: true },
                    { ba: "Après", item: "800 €/mois · économie de 2 400 €",   red: false },
                    { ba: "Avant", item: "12% taux d'erreur sur les commandes", red: true },
                    { ba: "Après", item: "0,3% taux d'erreur — quasi zéro",    red: false },
                    { ba: "Avant", item: "5 jours délai de réponse client",    red: true },
                    { ba: "Après", item: "Réponse instantanée via agent IA",   red: false },
                  ].map((row, i) => (
                    <div key={i} className={`flex items-center gap-4 px-5 py-4 ${row.red ? "bg-white" : "bg-white"}`}>
                      <span className={`w-12 flex-shrink-0 text-[10px] font-black uppercase tracking-widest ${row.red ? "text-red-400" : "text-emerald-500"}`}>
                        {row.ba}
                      </span>
                      <span className={`text-[13px] font-semibold ${row.red ? "text-slate-500 line-through decoration-red-300" : "text-slate-800"}`}>
                        {row.item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 border-b border-slate-200 pb-10">
            <div className="mb-4 inline-block bg-slate-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              Témoignages clients
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">
              Ils l&apos;ont fait. Voici ce qu&apos;ils en disent.
            </h2>
          </div>

          <div className="grid gap-px bg-slate-200 border border-slate-200 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col bg-white p-8">
                <div className="mb-4 text-yellow-400 tracking-wider text-sm">★★★★★</div>
                <p className="flex-1 text-[15px] leading-relaxed text-slate-600 italic mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
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

          <div className="mt-10 text-center">
            <Link href="/resultats"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-blue-600 hover:gap-3 transition-all">
              Voir tous les résultats <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA BAND ══ */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">Prochaine étape</div>
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[50px]">
                Prêt à passer à la vitesse supérieure ?
              </h2>
              <p className="mb-5 text-lg text-white/50">
                Un diagnostic de 45 minutes. On identifie vos plus grandes opportunités et on vous donne un plan d&apos;action concret.
              </p>
              <div className="flex flex-wrap gap-4 text-[13px] text-white/40">
                {["Sans engagement", "Premiers résultats en 2 semaines", "Feuille de route personnalisée"].map((f) => (
                  <span key={f} className="flex items-center gap-1.5">
                    <span className="text-blue-400 font-bold">✓</span> {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <SquareButton href="/contact" accent="#2563eb">
                Demander un diagnostic
              </SquareButton>
              <SquareButton href="/services" variant="dark" accent="#334155">
                Explorer nos solutions
              </SquareButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
