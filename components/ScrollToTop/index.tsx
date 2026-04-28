"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ScrollToTop() {
  const t = useTranslations("ui");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 400);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("back_top")}
      className="fixed bottom-8 right-8 z-[99] flex h-10 w-10 items-center justify-center bg-blue-600 text-white shadow-[0_4px_14px_rgba(37,99,235,.4)] transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_4px_20px_rgba(37,99,235,.55)] hover:-translate-y-0.5"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
