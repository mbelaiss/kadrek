import {
  ContactForm,
  ContactInfo,
  ContactFAQ,
} from "@/components/Contact";

export const metadata = {
  title: "Contact | Kadrek",
  description: "Contactez Kadrek — email et assistance. Siège social à Casablanca, Maroc.",
};

export default function ContactPage() {
  return (
    <main className="premium-grid min-h-screen bg-[#030712] px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.15),transparent_30%),linear-gradient(135deg,#030712_0%,#08111f_50%,#040617_100%)]" />

      <div className="mx-auto max-w-7xl space-y-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase text-cyan-300">
            Diagnostic Kadrek
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-white sm:text-6xl">
            Parlons de vos leviers digitaux.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Décrivez votre besoin : stratégie digitale, data, automatisation, IA
            ou performance web. Nous vous répondons avec une prochaine étape claire.
          </p>
        </div>

        <ContactForm />

        <div className="grid gap-6 lg:grid-cols-2">
          <ContactInfo />
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-cyan-300">Notre modèle</p>
            <h3 className="mb-4 text-xl font-black text-white">Experts répartis dans le monde entier</h3>
            <p className="text-[15px] leading-relaxed text-slate-400">
              Kadrek ne se limite pas à un bureau ou à une géographie. Nos experts opèrent depuis plusieurs pays pour apporter à chaque client les meilleures compétences disponibles — peu importe où elles se trouvent.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
              Cette organisation distribuée nous permet de travailler sur plusieurs fuseaux horaires, de recruter les meilleurs profils mondiaux, et de livrer des résultats sans compromis sur la qualité.
            </p>
          </div>
        </div>

        <ContactFAQ />
      </div>
    </main>
  );
}
