import DiagnosticTool from "@/components/DiagnosticTool";
import type { Locale } from "@/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return locale === "en"
    ? { title: "Digital Maturity Diagnostic | Kadrek", description: "15 questions to assess your company's level of digitalisation. Free, instant results, personalised action priorities." }
    : { title: "Diagnostic de Maturité Digitale | Kadrek", description: "15 questions pour évaluer le niveau de digitalisation de votre entreprise. Gratuit, résultats immédiats, priorités d'action personnalisées." };
}

export default async function DiagnosticPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="bg-white text-slate-900">
      <div className="relative overflow-hidden border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="relative mx-auto max-w-[1400px]">
          <DiagnosticTool locale={locale as Locale} />
        </div>
      </div>
    </div>
  );
}
