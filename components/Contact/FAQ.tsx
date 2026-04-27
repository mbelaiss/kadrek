export default function ContactFAQ() {
  const faqs = [
    {
      question: "Comment demander un devis ?",
      answer:
        "Remplissez le formulaire ci-dessus ou contactez-nous directement. Nous revenons vers vous avec une prochaine étape claire.",
    },
    {
      question: "Quels sont vos délais de réponse ?",
      answer:
        "Nous répondons généralement sous 24h ouvrées selon la précision de votre demande.",
    },
    {
      question: "Travaillez-vous sur tout le Maroc ?",
      answer:
        "Oui, nous accompagnons les entreprises au Maroc et pouvons aussi travailler à distance selon le projet.",
    },
  ];

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
      <h2 className="mb-6 text-2xl font-black text-white">FAQ</h2>

      {faqs.map((faq, i) => (
        <div key={faq.question} className="border-t border-white/10 py-5 first:border-t-0 first:pt-0 last:pb-0">
          <h3 className="font-bold text-slate-100">{faq.question}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
