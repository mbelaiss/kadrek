import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const alt = "Kadrek - Digital Growth, Automation & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #030712 0%, #0a1628 50%, #040a1a 100%)",
          fontFamily: "Arial Black, Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Blue glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Cyan glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            padding: "80px 100px",
          }}
        >
          {/* Logo badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: 900,
                color: "white",
              }}
            >
              K
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 900, color: "white", lineHeight: 1 }}>
                Kadrek
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#64748b",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                Digital & AI
              </span>
            </div>
          </div>

          {/* Main heading */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: "24px",
              maxWidth: "800px",
            }}
          >
            Digital Growth,
            <br />
            <span style={{ color: "#2563eb" }}>Automation</span> & AI
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: "680px",
            }}
          >
            Stratégie digitale, data, automatisation et IA pour entreprises ambitieuses — Casablanca, Maroc.
          </div>

          {/* Pills */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "40px",
            }}
          >
            {["Data & Analytics", "Solutions IA", "Automatisation", "Présence digitale"].map((tag) => (
              <div
                key={tag}
                style={{
                  border: "1px solid rgba(37,99,235,0.4)",
                  background: "rgba(37,99,235,0.12)",
                  color: "#93c5fd",
                  fontSize: "13px",
                  fontWeight: 700,
                  padding: "8px 16px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right accent bar */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "linear-gradient(to bottom, #2563eb, #06b6d4)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
