import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable | Kadrek",
  description:
    "La page demandée n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil Kadrek.",
};

export default function NotFoundPage() {
  return (
    <section className="relative z-10 flex items-center justify-center min-h-screen bg-lightgreen px-4">
      <div className="max-w-2xl text-center">

        {/* 404 Premium */}
        <h1 className="text-[120px] font-extrabold text-primary leading-none">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-green">
          Page introuvable
        </h2>

        <p className="mt-4 text-body-color">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Vous pouvez retourner à l&apos;accueil ou nous contacter directement.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-orange-600 transition shadow-btn"
          >
            Retour à l&apos;accueil
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}