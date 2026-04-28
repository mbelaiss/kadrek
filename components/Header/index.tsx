"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const megaMenu = {
  Solutions: {
    cols: [
      {
        heading: "Données & IA",
        links: [
          { name: "Data & Analytics",    sub: "Dashboards et KPI en temps réel",          href: "/solutions/data-analytics" },
          { name: "Agents IA",           sub: "Automatisation intelligente 24h/24",        href: "/solutions/agents-ia" },
          { name: "Formation IA",        sub: "Votre équipe, augmentée par l'IA",          href: "/solutions/formation-ia" },
        ],
      },
      {
        heading: "Croissance & Visibilité",
        links: [
          { name: "Présence & SEO",       sub: "SEO, site web, réputation en ligne",       href: "/solutions/presence-seo" },
          { name: "Automatisation",       sub: "Processus zéro friction, ROI immédiat",    href: "/solutions/automatisation" },
          { name: "Optimisation digitale", sub: "Audit et rationalisation de votre stack", href: "/solutions/optimisation-digitale" },
        ],
      },
      {
        heading: "Interfaces & Systèmes",
        links: [
          { name: "Interfaces clients",        sub: "Dashboards et portails sur-mesure",   href: "/solutions/interfaces-clients" },
          { name: "Voir toutes les solutions", sub: "Découvrez l'offre complète Kadrek",   href: "/services" },
        ],
      },
    ],
    featured: {
      title: "Audit digital gratuit",
      desc: "45 minutes pour identifier vos meilleures opportunités de croissance.",
      href: "/contact",
      cta: "Réserver maintenant",
    },
  },
};

const navLinks = [
  { name: "Digitalisation", href: "/digitalisation" },
  { name: "Résultats",      href: "/resultats" },
  { name: "À propos",       href: "/#about" },
  { name: "Contact",        href: "/contact" },
];

export default function Header() {
  const [sticky,   setSticky]   = useState(false);
  const [open,     setOpen]     = useState<string | null>(null);
  const [mobile,   setMobile]   = useState(false);
  const [mSection, setMSection] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu  = (name: string) => { if (timerRef.current) clearTimeout(timerRef.current); setOpen(name); };
  const closeMenu = () => { timerRef.current = setTimeout(() => setOpen(null), 150); };

  return (
    <>
      <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        sticky
          ? "border-b border-slate-200 bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,.06)] backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      }`}>
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

          {/* ── Logo ── */}
          <Link href="/" className="group flex items-center gap-3" onClick={() => setMobile(false)}>
            <span className="flex h-9 w-9 items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-base font-black text-white shadow-[0_4px_14px_rgba(37,99,235,.35)] transition-all group-hover:shadow-[0_4px_20px_rgba(37,99,235,.55)]">
              K
            </span>
            <span className="text-[18px] font-black tracking-tight text-slate-900">
              Kadrek
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden items-center lg:flex">
            {/* Solutions mega-menu */}
            {Object.entries(megaMenu).map(([name]) => (
              <div key={name} className="relative" onMouseEnter={() => openMenu(name)} onMouseLeave={closeMenu}>
                <button className={`flex items-center gap-1 px-4 py-2.5 text-[14px] font-semibold transition-colors ${
                  open === name ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                }`}>
                  {name}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open === name ? "rotate-180 text-blue-600" : ""}`} />
                </button>

                {/* Mega dropdown */}
                <div
                  onMouseEnter={() => openMenu(name)}
                  onMouseLeave={closeMenu}
                  className={`absolute left-1/2 top-full -translate-x-1/2 transition-all duration-200 ${
                    open === name ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  <div className="mt-2 w-[800px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.12)]">
                    <div className="grid grid-cols-3 gap-0 p-6">
                      {megaMenu[name as keyof typeof megaMenu].cols.map((col) => (
                        <div key={col.heading} className="pr-6">
                          <p className="mb-3 text-[11px] font-black uppercase tracking-widest text-slate-400">{col.heading}</p>
                          <div className="space-y-1">
                            {col.links.map((link) => (
                              <Link key={link.name} href={link.href} onClick={() => setOpen(null)}
                                className="group flex items-start gap-3 rounded-lg p-2.5 transition-all hover:bg-slate-50">
                                <span className="mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                                <span>
                                  <span className="block text-[13px] font-semibold text-slate-800 group-hover:text-blue-600">{link.name}</span>
                                  <span className="block text-[11px] text-slate-400 mt-0.5">{link.sub}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Featured strip */}
                    <div className="border-t border-slate-100 bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="block text-[13px] font-black text-slate-800">{megaMenu[name as keyof typeof megaMenu].featured.title}</span>
                          <span className="text-[12px] text-slate-500">{megaMenu[name as keyof typeof megaMenu].featured.desc}</span>
                        </div>
                        <Link href={megaMenu[name as keyof typeof megaMenu].featured.href} onClick={() => setOpen(null)}
                          className="inline-flex items-stretch overflow-hidden transition hover:opacity-90">
                          <span className="flex items-center bg-blue-600 px-4 py-2 text-[12px] font-black text-white">
                            {megaMenu[name as keyof typeof megaMenu].featured.cta}
                          </span>
                          <span className="flex w-8 items-center justify-center bg-blue-700">
                            <ArrowRight className="h-3 w-3 text-white" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {navLinks.map((item) => (
              <Link key={item.name} href={item.href}
                className="px-4 py-2.5 text-[14px] font-semibold text-slate-600 transition-colors hover:text-slate-900">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact"
              className="text-[14px] font-semibold text-slate-600 transition-colors hover:text-slate-900">
              Se connecter
            </Link>
            <Link href="/contact"
              className="group inline-flex items-stretch overflow-hidden transition-all hover:-translate-y-px hover:shadow-md">
              <span className="flex items-center bg-blue-600 px-5 py-2.5 text-[13px] font-black text-white">
                Démarrer gratuitement
              </span>
              <span className="flex w-9 items-center justify-center bg-blue-700">
                <ArrowRight className="h-3.5 w-3.5 text-white transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* ── Mobile burger ── */}
          <button onClick={() => setMobile((v) => !v)} aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden">
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {mobile && (
        <div className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-white pt-[68px] lg:hidden">
          <div className="flex-1 px-5 py-6">
            {/* Solutions */}
            <button onClick={() => setMSection(mSection === "Solutions" ? null : "Solutions")}
              className="flex w-full items-center justify-between py-3 text-base font-bold text-slate-900 border-b border-slate-100">
              Solutions
              <ChevronDown className={`h-4 w-4 transition-transform ${mSection === "Solutions" ? "rotate-180" : ""}`} />
            </button>
            {mSection === "Solutions" && (
              <div className="py-3 space-y-1">
                {megaMenu.Solutions.cols.flatMap((c) => c.links).map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setMobile(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setMobile(false)}
                className="block border-b border-slate-100 py-3 text-base font-bold text-slate-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-slate-100 p-5">
            <Link href="/contact" onClick={() => setMobile(false)}
              className="flex w-full items-stretch overflow-hidden">
              <span className="flex flex-1 items-center justify-center bg-blue-600 py-4 text-sm font-black text-white">
                Démarrer gratuitement
              </span>
              <span className="flex w-12 items-center justify-center bg-blue-700">
                <ArrowRight className="h-4 w-4 text-white" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
