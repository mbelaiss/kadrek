"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Feature { name: string; desc: string }
interface Gain    { label: string; before: string; after: string; delta: string }
interface Benefit { title: string; desc: string }

interface SolutionHeroCardProps {
  accent:   string;
  features: Feature[];
  gains:    Gain[];
  benefits: Benefit[];
}

export default function SolutionHeroCard({ accent, features, gains, benefits }: SolutionHeroCardProps) {
  const [slide,  setSlide]  = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = [
    {
      label: "Fonctionnalités",
      content: (
        <div>
          <ul className="divide-y divide-slate-100">
            {features.slice(0, 5).map((f) => (
              <li key={f.name} className="flex items-center gap-4 px-6 py-3.5">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center relative" style={{ background: accent }}>
                  <div className="absolute h-px w-3 bg-white/50" />
                  <div className="absolute w-px h-3 bg-white/50" />
                </div>
                <span className="text-[13px] font-semibold text-slate-700">{f.name}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-slate-100 px-6 py-3 text-[12px] font-semibold text-slate-400">
            + {Math.max(0, features.length - 5)} fonctionnalités supplémentaires
          </div>
        </div>
      ),
    },
    {
      label: "Gains mesurés",
      content: (
        <div className="divide-y divide-slate-100">
          {gains.slice(0, 4).map((g) => (
            <div key={g.label} className="flex items-center justify-between px-6 py-4">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-0.5">{g.label}</div>
                <div className="text-[12px] font-semibold text-red-400 line-through">{g.before}</div>
              </div>
              <div className="text-right">
                <div className="text-[18px] font-black text-slate-900">{g.after}</div>
                <div className="inline-block px-2 py-0.5 text-[10px] font-black text-white mt-1" style={{ background: accent }}>
                  {g.delta}
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Bénéfices clés",
      content: (
        <div className="divide-y divide-slate-100">
          {benefits.slice(0, 5).map((b) => (
            <div key={b.title} className="px-6 py-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="h-1.5 w-1.5 flex-shrink-0" style={{ background: accent }} />
                <span className="text-[13px] font-black text-slate-800">{b.title}</span>
              </div>
              <p className="pl-[18px] text-[12px] leading-relaxed text-slate-400">{b.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const next = useCallback(() => setSlide((s) => (s + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setSlide((s) => (s - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div
      className="border border-slate-200 bg-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header with tab navigation */}
      <div className="flex items-stretch border-b border-slate-100" style={{ borderLeftWidth: 4, borderLeftColor: accent }}>
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setSlide(i)}
            className={`flex-1 px-3 py-3.5 text-[11px] font-black uppercase tracking-widest transition-colors border-r border-slate-100 last:border-r-0 ${
              i === slide ? "text-white" : "text-slate-400 hover:text-slate-600 bg-white"
            }`}
            style={i === slide ? { background: accent } : {}}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Slide content */}
      <div className="min-h-[280px]">
        <div key={slide} className="animate-fadeInUp">
          {slides[slide].content}
        </div>
      </div>

      {/* Progress + arrows */}
      <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="transition-all duration-300"
              style={{
                width:      i === slide ? 20 : 8,
                height:     8,
                background: i === slide ? accent : "#e2e8f0",
              }}
            />
          ))}
        </div>
        {/* Arrows */}
        <div className="flex gap-1.5">
          <button onClick={prev}
            className="flex h-7 w-7 items-center justify-center border border-slate-200 bg-white text-slate-500 hover:border-slate-400 transition-colors">
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button onClick={next}
            className="flex h-7 w-7 items-center justify-center text-white transition-colors"
            style={{ background: accent }}>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
