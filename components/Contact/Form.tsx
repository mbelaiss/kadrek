"use client";

const inputClass =
  "w-full rounded-md border border-white/10 bg-slate-950/55 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-slate-950";

export default function ContactForm() {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase text-cyan-300">
            Obtenir un diagnostic
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">
            Envoyez-nous votre contexte.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Quelques lignes suffisent pour identifier vos priorités: croissance,
            outils, automatisation, usage de l'IA ou optimisation des processus.
          </p>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            alert("Demande envoyée avec succès.");
            form.reset();
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Nom & prénom
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Votre nom complet"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="votre@email.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Téléphone
              </label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="Votre numéro"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Priorité
              </label>
              <select name="service" required className={inputClass}>
                <option value="Stratégie digitale">Stratégie digitale</option>
                <option value="Data & Analytics">Data & Analytics</option>
                <option value="Automation & AI">Automation & AI</option>
                <option value="Conversion Optimization">Conversion Optimization</option>
                <option value="Web Performance">Web Performance</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Décrivez votre besoin, vos outils actuels ou votre objectif..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                Envoyer la demande
              </button>
              <p className="mt-4 text-sm text-slate-500">
                Réponse sous 24h ouvrées. Premier retour clair et orienté action.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
