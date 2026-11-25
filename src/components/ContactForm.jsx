import { useState } from "react";
import GlowCard from "./GlowCard";
import { profil } from "../data/content";

const canaux = ["E-mail", "WhatsApp", "LinkedIn"];
const exemples = {
  "E-mail": "votre@email.com",
  WhatsApp: "+261 ...",
  LinkedIn: "Lien de votre profil LinkedIn",
};
const champ =
  "w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400";

const liens = [
  { nom: "E-mail", href: `mailto:${profil.email}`, externe: false },
  {
    nom: "WhatsApp",
    href: `https://wa.me/${profil.whatsapp}?text=${encodeURIComponent("Bonjour Omega, j'ai vu votre portfolio")}`,
    externe: true,
  },
  { nom: "LinkedIn", href: profil.linkedin, externe: true },
];

export default function ContactForm() {
  const [canal, setCanal] = useState("E-mail");
  const [etat, setEtat] = useState("repos"); // repos | envoi | ok | erreur | config

  async function envoyer(e) {
    e.preventDefault();
    if (!profil.formKey || profil.formKey.startsWith("COLLE")) {
      setEtat("config");
      return;
    }
    const form = e.currentTarget;
    const d = new FormData(form);
    setEtat("envoi");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: profil.formKey,
          subject: `Portfolio : message de ${d.get("nom")}`,
          from_name: d.get("nom"),
          nom: d.get("nom"),
          "répondre par": canal,
          coordonnée: d.get("contact"),
          message: d.get("message"),
          ...(canal === "E-mail" ? { email: d.get("contact") } : {}),
          ...(d.get("botcheck") ? { botcheck: true } : {}),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setEtat("ok");
        form.reset();
      } else {
        setEtat("erreur");
      }
    } catch {
      setEtat("erreur");
    }
  }

  return (
    <GlowCard>
      <div className="mb-5 border-b border-white/10 pb-5">
        <p className="mb-2 font-mono text-xs text-slate-400">Me contacter directement</p>
        <div className="flex flex-wrap gap-2">
          {liens.map((l) => (
            <a
              key={l.nom}
              href={l.href}
              target={l.externe ? "_blank" : undefined}
              rel={l.externe ? "noopener noreferrer" : undefined}
              className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {l.nom}
            </a>
          ))}
        </div>
      </div>

      <form onSubmit={envoyer} className="space-y-4">
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="nom" className="mb-1 block font-mono text-xs text-slate-400">Nom</label>
          <input id="nom" name="nom" required className={champ} placeholder="Votre nom" />
        </div>

        <div>
          <p className="mb-2 font-mono text-xs text-slate-400">Comment souhaitez-vous être recontacté(e) ?</p>
          <div className="flex flex-wrap gap-2">
            {canaux.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCanal(c)}
                className={`rounded-lg border px-3 py-1.5 text-sm transition ${
                  canal === c
                    ? "border-transparent bg-gradient-to-r from-emerald-500 to-cyan-500 font-semibold text-slate-900"
                    : "border-white/10 text-slate-300 hover:bg-white/5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <input
          name="contact"
          required
          type={canal === "E-mail" ? "email" : "text"}
          placeholder={exemples[canal]}
          aria-label={`Votre ${canal}`}
          className={champ}
        />

        <div>
          <label htmlFor="message" className="mb-1 block font-mono text-xs text-slate-400">Message</label>
          <textarea id="message" name="message" required rows={4} className={champ} placeholder="Votre message" />
        </div>

        <button
          disabled={etat === "envoi"}
          className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          {etat === "envoi" ? "Envoi en cours…" : "Envoyer le message"}
        </button>

        <p aria-live="polite" className="text-sm">
          {etat === "ok" && <span className="text-emerald-300">Message envoyé, merci ! Je vous réponds bientôt.</span>}
          {etat === "erreur" && <span className="text-red-300">L'envoi a échoué. Réessayez dans un instant.</span>}
          {etat === "config" && <span className="text-amber-300">Formulaire non configuré : ajoutez la clé dans content.js.</span>}
        </p>
      </form>
    </GlowCard>
  );
}