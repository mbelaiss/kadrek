"use client";

import { MapPin, Phone, Smartphone, Mail, Clock } from "lucide-react";

const infos = [
  {
    icon: MapPin,
    label: "Siège social",
    value: "Hay Al Massira, Bloc B – DRARGA, Agadir",
  },
  {
    icon: Phone,
    label: "Téléphone fixe",
    value: "05 28 38 50 35",
    href: "tel:+212528385035",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    value: "06 68 39 95 48",
    href: "tel:+212668399548",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@kadrek.com",
    href: "mailto:contact@kadrek.com",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun – Sam : 08h00 – 18h00",
  },
];

const ContactInfo = () => {
  return (
    <div className="h-full rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase text-cyan-200">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          Contactez-nous
        </span>
        <h2 className="mt-3 text-xl font-black text-white">Nos coordonnées</h2>
      </div>

      <ul className="space-y-5">
        {infos.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
                  {item.label}
                </p>
                <p className="mt-0.5 font-medium text-slate-200">{item.value}</p>
              </div>
            </div>
          );

          return (
            <li key={item.label}>
              {item.href ? (
                <a href={item.href} className="group block transition hover:opacity-80">
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactInfo;
