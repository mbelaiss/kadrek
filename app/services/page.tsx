import { Metadata } from "next";
import ServicesSlider from "@/components/ServicesSlider";
import SquareButton from "@/components/SquareButton";

export const metadata: Metadata = {
  title: "Nos Services | Kadrek",
  description: "Data, IA, automatisation, présence digitale, formation et dashboards. Découvrez toutes les solutions Kadrek.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pb-16 pt-36 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-block bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              Nos Solutions
            </div>
            <h1 className="mb-6 text-5xl font-black leading-[1.06] tracking-tight text-slate-900 lg:text-[64px]">
              Six expertises pour une entreprise plus performante
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-slate-500">
              Data, IA, automatisation, présence digitale, formation et interfaces sur-mesure — chaque brique rend votre organisation plus rapide et plus rentable.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Slider ── */}
      <ServicesSlider />

      {/* ── CTA ── */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">Prochaine étape</div>
              <h2 className="mb-3 text-4xl font-black text-white lg:text-[50px]">Quelle solution vous correspond ?</h2>
              <p className="text-lg text-white/50">En 45 minutes, on identifie exactement ce dont votre entreprise a besoin et on vous donne un plan d&apos;action chiffré.</p>
            </div>
            <SquareButton href="/contact" accent="#2563eb">Demander un diagnostic</SquareButton>
          </div>
        </div>
      </section>

    </div>
  );
}
