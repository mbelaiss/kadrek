"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    eyebrow: "Transformation Digitale",
    title: "Transformez vos données en croissance mesurable",
    subtitle: "Kadrek conçoit des systèmes digitaux qui automatisent vos opérations, exploitent vos données et déploient l'IA au cœur de votre activité.",
    cta1: { label: "Démarrer gratuitement", href: "/contact" },
    cta2: { label: "Découvrir la méthode", href: "/digitalisation" },
    stats: [
      { value: "40%", label: "réduction des coûts" },
      { value: "3×",  label: "décisions plus rapides" },
      { value: "90j", label: "pour voir les résultats" },
    ],
    accent: "from-blue-600 to-cyan-500",
    bg: "from-slate-50 via-blue-50/60 to-cyan-50/40",
    visual: (
      <div className="relative">
        <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-blue-400/10 to-cyan-300/10 blur-3xl" />
        <div className="relative rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(37,99,235,.12)] overflow-hidden">
          <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs font-semibold text-slate-400">Tableau de bord · Live</span>
          </div>
          <div className="grid grid-cols-3 gap-3 p-4">
            {[["84 k€","Revenus","text-blue-600"], ["-32%","Coûts","text-emerald-600"], ["+18%","Croissance","text-purple-600"]].map(([v,l,c]) => (
              <div key={l} className="rounded-xl bg-slate-50 p-3 text-center">
                <div className={`text-xl font-black ${c}`}>{v}</div>
                <div className="mt-0.5 text-[11px] text-slate-400">{l}</div>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <div className="flex items-end gap-1.5 h-24 rounded-xl bg-slate-50 p-3">
              {[35,48,42,65,58,78,70,100].map((h, i) => (
                <span key={i} className="flex-1 rounded-t-[3px] transition-all"
                  style={{ height: `${h}%`, background: i % 2 === 0 ? "linear-gradient(180deg,#06b6d4,#2563eb)" : "linear-gradient(180deg,#a78bfa,#7c3aed)", opacity: 0.8 }} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold text-slate-400">↑ +18% ce mois · mis à jour à l'instant</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    eyebrow: "Intelligence Artificielle",
    title: "L'IA qui travaille pour vous 24 heures sur 24",
    subtitle: "Déployez des agents IA qui répondent à vos clients, trient vos emails, génèrent vos rapports et détectent les anomalies — sans intervention humaine.",
    cta1: { label: "Explorer les agents IA", href: "/services#ia" },
    cta2: { label: "Voir les résultats", href: "/resultats" },
    stats: [
      { value: "80%", label: "des requêtes résolues auto" },
      { value: "15h", label: "économisées par semaine" },
      { value: "-90%", label: "d'erreurs de saisie" },
    ],
    accent: "from-purple-600 to-blue-500",
    bg: "from-purple-50/50 via-slate-50 to-blue-50/40",
    visual: (
      <div className="relative space-y-3">
        <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-purple-400/10 to-blue-300/10 blur-3xl" />
        {[
          { icon: "💬", t: "Agent Support Client", d: "Répond à 80% des requêtes", s: "Actif 24h/24", c: "bg-blue-50 border-blue-100" },
          { icon: "📧", t: "Triage Email IA",      d: "200 emails classés en 3 sec", s: "Traité à l'instant", c: "bg-purple-50 border-purple-100" },
          { icon: "📊", t: "Rapport Automatique",  d: "Généré chaque lundi 8h00", s: "Envoyé · 12 dest.", c: "bg-cyan-50 border-cyan-100" },
          { icon: "🔔", t: "Alerte Anomalie",       d: "Stock seuil critique atteint", s: "Notifié il y a 2 min", c: "bg-amber-50 border-amber-100" },
        ].map((item) => (
          <div key={item.t} className={`relative flex items-center gap-4 rounded-xl border ${item.c} bg-white p-4 shadow-sm`}>
            <span className="text-2xl">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-slate-800">{item.t}</div>
              <div className="text-xs text-slate-500">{item.d}</div>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {item.s}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    eyebrow: "Automatisation & ROI",
    title: "Arrêtez de payer pour ce que les machines font mieux",
    subtitle: "Automatisez la facturation, les commandes, les rapports et le support. Chaque processus automatisé libère du temps pour ce qui génère vraiment de la valeur.",
    cta1: { label: "Voir l'automatisation", href: "/services#automatisation" },
    cta2: { label: "Calculer mon ROI", href: "/resultats" },
    stats: [
      { value: "3.5×", label: "retour sur investissement" },
      { value: "2 400€", label: "économisés/mois en moyenne" },
      { value: "2 sem", label: "premiers résultats" },
    ],
    accent: "from-cyan-500 to-blue-600",
    bg: "from-cyan-50/40 via-slate-50 to-blue-50/50",
    visual: (
      <div className="relative">
        <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-blue-300/10 blur-3xl" />
        <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(6,182,212,.1)]">
          <div className="mb-4 text-sm font-black text-slate-700">⚙️ Flux d'automatisation actif</div>
          <div className="space-y-2">
            {[
              ["📥", "Commande reçue", "Déclencheur", "bg-blue-50 text-blue-700", "✓"],
              ["🔄", "Stock mis à jour", "Traitement", "bg-slate-50 text-slate-600", "✓"],
              ["📧", "Email confirmé", "Notification", "bg-cyan-50 text-cyan-700", "✓"],
              ["🧾", "Facture créée", "Génération", "bg-purple-50 text-purple-700", "✓"],
              ["📊", "Dashboard", "Enregistrement", "bg-emerald-50 text-emerald-700", "●"],
            ].map(([icon, label, step, c, status], i) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-lg">{icon}</span>
                <div className={`flex-1 rounded-lg px-3 py-2 flex items-center justify-between ${c}`}>
                  <span className="text-[12px] font-bold">{label}</span>
                  <span className="text-[10px] font-semibold opacity-60">{step}</span>
                </div>
                <span className={`text-[12px] font-black ${status === "✓" ? "text-emerald-500" : "text-amber-400"}`}>{status}</span>
                {i < 4 && <span className="absolute ml-4 mt-8 text-slate-300 text-[10px]">↓</span>}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-3 text-center">
            <div className="text-[11px] font-bold text-slate-600">⏱ Durée totale : <span className="text-blue-600">2.3 secondes</span> · Zéro intervention humaine</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className={`relative min-h-screen overflow-hidden bg-gradient-to-br ${slide.bg} transition-all duration-700`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.03) 1px, transparent 1px),linear-gradient(90deg,rgba(0,0,0,.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center px-6 pt-24 pb-16 lg:px-10 lg:pt-[100px]">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1fr]">

          {/* Content */}
          <div key={current} className="animate-fadeInUp">
            <div className={`mb-5 inline-flex items-center gap-2 bg-gradient-to-r ${slide.accent} px-4 py-1.5`}>
              <span className="text-[11px] font-black uppercase tracking-widest text-white">{slide.eyebrow}</span>
            </div>

            <h1 className="mb-5 text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[56px]">
              {slide.title}
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-500">
              {slide.subtitle}
            </p>

            <div className="mb-10 flex flex-col gap-3 sm:flex-row">
              {/* CTA 1 — split square button */}
              <Link href={slide.cta1.href}
                className={`group inline-flex items-stretch overflow-hidden border-0 transition-all hover:-translate-y-px hover:shadow-md`}>
                <span className="flex items-center bg-white px-6 py-3.5 text-[14px] font-black text-slate-800">
                  {slide.cta1.label}
                </span>
                <span className={`flex w-12 items-center justify-center bg-gradient-to-br ${slide.accent}`}>
                  <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              {/* CTA 2 — ghost square */}
              <Link href={slide.cta2.href}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white/70 px-7 py-3.5 text-[14px] font-semibold text-slate-700 backdrop-blur-sm transition-all hover:bg-white hover:border-slate-400">
                {slide.cta2.label}
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {slide.stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className={`text-2xl font-black bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>{s.value}</span>
                  <span className="text-[12px] font-medium text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div key={`v-${current}`} className="hidden animate-fadeInDown lg:block">
            {slide.visual}
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="mt-12 flex w-full items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? `h-2.5 w-8 bg-gradient-to-r ${slide.accent}` : "h-2.5 w-2.5 bg-slate-200 hover:bg-slate-300"
                }`} />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button onClick={prev}
              className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next}
              className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="hidden h-0.5 w-32 overflow-hidden bg-slate-200 sm:block">
            <div
              key={current}
              className={`h-full bg-gradient-to-r ${slide.accent}`}
              style={{ animation: paused ? "none" : "heroProgress 6s linear forwards" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}
