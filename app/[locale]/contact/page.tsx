import { ContactForm, ContactInfo, ContactFAQ } from "@/components/Contact";
import type { Locale } from "@/routing";

const content = {
  fr: {
    eyebrow: "Diagnostic Kadrek",
    title: "Parlons de vos leviers digitaux.",
    subtitle: "Décrivez votre besoin : stratégie digitale, data, automatisation, IA ou performance web. Nous vous répondons avec une prochaine étape claire.",
    modelBadge: "Notre modèle",
    modelTitle: "Experts répartis dans le monde entier",
    modelP1: "Kadrek ne se limite pas à un bureau ou à une géographie. Nos experts opèrent depuis plusieurs pays pour apporter à chaque client les meilleures compétences disponibles — peu importe où elles se trouvent.",
    modelP2: "Cette organisation distribuée nous permet de travailler sur plusieurs fuseaux horaires, de recruter les meilleurs profils mondiaux, et de livrer des résultats sans compromis sur la qualité.",
  },
  en: {
    eyebrow: "Kadrek Diagnostic",
    title: "Let's talk about your digital levers.",
    subtitle: "Describe your need: digital strategy, data, automation, AI or web performance. We'll respond with a clear next step.",
    modelBadge: "Our model",
    modelTitle: "Experts distributed worldwide",
    modelP1: "Kadrek is not limited to one office or geography. Our experts operate from multiple countries to bring each client the best available skills — wherever they are.",
    modelP2: "This distributed model lets us work across time zones, recruit the world's best profiles, and deliver results without compromising on quality.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return locale === "en"
    ? { title: "Contact | Kadrek", description: "Contact Kadrek — email and assistance. Headquarters in Casablanca, Morocco." }
    : { title: "Contact | Kadrek", description: "Contactez Kadrek — email et assistance. Siège social à Casablanca, Maroc." };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;

  return (
    <main className="premium-grid min-h-screen bg-[#030712] px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.15),transparent_30%),linear-gradient(135deg,#030712_0%,#08111f_50%,#040617_100%)]" />
      <div className="mx-auto max-w-7xl space-y-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase text-cyan-300">{c.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-white sm:text-6xl">{c.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{c.subtitle}</p>
        </div>
        <ContactForm />
        <div className="grid gap-6 lg:grid-cols-2">
          <ContactInfo />
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-cyan-300">{c.modelBadge}</p>
            <h3 className="mb-4 text-xl font-black text-white">{c.modelTitle}</h3>
            <p className="text-[15px] leading-relaxed text-slate-400">{c.modelP1}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-400">{c.modelP2}</p>
          </div>
        </div>
        <ContactFAQ />
      </div>
    </main>
  );
}
