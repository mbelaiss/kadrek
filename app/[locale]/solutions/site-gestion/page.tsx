import { Link } from "@/navigation";
import SquareButton from "@/components/SquareButton";
import type { Locale } from "@/routing";

const content = {
  fr: {
    meta: {
      title: "Site de Gestion PME | Kadrek",
      description: "Un site web vitrine + une plateforme de gestion interne + un portail client. La solution tout-en-un pour piloter votre PME de la demande client à la facture.",
    },
    badge: "Produit phare",
    heroTag: "Nouvelle solution",
    heroTitle: "Un site qui devient votre\nplateforme de gestion",
    heroSub: "Votre présence digitale et votre outil de gestion interne ne font qu'un. Du premier contact client jusqu'à la facture signée — tout dans une seule plateforme.",
    pills: ["Site vitrine public", "Gestion interne", "Portail client"],
    conceptTitle: "Trois outils. Une seule plateforme.",
    conceptSub: "La plupart des PME jonglent entre un site web, un logiciel de gestion et des emails. Kadrek unifie tout cela dans une solution cohérente, fluide et pensée pour votre métier.",
    pillars: [
      {
        num: "01",
        icon: "🌐",
        title: "Site vitrine public",
        desc: "Votre image professionnelle en ligne. Présentation de vos services, formulaires de contact, génération de leads — votre meilleur commercial, disponible 24h/24.",
        points: ["Design premium sur-mesure", "SEO optimisé", "Formulaires de demande intelligents", "Mobile-first"],
        color: "#2563eb",
      },
      {
        num: "02",
        icon: "⚙️",
        title: "Plateforme de gestion",
        desc: "Un back-office complet pour piloter vos opérations quotidiennes : équipes, plannings, interventions, devis, factures — tout centralisé, tout automatisé.",
        points: ["Gestion des équipes & plannings", "Devis et facturation", "Suivi des interventions", "Stocks et inventaires"],
        color: "#7c3aed",
      },
      {
        num: "03",
        icon: "👤",
        title: "Portail client",
        desc: "Vos clients suivent l'avancement de leurs demandes en temps réel, signent leurs devis en ligne et communiquent directement — sans appel, sans email perdu.",
        points: ["Suivi en temps réel", "Signature électronique", "Historique complet", "Messagerie intégrée"],
        color: "#0891b2",
      },
    ],
    featuresTitle: "Tout ce dont votre PME a besoin, dans un seul outil",
    featuresSub: "Chaque fonctionnalité est pensée pour réduire le temps de gestion, éliminer les erreurs et améliorer la relation client.",
    features: [
      { icon: "👥", title: "Gestion des équipes", desc: "Fiches employés, rôles, droits d'accès, congés — pilotez vos ressources humaines sans Excel." },
      { icon: "📦", title: "Stocks & inventaires", desc: "Suivi en temps réel des stocks, alertes de réapprovisionnement, historique des mouvements." },
      { icon: "📋", title: "Devis & facturation", desc: "Créez, envoyez et suivez vos devis et factures en quelques clics. Relances automatiques." },
      { icon: "🗓️", title: "Planning & agenda", desc: "Planifiez les interventions, affectez les équipes et synchronisez les agendas automatiquement." },
      { icon: "🔧", title: "Suivi des interventions", desc: "Chaque intervention est tracée de l'ouverture à la clôture. Rapports terrain en temps réel." },
      { icon: "✍️", title: "Signature électronique", desc: "Vos clients signent leurs devis en ligne, depuis n'importe quel appareil. Validité juridique." },
      { icon: "📊", title: "Tableau de bord", desc: "Vue consolidée de votre activité : CA, interventions, équipes, satisfaction client." },
      { icon: "💬", title: "Demandes clients", desc: "Centralisez toutes les demandes entrantes. Triez, assignez et traitez sans rien manquer." },
      { icon: "🔔", title: "Notifications & alertes", desc: "Vos équipes et vos clients reçoivent les bonnes informations au bon moment, automatiquement." },
    ],
    workflowTitle: "De la demande à la facture — en quelques clics",
    workflowSub: "Un workflow complet, fluide et automatisé pour ne plus rien oublier à chaque étape.",
    steps: [
      { num: "01", icon: "📬", label: "Demande client", desc: "Le client soumet une demande via le site vitrine ou le portail client." },
      { num: "02", icon: "📋", label: "Devis", desc: "Votre équipe crée et envoie un devis personnalisé en quelques minutes." },
      { num: "03", icon: "✍️", label: "Signature", desc: "Le client signe le devis électroniquement depuis son espace client." },
      { num: "04", icon: "🗓️", label: "Planification", desc: "L'intervention est planifiée et les équipes sont automatiquement notifiées." },
      { num: "05", icon: "🔧", label: "Intervention", desc: "Le technicien suit et met à jour l'avancement depuis son mobile." },
      { num: "06", icon: "📡", label: "Suivi client", desc: "Le client voit l'avancement en temps réel dans son portail." },
      { num: "07", icon: "🧾", label: "Facture", desc: "La facture est générée et envoyée automatiquement à la clôture." },
    ],
    portalTitle: "L'espace client : moins d'appels, plus de clarté",
    portalSub: "Vos clients ont accès à un espace personnel sécurisé où ils suivent tout, signent, communiquent — sans vous appeler à chaque question.",
    portalFeatures: [
      { icon: "📍", title: "Suivi en temps réel", desc: "Avancement de chaque demande ou intervention mis à jour automatiquement." },
      { icon: "📄", title: "Documents centralisés", desc: "Devis, factures, rapports d'intervention accessibles à tout moment." },
      { icon: "✍️", title: "Signature en ligne", desc: "Validation et signature de devis sans impression ni déplacement." },
      { icon: "💬", title: "Messagerie directe", desc: "Échanges avec votre équipe sans passer par email." },
    ],
    gainsTitle: "Ce que ça change concrètement",
    gains: [
      { label: "Temps de gestion administratif", before: "3h/jour", after: "45 min/jour", delta: "-75%" },
      { label: "Délai de signature des devis", before: "5 jours", after: "< 4 heures", delta: "-90%" },
      { label: "Appels clients 'où en est ma demande'", before: "40/semaine", after: "5/semaine", delta: "-87%" },
      { label: "Erreurs de planification", before: "Fréquentes", after: "Quasi nulles", delta: "-95%" },
    ],
    sectorsTitle: "Conçu pour les PME de services",
    sectors: [
      { icon: "🔧", label: "Plomberie, électricité, CVC" },
      { icon: "🏗️", label: "BTP et rénovation" },
      { icon: "🚗", label: "Maintenance et dépannage" },
      { icon: "🌿", label: "Paysagisme, nettoyage" },
      { icon: "💼", label: "Cabinets et prestataires" },
      { icon: "🏥", label: "Santé et paramédical" },
    ],
    ctaTitle: "Votre PME mérite un outil à sa hauteur",
    ctaSub: "En 45 minutes, on analyse votre activité et on vous montre exactement comment cette plateforme peut transformer votre quotidien.",
    ctaBtn: "Demander une démo",
    ctaLink: "Voir toutes les solutions",
  },
  en: {
    meta: {
      title: "SME Management Platform | Kadrek",
      description: "A showcase website + internal management platform + client portal. The all-in-one solution to run your SME from customer request to signed invoice.",
    },
    badge: "Flagship product",
    heroTag: "New solution",
    heroTitle: "A website that becomes your\nmanagement platform",
    heroSub: "Your digital presence and internal management tool are one and the same. From the first customer contact to the signed invoice — everything in a single platform.",
    pills: ["Public showcase site", "Internal management", "Client portal"],
    conceptTitle: "Three tools. One platform.",
    conceptSub: "Most SMEs juggle between a website, management software and emails. Kadrek unifies it all into one coherent, fluid solution designed for your business.",
    pillars: [
      {
        num: "01",
        icon: "🌐",
        title: "Public showcase site",
        desc: "Your professional image online. Service presentation, contact forms, lead generation — your best salesperson, available 24/7.",
        points: ["Premium custom design", "SEO optimised", "Smart request forms", "Mobile-first"],
        color: "#2563eb",
      },
      {
        num: "02",
        icon: "⚙️",
        title: "Management platform",
        desc: "A complete back-office to run daily operations: teams, schedules, interventions, quotes, invoices — all centralised, all automated.",
        points: ["Team & schedule management", "Quotes and invoicing", "Intervention tracking", "Stock and inventory"],
        color: "#7c3aed",
      },
      {
        num: "03",
        icon: "👤",
        title: "Client portal",
        desc: "Your clients track their requests in real time, sign quotes online and communicate directly — no calls, no lost emails.",
        points: ["Real-time tracking", "Electronic signature", "Full history", "Integrated messaging"],
        color: "#0891b2",
      },
    ],
    featuresTitle: "Everything your SME needs, in one tool",
    featuresSub: "Every feature is designed to cut management time, eliminate errors and improve the client relationship.",
    features: [
      { icon: "👥", title: "Team management", desc: "Employee profiles, roles, access rights, leave — manage your human resources without spreadsheets." },
      { icon: "📦", title: "Stock & inventory", desc: "Real-time stock tracking, restocking alerts, movement history." },
      { icon: "📋", title: "Quotes & invoicing", desc: "Create, send and track quotes and invoices in a few clicks. Automatic reminders." },
      { icon: "🗓️", title: "Planning & scheduling", desc: "Schedule interventions, assign teams and sync calendars automatically." },
      { icon: "🔧", title: "Intervention tracking", desc: "Every intervention is tracked from opening to closing. Real-time field reports." },
      { icon: "✍️", title: "Electronic signature", desc: "Clients sign quotes online, from any device. Legally valid." },
      { icon: "📊", title: "Dashboard", desc: "Consolidated view of your activity: revenue, interventions, teams, client satisfaction." },
      { icon: "💬", title: "Customer requests", desc: "Centralise all incoming requests. Sort, assign and process without missing anything." },
      { icon: "🔔", title: "Notifications & alerts", desc: "Your teams and clients receive the right information at the right time, automatically." },
    ],
    workflowTitle: "From request to invoice — in a few clicks",
    workflowSub: "A complete, fluid and automated workflow so nothing is ever missed at any stage.",
    steps: [
      { num: "01", icon: "📬", label: "Customer request", desc: "The customer submits a request via the showcase site or client portal." },
      { num: "02", icon: "📋", label: "Quote", desc: "Your team creates and sends a personalised quote in minutes." },
      { num: "03", icon: "✍️", label: "Signature", desc: "The customer signs the quote electronically from their client space." },
      { num: "04", icon: "🗓️", label: "Scheduling", desc: "The intervention is scheduled and teams are automatically notified." },
      { num: "05", icon: "🔧", label: "Intervention", desc: "The technician tracks and updates progress from their mobile." },
      { num: "06", icon: "📡", label: "Client tracking", desc: "The customer sees real-time progress in their portal." },
      { num: "07", icon: "🧾", label: "Invoice", desc: "The invoice is automatically generated and sent on completion." },
    ],
    portalTitle: "The client portal: fewer calls, more clarity",
    portalSub: "Your clients have access to a secure personal space where they track everything, sign, communicate — without calling you at every question.",
    portalFeatures: [
      { icon: "📍", title: "Real-time tracking", desc: "Progress of every request or intervention updated automatically." },
      { icon: "📄", title: "Centralised documents", desc: "Quotes, invoices, intervention reports accessible at any time." },
      { icon: "✍️", title: "Online signature", desc: "Quote validation and signing without printing or travel." },
      { icon: "💬", title: "Direct messaging", desc: "Exchanges with your team without going through email." },
    ],
    gainsTitle: "What it concretely changes",
    gains: [
      { label: "Administrative management time", before: "3h/day", after: "45 min/day", delta: "-75%" },
      { label: "Quote signature delay", before: "5 days", after: "< 4 hours", delta: "-90%" },
      { label: "'Where is my request?' calls", before: "40/week", after: "5/week", delta: "-87%" },
      { label: "Scheduling errors", before: "Frequent", after: "Near zero", delta: "-95%" },
    ],
    sectorsTitle: "Built for service SMEs",
    sectors: [
      { icon: "🔧", label: "Plumbing, electrical, HVAC" },
      { icon: "🏗️", label: "Construction and renovation" },
      { icon: "🚗", label: "Maintenance and repairs" },
      { icon: "🌿", label: "Landscaping, cleaning" },
      { icon: "💼", label: "Consultancies and service providers" },
      { icon: "🏥", label: "Healthcare and paramedical" },
    ],
    ctaTitle: "Your SME deserves a tool at its level",
    ctaSub: "In 45 minutes, we analyse your business and show you exactly how this platform can transform your daily operations.",
    ctaBtn: "Request a demo",
    ctaLink: "View all solutions",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (content[(locale as Locale)] ?? content.fr).meta;
}

export default async function SiteGestionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;

  return (
    <div className="bg-white text-slate-900">

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden bg-[#030712] pb-24 pt-36">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 20% 30%, rgba(37,99,235,0.18) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(124,58,237,0.15) 0%, transparent 45%)" }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-blue-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">{c.heroTag}</span>
              <span className="border border-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white/50">{c.badge}</span>
            </div>
            <h1 className="mb-6 whitespace-pre-line text-5xl font-black leading-[1.04] tracking-tight text-white lg:text-[72px]">
              {c.heroTitle}
            </h1>
            <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-400">{c.heroSub}</p>
            <div className="mb-12 flex flex-wrap gap-3">
              {c.pills.map((pill, i) => (
                <span key={i} className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: ["#2563eb","#7c3aed","#0891b2"][i] }} />
                  {pill}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <SquareButton href="/contact" accent="#2563eb">{c.ctaBtn}</SquareButton>
            </div>
          </div>

          {/* Hero dashboard mockup */}
          <div className="mt-16 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              <span className="ml-4 text-xs font-semibold text-white/30">Plateforme Kadrek · Tableau de bord</span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/5 lg:grid-cols-4">
              {[
                ["12", "Interventions", "#2563eb"],
                ["3", "Devis en attente", "#f59e0b"],
                ["8", "Techniciens actifs", "#10b981"],
                ["94%", "Satisfaction client", "#7c3aed"],
              ].map(([v, l, c]) => (
                <div key={l as string} className="bg-[#040b18] p-6 text-center">
                  <div className="text-3xl font-black" style={{ color: c as string }}>{v}</div>
                  <div className="mt-1 text-[11px] font-semibold text-white/30">{l}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-px bg-white/5 lg:grid-cols-3">
              {[
                { id: "INT-0847", client: "Dupont SAS", status: "En cours", step: "Technicien sur site", color: "#2563eb" },
                { id: "INT-0846", client: "Maison Leblanc", status: "Planifié", step: "Demain 9h00", color: "#f59e0b" },
                { id: "INT-0845", client: "Résidence Parc", status: "Terminé", step: "Facturé · 840€", color: "#10b981" },
              ].map((row) => (
                <div key={row.id} className="flex items-center gap-4 bg-[#040b18] px-5 py-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-black text-white/70">{row.id}</div>
                    <div className="text-sm font-semibold text-white">{row.client}</div>
                    <div className="text-[11px] text-white/30">{row.step}</div>
                  </div>
                  <span className="flex-shrink-0 px-2.5 py-1 text-[11px] font-bold" style={{ color: row.color, background: `${row.color}20` }}>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONCEPT — 3 PILLARS ══ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-900 lg:text-[48px]">{c.conceptTitle}</h2>
            <p className="text-lg leading-relaxed text-slate-500">{c.conceptSub}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {c.pillars.map((p) => (
              <div key={p.num} className="group relative overflow-hidden border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center text-2xl" style={{ background: `${p.color}12` }}>
                    {p.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: p.color }}>{p.num}</span>
                </div>
                <h3 className="mb-3 text-xl font-black text-slate-900">{p.title}</h3>
                <p className="mb-6 text-[15px] leading-relaxed text-slate-500">{p.desc}</p>
                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-[13px] font-semibold text-slate-600">
                      <span className="h-1.5 w-1.5 flex-shrink-0" style={{ background: p.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" style={{ background: p.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES GRID ══ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-900 lg:text-[48px]">{c.featuresTitle}</h2>
            <p className="text-lg leading-relaxed text-slate-500">{c.featuresSub}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.map((f) => (
              <div key={f.title} className="group border border-slate-100 bg-slate-50 p-6 transition-all hover:border-blue-100 hover:bg-blue-50/30 hover:shadow-sm">
                <div className="mb-3 text-2xl">{f.icon}</div>
                <h4 className="mb-2 text-[15px] font-black text-slate-900">{f.title}</h4>
                <p className="text-[13px] leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WORKFLOW TIMELINE ══ */}
      <section className="bg-[#030712] py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-white lg:text-[48px]">{c.workflowTitle}</h2>
            <p className="text-lg leading-relaxed text-slate-400">{c.workflowSub}</p>
          </div>

          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 opacity-40" />
              <div className="grid grid-cols-7 gap-4">
                {c.steps.map((step, i) => {
                  const colors = ["#2563eb","#3b82f6","#7c3aed","#8b5cf6","#0891b2","#06b6d4","#10b981"];
                  return (
                    <div key={step.num} className="relative flex flex-col items-center text-center">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center border border-white/10 text-2xl" style={{ background: `${colors[i]}20` }}>
                        <span>{step.icon}</span>
                        <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center text-[9px] font-black text-white" style={{ background: colors[i] }}>{step.num}</div>
                      </div>
                      <div className="mt-4 text-[13px] font-black text-white">{step.label}</div>
                      <div className="mt-2 text-[11px] leading-snug text-slate-500">{step.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="space-y-4 lg:hidden">
            {c.steps.map((step, i) => {
              const colors = ["#2563eb","#3b82f6","#7c3aed","#8b5cf6","#0891b2","#06b6d4","#10b981"];
              return (
                <div key={step.num} className="flex gap-4 border border-white/10 bg-white/5 p-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center text-xl" style={{ background: `${colors[i]}20` }}>{step.icon}</div>
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-widest" style={{ color: colors[i] }}>{step.num} · {step.label}</div>
                    <div className="mt-1 text-[13px] text-slate-400">{step.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CLIENT PORTAL ══ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-block bg-cyan-600 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white">Portail client</div>
              <h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900 lg:text-[48px]">{c.portalTitle}</h2>
              <p className="mb-10 text-lg leading-relaxed text-slate-500">{c.portalSub}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {c.portalFeatures.map((f) => (
                  <div key={f.title} className="border border-slate-100 p-5">
                    <div className="mb-2 text-xl">{f.icon}</div>
                    <div className="mb-1 text-[14px] font-black text-slate-900">{f.title}</div>
                    <div className="text-[13px] leading-relaxed text-slate-500">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portal mockup */}
            <div className="border border-slate-200 bg-white shadow-lg">
              <div className="border-b border-slate-100 bg-slate-50 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-1.5 rounded border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  monespace.kadrek.com
                </div>
                <div className="w-20" />
              </div>
              <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-400">Bonjour, Jean-Pierre</div>
                    <div className="text-lg font-black text-slate-900">Mon espace client</div>
                  </div>
                  <div className="h-8 w-8 bg-blue-600 text-center text-sm font-black leading-8 text-white">JP</div>
                </div>
                <div className="mb-4 border border-blue-100 bg-blue-50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-widest text-blue-600">Intervention en cours</div>
                      <div className="mt-1 text-sm font-bold text-slate-800">Réparation chaudière · INT-0847</div>
                    </div>
                    <span className="bg-blue-600 px-2 py-1 text-[10px] font-black text-white">En cours</span>
                  </div>
                  <div className="mt-4">
                    <div className="mb-1 flex justify-between text-[11px] text-slate-500">
                      <span>Avancement</span><span className="font-bold text-blue-600">65%</span>
                    </div>
                    <div className="h-2 bg-slate-200">
                      <div className="h-full bg-blue-600" style={{ width: "65%" }} />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    Technicien sur site — mise à jour il y a 12 min
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    ["Devis INT-0847", "Signé · 840 €", "#10b981"],
                    ["Devis INT-0843", "En attente", "#f59e0b"],
                    ["Facture INT-0840", "Payée · 620 €", "#10b981"],
                  ].map(([label, status, color]) => (
                    <div key={label as string} className="flex items-center justify-between border border-slate-100 px-4 py-3">
                      <span className="text-[13px] font-semibold text-slate-700">{label}</span>
                      <span className="text-[11px] font-bold" style={{ color: color as string }}>{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GAINS ══ */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="mb-14 text-4xl font-black text-white lg:text-[48px]">{c.gainsTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.gains.map((g) => (
              <div key={g.label} className="border border-white/10 bg-white/5 p-6">
                <div className="mb-4 text-[12px] font-semibold uppercase tracking-widest text-white/30">{g.label}</div>
                <div className="mb-3 flex items-end gap-3">
                  <div className="text-sm text-slate-500 line-through">{g.before}</div>
                  <div className="text-2xl font-black text-white">{g.after}</div>
                </div>
                <div className="inline-block bg-emerald-500/10 px-2.5 py-1 text-[13px] font-black text-emerald-400">{g.delta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTORS ══ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="mb-10 text-3xl font-black text-slate-900">{c.sectorsTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {c.sectors.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] font-semibold text-slate-700">
                <span>{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-blue-600 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[50px]">{c.ctaTitle}</h2>
              <p className="text-lg text-white/70">{c.ctaSub}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <SquareButton href="/contact" accent="#030712">{c.ctaBtn}</SquareButton>
              <SquareButton href="/services" accent="transparent">{c.ctaLink}</SquareButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
