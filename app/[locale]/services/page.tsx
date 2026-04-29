import ServicesSlider from "@/components/ServicesSlider";
import SquareButton from "@/components/SquareButton";
import type { Locale } from "@/routing";

const content = {
  fr: {
    badge: "Nos Solutions",
    title: "Six expertises pour une organisation à la hauteur de vos ambitions",
    subtitle: "Data, intelligence artificielle, automatisation, présence digitale, formation et interfaces sur-mesure — chaque domaine renforce durablement votre organisation.",
    ctaBadge: "Prochaine étape",
    ctaTitle: "Quelle solution vous correspond ?",
    ctaText: "En 45 minutes, on identifie exactement ce dont votre entreprise a besoin et on vous donne un plan d'action chiffré.",
    ctaBtn: "Demander un diagnostic",
  },
  en: {
    badge: "Our Solutions",
    title: "Six areas of expertise for an organisation that matches your ambitions",
    subtitle: "Data, artificial intelligence, automation, digital presence, training and custom interfaces — each domain strengthens your organisation durably.",
    ctaBadge: "Next step",
    ctaTitle: "Which solution is right for you?",
    ctaText: "In 45 minutes, we pinpoint exactly what your business needs and give you a costed action plan.",
    ctaBtn: "Request a diagnostic",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return locale === "en"
    ? { title: "Our Services | Kadrek", description: "Data, AI, automation, digital presence, training and dashboards. Discover all Kadrek solutions." }
    : { title: "Nos Services | Kadrek", description: "Data, IA, automatisation, présence digitale, formation et dashboards. Découvrez toutes les solutions Kadrek." };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;

  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-white pb-16 pt-36 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">{c.badge}</div>
            <h1 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[64px]">{c.title}</h1>
            <p className="max-w-xl text-xl leading-relaxed text-slate-500">{c.subtitle}</p>
          </div>
        </div>
      </section>
      <ServicesSlider />
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
