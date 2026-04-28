"use client";

import { MapPin, Mail, Clock, Globe } from "lucide-react";
import { useLocale } from "next-intl";

const translations = {
  fr: {
    badge: "Contactez-nous",
    heading: "Nos coordonnées",
    infos: [
      { icon: MapPin,  label: "Siège social",    value: "Casablanca, Maroc" },
      { icon: Globe,   label: "Présence",         value: "Experts répartis dans le monde entier" },
      { icon: Mail,    label: "Email",             value: "contact@kadrek.com", href: "mailto:contact@kadrek.com" },
      { icon: Clock,   label: "Disponibilité",    value: "Lun – Sam : 08h00 – 20h00" },
    ],
  },
  en: {
    badge: "Contact us",
    heading: "Our details",
    infos: [
      { icon: MapPin,  label: "Headquarters",    value: "Casablanca, Morocco" },
      { icon: Globe,   label: "Presence",         value: "Experts distributed worldwide" },
      { icon: Mail,    label: "Email",             value: "contact@kadrek.com", href: "mailto:contact@kadrek.com" },
      { icon: Clock,   label: "Availability",     value: "Mon – Sat: 08:00 – 20:00" },
    ],
  },
};

export default function ContactInfo() {
  const locale = useLocale() as "fr" | "en";
  const t = translations[locale] ?? translations.fr;

  return (
    <div className="h-full border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase text-cyan-200">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          {t.badge}
        </span>
        <h2 className="mt-3 text-xl font-black text-white">{t.heading}</h2>
      </div>

      <ul className="space-y-5">
        {t.infos.map((item) => {
          const Icon = item.icon;
          const inner = (
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">{item.label}</p>
                <p className="mt-0.5 font-medium text-slate-200">{item.value}</p>
              </div>
            </div>
          );
          return (
            <li key={item.label}>
              {"href" in item ? (
                <a href={item.href} className="block transition hover:opacity-80">{inner}</a>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
