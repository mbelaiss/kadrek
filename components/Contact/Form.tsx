"use client";

import { useLocale } from "next-intl";

const translations = {
  fr: {
    overline: "Obtenir un diagnostic",
    heading: "Envoyez-nous votre contexte.",
    sub: "Quelques lignes suffisent pour identifier vos priorités : croissance, outils, automatisation, usage de l'IA ou optimisation des processus.",
    name: "Nom & prénom",
    namePh: "Votre nom complet",
    email: "Email professionnel",
    emailPh: "votre@email.com",
    phone: "Téléphone",
    phonePh: "Votre numéro",
    priority: "Sujet principal",
    options: [
      { value: "Site de gestion PME",  label: "Site de gestion PME" },
      { value: "Stratégie digitale",   label: "Stratégie digitale" },
      { value: "Data & Analytics",     label: "Data & Analytics" },
      { value: "Automatisation & IA",  label: "Automatisation & IA" },
      { value: "Formation IA",         label: "Formation IA" },
      { value: "Présence & SEO",       label: "Présence & SEO" },
      { value: "Autre",                label: "Autre" },
    ],
    message: "Message",
    messagePh: "Décrivez votre besoin, vos outils actuels ou votre objectif…",
    submit: "Envoyer la demande",
    success: "Demande envoyée avec succès. Nous vous répondons sous 24h.",
    note: "Réponse sous 24h ouvrées · Premier retour clair et orienté action",
  },
  en: {
    overline: "Get a diagnostic",
    heading: "Send us your context.",
    sub: "A few lines are enough to identify your priorities: growth, tools, automation, AI usage or process optimisation.",
    name: "Full name",
    namePh: "Your full name",
    email: "Business email",
    emailPh: "your@email.com",
    phone: "Phone",
    phonePh: "Your phone number",
    priority: "Main subject",
    options: [
      { value: "SME management platform", label: "SME management platform" },
      { value: "Digital strategy",        label: "Digital strategy" },
      { value: "Data & Analytics",        label: "Data & Analytics" },
      { value: "Automation & AI",         label: "Automation & AI" },
      { value: "AI Training",             label: "AI Training" },
      { value: "Presence & SEO",          label: "Presence & SEO" },
      { value: "Other",                   label: "Other" },
    ],
    message: "Message",
    messagePh: "Describe your need, your current tools or your goal…",
    submit: "Send request",
    success: "Request sent successfully. We'll reply within 24 hours.",
    note: "Response within 24 business hours · Clear, action-oriented first reply",
  },
};

const inputClass =
  "w-full border border-white/10 bg-slate-950/55 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-slate-950";

export default function ContactForm() {
  const locale = useLocale() as "fr" | "en";
  const t = translations[locale] ?? translations.fr;

  return (
    <section className="border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase text-cyan-300">{t.overline}</p>
          <h2 className="mt-4 text-3xl font-black text-white">{t.heading}</h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">{t.sub}</p>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form).entries());
            await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
            alert(t.success);
            form.reset();
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">{t.name}</label>
              <input name="name" type="text" required placeholder={t.namePh} className={inputClass} />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">{t.email}</label>
              <input name="email" type="email" required placeholder={t.emailPh} className={inputClass} />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">{t.phone}</label>
              <input name="phone" type="tel" required placeholder={t.phonePh} className={inputClass} />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">{t.priority}</label>
              <select name="service" required className={inputClass}>
                {t.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-200">{t.message}</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder={t.messagePh}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                {t.submit}
              </button>
              <p className="mt-4 text-sm text-slate-500">{t.note}</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
