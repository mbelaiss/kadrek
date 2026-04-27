"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const solutions = [
  { name: "Data & Analytics",   href: "/services#data" },
  { name: "Agents IA",          href: "/services#ia" },
  { name: "Automatisation",     href: "/services#automatisation" },
  { name: "Présence digitale",  href: "/services#presence" },
  { name: "Formation IA",       href: "/services#formation" },
  { name: "Dashboards & UI",    href: "/services#dashboards" },
];

const company = [
  { name: "Accueil",            href: "/" },
  { name: "Digitalisation",     href: "/digitalisation" },
  { name: "Nos services",       href: "/services" },
  { name: "Résultats",          href: "/resultats" },
  { name: "Contact",            href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-base font-black text-white shadow-[0_4px_14px_rgba(37,99,235,.3)]">
                K
              </span>
              <span>
                <span className="block text-[18px] font-black text-slate-900">Kadrek</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Digital & AI</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-500">
              Conseil digital pour aider les entreprises à structurer leur croissance, automatiser leurs processus et utiliser l'IA avec impact réel.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-[13px] font-black text-blue-600 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600">
              Démarrer un diagnostic <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-sm text-slate-500 transition-colors hover:text-blue-600">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Entreprise</h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="text-sm text-slate-500 transition-colors hover:text-blue-600">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-blue-500" />
                Agadir, Maroc
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-blue-500" />
                <span>06 68 39 95 48<br />05 28 38 50 35</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-blue-500" />
                contact@kadrek.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Kadrek. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <span>Agadir · Maroc</span>
            <span>·</span>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Nous contacter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
