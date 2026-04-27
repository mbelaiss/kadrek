import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kadrek.com"),

  title: {
    default: "Kadrek | Digital Growth, Automation & AI",
    template: "%s | Kadrek",
  },

  description:
    "Kadrek accompagne les entreprises dans leur croissance digitale: stratégie, data, automatisation des processus, performance web et intelligence artificielle utile au quotidien.",

  keywords: [
    "transformation digitale Maroc",
    "intelligence artificielle Agadir",
    "automatisation Maroc",
    "automatisation des processus",
    "conseil digital",
    "efficacité opérationnelle",
    "Kadrek",
  ],

  authors: [{ name: "Kadrek" }],

  openGraph: {
    title: "Kadrek - Digital Growth, Automation & AI",
    description:
      "Stratégie digitale, data, automatisation, IA et performance web pour entreprises ambitieuses.",
    url: "https://kadrek.com",
    siteName: "Kadrek",
    images: [
      {
        url: "https://kadrek.com/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Kadrek - Digital Growth, Automation & AI",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kadrek - Digital Growth, Automation & AI",
    description:
      "Conseil digital premium pour la croissance, l'automatisation et l'IA.",
    images: ["https://kadrek.com/images/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://kadrek.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Header />

          <main className="min-h-screen">{children}</main>

          <Footer />
          <ScrollToTop />
        </Providers>

        {/* Données structurées SEO Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Kadrek",
              url: "https://kadrek.com",
              telephone: "+212668399548",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Agadir",
                addressCountry: "MA",
              },
              areaServed: "Maroc",
              description:
                "Entreprise spécialisée en transformation digitale, intelligence artificielle, automatisation des processus et efficacité opérationnelle.",
            }),
          }}
        />
      </body>
    </html>
  );
}
