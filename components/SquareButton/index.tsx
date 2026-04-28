import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SquareButtonProps {
  href:       string;
  children:   React.ReactNode;
  img?:       string;       // optional background image on the right panel
  accent?:    string;       // fallback color for right panel if no image
  variant?:   "light" | "dark";
  className?: string;
}

export default function SquareButton({
  href,
  children,
  img,
  accent = "#2563eb",
  variant = "light",
  className = "",
}: SquareButtonProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href={href}
      className={`group inline-flex items-stretch overflow-hidden border transition-all duration-200 hover:-translate-y-px hover:shadow-md ${
        isDark
          ? "border-white/20 hover:border-white/40"
          : "border-slate-200 hover:border-slate-300"
      } ${className}`}
    >
      {/* Text area */}
      <span className={`flex items-center px-7 py-3.5 text-[14px] font-semibold transition-colors ${
        isDark ? "text-white/70 group-hover:text-white" : "text-slate-700 group-hover:text-slate-900"
      }`}>
        {children}
      </span>

      {/* Right panel — image or accent color */}
      <span
        className="relative flex w-12 flex-shrink-0 items-center justify-center overflow-hidden border-l transition-all duration-200"
        style={{
          borderColor: isDark ? "rgba(255,255,255,.15)" : "#e2e8f0",
          background: img ? undefined : accent,
        }}
      >
        {img && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        )}
        <ArrowRight className="relative z-10 h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
