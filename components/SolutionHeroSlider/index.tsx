"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import SquareButton from "@/components/SquareButton";

interface Feature { name: string; desc: string }
interface Gain    { label: string; before: string; after: string; delta: string }
interface Benefit { title: string; desc: string }
interface Problem { title: string; intro: string; points: string[] }

export interface SolutionHeroSliderProps {
  eyebrow:  string;
  title:    string;
  subtitle: string;
  accent:   string;
  features: Feature[];
  gains:    Gain[];
  benefits: Benefit[];
  problem:  Problem;
  locale?:  string;
}

const T = {
  fr: {
    tags:            ["Présentation", "Résultats", "Le problème"],
    featuresLabel:   "Fonctionnalités incluses",
    moreFeatures:    (n: number) => `+ ${n} fonctionnalité${n > 1 ? "s" : ""} supplémentaire${n > 1 ? "s" : ""}`,
    impactBadge:     "Impact mesurable",
    impactTitle:     "L’impact avant / après en chiffres",
    impactDesc:      "Chaque résultat ci-contre a été mesuré chez de vraies entreprises. On commence par l’audit pour établir votre baseline.",
    roiBtn:          "Calculer mon ROI",
    casesBtn:        "Voir les études de cas",
    gainsLabel:      "Gains de performance",
    problemBadge:    "Vous reconnaissez-vous ?",
    solveBtn:        "Résoudre ce problème",
    howBtn:          "Voir comment",
    symptomsLabel:   "Symptômes fréquents",
    kadrekSolves:    "Kadrek résout chacun de ces points",
    diagBtn:         "Demander un diagnostic",
    useCasesBtn:     "Voir les cas d’usage",
    home:            "Accueil",
    solutions:       "Solutions",
  },
  en: {
    tags:            ["Overview", "Results", "The problem"],
    featuresLabel:   "Included features",
    moreFeatures:    (n: number) => `+ ${n} additional feature${n > 1 ? "s" : ""}`,
    impactBadge:     "Measurable impact",
    impactTitle:     "Before / after impact in numbers",
    impactDesc:      "Every result shown has been measured at real businesses. We start with an audit to establish your baseline.",
    roiBtn:          "Calculate my ROI",
    casesBtn:        "View case studies",
    gainsLabel:      "Performance gains",
    problemBadge:    "Do you recognise yourself?",
    solveBtn:        "Solve this problem",
    howBtn:          "See how",
    symptomsLabel:   "Common symptoms",
    kadrekSolves:    "Kadrek addresses every one of these points",
    diagBtn:         "Request a diagnostic",
    useCasesBtn:     "View use cases",
    home:            "Home",
    solutions:       "Solutions",
  },
};

export default function SolutionHeroSlider(p: SolutionHeroSliderProps) {
  const [slide,  setSlide]  = useState(0);
  const [paused, setPaused] = useState(false);

  const t = p.locale === "en" ? T.en : T.fr;

  const slides = [
    /* ── 1. Overview ── */
    {
      tag: t.tags[0],
      left: (
        <div>
          <div className="mb-5 inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white"
            style={{ background: p.accent }}>
            {p.eyebrow}
          </div>
          <h1 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[58px]">
            {p.title}
          </h1>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-500">{p.subtitle}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <SquareButton href="/contact" accent={p.accent}>{t.diagBtn}</SquareButton>
            <SquareButton href="#use-cases" accent="#64748b">{t.useCasesBtn}</SquareButton>
          </div>
        </div>
      ),
      right: (
        <div className="border border-slate-200 bg-white overflow-hidden">
          <div className="border-b border-slate-100 px-6 py-4" style={{ borderLeftWidth: 4, borderLeftColor: p.accent }}>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">{t.featuresLabel}</div>
          </div>
          <ul className="divide-y divide-slate-100">
            {p.features.slice(0, 5).map((f) => (
              <li key={f.name} className="flex items-center gap-4 px-6 py-3.5">
                <div className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center" style={{ background: p.accent }}>
                  <div className="absolute h-px w-3 bg-white/50" />
                  <div className="absolute w-px h-3 bg-white/50" />
                </div>
                <span className="text-[13px] font-semibold text-slate-700">{f.name}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-slate-100 px-6 py-3 text-[12px] font-semibold text-slate-400">
            {t.moreFeatures(Math.max(0, p.features.length - 5))}
          </div>
        </div>
      ),
    },

    /* ── 2. Gains ── */
    {
      tag: t.tags[1],
      left: (
        <div>
          <div className="mb-5 inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white"
            style={{ background: p.accent }}>
            {t.impactBadge}
          </div>
          <h2 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[58px]">
            {t.impactTitle}
          </h2>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-500">
            {t.impactDesc}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <SquareButton href="/contact" accent={p.accent}>{t.roiBtn}</SquareButton>
            <SquareButton href="/resultats" accent="#64748b">{t.casesBtn}</SquareButton>
          </div>
        </div>
      ),
      right: (
        <div className="border border-slate-200 bg-white overflow-hidden">
          <div className="border-b border-slate-100 px-6 py-4" style={{ borderLeftWidth: 4, borderLeftColor: p.accent }}>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">{t.gainsLabel}</div>
          </div>
          <div className="divide-y divide-slate-100">
            {p.gains.slice(0, 4).map((g) => (
              <div key={g.label} className="flex items-center justify-between px-6 py-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1">{g.label}</div>
                  <div className="text-[13px] font-semibold text-red-400 line-through">{g.before}</div>
                </div>
                <div className="text-right">
                  <div className="text-[22px] font-black text-slate-900">{g.after}</div>
                  <div className="inline-block px-2.5 py-0.5 text-[11px] font-black text-white mt-1" style={{ background: p.accent }}>
                    {g.delta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    /* ── 3. Problem ── */
    {
      tag: t.tags[2],
      left: (
        <div>
          <div className="mb-5 inline-block bg-red-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
            {t.problemBadge}
          </div>
          <h2 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[58px]">
            {p.problem.title}
          </h2>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-500">{p.problem.intro}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <SquareButton href="/contact" accent={p.accent}>{t.solveBtn}</SquareButton>
            <SquareButton href="#use-cases" accent="#64748b">{t.howBtn}</SquareButton>
          </div>
        </div>
      ),
      right: (
        <div className="border border-slate-200 bg-white overflow-hidden">
          <div className="border-b border-slate-100 bg-red-50 px-6 py-4" style={{ borderLeftWidth: 4, borderLeftColor: "#ef4444" }}>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-red-400">{t.symptomsLabel}</div>
          </div>
          <div className="divide-y divide-slate-100">
            {p.problem.points.slice(0, 5).map((point, i) => (
              <div key={i} className="flex items-start gap-4 px-6 py-4">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-red-100 text-[10px] font-black text-red-500">✕</span>
                <span className="text-[13px] leading-relaxed text-slate-600">{point}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-100 bg-slate-50 px-6 py-3">
            <div className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: p.accent }}>
              <CheckCircle2 className="h-4 w-4" />
              {t.kadrekSolves}
            </div>
          </div>
        </div>
      ),
    },
  ];

  const next = useCallback(() => setSlide((s) => (s + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setSlide((s) => (s - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    const tm = setInterval(next, 6000);
    return () => clearInterval(tm);
  }, [paused, next]);

  const current = slides[slide];

  return (
    <section
      className="relative overflow-hidden bg-white pb-24 pt-36 border-b border-slate-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
      {/* Accent glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] opacity-10 blur-3xl"
        style={{ background: `radial-gradient(circle, ${p.accent}, transparent 70%)` }} />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Breadcrumb + tab nav */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex items-center gap-2 text-[13px] text-slate-400">
            <a href="/" className="hover:text-slate-600 transition-colors">{t.home}</a>
            <span className="text-slate-200">/</span>
            <a href="/services" className="hover:text-slate-600 transition-colors">{t.solutions}</a>
            <span className="text-slate-200">/</span>
            <span className="font-medium text-slate-600">{p.eyebrow}</span>
          </nav>

          {/* Slide tabs */}
          <div className="flex items-center gap-1">
            {slides.map((s, i) => (
              <button key={s.tag} onClick={() => setSlide(i)}
                className="px-3 py-1.5 text-[11px] font-black uppercase tracking-widest transition-all"
                style={i === slide
                  ? { background: p.accent, color: "#fff" }
                  : { background: "#f1f5f9", color: "#94a3b8" }}>
                {s.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Slide content */}
        <div key={slide} className="grid items-center gap-16 lg:grid-cols-[1fr_400px] animate-fadeInUp">
          <div>{current.left}</div>
          <div className="hidden lg:block">{current.right}</div>
        </div>

        {/* Controls */}
        <div className="mt-14 flex items-center justify-between border-t border-slate-100 pt-6">
          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width:      i === slide ? 32 : 10,
                  height:     10,
                  background: i === slide ? p.accent : "#e2e8f0",
                }} />
            ))}
          </div>

          {/* Counter + arrows */}
          <div className="flex items-center gap-4">
            <span className="text-[13px] font-semibold text-slate-400">
              {String(slide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button onClick={prev}
                className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-400 hover:bg-slate-50">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next}
                className="flex h-10 w-10 items-center justify-center text-white transition-all"
                style={{ background: p.accent, borderColor: p.accent }}>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
