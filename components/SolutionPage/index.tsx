import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface SolutionPageProps {
  eyebrow:    string;
  title:      string;
  subtitle:   string;
  heroIcon:   string;
  accentFrom: string;
  accentTo:   string;
  bgFrom:     string;
  problem: { title: string; intro: string; points: string[] };
  benefits:   { icon: string; title: string; desc: string }[];
  useCases:   { icon: string; scenario: string; challenge: string; solution: string; result: string }[];
  features:   { icon: string; name: string; desc: string }[];
  gains:      { label: string; before: string; after: string; delta: string }[];
  cta:        { title: string; subtitle: string };
  relatedSolutions: { icon: string; title: string; href: string }[];
}

export default function SolutionPage(p: SolutionPageProps) {
  return (
    <div className="bg-white text-slate-900">

      {/* ══ HERO ══ */}
      <section className="relative bg-white pt-32 pb-0 border-b border-slate-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-2 text-[12px] text-slate-400">
            <Link href="/" className="hover:text-slate-600 transition-colors">Accueil</Link>
            <span className="mx-1 text-slate-200">/</span>
            <Link href="/services" className="hover:text-slate-600 transition-colors">Solutions</Link>
            <span className="mx-1 text-slate-200">/</span>
            <span className="text-slate-600">{p.eyebrow}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-0 items-end">
            {/* Left — headline */}
            <div className="pb-16">
              <div
                className="mb-6 h-[3px] w-12 rounded-full"
                style={{ background: p.accentFrom }}
              />
              <h1 className="mb-7 text-[52px] font-black leading-[1.04] tracking-tight text-slate-900 lg:text-[64px]">
                {p.title}
              </h1>
              <p className="mb-10 max-w-lg text-[18px] leading-relaxed text-slate-500">
                {p.subtitle}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-none px-8 py-4 text-[14px] font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: p.accentFrom }}
                >
                  Audit gratuit <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#resultats"
                  className="text-[14px] font-semibold text-slate-400 underline-offset-4 hover:text-slate-700 hover:underline transition-colors"
                >
                  Voir les résultats →
                </a>
              </div>
            </div>

            {/* Right — large stat block */}
            <div className="hidden lg:flex flex-col border-l border-slate-100 pl-14 pb-16 gap-10">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Ce que vous gagnez
              </div>
              {p.gains.slice(0, 3).map((g) => (
                <div key={g.label} className="flex items-baseline gap-5">
                  <span className="text-[42px] font-black leading-none tracking-tight" style={{ color: p.accentFrom }}>
                    {g.after}
                  </span>
                  <div>
                    <div className="text-[13px] font-semibold text-slate-700">{g.label}</div>
                    <div className="text-[12px] text-slate-400 line-through">{g.before}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${p.accentFrom}, ${p.accentTo}, transparent)` }} />
      </section>

      {/* ══ PROBLEM ══ */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-start">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-red-400">
                Le problème
              </div>
              <h2 className="mb-6 text-[40px] font-black leading-tight tracking-tight lg:text-[50px]">
                {p.problem.title}
              </h2>
              <p className="text-[17px] leading-relaxed text-white/50">
                {p.problem.intro}
              </p>
            </div>
            <div className="space-y-0 divide-y divide-white/5">
              {p.problem.points.map((point, i) => (
                <div key={i} className="flex items-start gap-5 py-4">
                  <span className="mt-1 flex-shrink-0 text-[11px] font-black text-red-500/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] leading-relaxed text-white/60">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BENEFITS ══ */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-20 flex items-end justify-between border-b border-slate-100 pb-8">
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Bénéfices</div>
              <h2 className="text-[40px] font-black tracking-tight text-slate-900 lg:text-[50px]">
                Ce que vous gagnez concrètement
              </h2>
            </div>
            <Link href="/contact"
              className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold text-slate-400 hover:text-slate-700 transition-colors">
              Parler à un expert <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 divide-y divide-slate-100 lg:divide-y-0">
            {p.benefits.map((b, i) => (
              <div key={b.title}
                className={`flex gap-8 py-8 ${i % 2 === 0 ? "lg:border-r lg:border-slate-100 lg:pr-12" : "lg:pl-12"} ${i >= 2 ? "border-t border-slate-100" : ""}`}>
                <div className="text-[32px] font-black leading-none tabular-nums text-slate-100 flex-shrink-0 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="mb-2 text-[16px] font-black text-slate-900">{b.title}</h3>
                  <p className="text-[14px] leading-relaxed text-slate-500">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ USE CASES ══ */}
      <section id="use-cases" className="bg-slate-50 py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Cas concrets</div>
            <h2 className="text-[40px] font-black tracking-tight text-slate-900 lg:text-[50px]">
              Comment nos clients l&apos;utilisent
            </h2>
          </div>

          <div className="space-y-4">
            {p.useCases.map((uc, i) => (
              <div key={uc.scenario} className="bg-white border border-slate-100 overflow-hidden">
                {/* Header row */}
                <div className="flex items-center gap-6 px-8 py-5 border-b border-slate-100">
                  <span className="text-[11px] font-black tabular-nums text-slate-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-bold text-slate-800">{uc.scenario}</span>
                </div>
                {/* Three columns */}
                <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                  <div className="px-8 py-6">
                    <div className="mb-3 text-[10px] font-black uppercase tracking-widest text-red-400">Problème</div>
                    <p className="text-[13px] leading-relaxed text-slate-600">{uc.challenge}</p>
                  </div>
                  <div className="px-8 py-6">
                    <div className="mb-3 text-[10px] font-black uppercase tracking-widest" style={{ color: p.accentFrom }}>Solution</div>
                    <p className="text-[13px] leading-relaxed text-slate-600">{uc.solution}</p>
                  </div>
                  <div className="px-8 py-6 bg-slate-50/50">
                    <div className="mb-3 text-[10px] font-black uppercase tracking-widest text-emerald-500">Résultat</div>
                    <p className="text-[13px] leading-relaxed text-slate-700 font-medium">{uc.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[380px_1fr] gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Fonctionnalités</div>
              <h2 className="mb-5 text-[36px] font-black leading-tight tracking-tight text-slate-900">
                Ce qui est inclus dans la solution
              </h2>
              <p className="mb-8 text-[15px] leading-relaxed text-slate-500">
                Chaque fonctionnalité répond à un problème concret dans votre quotidien opérationnel.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: p.accentFrom }}>
                Discuter de mon projet <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {p.features.map((f, i) => (
                <div key={f.name} className="flex items-start gap-6 py-5">
                  <span className="flex-shrink-0 text-[11px] font-black tabular-nums text-slate-200 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-[14px] text-slate-800">{f.name}</span>
                    <span className="mx-2 text-slate-200">—</span>
                    <span className="text-[14px] text-slate-400">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PERFORMANCE GAINS ══ */}
      <section id="resultats" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-8">
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/30">Impact mesuré</div>
              <h2 className="text-[40px] font-black tracking-tight lg:text-[50px]">
                Avant / après en chiffres
              </h2>
            </div>
          </div>
          <div className="grid gap-0 divide-y divide-white/5 lg:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {p.gains.map((g) => (
              <div key={g.label} className="px-0 py-8 lg:px-10 lg:py-0 first:pl-0 last:pr-0">
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/30">{g.label}</div>
                <div className="mb-0.5 text-[13px] text-white/25 line-through">{g.before}</div>
                <div className="text-[38px] font-black leading-tight" style={{ color: p.accentFrom === "#0f766e" ? "#2dd4bf" : p.accentFrom }}>
                  {g.after}
                </div>
                <div className="mt-2 text-[12px] font-semibold text-white/40">{g.delta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-28 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
            <div>
              <div
                className="mb-6 h-[3px] w-10"
                style={{ background: p.accentFrom }}
              />
              <h2 className="mb-4 text-[40px] font-black tracking-tight text-slate-900 lg:text-[52px] max-w-xl">
                {p.cta.title}
              </h2>
              <p className="max-w-lg text-[17px] leading-relaxed text-slate-500">{p.cta.subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: p.accentFrom }}>
                Démarrer gratuitement <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services"
                className="text-[13px] font-semibold text-slate-400 hover:text-slate-700 transition-colors">
                Voir toutes les solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ RELATED ══ */}
      {p.relatedSolutions.length > 0 && (
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mr-4">
                Solutions complémentaires
              </span>
              {p.relatedSolutions.map((r) => (
                <Link key={r.title} href={r.href}
                  className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50">
                  {r.title}
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
