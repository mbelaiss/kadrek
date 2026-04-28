import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

export const metadata: Metadata = {
  title: "Kadrek | Digital Growth, Automation & AI",
  description: "Kadrek transforme les entreprises grâce à la data, l'IA et l'automatisation. Résultats concrets en 90 jours.",
};

const services = [
  { img: "", title: "Data & Analytics",       href: "/solutions/data-analytics",     desc: "Dashboards temps réel, KPI clairs, décisions basées sur des faits.", color: "#2563eb" },
  { img: "", title: "Agents IA",               href: "/solutions/agents-ia",          desc: "Support client, triage email, rapports automatiques — 24h/24.", color: "#7c3aed" },
  { img: "", title: "Automatisation",          href: "/solutions/automatisation",     desc: "Processus zéro friction. Factures, stocks, onboarding automatisés.", color: "#0891b2" },
  { img: "", title: "Présence & SEO",          href: "/solutions/presence-seo",       desc: "SEO, site web haute performance, réputation en ligne.", color: "#2563eb" },
  { img: "", title: "Formation IA",            href: "/solutions/formation-ia",       desc: "Votre équipe, augmentée par l'IA. Adoption rapide, résultats durables.", color: "#7c3aed" },
  { img: "", title: "Interfaces & Dashboards", href: "/solutions/interfaces-clients", desc: "Interfaces sur-mesure. Un écran, toute votre activité.", color: "#0891b2" },
];

const stats = [
  { value: "40%",  label: "réduction des coûts opérationnels" },
  { value: "15h",  label: "économisées par employé / semaine" },
  { value: "3.5×", label: "retour sur investissement moyen" },
  { value: "90j",  label: "pour voir les premiers résultats" },
];

const testimonials = [
  { initials: "SL", name: "Sophie Laurent",  role: "CEO · Atelier Lumière",        text: "La facturation entièrement automatisée nous a économisé 2 800 € le premier mois. L'équipe est enfin concentrée sur ce qui compte." },
  { initials: "MR", name: "Marc Renault",    role: "Directeur Opérations · TransExpress", text: "Notre taux d'erreur est passé de 11 % à 0,4 % en 6 mois. Les clients ont arrêté d'appeler pour se plaindre." },
  { initials: "AK", name: "Aïcha Koné",      role: "Fondatrice · MediConsult",      text: "Je vois toute mon activité en 30 secondes chaque matin. Je prends de meilleures décisions qu'avec toute une équipe d'analystes." },
];

const process = [
  { num: "01", title: "Audit gratuit",      desc: "45 min pour cartographier vos processus, identifier les goulots et prioriser les gains rapides." },
  { num: "02", title: "Sprint de 2 semaines", desc: "On livre un premier résultat concret et mesurable — automatisation, dashboard ou agent IA." },
  { num: "03", title: "Scale & intégration", desc: "On industrialise ce qui marche, on connecte vos outils et on forme vos équipes." },
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
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-blue-600">
                Solutions
              </div>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-5xl">
                Tout ce dont votre entreprise<br />a besoin pour{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  accélérer
                </span>
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-slate-500 lg:ml-auto">
              Six domaines d'expertise, un seul objectif : rendre votre organisation plus rapide, plus intelligente et plus rentable.
            </p>
          </div>

          <div className="grid gap-px bg-slate-100 border border-slate-100 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} href={s.href}
                className="group bg-white p-7 hover:bg-slate-50 transition-colors duration-200 flex flex-col">
                {/* Square image frame */}
                <div className="mb-5 h-12 w-12 flex-shrink-0 overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center"
                  style={{ background: s.img ? undefined : `${s.color}08` }}>
                  {s.img
                    ? <img src={s.img} alt={s.title} className="w-full h-full object-cover" /> /* eslint-disable-line @next/next/no-img-element */
                    : <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-px w-1/2" style={{ background: `${s.color}50` }} />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-px h-1/2" style={{ background: `${s.color}50` }} />
                        </div>
                      </div>
                  }
                </div>
                <h3 className="mb-2.5 text-[16px] font-black text-slate-900">{s.title}</h3>
                <p className="mb-5 flex-1 text-[14px] leading-relaxed text-slate-500">{s.desc}</p>
                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-400 group-hover:text-slate-700 transition-colors">
                  En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-black text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
              Voir toutes nos solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY KADREK / METHOD ══ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
              Méthode Kadrek
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              Simple, rapide,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">mesurable</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              Pas de projet fleuve. On livre une première valeur en 2 semaines puis on optimise.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.num} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                {i < process.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <ChevronRight className="h-5 w-5 text-slate-300" />
                  </div>
                )}
                <div className="mb-4 text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {step.num}
                </div>
                <h3 className="mb-2 text-base font-black text-slate-800">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIGITALISATION TEASER ══ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50 shadow-sm">
            <div className="grid lg:grid-cols-2">
              {/* Left */}
              <div className="p-10 lg:p-14">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-blue-600">
                  Comprendre la digitalisation
                </div>
                <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900">
                  Votre entreprise perd-elle de l'argent sans le savoir ?
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-slate-500">
                  Les tâches manuelles, les erreurs de saisie et les données éparpillées coûtent aux PME l'équivalent de 1 à 2 postes par an. Découvrez comment la transformation digitale change cela concrètement.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Ce qu'est réellement la digitalisation",
                    "Pourquoi agir maintenant (avant vos concurrents)",
                    "La comparaison avant / après en chiffres",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px] font-semibold text-slate-700">
                      <CheckCircle2 className="h-5 w-5 flex-none text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/digitalisation"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-[14px] font-black text-white shadow-[0_4px_20px_rgba(37,99,235,.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,.4)]">
                  Lire le guide complet <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Right — before/after */}
              <div className="flex items-center p-8 lg:p-12">
                <div className="w-full space-y-3">
                  {[
                    { ba: "Avant", item: "3 200 €/mois en admin manuel",        c: "bg-red-50 border-red-100 text-red-700" },
                    { ba: "Après", item: "800 €/mois · économie de 2 400 €",    c: "bg-emerald-50 border-emerald-100 text-emerald-700" },
                    { ba: "Avant", item: "12% taux d'erreur sur les commandes", c: "bg-red-50 border-red-100 text-red-700" },
                    { ba: "Après", item: "0,3% taux d'erreur — quasi zéro",     c: "bg-emerald-50 border-emerald-100 text-emerald-700" },
                    { ba: "Avant", item: "5 jours délai de réponse client",     c: "bg-red-50 border-red-100 text-red-700" },
                    { ba: "Après", item: "Réponse instantanée via agent IA",    c: "bg-emerald-50 border-emerald-100 text-emerald-700" },
                  ].map((row, i) => (
                    <div key={i} className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${row.c}`}>
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60 w-10 flex-shrink-0">{row.ba}</span>
                      <span className="text-sm font-semibold">{row.item}</span>
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
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-yellow-700">
              Témoignages clients
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              Ils l'ont fait.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Voici ce qu'ils en disent.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="mb-4 text-yellow-400 tracking-wider">★★★★★</div>
                <p className="flex-1 text-[15px] leading-relaxed text-slate-600 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-black text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-800">{t.name}</div>
                    <div className="text-[12px] text-slate-400">{t.role}</div>
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
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-5 text-4xl font-black text-white lg:text-5xl">
              Prêt à passer à la vitesse supérieure ?
            </h2>
            <p className="mb-10 text-lg text-white/60">
              Un audit gratuit de 45 minutes. On identifie vos plus grandes opportunités et on vous donne un plan d'action concret — sans engagement.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-4 text-[14px] font-black text-white shadow-[0_4px_24px_rgba(34,211,238,.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(34,211,238,.45)]">
                Réserver mon audit gratuit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-[14px] font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white">
                Explorer nos solutions
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-[13px] text-white/40">
              {["✓ Gratuit et sans engagement", "✓ Premiers résultats en 2 semaines", "✓ Feuille de route personnalisée"].map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
