"use client";

import { Link } from "@/navigation";
import { useEffect, useState, useCallback } from "react";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import SquareButton from "@/components/SquareButton";

const services = [
  {
    id: "data",
    num: "01",
    eyebrow: "Data & Analytics",
    title: "Transformez vos données en avantage concurrentiel",
    desc: "Chaque vente, chaque commande, chaque interaction génère de la data. Les entreprises qui l'exploitent croissent 2 à 3× plus vite. On vous aide à la collecter, la structurer et l'utiliser pour décider mieux et plus vite.",
    benefits: [
      "Dashboards temps réel connectés à tous vos outils",
      "KPIs sur-mesure pour chaque niveau de l'organisation",
      "Alertes automatiques sur les indicateurs critiques",
      "Rapports hebdomadaires / mensuels générés automatiquement",
      "Identification des clients les plus rentables",
      "Détection des coûts cachés et des inefficacités",
    ],
    accent: "#2563eb",
    href: "/solutions/data-analytics",
    visual: (accent: string) => (
      <div className="relative rounded-none border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="border-b border-slate-100 bg-slate-50 px-5 py-3 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-semibold text-slate-400">Dashboard · Live</span>
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          {[["84 k€","Revenus","#2563eb"],["-32%","Coûts","#10b981"],["+18%","Croissance","#7c3aed"]].map(([v,l,c]) => (
            <div key={l as string} className="bg-slate-50 p-3 text-center">
              <div className="text-xl font-black" style={{ color: c as string }}>{v}</div>
              <div className="mt-0.5 text-[11px] text-slate-400">{l}</div>
            </div>
          ))}
        </div>
        <div className="px-4 pb-4">
          <div className="flex items-end gap-1.5 h-24 bg-slate-50 p-3">
            {[35,48,42,65,58,78,70,100].map((h, i) => (
              <span key={i} className="flex-1 transition-all"
                style={{ height: `${h}%`, background: i % 2 === 0 ? accent : "#7c3aed", opacity: 0.8 }} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-slate-400">↑ +18% ce mois · mis à jour à l'instant</span>
        </div>
      </div>
    ),
  },
  {
    id: "ia",
    num: "02",
    eyebrow: "Agents IA",
    title: "Une IA qui travaille pour vous 24h/24, 7j/7",
    desc: "Les agents IA gèrent les tâches répétitives à votre place : répondre aux clients, trier les emails, générer des rapports, détecter les anomalies. Vos équipes se concentrent sur ce qui crée vraiment de la valeur.",
    benefits: [
      "Chatbot IA — 80% des requêtes résolues instantanément",
      "Triage automatique des emails avec réponses suggérées",
      "Génération de rapports en quelques secondes",
      "Détection d'anomalies en temps réel (fraude, ruptures)",
      "Planification intelligente des réunions et ressources",
      "Traitement des commandes et mises à jour de stock auto",
    ],
    accent: "#7c3aed",
    href: "/solutions/agents-ia",
    visual: (_accent: string) => (
      <div className="space-y-3">
        {[
          { t: "Agent Support Client",  d: "Répond à 80% des requêtes",       s: "Actif 24h/24",        c: "border-blue-100 bg-blue-50" },
          { t: "Triage Email IA",       d: "200 emails classés en 3 sec",     s: "Traité à l'instant",  c: "border-purple-100 bg-purple-50" },
          { t: "Rapport Automatique",   d: "Généré chaque lundi 8h00",        s: "Envoyé · 12 dest.",   c: "border-cyan-100 bg-cyan-50" },
          { t: "Alerte Anomalie",       d: "Stock seuil critique atteint",    s: "Notifié il y a 2 min",c: "border-amber-100 bg-amber-50" },
        ].map((item) => (
          <div key={item.t} className={`flex items-center gap-4 border ${item.c} bg-white p-4`}>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-slate-800">{item.t}</div>
              <div className="text-xs text-slate-500">{item.d}</div>
            </div>
            <span className="flex items-center gap-1.5 bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700 flex-shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {item.s}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "automatisation",
    num: "03",
    eyebrow: "Automatisation",
    title: "Supprimez les tâches répétitives une bonne fois pour toutes",
    desc: "Facturation, onboarding, commandes, relances, conformité — chaque processus manuel est un coût caché. On les automatise pour que votre équipe arrête de faire ce que les machines font mieux.",
    benefits: [
      "Facturation et relances clients automatiques",
      "Onboarding employés — contrat, accès, formation planifiés",
      "Gestion des commandes et supply chain automatisée",
      "Campagnes email et marketing en workflow",
      "Rapports de conformité générés automatiquement",
      "Alertes et escalades selon des seuils définis",
    ],
    accent: "#0891b2",
    href: "/solutions/automatisation",
    visual: (accent: string) => (
      <div className="border border-slate-200 bg-white p-5">
        <div className="mb-4 text-sm font-black text-slate-700">Flux d&apos;automatisation actif</div>
        <div className="space-y-2">
          {[
            ["Commande reçue",   "Déclencheur",   "#eff6ff", "#2563eb", "✓"],
            ["Stock mis à jour", "Traitement",    "#f8fafc", "#64748b", "✓"],
            ["Email confirmé",   "Notification",  "#ecfeff", "#0891b2", "✓"],
            ["Facture créée",    "Génération",    "#faf5ff", "#7c3aed", "✓"],
            ["Dashboard",        "Enregistrement","#f0fdf4", "#10b981", "●"],
          ].map(([label, step, bg, color, status]) => (
            <div key={label as string} className="flex items-center gap-3">
              <div className="flex-1 flex items-center justify-between px-3 py-2"
                style={{ background: bg as string }}>
                <span className="text-[12px] font-bold text-slate-700">{label}</span>
                <span className="text-[10px] font-semibold text-slate-400">{step}</span>
              </div>
              <span className={`text-[12px] font-black w-4 text-center ${status === "✓" ? "text-emerald-500" : "text-amber-400"}`}>{status}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-slate-50 p-3 text-center">
          <div className="text-[11px] font-bold text-slate-600">Durée totale : <span style={{ color: accent }}>2.3 secondes</span> · Zéro intervention humaine</div>
        </div>
      </div>
    ),
  },
  {
    id: "presence",
    num: "04",
    eyebrow: "Présence & SEO",
    title: "Soyez trouvé, choisi, et mémorable en ligne",
    desc: "97% des acheteurs cherchent en ligne avant d'acheter. Votre présence digitale est votre commercial le plus disponible — et il doit être au niveau. Site rapide, SEO solide, réputation gérée.",
    benefits: [
      "Site web haute performance (100 Lighthouse, mobile-first)",
      "SEO technique et éditorial — apparaître avant vos concurrents",
      "Gestion de la réputation et des avis en ligne",
      "Campagnes email marketing avec ROI tracé",
      "Stratégie réseaux sociaux et contenu",
      "Analytics : savoir exactement ce qui convertit",
    ],
    accent: "#2563eb",
    href: "/solutions/presence-seo",
    visual: (_accent: string) => (
      <div className="border border-slate-200 bg-white overflow-hidden">
        <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 text-xs text-slate-400 max-w-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            kadrek.com
          </div>
        </div>
        <div className="p-5 space-y-3">
          {[
            { label: "Score SEO",     value: "94/100",  bar: 94,  color: "#10b981" },
            { label: "Performance",   value: "98/100",  bar: 98,  color: "#2563eb" },
            { label: "Accessibilité", value: "100/100", bar: 100, color: "#7c3aed" },
            { label: "Visibilité",    value: "+340%",   bar: 78,  color: "#0891b2" },
          ].map((m) => (
            <div key={m.label}>
              <div className="flex justify-between mb-1">
                <span className="text-[12px] font-semibold text-slate-600">{m.label}</span>
                <span className="text-[12px] font-black" style={{ color: m.color }}>{m.value}</span>
              </div>
              <div className="h-1.5 bg-slate-100 overflow-hidden">
                <div className="h-full transition-all duration-700" style={{ width: `${m.bar}%`, background: m.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "formation",
    num: "05",
    eyebrow: "Formation IA",
    title: "Votre équipe, augmentée par l'intelligence artificielle",
    desc: "La technologie la plus puissante ne sert à rien si votre équipe ne l'utilise pas. On forme vos collaborateurs à travailler avec l'IA — pratiquement, par rôle, sur vos vrais outils.",
    benefits: [
      "Diagnostic des compétences et des lacunes par poste",
      "Formation pratique sur vos outils réels",
      "Ateliers Humain + IA : déléguer sans perdre le contrôle",
      "Champions internes — relais pour l'adoption continue",
      "Tutoriels et documentation adaptés à chaque équipe",
      "Suivi de l'adoption avec indicateurs mesurables",
    ],
    accent: "#7c3aed",
    href: "/solutions/formation-ia",
    visual: (_accent: string) => (
      <div className="border border-slate-200 bg-white overflow-hidden">
        <div className="border-b border-slate-100 px-5 py-3">
          <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">Progression par équipe</div>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { team: "Direction",     pct: 92, color: "#7c3aed" },
            { team: "Commercial",    pct: 78, color: "#2563eb" },
            { team: "Opérations",    pct: 65, color: "#0891b2" },
            { team: "Administratif", pct: 84, color: "#10b981" },
            { team: "IT",            pct: 100, color: "#7c3aed" },
          ].map((r) => (
            <div key={r.team} className="flex items-center gap-4 px-5 py-3">
              <span className="w-28 text-[12px] font-semibold text-slate-600 flex-shrink-0">{r.team}</span>
              <div className="flex-1 h-2 bg-slate-100 overflow-hidden">
                <div className="h-full" style={{ width: `${r.pct}%`, background: r.color }} />
              </div>
              <span className="w-10 text-right text-[12px] font-black text-slate-700">{r.pct}%</span>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-100 bg-slate-50 px-5 py-3 text-[11px] font-semibold text-slate-400">
          Adoption moyenne · 83% · Programme 8 semaines
        </div>
      </div>
    ),
  },
  {
    id: "site-gestion",
    num: "07",
    eyebrow: "Site de Gestion PME",
    title: "Votre site vitrine + votre outil de gestion, en un seul produit",
    desc: "Une plateforme qui combine votre présence digitale publique, votre back-office de gestion interne et un portail client — pour piloter votre PME de la demande client jusqu'à la facture.",
    benefits: [
      "Site vitrine professionnel connecté à votre gestion",
      "Devis, facturation et signature électronique intégrés",
      "Planification des équipes et suivi des interventions",
      "Gestion des stocks et inventaires en temps réel",
      "Portail client : suivi, signature, messagerie",
      "Tableau de bord pour piloter toute l'activité",
    ],
    accent: "#2563eb",
    href: "/solutions/site-gestion",
    visual: (_accent: string) => (
      <div className="space-y-2">
        <div className="border border-slate-200 bg-white overflow-hidden">
          <div className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Plateforme PME · Interventions</span>
            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />Live</span>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              { id: "INT-0847", client: "Dupont SAS", status: "En cours", step: "Technicien sur site", color: "#2563eb" },
              { id: "INT-0846", client: "Résidence Leblanc", status: "Planifié", step: "Demain 9h00", color: "#f59e0b" },
              { id: "INT-0845", client: "Maison Martin", status: "Terminé", step: "Facturé · 840€", color: "#10b981" },
            ].map((row) => (
              <div key={row.id} className="flex items-center gap-3 px-4 py-3">
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-black text-slate-400">{row.id}</div>
                  <div className="text-[13px] font-semibold text-slate-800">{row.client}</div>
                  <div className="text-[11px] text-slate-400">{row.step}</div>
                </div>
                <span className="flex-shrink-0 px-2.5 py-1 text-[11px] font-bold" style={{ color: row.color, background: `${row.color}15` }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-slate-200 bg-white p-4">
          <div className="mb-2 text-[11px] font-black uppercase tracking-widest text-slate-400">Portail client · INT-0847</div>
          <div className="mb-2 flex items-center justify-between text-[12px]">
            <span className="font-semibold text-slate-600">Avancement</span>
            <span className="font-black text-blue-600">65%</span>
          </div>
          <div className="h-2 bg-slate-100">
            <div className="h-full bg-blue-600 transition-all" style={{ width: "65%" }} />
          </div>
          <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Devis signé · Facture auto à la clôture
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "dashboards",
    num: "06",
    eyebrow: "Dashboards & Interfaces",
    title: "Toute votre activité sur un seul écran",
    desc: "Un dashboard bien conçu vous fait gagner 30 minutes par matin. On conçoit des interfaces métier sur-mesure — simples, rapides, connectées à vos systèmes — pour que vous et vos équipes agissent, pas cherchez.",
    benefits: [
      "Dashboards exécutifs — revenus, marges, clients en temps réel",
      "Interfaces opérationnelles pour les équipes terrain",
      "Portail client — suivi des commandes, factures, tickets",
      "Rapports automatisés envoyés aux bons destinataires",
      "Connexion à tous vos outils (CRM, ERP, comptabilité)",
      "Design responsive — desktop, tablette, mobile",
    ],
    accent: "#0891b2",
    href: "/solutions/interfaces-clients",
    visual: (_accent: string) => (
      <div className="border border-slate-200 bg-white overflow-hidden">
        <div className="border-b border-slate-100 bg-slate-50 px-5 py-3 flex items-center justify-between">
          <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Interface · Portail client</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="grid grid-cols-2 gap-3 p-4">
          {[
            ["Commandes", "247", "#0891b2"],
            ["En cours",  "12",  "#f59e0b"],
            ["Livrées",   "231", "#10b981"],
            ["Tickets",   "3",   "#7c3aed"],
          ].map(([l, v, c]) => (
            <div key={l as string} className="border border-slate-100 bg-slate-50 p-4 text-center">
              <div className="text-2xl font-black" style={{ color: c as string }}>{v}</div>
              <div className="mt-1 text-[11px] text-slate-400">{l}</div>
            </div>
          ))}
        </div>
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {[
            ["CMD-2847", "En transit",  "#f59e0b"],
            ["CMD-2846", "Livrée",      "#10b981"],
            ["CMD-2845", "En prép.",    "#0891b2"],
          ].map(([id, status, c]) => (
            <div key={id as string} className="flex items-center justify-between px-4 py-2.5">
              <span className="text-[12px] font-semibold text-slate-600">{id}</span>
              <span className="text-[11px] font-bold px-2.5 py-0.5" style={{ color: c as string, background: `${c as string}15` }}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function ServicesSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % services.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + services.length) % services.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [paused, next]);

  const s = services[current];

  return (
    <section
      className="bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Tab navigation ── */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex overflow-x-auto">
            {services.map((svc, i) => (
              <button
                key={svc.id}
                onClick={() => setCurrent(i)}
                className={`relative flex-shrink-0 border-b-2 px-5 py-4 text-left transition-all duration-200 ${
                  i === current
                    ? "border-b-2 text-slate-900"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
                style={{ borderBottomColor: i === current ? s.accent : undefined }}
              >
                <div className="text-[10px] font-black uppercase tracking-widest mb-0.5"
                  style={{ color: i === current ? s.accent : undefined }}>
                  {svc.num}
                </div>
                <div className={`text-[13px] font-semibold whitespace-nowrap ${i === current ? "font-black" : ""}`}>
                  {svc.eyebrow}
                </div>
                {/* Active progress bar */}
                {i === current && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-full overflow-hidden">
                    <div
                      key={current}
                      className="h-full"
                      style={{
                        background: s.accent,
                        animation: paused ? "none" : "serviceProgress 7s linear forwards",
                      }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide content ── */}
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div key={current} className="grid items-start gap-16 lg:grid-cols-[1fr_480px] animate-fadeInUp">

          {/* Left — content */}
          <div>
            <div className="mb-5 inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white"
              style={{ background: s.accent }}>
              {s.num} · {s.eyebrow}
            </div>
            <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[48px]">
              {s.title}
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-500">{s.desc}</p>

            <ul className="mb-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" style={{ color: s.accent }} />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <SquareButton href="/contact" accent={s.accent}>
                Demander un diagnostic
              </SquareButton>
              <SquareButton href={s.href} accent="#64748b">
                En savoir plus
              </SquareButton>
            </div>
          </div>

          {/* Right — visual */}
          <div className="hidden lg:block">
            {s.visual(s.accent)}
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="mt-14 flex items-center justify-between border-t border-slate-100 pt-6">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Service ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width: i === current ? 32 : 10,
                  height: 10,
                  background: i === current ? s.accent : "#e2e8f0",
                }}
              />
            ))}
          </div>

          {/* Counter + Arrows */}
          <div className="flex items-center gap-4">
            <span className="text-[13px] font-semibold text-slate-400">
              {String(current + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button onClick={prev}
                className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-400 hover:bg-slate-50">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next}
                className="flex h-10 w-10 items-center justify-center border text-white transition-all"
                style={{ background: s.accent, borderColor: s.accent }}>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
