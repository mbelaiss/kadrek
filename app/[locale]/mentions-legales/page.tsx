import type { Locale } from "@/routing";

const content = {
  fr: {
    meta: { title: "Mentions légales | Kadrek", description: "Mentions légales du site kadrek.com" },
    title: "Mentions légales",
    updated: "Dernière mise à jour : mai 2025",
    sections: [
      {
        title: "Éditeur du site",
        content: [
          "Raison sociale : [À COMPLÉTER]",
          "Forme juridique : [À COMPLÉTER]",
          "Capital social : [À COMPLÉTER]",
          "Siège social : [À COMPLÉTER]",
          "Numéro d'immatriculation : [À COMPLÉTER]",
          "Email : contact@kadrek.com",
          "Site web : https://kadrek.com",
        ],
      },
      {
        title: "Directeur de la publication",
        content: ["[À COMPLÉTER]"],
      },
      {
        title: "Hébergement",
        content: [
          "Hébergeur : Vercel Inc.",
          "Adresse : 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis",
          "Site web : https://vercel.com",
        ],
      },
      {
        title: "Propriété intellectuelle",
        content: [
          "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels…) est la propriété exclusive de Kadrek, sauf mention contraire.",
          "Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Kadrek.",
        ],
      },
      {
        title: "Données personnelles",
        content: [
          "Le traitement des données personnelles collectées sur ce site est régi par notre Politique de confidentialité, accessible à l'adresse /confidentialite.",
        ],
      },
      {
        title: "Cookies",
        content: [
          "Ce site n'utilise pas de cookies publicitaires. Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés sur votre terminal.",
          "Aucune donnée de navigation n'est partagée avec des tiers à des fins publicitaires.",
        ],
      },
      {
        title: "Limitation de responsabilité",
        content: [
          "Kadrek s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Kadrek ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.",
          "Kadrek décline toute responsabilité pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site.",
        ],
      },
      {
        title: "Droit applicable",
        content: [
          "Les présentes mentions légales sont soumises au droit marocain et au droit belge selon le lieu de résidence de l'utilisateur. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de Kadrek.",
        ],
      },
    ],
  },
  en: {
    meta: { title: "Legal Notice | Kadrek", description: "Legal notice for kadrek.com" },
    title: "Legal Notice",
    updated: "Last updated: May 2025",
    sections: [
      {
        title: "Publisher",
        content: [
          "Company name: [TO BE COMPLETED]",
          "Legal form: [TO BE COMPLETED]",
          "Share capital: [TO BE COMPLETED]",
          "Registered office: [TO BE COMPLETED]",
          "Registration number: [TO BE COMPLETED]",
          "Email: contact@kadrek.com",
          "Website: https://kadrek.com",
        ],
      },
      {
        title: "Publication director",
        content: ["[TO BE COMPLETED]"],
      },
      {
        title: "Hosting",
        content: [
          "Host: Vercel Inc.",
          "Address: 340 Pine Street, Suite 701, San Francisco, CA 94104, United States",
          "Website: https://vercel.com",
        ],
      },
      {
        title: "Intellectual property",
        content: [
          "All content on this site (texts, images, graphics, logo, icons, sounds, software…) is the exclusive property of Kadrek, unless otherwise stated.",
          "Any reproduction, distribution, modification, adaptation, retransmission or publication of these elements is strictly prohibited without the express written consent of Kadrek.",
        ],
      },
      {
        title: "Personal data",
        content: [
          "The processing of personal data collected on this site is governed by our Privacy Policy, accessible at /confidentialite.",
        ],
      },
      {
        title: "Cookies",
        content: [
          "This site does not use advertising cookies. Strictly necessary technical cookies may be placed on your device.",
          "No browsing data is shared with third parties for advertising purposes.",
        ],
      },
      {
        title: "Limitation of liability",
        content: [
          "Kadrek endeavours to ensure the accuracy and currency of the information published on this site. However, Kadrek cannot guarantee the accuracy, precision or completeness of the information made available.",
          "Kadrek accepts no liability for any damage resulting from fraudulent third-party intrusion that has led to modification of the information available on the site.",
        ],
      },
      {
        title: "Applicable law",
        content: [
          "These legal notices are subject to Moroccan law and Belgian law depending on the user's place of residence. In the event of a dispute, the competent courts shall be those of the jurisdiction of Kadrek's registered office.",
        ],
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (content[(locale as Locale)] ?? content.fr).meta;
}

export default async function MentionsLegalesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale)] ?? content.fr;

  return (
    <div className="bg-white text-slate-900">
      <section className="pb-20 pt-36">
        <div className="mx-auto max-w-[800px] px-6 lg:px-10">
          <div className="mb-12">
            <h1 className="mb-3 text-4xl font-black tracking-tight text-slate-900">{c.title}</h1>
            <p className="text-[13px] text-slate-400">{c.updated}</p>
          </div>
          <div className="space-y-10">
            {c.sections.map((s) => (
              <div key={s.title} className="border-t border-slate-100 pt-8">
                <h2 className="mb-4 text-lg font-black text-slate-900">{s.title}</h2>
                <div className="space-y-2">
                  {s.content.map((line, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-slate-600">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
