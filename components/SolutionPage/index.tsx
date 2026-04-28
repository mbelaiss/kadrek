import { Link } from "@/navigation";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import SquareButton from "@/components/SquareButton";
import BenefitsSlider from "@/components/BenefitsSlider";
import SolutionHeroSlider from "@/components/SolutionHeroSlider";

export interface SolutionPageProps {
  eyebrow:    string;
  title:      string;
  subtitle:   string;
  heroIcon:   string;
  accentFrom: string;
  accentTo:   string;
  bgFrom:     string;
  problem: { title: string; intro: string; points: string[] };
  benefits:   { icon: string; img?: string; title: string; desc: string }[];
  useCases:   { icon: string; img?: string; scenario: string; challenge: string; solution: string; result: string }[];
  features:   { icon: string; name: string; desc: string }[];
  gains:      { label: string; before: string; after: string; delta: string }[];
  cta:        { title: string; subtitle: string };
  relatedSolutions: { icon: string; img?: string; title: string; href: string }[];
}

/* Microsoft-style tile — solid accent background, centered image or cross mark */
function ImgFrame({ src, size = 48, accent }: { src?: string; size?: number; accent: string }) {
  const s = `${size}px`;
  return (
    <div className="flex-shrink-0 overflow-hidden" style={{ width: s, height: s }}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <div className="relative w-full h-full flex items-center justify-center"
          style={{ background: accent }}>
          <div className="h-px w-1/2 absolute bg-white/40" />
          <div className="w-px h-1/2 absolute bg-white/40" />
        </div>
      )}
    </div>
  );
}

export default function SolutionPage(p: SolutionPageProps) {
  return (
    <div className="bg-white text-slate-900">

      {/* ══ HERO SLIDER ══ */}
      <SolutionHeroSlider
        eyebrow={p.eyebrow}
        title={p.title}
        subtitle={p.subtitle}
        accent={p.accentFrom}
        features={p.features}
        gains={p.gains}
        benefits={p.benefits}
        problem={p.problem}
      />

      {/* ══ PROBLEM ══ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-red-500">Le problème</div>
              <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[44px]">
                {p.problem.title}
              </h2>
              <p className="text-lg leading-relaxed text-slate-500">{p.problem.intro}</p>
            </div>
            <div className="space-y-2">
              {p.problem.points.map((point, i) => (
                <div key={i} className="flex items-start gap-4 border border-slate-200 bg-white px-5 py-4">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-red-100 text-[10px] font-black text-red-500">✕</span>
                  <span className="text-[14px] leading-relaxed text-slate-600">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BENEFITS ══ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Les bénéfices</div>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[44px]">
                Ce que vous gagnez concrètement
              </h2>
            </div>
            <p className="hidden lg:block max-w-xs text-[14px] text-slate-400">
              {p.benefits.length} bénéfices · utilisez les flèches pour naviguer
            </p>
          </div>
          <BenefitsSlider benefits={p.benefits} accent={p.accentFrom} />
        </div>
      </section>

      {/* ══ USE CASES ══ */}
      <section id="use-cases" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Cas d&apos;usage concrets</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[44px]">
              Comment nos clients l&apos;utilisent
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-500">
              Des scénarios réels, des problèmes identifiables, des résultats mesurables.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {p.useCases.map((uc) => (
              <div key={uc.scenario} className="border border-slate-200 bg-white overflow-hidden">
                <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-4">
                  <ImgFrame src={uc.img} size={36} accent={p.accentFrom} />
                  <span className="font-bold text-[14px] text-slate-800">{uc.scenario}</span>
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  {[
                    { label: "Problème", text: uc.challenge, color: "#ef4444" },
                    { label: "Solution", text: uc.solution,  color: p.accentFrom },
                    { label: "Résultat", text: uc.result,    color: "#10b981" },
                  ].map((col) => (
                    <div key={col.label} className="p-5">
                      <div className="mb-2 text-[10px] font-black uppercase tracking-widest" style={{ color: col.color }}>{col.label}</div>
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
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Fonctionnalités</div>
              <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[44px]">
                Ce qui est inclus dans la solution
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-500">
                Chaque fonctionnalité répond à un problème concret dans votre quotidien opérationnel.
              </p>
              <SquareButton href="/contact" accent={p.accentFrom}>
                Discuter de mon projet
              </SquareButton>
            </div>
            <div className="divide-y divide-slate-100 border border-slate-100 overflow-hidden">
              {p.features.map((f) => (
                <div key={f.name} className="flex items-start gap-4 bg-white px-5 py-4 hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: p.accentFrom }} />
                  <div>
                    <div className="text-[13px] font-semibold text-slate-800">{f.name}</div>
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
          <div className="mb-14">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Gains de performance</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[44px]">
              L&apos;impact avant / après en chiffres
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {p.gains.map((g) => (
              <div key={g.label} className="border border-slate-200 bg-white p-6">
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{g.label}</div>
                <div className="mb-1 text-[13px] font-semibold text-red-400 line-through">{g.before}</div>
                <div className="text-2xl font-black text-slate-900">{g.after}</div>
                <div className="mt-3 inline-block px-2.5 py-1 text-[11px] font-bold text-white"
                  style={{ background: p.accentFrom }}>
                  {g.delta}
                </div>
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
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/40">Prochaine étape</div>
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[44px]">{p.cta.title}</h2>
              <p className="text-lg text-white/50">{p.cta.subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <SquareButton href="/contact" accent={p.accentFrom}>
                Démarrer maintenant
              </SquareButton>
              <SquareButton href="/services" variant="dark" accent="#334155">
                Toutes les solutions
              </SquareButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══ RELATED ══ */}
      {p.relatedSolutions.length > 0 && (
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mr-2">
                Solutions complémentaires
              </span>
              {p.relatedSolutions.map((r) => (
                <Link key={r.title} href={r.href}
                  className="inline-flex items-center gap-3 border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center bg-blue-600">
                    <div className="h-px w-2.5 bg-white/60 absolute" />
                    <div className="w-px h-2.5 bg-white/60 absolute" />
                  </div>
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
