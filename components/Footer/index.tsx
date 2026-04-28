"use client";

import { ArrowRight, Mail, MapPin, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  const solutions = [
    { key: "sol_data",      href: "/solutions/data-analytics" },
    { key: "sol_agents",    href: "/solutions/agents-ia" },
    { key: "sol_auto",      href: "/solutions/automatisation" },
    { key: "sol_presence",  href: "/services#presence" },
    { key: "sol_formation", href: "/solutions/formation-ia" },
    { key: "sol_dashboards",    href: "/solutions/interfaces-clients" },
    { key: "sol_site_gestion",  href: "/solutions/site-gestion" },
  ] as const;

  const company = [
    { key: "co_home",    href: "/" },
    { key: "co_digital", href: "/digitalisation" },
    { key: "co_services",href: "/services" },
    { key: "co_results", href: "/resultats" },
    { key: "co_contact", href: "/contact" },
  ] as const;

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-base font-black text-white shadow-[0_4px_14px_rgba(37,99,235,.3)]">
                K
              </span>
              <span>
                <span className="block text-[18px] font-black text-slate-900">Kadrek</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Digital & AI</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-500">{t("tagline")}</p>
            <Link href="/contact"
              className="group inline-flex items-stretch overflow-hidden transition-all hover:-translate-y-px hover:shadow-sm">
              <span className="flex items-center border border-blue-200 bg-blue-50 px-5 py-2.5 text-[13px] font-black text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                {t("cta")}
              </span>
              <span className="flex w-9 items-center justify-center border border-l-0 border-blue-200 bg-white transition-colors group-hover:bg-blue-700 group-hover:border-blue-700">
                <ArrowRight className="h-3.5 w-3.5 text-blue-400 transition-colors group-hover:text-white" />
              </span>
            </Link>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-widest text-slate-400">{t("sol_h")}</h3>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s.key}>
                  <Link href={s.href} className="text-sm text-slate-500 transition-colors hover:text-blue-600">
                    {t(s.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-widest text-slate-400">{t("co_h")}</h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.key}>
                  <Link href={c.href} className="text-sm text-slate-500 transition-colors hover:text-blue-600">
                    {t(c.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-widest text-slate-400">{t("ct_h")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-blue-500" />
                {t("hq")}
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <Globe className="mt-0.5 h-4 w-4 flex-none text-blue-500" />
                {t("presence")}
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
            © {new Date().getFullYear()} Kadrek. {t("rights")}
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <span>{t("location")}</span>
            <span>·</span>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">{t("contact_link")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
