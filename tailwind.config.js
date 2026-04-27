/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },

    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",

        /* ========================= */
        /*        HSI PALETTE        */
        /* ========================= */

        primary: "#F26522",      // Orange HSI (CTA & actions)
        primaryHover: "#D9551C", // Orange hover

        green: "#1F3D2B",        // Vert foncé sécurité (titres)
        secondary: "#2E7D32",    // Vert moyen
        lightgreen: "#F1F8F4",   // Fond vert très clair

        white: "#FFFFFF",
        black: "#111827",
        dark: "#0F172A",

        "body-color": "#4B5563",
        "body-light": "#6B7280",

        stroke: "#E5E7EB",
        "stroke-dark": "#374151",
        "bg-color-dark": "#0B1120",
      },

      // Ombres personnalisées
      boxShadow: {
        card: "0px 8px 25px rgba(0,0,0,0.05)",
        cardHover: "0px 15px 35px rgba(0,0,0,0.08)",
        sticky: "0 2px 10px rgba(0,0,0,0.05)",
        btn: "0px 4px 12px rgba(242, 101, 34, 0.25)",
      },

      borderRadius: {
        xl: "1rem",
      },

      // ✨ Animations personnalisées
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      animation: {
        fadeInDown: "fadeInDown 1s ease forwards",
        fadeInUp: "fadeInUp 1s ease forwards",
        fadeInScale: "fadeInScale 1s ease forwards",
      },
    },
  },

  plugins: [],
};