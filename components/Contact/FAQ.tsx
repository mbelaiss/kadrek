"use client";

import { useLocale } from "next-intl";

const translations = {
  fr: {
    heading: "Questions fréquentes",
    faqs: [
      {
        question: "Comment demander un devis ?",
        answer: "Remplissez le formulaire ci-dessus ou contactez-nous directement. Nous revenons vers vous avec une prochaine étape claire.",
      },
      {
        question: "Quels sont vos délais de réponse ?",
        answer: "Nous répondons généralement sous 24h ouvrées selon la précision de votre demande.",
      },
      {
        question: "Travaillez-vous à l'international ?",
        answer: "Oui, nos experts opèrent depuis plusieurs pays. Nous accompagnons les entreprises au Maroc, en Europe et en Afrique, en présentiel ou à distance selon le projet.",
      },
      {
        question: "Quel est le coût d'un diagnostic ?",
        answer: "Le diagnostic initial de 45 minutes est offert. Il nous permet d'identifier vos opportunités et de vous proposer un plan d'action chiffré sans engagement.",
      },
    ],
  },
  en: {
    heading: "Frequently asked questions",
    faqs: [
      {
        question: "How do I request a quote?",
        answer: "Fill in the form above or contact us directly. We'll get back to you with a clear next step.",
      },
      {
        question: "How quickly do you respond?",
        answer: "We typically respond within 24 business hours, depending on the detail of your request.",
      },
      {
        question: "Do you work internationally?",
        answer: "Yes, our experts operate from multiple countries. We support businesses in Morocco, Europe and Africa, in person or remotely depending on the project.",
      },
      {
        question: "How much does a diagnostic cost?",
        answer: "The initial 45-minute diagnostic is free. It allows us to identify your opportunities and propose a costed action plan with no commitment.",
      },
    ],
  },
};

export default function ContactFAQ() {
  const locale = useLocale() as "fr" | "en";
  const t = translations[locale] ?? translations.fr;

  return (
    <div className="border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
      <h2 className="mb-6 text-2xl font-black text-white">{t.heading}</h2>
      {t.faqs.map((faq) => (
        <div key={faq.question} className="border-t border-white/10 py-5 first:border-t-0 first:pt-0 last:pb-0">
          <h3 className="font-bold text-slate-100">{faq.question}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
