"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, RotateCcw } from "lucide-react";
import SquareButton from "@/components/SquareButton";

/* ── Translations ── */
const T = {
  fr: {
    intro: {
      badge: "Outil gratuit",
      title: "Quel est votre niveau de digitalisation ?",
      subtitle: "15 questions. 5 minutes. Un diagnostic personnalisé de votre maturité digitale avec vos priorités d'action.",
      start: "Démarrer le diagnostic",
      disclaimer: "Gratuit · Aucune inscription requise · Résultats immédiats",
    },
    domains: [
      { id: "ops",      label: "Processus & Opérations", color: "#2563eb" },
      { id: "data",     label: "Données & Décisions",    color: "#7c3aed" },
      { id: "presence", label: "Présence Digitale",      color: "#0891b2" },
      { id: "ai",       label: "IA & Automatisation",    color: "#059669" },
      { id: "teams",    label: "Équipes & Outils",       color: "#dc2626" },
    ],
    questions: [
      /* Processus & Opérations */
      {
        domain: 0,
        text: "Comment gérez-vous votre facturation ?",
        options: [
          { label: "Sur papier ou fichier Excel", score: 0 },
          { label: "Logiciel de facturation, peu automatisé", score: 1 },
          { label: "Automatisé : devis → facture → relance", score: 2 },
          { label: "Entièrement intégré à notre ERP/CRM", score: 3 },
        ],
      },
      {
        domain: 0,
        text: "Comment traitez-vous vos commandes ou dossiers clients ?",
        options: [
          { label: "Manuellement, par email et téléphone", score: 0 },
          { label: "Tableur partagé entre l'équipe", score: 1 },
          { label: "Logiciel dédié avec suivi", score: 2 },
          { label: "Système intégré avec alertes automatiques", score: 3 },
        ],
      },
      {
        domain: 0,
        text: "Vos rapports de performance sont-ils…",
        options: [
          { label: "Compilés manuellement, rarement produits", score: 0 },
          { label: "Compilés manuellement chaque semaine/mois", score: 1 },
          { label: "Semi-automatiques avec quelques tableaux", score: 2 },
          { label: "Générés automatiquement en temps réel", score: 3 },
        ],
      },
      /* Données & Décisions */
      {
        domain: 1,
        text: "Sur quoi basez-vous vos décisions stratégiques ?",
        options: [
          { label: "Principalement l'intuition et l'expérience", score: 0 },
          { label: "Quelques indicateurs suivis irrégulièrement", score: 1 },
          { label: "Un tableau de bord mis à jour régulièrement", score: 2 },
          { label: "Des dashboards temps réel par département", score: 3 },
        ],
      },
      {
        domain: 1,
        text: "Comment suivez-vous vos données clients ?",
        options: [
          { label: "Éparpillées entre emails et fichiers locaux", score: 0 },
          { label: "Centralisées dans un tableur partagé", score: 1 },
          { label: "Dans un CRM dédié", score: 2 },
          { label: "CRM intégré à l'ensemble de nos outils", score: 3 },
        ],
      },
      {
        domain: 1,
        text: "Vos KPIs clés sont-ils…",
        options: [
          { label: "Non formalisés", score: 0 },
          { label: "Suivis dans un fichier Excel partagé", score: 1 },
          { label: "Visualisés dans un outil BI", score: 2 },
          { label: "Alertes automatiques si un KPI dévie", score: 3 },
        ],
      },
      /* Présence Digitale */
      {
        domain: 2,
        text: "Votre site web actuel est-il…",
        options: [
          { label: "Inexistant ou très ancien (> 5 ans)", score: 0 },
          { label: "Présent mais non optimisé ni entretenu", score: 1 },
          { label: "Moderne, mobile-friendly et à jour", score: 2 },
          { label: "Optimisé SEO et générateur de leads actif", score: 3 },
        ],
      },
      {
        domain: 2,
        text: "Comment vos prospects vous trouvent-ils ?",
        options: [
          { label: "Uniquement par bouche-à-oreille", score: 0 },
          { label: "Parfois sur Google, sans stratégie", score: 1 },
          { label: "SEO travaillé, présence réseaux sociaux", score: 2 },
          { label: "Stratégie digitale complète avec tracking", score: 3 },
        ],
      },
      {
        domain: 2,
        text: "La relation client en ligne est-elle…",
        options: [
          { label: "Inexistante (tout par téléphone/email)", score: 0 },
          { label: "Email et formulaire de contact basique", score: 1 },
          { label: "Suivi structuré des demandes entrantes", score: 2 },
          { label: "Portail client avec self-service", score: 3 },
        ],
      },
      /* IA & Automatisation */
      {
        domain: 3,
        text: "Utilisez-vous l'IA dans votre activité ?",
        options: [
          { label: "Non, pas du tout", score: 0 },
          { label: "Quelques outils personnels (ChatGPT…)", score: 1 },
          { label: "IA intégrée dans certains processus", score: 2 },
          { label: "Solutions IA au cœur de notre organisation", score: 3 },
        ],
      },
      {
        domain: 3,
        text: "Quel est votre niveau d'automatisation des tâches répétitives ?",
        options: [
          { label: "Tout est manuel", score: 0 },
          { label: "Quelques automatisations basiques (emails)", score: 1 },
          { label: "Automatisation de plusieurs processus clés", score: 2 },
          { label: "La majorité des processus est automatisée", score: 3 },
        ],
      },
      {
        domain: 3,
        text: "Vos équipes utilisent-elles des outils collaboratifs ?",
        options: [
          { label: "Email et téléphone uniquement", score: 0 },
          { label: "Outils informels (WhatsApp, Drive)", score: 1 },
          { label: "Suite collaborative structurée (Teams, Slack…)", score: 2 },
          { label: "Stack collaboratif intégré au workflow", score: 3 },
        ],
      },
      /* Équipes & Outils */
      {
        domain: 4,
        text: "Vos collaborateurs sont-ils formés aux outils digitaux ?",
        options: [
          { label: "Peu ou pas formés", score: 0 },
          { label: "Autodidactes, sans accompagnement structuré", score: 1 },
          { label: "Formations ponctuelles organisées", score: 2 },
          { label: "Programme de formation continue en place", score: 3 },
        ],
      },
      {
        domain: 4,
        text: "Comment gérez-vous RH, planning et congés ?",
        options: [
          { label: "Sur papier ou par email", score: 0 },
          { label: "Tableur partagé", score: 1 },
          { label: "Logiciel RH dédié", score: 2 },
          { label: "Système RH intégré à l'ensemble de la gestion", score: 3 },
        ],
      },
      {
        domain: 4,
        text: "Votre infrastructure IT est-elle…",
        options: [
          { label: "Basique (PC locaux, peu ou pas de cloud)", score: 0 },
          { label: "Partiellement dans le cloud", score: 1 },
          { label: "Principalement cloud avec sauvegardes", score: 2 },
          { label: "100% cloud, sécurisé et scalable", score: 3 },
        ],
      },
    ],
    levels: [
      { min: 0,  max: 11, label: "Débutant digital",  color: "#ef4444", desc: "Votre entreprise opère principalement avec des processus manuels. La digitalisation représente une opportunité majeure de gain d'efficacité." },
      { min: 12, max: 22, label: "En transition",      color: "#f59e0b", desc: "Vous avez commencé à digitaliser certains aspects de votre activité. Il reste des axes importants à structurer pour atteindre un impact réel." },
      { min: 23, max: 33, label: "Digital avancé",     color: "#2563eb", desc: "Votre organisation a une bonne maturité digitale. Les prochaines étapes consistent à automatiser davantage et à tirer parti des données." },
      { min: 34, max: 45, label: "Leader digital",     color: "#059669", desc: "Votre entreprise fait partie des plus avancées en matière de digitalisation. L'enjeu est d'optimiser en continu et d'explorer l'IA avancée." },
    ],
    recommendations: [
      { domain: 0, title: "Automatisez vos processus opérationnels", desc: "Facturation, commandes, rapports — vos flux manuels coûtent du temps et génèrent des erreurs. Une automatisation ciblée peut libérer 15 à 20h par semaine.", href: "/solutions/automatisation" },
      { domain: 1, title: "Structurez votre pilotage par la data", desc: "Vos décisions méritent d'être appuyées par des données fiables et accessibles. Un tableau de bord adapté change radicalement la clarté de votre gestion.", href: "/solutions/data-analytics" },
      { domain: 2, title: "Renforcez votre présence digitale", desc: "Votre visibilité en ligne est un canal d'acquisition sous-exploité. Un site optimisé et une stratégie SEO peuvent multiplier vos leads entrants.", href: "/solutions/presence-seo" },
      { domain: 3, title: "Déployez vos premières solutions IA", desc: "L'IA peut prendre en charge vos tâches répétitives dès maintenant. Support client, triage, rapports — des gains mesurables en 2 semaines.", href: "/solutions/agents-ia" },
      { domain: 4, title: "Équipez et formez vos équipes", desc: "La meilleure technologie ne crée pas d'impact sans adoption. Former vos collaborateurs est le levier le plus rapide pour rentabiliser vos outils.", href: "/solutions/formation-ia" },
    ],
    result: {
      title: "Votre diagnostic de maturité digitale",
      scoreLabel: "Score global",
      domainTitle: "Résultats par domaine",
      prioritiesTitle: "Vos 3 priorités d'action",
      ctaTitle: "Passez à l'étape suivante",
      ctaDesc: "Ce diagnostic automatisé donne une première image. Un diagnostic complet avec nos experts identifie les actions à plus fort ROI pour votre situation spécifique.",
      ctaBtn: "Demander un diagnostic expert",
      ctaSecondary: "Explorer nos solutions",
      restart: "Refaire le diagnostic",
      question: "Question",
      of: "sur",
    },
  },
  en: {
    intro: {
      badge: "Free tool",
      title: "What is your level of digitalisation?",
      subtitle: "15 questions. 5 minutes. A personalised assessment of your digital maturity with your action priorities.",
      start: "Start the diagnostic",
      disclaimer: "Free · No sign-up required · Instant results",
    },
    domains: [
      { id: "ops",      label: "Processes & Operations", color: "#2563eb" },
      { id: "data",     label: "Data & Decisions",       color: "#7c3aed" },
      { id: "presence", label: "Digital Presence",       color: "#0891b2" },
      { id: "ai",       label: "AI & Automation",        color: "#059669" },
      { id: "teams",    label: "Teams & Tools",          color: "#dc2626" },
    ],
    questions: [
      { domain: 0, text: "How do you manage your invoicing?", options: [{ label: "Paper or Excel spreadsheet", score: 0 }, { label: "Invoicing software, little automation", score: 1 }, { label: "Automated: quote → invoice → reminder", score: 2 }, { label: "Fully integrated with our ERP/CRM", score: 3 }] },
      { domain: 0, text: "How do you handle orders or client files?", options: [{ label: "Manually, by email and phone", score: 0 }, { label: "Shared spreadsheet across the team", score: 1 }, { label: "Dedicated software with tracking", score: 2 }, { label: "Integrated system with automatic alerts", score: 3 }] },
      { domain: 0, text: "Your performance reports are…", options: [{ label: "Compiled manually, rarely produced", score: 0 }, { label: "Compiled manually each week/month", score: 1 }, { label: "Semi-automatic with some spreadsheets", score: 2 }, { label: "Generated automatically in real time", score: 3 }] },
      { domain: 1, text: "What do you base your strategic decisions on?", options: [{ label: "Mainly intuition and experience", score: 0 }, { label: "A few indicators tracked irregularly", score: 1 }, { label: "A regularly updated dashboard", score: 2 }, { label: "Real-time dashboards by department", score: 3 }] },
      { domain: 1, text: "How do you track your client data?", options: [{ label: "Scattered across emails and local files", score: 0 }, { label: "Centralised in a shared spreadsheet", score: 1 }, { label: "In a dedicated CRM", score: 2 }, { label: "CRM integrated with all our tools", score: 3 }] },
      { domain: 1, text: "Your key KPIs are…", options: [{ label: "Not formalised", score: 0 }, { label: "Tracked in a shared Excel file", score: 1 }, { label: "Visualised in a BI tool", score: 2 }, { label: "Automatic alerts when a KPI deviates", score: 3 }] },
      { domain: 2, text: "Your current website is…", options: [{ label: "Non-existent or very old (> 5 years)", score: 0 }, { label: "Present but not optimised or maintained", score: 1 }, { label: "Modern, mobile-friendly and up to date", score: 2 }, { label: "SEO-optimised and actively generating leads", score: 3 }] },
      { domain: 2, text: "How do prospects find you?", options: [{ label: "Only by word of mouth", score: 0 }, { label: "Sometimes on Google, no strategy", score: 1 }, { label: "Active SEO, social media presence", score: 2 }, { label: "Full digital strategy with tracking", score: 3 }] },
      { domain: 2, text: "Your online client relationship is…", options: [{ label: "Non-existent (all by phone/email)", score: 0 }, { label: "Email and basic contact form", score: 1 }, { label: "Structured tracking of incoming requests", score: 2 }, { label: "Client portal with self-service", score: 3 }] },
      { domain: 3, text: "Do you use AI in your business?", options: [{ label: "No, not at all", score: 0 }, { label: "Some personal tools (ChatGPT…)", score: 1 }, { label: "AI integrated in certain processes", score: 2 }, { label: "AI solutions at the core of our organisation", score: 3 }] },
      { domain: 3, text: "What is your level of repetitive task automation?", options: [{ label: "Everything is manual", score: 0 }, { label: "A few basic automations (emails)", score: 1 }, { label: "Several key processes automated", score: 2 }, { label: "Most processes are automated", score: 3 }] },
      { domain: 3, text: "Do your teams use collaborative tools?", options: [{ label: "Email and phone only", score: 0 }, { label: "Informal tools (WhatsApp, Drive)", score: 1 }, { label: "Structured suite (Teams, Slack…)", score: 2 }, { label: "Collaborative stack integrated into workflow", score: 3 }] },
      { domain: 4, text: "Are your staff trained on digital tools?", options: [{ label: "Little or no training", score: 0 }, { label: "Self-taught, no structured support", score: 1 }, { label: "Occasional organised training sessions", score: 2 }, { label: "Ongoing training programme in place", score: 3 }] },
      { domain: 4, text: "How do you manage HR, scheduling and leave?", options: [{ label: "On paper or by email", score: 0 }, { label: "Shared spreadsheet", score: 1 }, { label: "Dedicated HR software", score: 2 }, { label: "HR system integrated with full management", score: 3 }] },
      { domain: 4, text: "Your IT infrastructure is…", options: [{ label: "Basic (local PCs, little or no cloud)", score: 0 }, { label: "Partially in the cloud", score: 1 }, { label: "Mainly cloud with backups", score: 2 }, { label: "100% cloud, secured and scalable", score: 3 }] },
    ],
    levels: [
      { min: 0,  max: 11, label: "Digital beginner",  color: "#ef4444", desc: "Your business operates mainly on manual processes. Digitalisation represents a major opportunity to gain efficiency." },
      { min: 12, max: 22, label: "In transition",      color: "#f59e0b", desc: "You have started digitalising some aspects of your business. Important areas remain to structure for real impact." },
      { min: 23, max: 33, label: "Digitally advanced", color: "#2563eb", desc: "Your organisation has good digital maturity. Next steps involve more automation and leveraging your data." },
      { min: 34, max: 45, label: "Digital leader",     color: "#059669", desc: "Your company is among the most advanced in digitalisation. The challenge is continuous optimisation and exploring advanced AI." },
    ],
    recommendations: [
      { domain: 0, title: "Automate your operational processes", desc: "Invoicing, orders, reports — your manual flows cost time and generate errors. Targeted automation can free up 15–20 hours per week.", href: "/solutions/automatisation" },
      { domain: 1, title: "Structure your data-driven management", desc: "Your decisions deserve reliable, accessible data. A tailored dashboard fundamentally changes the clarity of your management.", href: "/solutions/data-analytics" },
      { domain: 2, title: "Strengthen your digital presence", desc: "Your online visibility is an under-exploited acquisition channel. An optimised site and SEO strategy can multiply your inbound leads.", href: "/solutions/presence-seo" },
      { domain: 3, title: "Deploy your first AI solutions", desc: "AI can handle your repetitive tasks right now. Customer support, triage, reports — measurable gains in 2 weeks.", href: "/solutions/agents-ia" },
      { domain: 4, title: "Equip and train your teams", desc: "The best technology creates no impact without adoption. Training your staff is the fastest lever to get a return on your tools.", href: "/solutions/formation-ia" },
    ],
    result: {
      title: "Your digital maturity diagnostic",
      scoreLabel: "Overall score",
      domainTitle: "Results by domain",
      prioritiesTitle: "Your 3 action priorities",
      ctaTitle: "Take the next step",
      ctaDesc: "This automated diagnostic gives an initial picture. A full diagnostic with our experts identifies the highest-ROI actions for your specific situation.",
      ctaBtn: "Request an expert diagnostic",
      ctaSecondary: "Explore our solutions",
      restart: "Redo the diagnostic",
      question: "Question",
      of: "of",
    },
  },
};

type Lang = "fr" | "en";

interface DiagnosticToolProps { locale?: string }

export default function DiagnosticTool({ locale }: DiagnosticToolProps) {
  const lang: Lang = locale === "en" ? "en" : "fr";
  const t = T[lang];

  const [phase, setPhase]     = useState<"intro" | "quiz" | "result">("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const totalQ = t.questions.length;
  const progress = Math.round((current / totalQ) * 100);

  function handleAnswer(score: number, idx: number) {
    setSelected(idx);
    setTimeout(() => {
      const next = [...answers, score];
      setAnswers(next);
      if (current + 1 < totalQ) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setPhase("result");
      }
    }, 400);
  }

  function restart() {
    setPhase("intro");
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
  }

  /* ── Results calculation ── */
  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = totalQ * 3;
  const pct = Math.round((totalScore / maxScore) * 100);
  const level = t.levels.find((l) => totalScore >= l.min && totalScore <= l.max) ?? t.levels[0];

  const domainScores = t.domains.map((dom, di) => {
    const qs = t.questions.filter((q) => q.domain === di);
    const scored = qs.map((q, qi) => {
      const globalIdx = t.questions.findIndex((qq, i) => qq.domain === di && t.questions.filter((x, j) => j < i && x.domain === di).length === qi);
      return answers[globalIdx] ?? 0;
    });
    const sum = scored.reduce((a, b) => a + b, 0);
    const max = qs.length * 3;
    return { ...dom, score: sum, max, pct: Math.round((sum / max) * 100) };
  });

  const weakest = [...domainScores].sort((a, b) => a.pct - b.pct).slice(0, 3);
  const priorities = weakest.map((w) => t.recommendations.find((r) => r.domain === t.domains.indexOf(w))!).filter(Boolean);

  /* ── Intro ── */
  if (phase === "intro") return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white">
        {t.intro.badge}
      </div>
      <h1 className="mb-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-[52px]">
        {t.intro.title}
      </h1>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-500">{t.intro.subtitle}</p>
      <button
        onClick={() => setPhase("quiz")}
        className="mb-4 flex items-center gap-3 px-8 py-4 text-[14px] font-black uppercase tracking-widest text-white transition-all hover:opacity-90"
        style={{ background: "#2563eb" }}
      >
        {t.intro.start} <ArrowRight className="h-4 w-4" />
      </button>
      <p className="text-[12px] text-slate-400">{t.intro.disclaimer}</p>
    </div>
  );

  /* ── Quiz ── */
  if (phase === "quiz") {
    const q = t.questions[current];
    const domain = t.domains[q.domain];
    return (
      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* Progress */}
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between text-[12px] font-semibold text-slate-400">
            <span style={{ color: domain.color }}>{domain.label}</span>
            <span>{t.result.question} {current + 1} {t.result.of} {totalQ}</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100">
            <div className="h-full transition-all duration-500" style={{ width: `${progress}%`, background: domain.color }} />
          </div>
        </div>

        {/* Question */}
        <h2 className="mb-8 text-2xl font-black leading-snug tracking-tight text-slate-900 lg:text-[28px]">
          {q.text}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => selected === null && handleAnswer(opt.score, i)}
              className="w-full border text-left transition-all duration-200"
              style={{
                borderColor: selected === i ? domain.color : "#e2e8f0",
                background: selected === i ? `${domain.color}10` : "#fff",
                opacity: selected !== null && selected !== i ? 0.4 : 1,
              }}
            >
              <div className="flex items-center gap-4 px-5 py-4">
                <div
                  className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-[11px] font-black transition-all"
                  style={{
                    background: selected === i ? domain.color : "#f1f5f9",
                    color: selected === i ? "#fff" : "#94a3b8",
                  }}
                >
                  {selected === i ? <CheckCircle2 className="h-3.5 w-3.5" /> : String.fromCharCode(65 + i)}
                </div>
                <span className="text-[14px] font-semibold leading-snug text-slate-700">{opt.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Back */}
        {current > 0 && (
          <button
            onClick={() => { setCurrent(current - 1); setAnswers(answers.slice(0, -1)); setSelected(null); }}
            className="mt-6 flex items-center gap-2 text-[12px] font-semibold text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Retour
          </button>
        )}
      </div>
    );
  }

  /* ── Results ── */
  return (
    <div className="mx-auto max-w-[1000px] px-6 py-12">

      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-6 inline-block px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white" style={{ background: level.color }}>
          {level.label}
        </div>
        <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 lg:text-[40px]">{t.result.title}</h2>

        {/* Score circle */}
        <div className="mx-auto mt-8 flex h-40 w-40 flex-col items-center justify-center border-4" style={{ borderColor: level.color }}>
          <div className="text-5xl font-black" style={{ color: level.color }}>{pct}<span className="text-2xl">%</span></div>
          <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-slate-400">{t.result.scoreLabel}</div>
        </div>
        <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-slate-500">{level.desc}</p>
      </div>

      {/* Domain bars */}
      <div className="mb-14">
        <div className="mb-6 text-[11px] font-black uppercase tracking-widest text-slate-400">{t.result.domainTitle}</div>
        <div className="space-y-4">
          {domainScores.map((d) => (
            <div key={d.id}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-slate-700">{d.label}</span>
                <span className="text-[13px] font-black" style={{ color: d.color }}>{d.pct}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100">
                <div className="h-full transition-all duration-700" style={{ width: `${d.pct}%`, background: d.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Priorities */}
      <div className="mb-14">
        <div className="mb-6 text-[11px] font-black uppercase tracking-widest text-slate-400">{t.result.prioritiesTitle}</div>
        <div className="space-y-3">
          {priorities.map((p, i) => (
            <a key={i} href={p.href} className="block border border-slate-200 bg-white p-6 transition-all hover:border-blue-200 hover:bg-blue-50/30">
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center bg-blue-600 text-[11px] font-black text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="mb-1 text-[14px] font-black text-slate-900">{p.title}</div>
                  <div className="text-[13px] leading-relaxed text-slate-500">{p.desc}</div>
                </div>
                <ArrowRight className="ml-auto mt-0.5 h-4 w-4 flex-shrink-0 text-slate-300" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-slate-200 bg-slate-50 p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-2 text-lg font-black text-slate-900">{t.result.ctaTitle}</div>
            <p className="text-[14px] leading-relaxed text-slate-500">{t.result.ctaDesc}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <SquareButton href="/contact" accent="#2563eb">{t.result.ctaBtn}</SquareButton>
            <SquareButton href="/services" accent="#64748b">{t.result.ctaSecondary}</SquareButton>
          </div>
        </div>
      </div>

      {/* Restart */}
      <div className="mt-6 text-center">
        <button onClick={restart} className="inline-flex items-center gap-2 text-[12px] font-semibold text-slate-400 hover:text-slate-600 transition-colors">
          <RotateCcw className="h-3.5 w-3.5" /> {t.result.restart}
        </button>
      </div>

    </div>
  );
}
