import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export interface SolutionPageProps {
  eyebrow:      string;
  title:        string;
  subtitle:     string;
  heroIcon:     string;
  accentFrom:   string;
  accentTo:     string;
  bgFrom:       string;
  problem: {
    title:  string;
    intro:  string;
    points: string[];
  };
  benefits: {
    icon:  string;
    title: string;
    desc:  string;
  }[];
  useCases: {
    icon:      string;
    scenario:  string;
    challenge: string;
    solution:  string;
    result:    string;
  }[];
  features: {
    icon: string;
    name: string;
    desc: string;
  }[];
  gains: {
    label:  string;
    before: string;
    after:  string;
    delta:  string;
  }[];
  cta: {
    title:    string;
    subtitle: string;
  };
  relatedSolutions: {
    icon:  string;
    title: string;
    href:  string;
  }[];
}

export default function SolutionPage(p: SolutionPageProps) {
  const gradient = `from-[${p.accentFrom}] to-[${p.accentTo}]`;

  return (
    <div className="bg-white text-slate-900">

      {/* ══ HERO ══ */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${p.bgFrom} via-white to-slate-50 pb-24 pt-36`}>
        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0 opacity-40"
          style={{ backgroundImage: "radial-gradient(circle,#cbd5e1 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        {/* Glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full opacity-20 blur-3xl"
          style={{ background: `radial-gradient(circle, ${p.accentFrom}, transparent 70%)` }} />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-400">
                <Link href="/" className="hover:text-slate-600 transition-colors">Accueil</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href="/services" className="hover:text-slate-600 transition-colors">Solutions</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-slate-600 font-semibold">{p.eyebrow}</span>
              </nav>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-white"
                style={{ background: `linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})` }}>
                {p.heroIcon} {p.eyebrow}
              </div>

              <h1 className="mb-5 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[60px]">
                {p.title}
              </h1>
              <p className="mb-9 max-w-xl text-xl leading-relaxed text-slate-500">{p.subtitle}</p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[14px] font-black text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})` }}>
                  Obtenir un audit gratuit <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#use-cases"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-[14px] font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
                  Voir les cas d'usage ↓
                </a>
              </div>
            </div>

            {/* Hero visual card */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(0,0,0,.1)]">
                <div className="absolute -inset-1 -z-10 rounded-3xl opacity-20 blur-2xl"
                  style={{ background: `linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})` }} />
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                  style={{ background: `linear-gradient(135deg, ${p.accentFrom}22, ${p.accentTo}22)` }}>
                  {p.heroIcon}
                </div>
                <h3 className="mb-4 text-lg font-black text-slate-800">{p.eyebrow}</h3>
                <ul className="space-y-3">
                  {p.features.slice(0, 5).map((f) => (
                    <li key={f.name} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-[13px]">
                      <span className="text-lg">{f.icon}</span>
                      <span className="font-semibold text-slate-700">{f.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl px-4 py-3 text-center text-[12px] font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})` }}>
                  + {p.features.length - 5} fonctionnalités supplémentaires
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROBLEM ══ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-widest text-red-500">Le problème</div>
              <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-5xl">
                {p.problem.title}
              </h2>
              <p className="text-lg leading-relaxed text-slate-500">{p.problem.intro}</p>
            </div>
            <div className="space-y-3">
              {p.problem.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-red-100 bg-white px-5 py-4">
                  <span className="mt-0.5 font-black text-red-400 flex-shrink-0">✗</span>
                  <span className="text-[14px] text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BENEFITS ══ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
              Les bénéfices
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              Ce que vous gagnez concrètement
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {p.benefits.map((b) => (
              <div key={b.title}
                className="group rounded-2xl border border-slate-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_8px_30px_rgba(37,99,235,.07)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl bg-slate-50 group-hover:scale-105 transition-transform">
                  {b.icon}
                </div>
                <h3 className="mb-2 text-[16px] font-black text-slate-800">{b.title}</h3>
                <p className="text-[14px] leading-relaxed text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ USE CASES ══ */}
      <section id="use-cases" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
              Cas d'usage concrets
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              Comment nos clients l'utilisent
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              Des scénarios réels, des problèmes identifiables, des résultats mesurables.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {p.useCases.map((uc) => (
              <div key={uc.scenario}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/40 px-6 py-4">
                  <span className="mr-3 text-2xl">{uc.icon}</span>
                  <span className="font-black text-slate-800">{uc.scenario}</span>
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100 p-0">
                  {[
                    { label: "Problème",  text: uc.challenge, color: "text-red-600",     bg: "" },
                    { label: "Solution",  text: uc.solution,  color: "text-blue-600",    bg: "" },
                    { label: "Résultat",  text: uc.result,    color: "text-emerald-600", bg: "bg-emerald-50/40" },
                  ].map((col) => (
                    <div key={col.label} className={`p-4 ${col.bg}`}>
                      <div className={`mb-2 text-[10px] font-black uppercase tracking-widest ${col.color}`}>{col.label}</div>
                      <p className="text-[13px] leading-relaxed text-slate-600">{col.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
                Fonctionnalités
              </div>
              <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-5xl">
                Ce qui est inclus dans la solution
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-500">
                Chaque fonctionnalité a été pensée pour répondre à un problème concret dans votre quotidien opérationnel.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-black text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: `linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})` }}>
                Discuter de mon projet <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {p.features.map((f) => (
                <div key={f.name}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 p-4 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-200">
                  <span className="mt-0.5 flex-shrink-0 text-xl">{f.icon}</span>
                  <div>
                    <div className="text-[13px] font-black text-slate-800">{f.name}</div>
                    <div className="mt-0.5 text-[12px] text-slate-400">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PERFORMANCE GAINS ══ */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
              Gains de performance
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              L'impact avant / après en chiffres
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {p.gains.map((g) => (
              <div key={g.label} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="px-5 py-4">
                  <div className="mb-3 text-[12px] font-black uppercase tracking-widest text-slate-400">{g.label}</div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="rounded-lg border border-red-100 bg-red-50 px-3 py-1.5 text-sm font-black text-red-600">{g.before}</span>
                    <span className="text-slate-300 font-black">→</span>
                    <span className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-sm font-black text-emerald-600">{g.after}</span>
                  </div>
                </div>
                <div className="border-t border-slate-100 px-5 py-3 text-center text-[11px] font-black"
                  style={{ color: p.accentFrom }}>
                  {g.delta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-24 overflow-hidden relative"
        style={{ background: `linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)` }}>
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${p.accentFrom}, transparent 70%)` }} />
        <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <div className="mx-auto max-w-2xl">
            <div className="mb-5 text-5xl">{p.heroIcon}</div>
            <h2 className="mb-5 text-4xl font-black text-white lg:text-5xl">{p.cta.title}</h2>
            <p className="mb-10 text-xl text-white/60">{p.cta.subtitle}</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-[15px] font-black text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: `linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})` }}>
                Démarrer gratuitement <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-9 py-4 text-[15px] font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white">
                Voir toutes les solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ RELATED ══ */}
      {p.relatedSolutions.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <h3 className="mb-8 text-[13px] font-black uppercase tracking-widest text-slate-400 text-center">
              Solutions complémentaires
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {p.relatedSolutions.map((r) => (
                <Link key={r.title} href={r.href}
                  className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-[13px] font-bold text-slate-600 shadow-sm transition-all hover:border-blue-200 hover:text-blue-600 hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-base">{r.icon}</span> {r.title}
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
