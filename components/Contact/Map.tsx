"use client";

export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-2 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
      <iframe
        src="https://www.google.com/maps?q=30.381944,-9.471444&hl=fr&z=17&output=embed"
        width="100%"
        height="400"
        className="rounded-md grayscale invert-[0.9] hue-rotate-180"
        style={{ border: 0 }}
        loading="lazy"
        title="Localisation Kadrek"
      ></iframe>
    </div>
  );
}
