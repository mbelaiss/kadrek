"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Benefit {
  img?:   string;
  title:  string;
  desc:   string;
}

interface BenefitsSliderProps {
  benefits:   Benefit[];
  accent:     string;
}

function BenefitCard({ benefit, accent }: { benefit: Benefit; accent: string }) {
  return (
    <div className="flex flex-col bg-white border border-slate-200 h-full">
      {/* Microsoft tile — visual area */}
      <div className="flex h-40 flex-shrink-0 items-center justify-center border-b border-slate-100"
        style={{ background: `${accent}08` }}>
        {benefit.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={benefit.img} alt="" className="h-14 w-14 object-cover" />
        ) : (
          <div className="relative flex h-14 w-14 items-center justify-center" style={{ background: accent }}>
            <div className="absolute h-px w-7 bg-white/40" />
            <div className="absolute w-px h-7 bg-white/40" />
          </div>
        )}
      </div>
      {/* Content */}
      <div className="flex-1 p-7">
        <h3 className="mb-2.5 text-[16px] font-black text-slate-900">{benefit.title}</h3>
        <p className="text-[14px] leading-relaxed text-slate-500">{benefit.desc}</p>
      </div>
    </div>
  );
}

const VISIBLE = 3; // cards visible at once on desktop

export default function BenefitsSlider({ benefits, accent }: BenefitsSliderProps) {
  const total  = benefits.length;
  const [idx, setIdx]     = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIdx = Math.max(0, total - VISIBLE);

  const next = useCallback(() => setIdx((i) => (i >= maxIdx ? 0 : i + 1)), [maxIdx]);
  const prev = useCallback(() => setIdx((i) => (i <= 0 ? maxIdx : i - 1)), [maxIdx]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slider track */}
      <div className="overflow-hidden border border-slate-100">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${idx * (100 / VISIBLE)}%)` }}
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: `${100 / VISIBLE}%` }}
            >
              {/* gap between tiles */}
              <div className={i < total - 1 ? "pr-px" : ""}>
                <BenefitCard benefit={b} accent={accent} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Groupe ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width:      i === idx ? 28 : 10,
                height:     10,
                background: i === idx ? accent : "#e2e8f0",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-400 hover:bg-slate-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center border text-white transition-all"
            style={{ background: accent, borderColor: accent }}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
