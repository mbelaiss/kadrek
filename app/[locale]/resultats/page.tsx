import SquareButton from "@/components/SquareButton";
import type { Locale } from "@/routing";

const content = {
  fr: {
    heroBadge: "Preuves & Résultats",
    heroTitle: "Des chiffres concrets, pas des promesses",
    heroText: "Chaque résultat présenté ici a été obtenu par une vraie entreprise. On mesure tout avant, pendant et après.",
    heroBtn: "Demander un diagnostic",
    roiTitle: "Ce que nos clients gagnent",
    roiMetrics: [
      { value: "40%",    label: "réduction des coûts opérationnels",  sub: "En automatisant les processus manuels" },
      { value: "15h",    label: "économisées par employé par semaine", sub: "Tâches répétitives éliminées" },
      { value: "-90%",   label: "d'erreurs de saisie",                sub: "Grâce à la synchronisation automatique" },
      { value: "3.5×",   label: "retour sur investissement moyen",     sub: "Sur les 12 premiers mois" },
      { value: "+28%",   label: "satisfaction client améliorée",       sub: "Réponses plus rapides, moins d'erreurs" },
      { value: "2 sem.", label: "pour les premiers résultats",         sub: "On livre vite, on prouve avant de scaler" },
    ],
    casesBadge: "Études de cas", casesTitle: "Comment on l'a fait, étape par étape",
    casesBadgeProblem: "Problème", casesBadgeSolution: "Solution Kadrek", casesBadgeResults: "Résultats",
    timelineLabel: "Résultats en",
    caseStudies: [
      {
        sector: "Logistique & Transport", profile: "Entreprise de transport, ~60 employés",
        challenge: "Taux d'erreur de 11% sur les commandes, réclamations clients quotidiennes, rapports manuels chronophages.",
        solution: "Automatisation du traitement des commandes, synchronisation ERP-CRM, dashboard opérationnel temps réel.",
        results: [{ metric: "11% → 0,4%", label: "taux d'erreur" }, { metric: "-65%", label: "réclamations clients" }, { metric: "3h → 5 min", label: "rapports hebdo" }],
        timeline: "3 mois",
      },
      {
        sector: "Retail & Commerce", profile: "Commerce de détail, ~25 employés",
        challenge: "Facturation manuelle chronophage, relances clients oubliées, pas de visibilité sur la trésorerie en temps réel.",
        solution: "Automatisation complète de la facturation et des relances, dashboard trésorerie live, agent IA support client.",
        results: [{ metric: "2 800€", label: "économisés / mois" }, { metric: "-80%", label: "temps admin facturation" }, { metric: "+22%", label: "taux de recouvrement" }],
        timeline: "6 semaines",
      },
      {
        sector: "Services professionnels", profile: "Cabinet de conseil, ~12 employés",
        challenge: "Données éparpillées dans 5 outils, impossible de voir la performance globale, décisions basées sur des intuitions.",
        solution: "Centralisation des données, dashboard exécutif temps réel, rapports automatiques hebdomadaires.",
        results: [{ metric: "30 sec", label: "pour voir toute l'activité" }, { metric: "+15%", label: "croissance du CA en 6 mois" }, { metric: "5 outils → 1", label: "source de vérité unique" }],
        timeline: "2 mois",
      },
    ],
    scenariosBadge: "Scénarios types",
    scenariosTitle: "Des problèmes que vous reconnaissez peut-être",
    scenariosText: "Ces situations sont courantes dans les PME. Voici comment Kadrek les résout.",
    problemLabel: "Problème", solutionLabel: "Solution Kadrek",
    problemScenarios: [
      { domain: "Automatisation", color: "#0891b2", problem: "Facturation manuelle chronophage, relances clients oubliées, aucune visibilité trésorerie en temps réel.", solution: "Automatisation complète facturation + relances, dashboard trésorerie live, agent IA support client.", results: ["2 800€/mois économisés", "-80% temps admin", "+22% recouvrement"] },
      { domain: "Data & Analytics", color: "#2563eb", problem: "Données éparpillées dans 5 outils, impossible de voir la performance globale, décisions à l'intuition.", solution: "Centralisation des données, dashboard exécutif temps réel, rapports automatiques hebdomadaires.", results: ["Vue complète en 30 sec", "+15% CA en 6 mois", "5 outils → 1 source"] },
      { domain: "Présence & SEO", color: "#2563eb", problem: "65% de réservations via OTA (commission 18%), avis en ligne non gérés, site sans trafic organique.", solution: "Refonte SEO, stratégie de réputation, site haute performance avec réservation directe.", results: ["-40% dépendance OTA", "+90 avis positifs", "+200% trafic organique"] },
      { domain: "Agents IA", color: "#7c3aed", problem: "Équipe support saturée, temps de réponse moyen de 6 heures, tickets répétitifs sans valeur ajoutée.", solution: "Agent IA 24h/24 sur les canaux existants, triage automatique, escalade intelligente vers un humain.", results: ["-70% tickets manuels", "Réponse < 30 sec", "Équipe focalisée sur les cas complexes"] },
      { domain: "Automatisation process", color: "#0891b2", problem: "Onboarding collaborateurs de 3 jours, documents éparpillés, checklist oubliée à chaque arrivée.", solution: "Workflow d'intégration automatisé, accès outils provisionnés automatiquement, portail onboarding.", results: ["3 jours → 4 heures", "0 étape oubliée", "Expérience professionnelle dès J1"] },
      { domain: "Reporting automatisé", color: "#7c3aed", problem: "Rapports hebdo compilés à la main pendant 3 heures, erreurs fréquentes, distribution manuelle.", solution: "Générateur de rapports automatique connecté aux sources de données, envoi planifié aux bons destinataires.", results: ["0 rapport manuel", "3h → 0 min/semaine", "Données toujours à jour"] },
    ],
    beforeAfterBadge: "Avant / Après", beforeAfterTitle: "L'impact financier en chiffres",
    beforeAfterSub: "Exemple concret pour une PME de 20 personnes",
    withoutLabel: "Sans digitalisation — coûts réels",
    withLabel: "Avec Kadrek — après 6 mois",
    without: [["3 200 €/mois","admin & saisie manuelle"],["12%","taux d'erreur sur les commandes"],["5 jours","délai moyen de réponse client"],["3 jours","pour compiler le rapport mensuel"],["40%","du budget marketing gaspillé"]],
    with: [["800 €/mois","économie nette de 2 400 €/mois"],["0,3%","taux d'erreur — quasi zéro"],["Instantané","réponse client via agent IA"],["30 secondes","rapport généré automatiquement"],["100%","du budget marketing tracé"]],
    faqBadge: "FAQ", faqTitle: "Vos questions sur le ROI",
    faqs: [
      { q: "Les résultats sont-ils garantis ?", a: "Pas dans l'absolu — mais on commence par le diagnostic pour identifier exactement ce qui est atteignable dans votre contexte. On ne vend pas de promesses sans mesure : chaque sprint a des indicateurs de succès définis avant de démarrer." },
      { q: "Quel est le budget minimum ?", a: "Un projet d'automatisation ciblé démarre à partir de 2 000 €. Une transformation complète est tarifée selon la complexité et le périmètre. Le diagnostic vous donne un devis précis et sans surprise." },
      { q: "Combien de temps avant de voir un ROI ?", a: "Les premiers résultats arrivent en 2 à 4 semaines sur un périmètre ciblé. Le ROI complet sur un programme de transformation est visible à 3-6 mois." },
      { q: "Et si ça ne fonctionne pas pour nous ?", a: "C'est pourquoi on commence par un sprint de 2 semaines avant tout engagement plus large. Si le premier livrable ne vous convainc pas, vous ne payez pas la suite." },
    ],
    ctaBadge: "Prochaine étape", ctaTitle: "Ces résultats peuvent être les vôtres",
    ctaText: "Commencez par un diagnostic. On identifie vos opportunités et on vous donne un plan concret — en 45 minutes.",
    ctaBtn: "Demander un diagnostic",
  },
  en: {
    heroBadge: "Evidence & Results",
    heroTitle: "Concrete figures, not promises",
    heroText: "Every result presented here was achieved by a real business. We measure everything before, during and after.",
    heroBtn: "Request a diagnostic",
    roiTitle: "What our clients gain",
    roiMetrics: [
      { value: "40%",    label: "reduction in operational costs",      sub: "By automating manual processes" },
      { value: "15h",    label: "saved per employee per week",         sub: "Repetitive tasks eliminated" },
      { value: "-90%",   label: "data-entry errors",                   sub: "Through automatic synchronisation" },
      { value: "3.5×",   label: "average return on investment",        sub: "Over the first 12 months" },
      { value: "+28%",   label: "customer satisfaction improved",      sub: "Faster responses, fewer errors" },
      { value: "2 wks",  label: "to first results",                    sub: "We deliver fast, prove before scaling" },
    ],
    casesBadge: "Case studies", casesTitle: "How we did it, step by step",
    casesBadgeProblem: "Problem", casesBadgeSolution: "Kadrek solution", casesBadgeResults: "Results",
    timelineLabel: "Results in",
    caseStudies: [
      {
        sector: "Logistics & Transport", profile: "Transport company, ~60 employees",
        challenge: "11% error rate on orders, daily customer complaints, time-consuming manual reports.",
        solution: "Order processing automation, ERP-CRM synchronisation, real-time operational dashboard.",
        results: [{ metric: "11% → 0.4%", label: "error rate" }, { metric: "-65%", label: "customer complaints" }, { metric: "3h → 5 min", label: "weekly reports" }],
        timeline: "3 months",
      },
      {
        sector: "Retail & Commerce", profile: "Retail business, ~25 employees",
        challenge: "Time-consuming manual invoicing, forgotten client follow-ups, no real-time cash-flow visibility.",
        solution: "Full automation of invoicing and reminders, live cash-flow dashboard, AI support agent.",
        results: [{ metric: "€2,800", label: "saved / month" }, { metric: "-80%", label: "invoicing admin time" }, { metric: "+22%", label: "collection rate" }],
        timeline: "6 weeks",
      },
      {
        sector: "Professional services", profile: "Consulting firm, ~12 employees",
        challenge: "Data scattered across 5 tools, impossible to see overall performance, intuition-based decisions.",
        solution: "Data centralisation, real-time executive dashboard, automatic weekly reports.",
        results: [{ metric: "30 sec", label: "to see all activity" }, { metric: "+15%", label: "revenue growth in 6 months" }, { metric: "5 tools → 1", label: "single source of truth" }],
        timeline: "2 months",
      },
    ],
    scenariosBadge: "Typical scenarios",
    scenariosTitle: "Problems you might recognise",
    scenariosText: "These situations are common in SMEs. Here's how Kadrek solves them.",
    problemLabel: "Problem", solutionLabel: "Kadrek solution",
    problemScenarios: [
      { domain: "Automation", color: "#0891b2", problem: "Time-consuming manual invoicing, forgotten client follow-ups, no real-time cash-flow visibility.", solution: "Full invoicing and reminder automation, live cash-flow dashboard, AI support agent.", results: ["€2,800/mo saved", "-80% admin time", "+22% collection rate"] },
      { domain: "Data & Analytics", color: "#2563eb", problem: "Data scattered across 5 tools, impossible to see overall performance, intuition-based decisions.", solution: "Data centralisation, real-time executive dashboard, automatic weekly reports.", results: ["Full view in 30 sec", "+15% revenue in 6 months", "5 tools → 1 source"] },
      { domain: "Presence & SEO", color: "#2563eb", problem: "65% of bookings via OTA (18% commission), unmanaged online reviews, site with no organic traffic.", solution: "SEO overhaul, reputation strategy, high-performance site with direct bookings.", results: ["-40% OTA dependency", "+90 positive reviews", "+200% organic traffic"] },
      { domain: "AI Agents", color: "#7c3aed", problem: "Saturated support team, average response time 6 hours, repetitive tickets with no added value.", solution: "AI agent 24/7 on existing channels, automatic triage, intelligent escalation to a human.", results: ["-70% manual tickets", "Response < 30 sec", "Team focused on complex cases"] },
      { domain: "Process automation", color: "#0891b2", problem: "3-day employee onboarding, scattered documents, checklist forgotten at every new hire.", solution: "Automated onboarding workflow, tools provisioned automatically, onboarding portal.", results: ["3 days → 4 hours", "0 steps missed", "Professional experience from day 1"] },
      { domain: "Automated reporting", color: "#7c3aed", problem: "Weekly reports manually compiled over 3 hours, frequent errors, manual distribution.", solution: "Automatic report generator connected to data sources, scheduled delivery to right recipients.", results: ["0 manual reports", "3h → 0 min/week", "Data always up to date"] },
    ],
    beforeAfterBadge: "Before / After", beforeAfterTitle: "The financial impact in figures",
    beforeAfterSub: "Concrete example for a 20-person SME",
    withoutLabel: "Without digitalisation — real costs",
    withLabel: "With Kadrek — after 6 months",
    without: [["€3,200/mo","admin & manual data entry"],["12%","order error rate"],["5 days","average customer response time"],["3 days","to compile the monthly report"],["40%","of marketing budget wasted"]],
    with: [["€800/mo","net saving of €2,400/month"],["0.3%","error rate — near zero"],["Instant","customer response via AI agent"],["30 seconds","report generated automatically"],["100%","of marketing budget tracked"]],
    faqBadge: "FAQ", faqTitle: "Your questions about ROI",
    faqs: [
      { q: "Are results guaranteed?", a: "Not in absolute terms — but we start with a diagnostic to identify exactly what's achievable in your context. We don't sell unmeasured promises: every sprint has success metrics defined before we start." },
      { q: "What is the minimum budget?", a: "A targeted automation project starts from €2,000. A full transformation is priced by complexity and scope. The diagnostic gives you a precise, no-surprise quote." },
      { q: "How long before seeing an ROI?", a: "First results arrive in 2–4 weeks on a targeted scope. Full ROI on a transformation programme is visible at 3–6 months." },
      { q: "What if it doesn't work for us?", a: "That's why we start with a 2-week sprint before any larger commitment. If the first deliverable doesn't convince you, you don't pay for the rest." },
    ],
    ctaBadge: "Next step", ctaTitle: "These results can be yours",
    ctaText: "Start with a diagnostic. We identify your opportunities and give you a concrete plan — in 45 minutes.",
    ctaBtn: "Request a diagnostic",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return locale === "en"
    ? { title: "Results & ROI | Kadrek", description: "Concrete figures, result examples and return on investment from digital transformation with Kadrek." }
    : { title: "Résultats & ROI | Kadrek", description: "Chiffres concrets, exemples de résultats et retour sur investissement de la transformation digitale avec Kadrek." };
}

export default async function ResultatsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pb-24 pt-36 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">{c.heroBadge}</div>
            <h1 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[64px]">{c.heroTitle}</h1>
            <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-500">{c.heroText}</p>
            <SquareButton href="/contact" accent="#2563eb">{c.heroBtn}</SquareButton>
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 border-b border-white/10 pb-10">
            <h2 className="text-4xl font-black tracking-tight lg:text-[50px]">{c.roiTitle}</h2>
          </div>
          <div className="grid gap-0 divide-y divide-white/5 lg:divide-y-0 lg:grid-cols-3 lg:divide-x">
            {c.roiMetrics.map((m) => (
              <div key={m.value} className="py-8 lg:py-0 lg:px-10 first:pl-0 last:pr-0">
                <div className="mb-2 text-[42px] font-black leading-none text-blue-400">{m.value}</div>
                <div className="mb-1 text-[14px] font-semibold text-white/70">{m.label}</div>
                <p className="text-[13px] leading-relaxed text-white/30">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 border-b border-slate-200 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.casesBadge}</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">{c.casesTitle}</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {c.caseStudies.map((cs) => (
              <div key={cs.sector} className="border border-slate-200 bg-white overflow-hidden">
                <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
                  <div className="mb-1 text-[11px] font-black uppercase tracking-widest text-blue-600">{cs.sector}</div>
                  <div className="font-black text-slate-800">{cs.profile}</div>
                  <div className="mt-1 text-[12px] text-slate-400">{c.timelineLabel} {cs.timeline}</div>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <div className="mb-2 text-[11px] font-black uppercase tracking-widest text-red-400">{c.casesBadgeProblem}</div>
                    <p className="text-[13px] leading-relaxed text-slate-600">{cs.challenge}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-[11px] font-black uppercase tracking-widest text-blue-500">{c.casesBadgeSolution}</div>
                    <p className="text-[13px] leading-relaxed text-slate-600">{cs.solution}</p>
                  </div>
                  <div>
                    <div className="mb-3 text-[11px] font-black uppercase tracking-widest text-emerald-500">{c.casesBadgeResults}</div>
                    <div className="grid grid-cols-3 gap-2">
                      {cs.results.map((r) => (
                        <div key={r.label} className="border border-emerald-100 bg-emerald-50 p-2.5 text-center">
                          <div className="text-base font-black text-emerald-700">{r.metric}</div>
                          <div className="text-[10px] text-emerald-600">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Scenarios */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 border-b border-slate-100 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.scenariosBadge}</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">{c.scenariosTitle}</h2>
            <p className="mt-4 max-w-xl text-lg text-slate-500">{c.scenariosText}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.problemScenarios.map((ps) => (
              <div key={ps.problem} className="flex flex-col border border-slate-200 bg-white overflow-hidden">
                <div className="px-5 py-3 text-[11px] font-black uppercase tracking-widest text-white" style={{ background: ps.color }}>{ps.domain}</div>
                <div className="flex flex-1 flex-col p-6 space-y-4">
                  <div>
                    <p className="mb-1.5 text-[10px] font-black uppercase tracking-widest text-red-400">{c.problemLabel}</p>
                    <p className="text-[13px] leading-relaxed text-slate-600">{ps.problem}</p>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[10px] font-black uppercase tracking-widest text-blue-500">{c.solutionLabel}</p>
                    <p className="text-[13px] leading-relaxed text-slate-600">{ps.solution}</p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                    {ps.results.map((r) => (
                      <span key={r} className="border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[11px] font-black text-emerald-700">✓ {r}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 border-b border-slate-200 pb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.beforeAfterBadge}</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-[50px]">{c.beforeAfterTitle}</h2>
            <p className="mt-4 text-lg text-slate-500">{c.beforeAfterSub}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            <div className="border-l-4 border-red-400 bg-red-50 p-8">
              <p className="mb-6 text-[11px] font-black uppercase tracking-widest text-red-500">{c.withoutLabel}</p>
              <ul className="space-y-3">
                {c.without.map(([v, l]) => (
                  <li key={l} className="flex items-center gap-3 text-[14px] text-slate-700">
                    <span className="flex-shrink-0 font-black text-red-400">✕</span>
                    <span className="font-black text-red-600">{v}</span>
                    <span className="text-slate-500">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-4 border-emerald-400 bg-emerald-50 p-8">
              <p className="mb-6 text-[11px] font-black uppercase tracking-widest text-emerald-600">{c.withLabel}</p>
              <ul className="space-y-3">
                {c.with.map(([v, l]) => (
                  <li key={l} className="flex items-center gap-3 text-[14px] text-slate-700">
                    <span className="flex-shrink-0 font-black text-emerald-500">✓</span>
                    <span className="font-black text-emerald-700">{v}</span>
                    <span className="text-slate-500">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="mb-12 border-b border-slate-100 pb-8">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{c.faqBadge}</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900">{c.faqTitle}</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {c.faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-[15px] font-bold text-slate-800 list-none select-none hover:text-slate-900 transition-colors">
                  {faq.q}
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center border border-slate-200 bg-white font-black text-slate-500 group-open:bg-blue-600 group-open:text-white group-open:border-blue-600 transition-all text-sm">+</span>
                </summary>
                <div className="pb-5 text-[14px] leading-relaxed text-slate-500">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">{c.ctaBadge}</div>
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[50px]">{c.ctaTitle}</h2>
              <p className="text-lg text-white/50">{c.ctaText}</p>
            </div>
            <SquareButton href="/contact" accent="#2563eb">{c.ctaBtn}</SquareButton>
          </div>
        </div>
      </section>
    </div>
  );
}
