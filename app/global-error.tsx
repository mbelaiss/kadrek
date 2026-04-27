"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[KADREK GlobalError]", error);
  }, [error]);

  return (
    <html lang="fr">
      <body style={{ margin: 0, background: "#030712", fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div style={{ width: "100%", maxWidth: "420px", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "80px",
                borderRadius: "16px",
                background: "rgba(239,68,68,.1)",
                border: "1px solid rgba(239,68,68,.2)",
                marginBottom: "1.5rem",
              }}
            >
              <svg
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgba(248,113,113,1)"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>

            <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 800, margin: "0 0 .5rem" }}>
              Une erreur est survenue
            </h1>
            <p style={{ color: "rgba(255,255,255,.45)", fontSize: ".9rem", margin: "0 0 .75rem" }}>
              Une erreur critique s'est produite. Nos équipes ont été notifiées.
            </p>
            {error.digest && (
              <p style={{ color: "rgba(255,255,255,.2)", fontFamily: "monospace", fontSize: ".75rem", margin: "0 0 2rem" }}>
                Code : {error.digest}
              </p>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
              <button
                onClick={reset}
                style={{
                  width: "100%",
                  padding: ".85rem",
                  borderRadius: "12px",
                  background: "#ea580c",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: ".95rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                🔄 Réessayer
              </button>
              <a
                href="/"
                style={{
                  display: "block",
                  width: "100%",
                  padding: ".85rem",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(255,255,255,.1)",
                  color: "rgba(255,255,255,.6)",
                  fontWeight: 500,
                  fontSize: ".9rem",
                  textDecoration: "none",
                  boxSizing: "border-box",
                }}
              >
                ← Retour à l'accueil
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
