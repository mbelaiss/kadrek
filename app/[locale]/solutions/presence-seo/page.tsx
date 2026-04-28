import SolutionPage from "@/components/SolutionPage";
import type { Locale } from "@/routing";

const content = {
  fr: {
    meta: { title: "Présence Digitale & SEO | Kadrek", description: "Site web haute performance, SEO, réputation en ligne. Soyez trouvé avant vos concurrents sur Google." },
    eyebrow: "Présence Digitale & SEO",
    title: "Soyez trouvé, choisi et mémorable en ligne",
    subtitle: "97% des acheteurs cherchent en ligne avant tout achat. Si vous n'apparaissez pas en tête de Google, vous n'existez pas pour eux. On construit une présence digitale qui travaille pour vous 24h/24.",
    problem: {
      title: "Invisible en ligne = invisible tout court",
      intro: "Un site lent, mal référencé ou absent des réseaux sociaux ne génère pas de leads. Vos concurrents qui investissent dans leur présence digitale captent vos clients potentiels avant que vous ne les atteigniez.",
      points: [
        "Site web lent ou non-mobile : Google pénalise, visiteurs fuient en moins de 3 secondes",
        "Aucune position sur les mots-clés de votre secteur : vos clients trouvent vos concurrents",
        "Réputation en ligne non gérée : avis négatifs sans réponse qui font fuir les prospects",
        "Aucun suivi des conversions : impossible de savoir ce qui fonctionne ou non",
        "Contenu obsolète ou inexistant : Google vous pénalise, clients doutent de votre sérieux",
        "Absence sur les réseaux sociaux B2B : aucune preuve sociale, crédibilité limitée",
      ],
    },
    benefits: [
      { icon: "🔍", title: "Top 3 Google sur vos mots-clés", desc: "Apparaître devant vos concurrents sur les recherches de vos clients idéaux. Trafic organique qualifié." },
      { icon: "⚡", title: "Site rapide = plus de conversions", desc: "1 seconde de chargement en moins = +7% de conversions. Un site technique optimisé rapporte concrètement." },
      { icon: "⭐", title: "Réputation gérée proactivement", desc: "Avis positifs sollicités, négatifs traités professionnellement. Votre e-réputation devient un actif commercial." },
      { icon: "📊", title: "Tracking précis du ROI marketing", desc: "Savoir exactement d'où viennent vos leads, quelles pages convertissent, quel contenu génère des clients." },
      { icon: "📱", title: "Expérience mobile irréprochable", desc: "60% des recherches se font sur mobile. Un site parfaitement adapté convertit 2× mieux que la moyenne." },
      { icon: "🏆", title: "Autorité et crédibilité durables", desc: "Un contenu expert et régulier vous positionne comme référence de votre secteur. Confiance client +40%." },
    ],
    useCases: [
      { icon: "🏗️", scenario: "BTP — Acquisition locale par SEO", challenge: "Entreprise de rénovation invisible sur Google. 100% du business via bouche-à-oreille. Croissance plafonnée.", solution: "Refonte SEO technique, création de pages locales par ville, Google Business optimisé, avis clients sollicités.", result: "Page 1 Google sur 12 mots-clés locaux en 4 mois. +35 leads qualifiés / mois. CA +28%." },
      { icon: "🛍️", scenario: "E-commerce — Performance et conversion", challenge: "Boutique en ligne avec 3 000 visiteurs/mois mais seulement 0,8% de conversion. Site lent (6s de chargement).", solution: "Optimisation Core Web Vitals, refonte du parcours d'achat, A/B tests, retargeting configuré.", result: "Chargement 6s → 1,2s. Conversion 0,8% → 2,4%. CA e-commerce ×3 sans augmenter le trafic." },
      { icon: "💼", scenario: "Cabinet conseil — Personal branding et SEO", challenge: "Consultant expert dans son domaine mais aucune présence en ligne. Prospects ne trouvent pas de preuves sociales.", solution: "Site vitrine expert, articles de blog SEO mensuels, profil LinkedIn optimisé, témoignages clients intégrés.", result: "15 articles positionnés page 1. 8 nouveaux clients inbound en 6 mois. Taux de closing amélioré." },
      { icon: "🏨", scenario: "Hôtellerie — Réputation et réservations directes", challenge: "Hôtel avec 65% de réservations via OTA (commission 18%). Avis mixtes non gérés sur TripAdvisor et Google.", solution: "Stratégie de gestion des avis, site optimisé pour réservations directes, SEO local, contenu social régulier.", result: "Avis moyen 3,8 → 4,6. Réservations directes +45%. Commission OTA économisée : 22k€/an." },
    ],
    features: [
      { icon: "🔍", name: "Audit SEO technique", desc: "Analyse complète et plan d'action" },
      { icon: "⚡", name: "Optimisation Core Web Vitals", desc: "Performance, accessibilité, SEO" },
      { icon: "📝", name: "Stratégie de contenu SEO", desc: "Articles positionnants par secteur" },
      { icon: "📍", name: "SEO local et Google Business", desc: "Visibilité géographique optimisée" },
      { icon: "⭐", name: "Gestion des avis en ligne", desc: "Acquisition et réponse proactive" },
      { icon: "📊", name: "Analytics et attribution", desc: "GA4, Search Console, heatmaps" },
      { icon: "📱", name: "Design mobile-first", desc: "Responsive parfait, UX optimale" },
      { icon: "🔗", name: "Netlinking stratégique", desc: "Backlinks qualifiés et durables" },
      { icon: "📧", name: "Email marketing automatisé", desc: "Séquences de nurturing ROI mesuré" },
      { icon: "📣", name: "Social media management", desc: "Présence cohérente multi-réseaux" },
    ],
    gains: [
      { label: "Trafic organique", before: "200/mois", after: "2 400/mois", delta: "×12 de trafic" },
      { label: "Taux de conversion", before: "0,8%", after: "2,4%", delta: "×3 de conversions" },
      { label: "Note Google/TripAdvisor", before: "3,4★", after: "4,7★", delta: "+38% de confiance" },
      { label: "Leads inbound mensuels", before: "2/mois", after: "28/mois", delta: "×14 de leads" },
    ],
    cta: { title: "Devenez le premier résultat Google de votre secteur", subtitle: "Un audit SEO pour identifier vos opportunités prioritaires et vous montrer exactement comment nous allons vous propulser devant vos concurrents." },
    relatedSolutions: [
      { icon: "💻", title: "Interfaces clients", href: "/solutions/interfaces-clients" },
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
      { icon: "🔧", title: "Optimisation digitale", href: "/solutions/optimisation-digitale" },
    ],
  },
  en: {
    meta: { title: "Digital Presence & SEO | Kadrek", description: "High-performance website, SEO, online reputation. Be found before your competitors on Google." },
    eyebrow: "Digital Presence & SEO",
    title: "Be found, chosen and memorable online",
    subtitle: "97% of buyers search online before any purchase. If you don't appear at the top of Google, you don't exist to them. We build a digital presence that works for you 24/7.",
    problem: {
      title: "Invisible online = invisible full stop",
      intro: "A slow, poorly ranked website or no social media presence generates no leads. Competitors who invest in their digital presence capture your potential customers before you can reach them.",
      points: [
        "Slow or non-mobile site: Google penalises you, visitors leave in under 3 seconds",
        "No rankings for your sector's keywords: your customers find your competitors",
        "Unmanaged online reputation: unanswered negative reviews that drive prospects away",
        "No conversion tracking: impossible to know what works and what doesn't",
        "Outdated or non-existent content: Google penalises you, customers doubt your credibility",
        "Absent from B2B social networks: no social proof, limited credibility",
      ],
    },
    benefits: [
      { icon: "🔍", title: "Top 3 on Google for your keywords", desc: "Appear ahead of competitors for your ideal customers' searches. Qualified organic traffic." },
      { icon: "⚡", title: "Faster site = more conversions", desc: "1 second less loading time = +7% conversions. A technically optimised site pays off in concrete terms." },
      { icon: "⭐", title: "Proactively managed reputation", desc: "Positive reviews solicited, negative ones handled professionally. Your online reputation becomes a commercial asset." },
      { icon: "📊", title: "Precise marketing ROI tracking", desc: "Know exactly where your leads come from, which pages convert, which content generates customers." },
      { icon: "📱", title: "Flawless mobile experience", desc: "60% of searches are on mobile. A perfectly adapted site converts 2× better than average." },
      { icon: "🏆", title: "Lasting authority and credibility", desc: "Expert, regular content positions you as the reference in your sector. Customer trust +40%." },
    ],
    useCases: [
      { icon: "🏗️", scenario: "Construction — Local acquisition via SEO", challenge: "Renovation company invisible on Google. 100% of business through word of mouth. Growth capped.", solution: "Technical SEO overhaul, local pages created by city, optimised Google Business, customer reviews solicited.", result: "Page 1 Google on 12 local keywords in 4 months. +35 qualified leads/month. Revenue +28%." },
      { icon: "🛍️", scenario: "E-commerce — Performance and conversion", challenge: "Online store with 3,000 visitors/month but only 0.8% conversion. Slow site (6s load time).", solution: "Core Web Vitals optimisation, purchase journey redesign, A/B tests, retargeting configured.", result: "Load time 6s → 1.2s. Conversion 0.8% → 2.4%. E-commerce revenue ×3 without increasing traffic." },
      { icon: "💼", scenario: "Consultancy — Personal branding and SEO", challenge: "Expert consultant in their field but no online presence. Prospects find no social proof.", solution: "Expert showcase site, monthly SEO blog articles, optimised LinkedIn profile, client testimonials integrated.", result: "15 articles ranked on page 1. 8 new inbound clients in 6 months. Improved closing rate." },
      { icon: "🏨", scenario: "Hospitality — Reputation and direct bookings", challenge: "Hotel with 65% bookings via OTA (18% commission). Mixed reviews unmanaged on TripAdvisor and Google.", solution: "Review management strategy, site optimised for direct bookings, local SEO, regular social content.", result: "Average rating 3.8 → 4.6. Direct bookings +45%. OTA commission saved: €22k/year." },
    ],
    features: [
      { icon: "🔍", name: "Technical SEO audit", desc: "Full analysis and action plan" },
      { icon: "⚡", name: "Core Web Vitals optimisation", desc: "Performance, accessibility, SEO" },
      { icon: "📝", name: "SEO content strategy", desc: "Ranking articles by sector" },
      { icon: "📍", name: "Local SEO & Google Business", desc: "Optimised geographic visibility" },
      { icon: "⭐", name: "Online review management", desc: "Proactive acquisition and response" },
      { icon: "📊", name: "Analytics & attribution", desc: "GA4, Search Console, heatmaps" },
      { icon: "📱", name: "Mobile-first design", desc: "Perfect responsive, optimal UX" },
      { icon: "🔗", name: "Strategic link building", desc: "Quality, lasting backlinks" },
      { icon: "📧", name: "Automated email marketing", desc: "Measured-ROI nurturing sequences" },
      { icon: "📣", name: "Social media management", desc: "Consistent multi-network presence" },
    ],
    gains: [
      { label: "Organic traffic", before: "200/month", after: "2,400/month", delta: "×12 traffic" },
      { label: "Conversion rate", before: "0.8%", after: "2.4%", delta: "×3 conversions" },
      { label: "Google/TripAdvisor rating", before: "3.4★", after: "4.7★", delta: "+38% trust" },
      { label: "Monthly inbound leads", before: "2/month", after: "28/month", delta: "×14 leads" },
    ],
    cta: { title: "Become the top Google result in your sector", subtitle: "An SEO audit to identify your top opportunities and show you exactly how we'll push you ahead of your competitors." },
    relatedSolutions: [
      { icon: "💻", title: "Client interfaces", href: "/solutions/interfaces-clients" },
      { icon: "📊", title: "Data & Analytics", href: "/solutions/data-analytics" },
      { icon: "🔧", title: "Digital optimisation", href: "/solutions/optimisation-digitale" },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (content[(locale as Locale)] ?? content.fr).meta;
}

export default async function PresenceSeoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;
  return (
    <SolutionPage
      eyebrow={c.eyebrow}
      title={c.title}
      subtitle={c.subtitle}
      heroIcon="🌐"
      accentFrom="#0891b2"
      accentTo="#7c3aed"
      bgFrom="from-cyan-50"
      problem={c.problem}
      benefits={c.benefits}
      useCases={c.useCases}
      features={c.features}
      gains={c.gains}
      cta={c.cta}
      relatedSolutions={c.relatedSolutions}
    />
  );
}
