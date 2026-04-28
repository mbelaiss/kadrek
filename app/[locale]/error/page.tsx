import { Link } from "@/navigation";
import type { Locale } from "@/routing";

const content = {
  fr: {
    title: "Page introuvable",
    body: "La page que vous recherchez n'existe pas ou a été déplacée. Vous pouvez retourner à l'accueil ou nous contacter directement.",
    home: "Retour à l'accueil",
    contact: "Nous contacter",
  },
  en: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has been moved. You can return to the home page or contact us directly.",
    home: "Back to home",
    contact: "Contact us",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return locale === "en"
    ? { title: "Page not found | Kadrek", description: "The page you requested doesn't exist or has been moved. Return to Kadrek home." }
    : { title: "Page introuvable | Kadrek", description: "La page demandée n'existe pas ou a été déplacée. Retournez à l'accueil Kadrek." };
}

export default async function NotFoundPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;
  return (
    <section className="relative z-10 flex items-center justify-center min-h-screen bg-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-[120px] font-extrabold text-blue-600 leading-none">404</h1>
        <h2 className="mt-6 text-3xl font-bold text-slate-900">{c.title}</h2>
        <p className="mt-4 text-slate-500">{c.body}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-8 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            {c.home}
          </Link>
          <Link href="/contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition">
            {c.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
