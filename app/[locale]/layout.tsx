import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "../providers";
import { routing } from "@/routing";
import "../../styles/index.css";

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
    "Kadrek helps businesses grow digitally: strategy, data, process automation, web performance and AI that delivers real results.",
  keywords: [
    "digital transformation Morocco",
    "artificial intelligence Casablanca",
    "process automation",
    "digital consulting",
    "Kadrek",
  ],
  authors: [{ name: "Kadrek" }],
  openGraph: {
    title: "Kadrek - Digital Growth, Automation & AI",
    description:
      "Digital strategy, data, automation, AI and web performance for ambitious businesses.",
    url: "https://kadrek.com",
    siteName: "Kadrek",
    images: [
      {
        url: "https://kadrek.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kadrek - Digital Growth, Automation & AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadrek - Digital Growth, Automation & AI",
    description: "Premium digital consulting for growth, automation and AI.",
    images: ["https://kadrek.com/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://kadrek.com" },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "fr" | "en")) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop />
          </Providers>
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Kadrek",
              url: "https://kadrek.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Casablanca",
                addressCountry: "MA",
              },
              areaServed: locale === "fr" ? "Maroc" : "Morocco",
              description:
                locale === "fr"
                  ? "Entreprise spécialisée en transformation digitale, intelligence artificielle, automatisation des processus et efficacité opérationnelle."
                  : "Company specialised in digital transformation, AI, process automation and operational efficiency.",
            }),
          }}
        />
      </body>
    </html>
  );
}
