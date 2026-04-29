"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const content = {
  fr: {
    badge: "Produit phare",
    overline: "Site de Gestion PME",
    cta: "Découvrir la solution",
    slides: [
      {
        tab: "Vue d'ensemble",
        title: "Un site qui devient votre centre de commande",
        desc: "Votre présence digitale et votre outil de gestion ne font plus qu'un. Du premier contact client jusqu'à la facture signée — tout dans une seule plateforme pensée pour les PME.",
        pills: ["Site vitrine public", "Back-office de gestion", "Portail client"],
      },
      {
        tab: "Gestion interne",
        title: "Pilotez équipes, stock et interventions en un clic",
        desc: "Planifiez vos techniciens, suivez les stocks, créez vos devis et factures — tout depuis un tableau de bord clair, accessible sur mobile comme sur desktop.",
        pills: ["Planning d'équipe", "Devis & facturation", "Suivi des stocks"],
      },
      {
        tab: "Portail client",
        title: "Vos clients voient tout, signent en ligne, vous contactent directement",
        desc: "Fini les appels pour savoir où en est une intervention. Chaque client accède à son espace personnel pour suivre, signer et communiquer — sans intermédiaire.",
        pills: ["Suivi temps réel", "Signature électronique", "Messagerie intégrée"],
      },
      {
        tab: "Workflow complet",
        title: "De la demande à la facture — sans rien oublier",
        desc: "Un processus fluide et automatisé : demande → devis → signature → planification → intervention → suivi → facture. Chaque étape est tracée, chaque partie est notifiée.",
        pills: ["7 étapes automatisées", "Zéro oubli", "ROI mesurable"],
      },
    ],
  },
  en: {
    badge: "Flagship product",
    overline: "SME Management Platform",
    cta: "Discover the solution",
    slides: [
      {
        tab: "Overview",
        title: "A website that becomes your command centre",
        desc: "Your digital presence and management tool are now one. From the first customer contact to the signed invoice — everything in a single platform built for SMEs.",
        pills: ["Public showcase site", "Management back-office", "Client portal"],
      },
      {
        tab: "Internal management",
        title: "Manage teams, stock and interventions in one click",
        desc: "Schedule your technicians, track stock, create quotes and invoices — all from a clear dashboard, accessible on mobile and desktop.",
        pills: ["Team scheduling", "Quotes & invoicing", "Stock tracking"],
      },
      {
        tab: "Client portal",
        title: "Clients see everything, sign online, contact you directly",
        desc: "No more calls asking about intervention status. Every client accesses their personal space to track, sign and communicate — without intermediaries.",
        pills: ["Real-time tracking", "Electronic signature", "Integrated messaging"],
      },
      {
        tab: "Full workflow",
        title: "From request to invoice — nothing forgotten",
        desc: "A fluid, automated process: request → quote → signature → scheduling → intervention → tracking → invoice. Every step is logged, every party is notified.",
        pills: ["7 automated steps", "Zero omissions", "Measurable ROI"],
      },
    ],
  },
};

/* ── Slide visuals ── */
function VisualOverview() {
  return (
    <div className="grid gap-3">
      {/* Header bar */}
      <div className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-3">
        <span className="flex h-7 w-7 items-center justify-center bg-blue-600 text-xs font-black text-white">K</span>
        <span className="text-sm font-black text-white">Kadrek Platform</span>
        <div className="ml-auto flex gap-2">
          {["Site public","Gestion","Portail"].map((l,i) => (
            <span key={l} className="px-2.5 py-1 text-[10px] font-bold" style={{
              background: [["#2563eb20","#2563eb"],["#7c3aed20","#7c3aed"],["#0891b220","#0891b2"]][i][0],
              color: [["#2563eb20","#2563eb"],["#7c3aed20","#7c3aed"],["#0891b220","#0891b2"]][i][1],
            }}>{l}</span>
          ))}
        </div>
      </div>
      {/* 3 pillars */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon:"🌐", label:"Site vitrine", sub:"SEO · Design · Leads", color:"#2563eb" },
          { icon:"⚙️", label:"Back-office", sub:"Équipes · Devis · Stock", color:"#7c3aed" },
          { icon:"👤", label:"Portail client", sub:"Suivi · Signature · Chat", color:"#0891b2" },
        ].map((p) => (
          <div key={p.label} className="border border-white/10 bg-white/5 p-4 text-center">
            <div className="mb-2 text-2xl">{p.icon}</div>
            <div className="text-[12px] font-black text-white">{p.label}</div>
            <div className="mt-1 text-[10px] text-white/40">{p.sub}</div>
            <div className="mx-auto mt-3 h-0.5 w-8" style={{ background: p.color }} />
          </div>
        ))}
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-4 gap-2">
        {[["12","Interventions","#2563eb"],["840€","Devis signé","#10b981"],["3","En attente","#f59e0b"],["94%","Satisfaction","#7c3aed"]].map(([v,l,c]) => (
          <div key={l as string} className="border border-white/10 bg-white/5 p-3 text-center">
            <div className="text-lg font-black" style={{ color: c as string }}>{v}</div>
            <div className="mt-0.5 text-[9px] text-white/30">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualGestion() {
  return (
    <div className="space-y-3">
      {/* Dashboard header */}
      <div className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3">
        <span className="text-[11px] font-black uppercase tracking-widest text-white/40">Tableau de bord · Lundi 28 avr.</span>
        <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />Live
        </span>
      </div>
      {/* Interventions list */}
      {[
        { id:"INT-0847", name:"Dupont SAS", tech:"Martin D.", status:"En cours", color:"#2563eb" },
        { id:"INT-0848", name:"Résidence Parc", tech:"Sophie L.", status:"Planifié", color:"#f59e0b" },
        { id:"INT-0849", name:"Maison Renaud", tech:"Non assigné", status:"Nouveau", color:"#94a3b8" },
      ].map((r) => (
        <div key={r.id} className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-white/30">{r.id}</span>
              <span className="text-[12px] font-black text-white">{r.name}</span>
            </div>
            <div className="mt-0.5 text-[11px] text-white/40">👤 {r.tech}</div>
          </div>
          <span className="flex-shrink-0 px-2.5 py-1 text-[10px] font-bold" style={{ color: r.color, background: `${r.color}20` }}>{r.status}</span>
        </div>
      ))}
      {/* Stock + planning row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-white/10 bg-white/5 p-4">
          <div className="mb-2 text-[10px] font-black uppercase tracking-widest text-white/30">Stock critique</div>
          {[["Joints toriques","4 restants","#f59e0b"],["Câbles 2.5mm","2 restants","#ef4444"]].map(([n,v,c]) => (
            <div key={n as string} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
              <span className="text-[11px] text-white/60">{n}</span>
              <span className="text-[11px] font-bold" style={{ color: c as string }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="border border-white/10 bg-white/5 p-4">
          <div className="mb-2 text-[10px] font-black uppercase tracking-widest text-white/30">Devis en attente</div>
          {[["DEV-0234","1 200 €","#f59e0b"],["DEV-0235","840 €","#f59e0b"]].map(([id,v]) => (
            <div key={id as string} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
              <span className="text-[11px] text-white/60">{id}</span>
              <span className="text-[11px] font-bold text-yellow-400">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualPortail() {
  return (
    <div className="overflow-hidden border border-white/10 bg-white/5">
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-red-500/50" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/50" />
        <span className="h-2 w-2 rounded-full bg-green-500/50" />
        <div className="ml-3 flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/30">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          monespace.votreentreprise.com
        </div>
      </div>
      <div className="p-5">
        {/* Welcome */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Espace client</div>
            <div className="text-base font-black text-white">Bonjour, Jean-Pierre</div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center bg-blue-600 text-xs font-black text-white">JP</div>
        </div>
        {/* Active intervention */}
        <div className="mb-4 border border-blue-500/30 bg-blue-500/10 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-400">Intervention en cours</div>
              <div className="mt-0.5 text-sm font-bold text-white">Réparation chaudière · INT-0847</div>
            </div>
            <span className="bg-blue-600 px-2 py-0.5 text-[10px] font-black text-white">En cours</span>
          </div>
          <div className="mt-3">
            <div className="mb-1 flex justify-between text-[10px] text-white/40">
              <span>Avancement</span><span className="font-bold text-blue-400">65%</span>
            </div>
            <div className="h-1.5 bg-white/10">
              <div className="h-full bg-blue-500" style={{ width: "65%" }} />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] text-white/30">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Technicien sur site · mis à jour il y a 8 min
          </div>
        </div>
        {/* Docs */}
        <div className="space-y-2">
          {[
            ["Devis DEV-0234","Signé ✓","#10b981"],
            ["Devis DEV-0233","En attente","#f59e0b"],
            ["Facture FAC-0188","Payée ✓","#10b981"],
          ].map(([label, status, c]) => (
            <div key={label as string} className="flex items-center justify-between border border-white/10 px-3 py-2.5">
              <span className="text-[12px] text-white/60">{label}</span>
              <span className="text-[11px] font-bold" style={{ color: c as string }}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualWorkflow() {
  const steps = [
    { icon:"📬", label:"Demande", color:"#2563eb" },
    { icon:"📋", label:"Devis",   color:"#3b82f6" },
    { icon:"✍️", label:"Signature",color:"#7c3aed" },
    { icon:"🗓️", label:"Planning",color:"#8b5cf6" },
    { icon:"🔧", label:"Intervention",color:"#0891b2" },
    { icon:"📡", label:"Suivi",   color:"#06b6d4" },
    { icon:"🧾", label:"Facture", color:"#10b981" },
  ];
  return (
    <div className="space-y-3">
      {/* Timeline */}
      <div className="border border-white/10 bg-white/5 p-5">
        <div className="mb-4 text-[10px] font-black uppercase tracking-widest text-white/30">Flux en temps réel · INT-0847</div>
        <div className="relative">
          <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30" />
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={s.label} className="flex items-center gap-4 pl-2">
                <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center text-base" style={{ background: `${s.color}20` }}>
                  {s.icon}
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <span className={`text-[12px] font-semibold ${i < 4 ? "text-white" : i === 4 ? "text-blue-400" : "text-white/30"}`}>{s.label}</span>
                  {i < 4 ? (
                    <span className="text-[10px] font-bold text-emerald-400">✓ Complété</span>
                  ) : i === 4 ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-blue-400"><span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />En cours</span>
                  ) : (
                    <span className="text-[10px] text-white/20">En attente</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Time saved */}
      <div className="grid grid-cols-2 gap-3">
        {[["< 4h","Délai de signature","#10b981"],["-87%","Appels 'où en est…'","#2563eb"]].map(([v,l,c]) => (
          <div key={l as string} className="border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl font-black" style={{ color: c as string }}>{v}</div>
            <div className="mt-1 text-[10px] text-white/30">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals = [VisualOverview, VisualGestion, VisualPortail, VisualWorkflow];

export default function PlatformSlider() {
  const locale = useLocale() as "fr" | "en";
  const c = content[locale] ?? content.fr;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((i) => (i + 1) % c.slides.length), [c.slides.length]);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + c.slides.length) % c.slides.length), [c.slides.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  const slide = c.slides[current];
  const Visual = visuals[current];

  return (
    <section
      className="bg-[#030712] py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-blue-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">{c.badge}</span>
            <span className="text-[13px] font-bold text-white/50">{c.overline}</span>
          </div>
          <Link href="/solutions/site-gestion"
            className="group inline-flex items-center gap-2 text-[13px] font-bold text-blue-400 hover:text-blue-300 transition-colors">
            {c.cta}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* ── Tab navigation ── */}
        <div className="mb-10 flex overflow-x-auto border-b border-white/10">
          {c.slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-shrink-0 px-5 py-3 text-[13px] font-semibold transition-all ${
                i === current ? "text-white" : "text-white/30 hover:text-white/60"
              }`}
            >
              {s.tab}
              {i === current && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500" />
              )}
              {i === current && !paused && (
                <span
                  key={current}
                  className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                  style={{ animation: "platformProgress 6s linear forwards" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Slide content ── */}
        <div key={current} className="animate-fadeInUp grid items-start gap-12 lg:grid-cols-[1fr_520px]">

          {/* Left — text */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-5 text-4xl font-black leading-[1.06] tracking-tight text-white lg:text-[52px]">
              {slide.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-400">{slide.desc}</p>
            <div className="mb-10 flex flex-wrap gap-2">
              {slide.pills.map((pill) => (
                <span key={pill} className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-semibold text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {pill}
                </span>
              ))}
            </div>
            {/* Controls */}
            <div className="flex items-center gap-4">
              <button onClick={prev}
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/50 transition hover:border-white/40 hover:text-white">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {c.slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="transition-all duration-300"
                    style={{
                      width: i === current ? 28 : 8,
                      height: 8,
                      background: i === current ? "#2563eb" : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
              <button onClick={next}
                className="flex h-10 w-10 items-center justify-center bg-blue-600 text-white transition hover:bg-blue-500">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right — visual */}
          <div className="hidden lg:block">
            <Visual />
          </div>
        </div>
      </div>

    </section>
  );
}
