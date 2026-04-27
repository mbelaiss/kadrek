"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[KADREK Error]", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1120] px-4">
      <div className="w-full max-w-md text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20">
            <svg className="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <div>
          <h1 className="text-2xl font-bold text-white">Une erreur est survenue</h1>
          <p className="mt-2 text-sm text-white/50">
            Une erreur inattendue s'est produite. Nos équipes ont été notifiées.
          </p>
          {error.digest && (
            <p className="mt-2 font-mono text-xs text-white/20">Code : {error.digest}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={reset}
            className="w-full rounded-xl bg-orange-600 py-3 text-sm font-bold text-white hover:bg-orange-500 transition"
          >
            🔄 Réessayer
          </button>
          <Link
            href="/"
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
