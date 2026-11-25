import { useState } from "react";
import GlowCard from "./GlowCard";

export default function CertificateCard({ titre, organisme, date, image, pdf }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlowCard padded={false}>
        <button
          onClick={() => setOpen(true)}
          className="block w-full overflow-hidden rounded-t-[15px]"
          aria-label={`Agrandir : ${titre}`}
        >
          <img
            src={image}
            alt={`Certificat : ${titre}`}
            loading="lazy"
            width="400"
            height="283"
            className="h-44 w-full bg-slate-900 object-cover object-top transition duration-500 hover:scale-105"
          />
        </button>
        <div className="p-4">
          <p className="font-mono text-xs uppercase tracking-wide text-cyan-300">
            {organisme} · {date}
          </p>
          <h3 className="mt-1 font-semibold text-white">{titre}</h3>
          {pdf && (
            <a href={pdf} download className="mt-3 inline-block text-sm text-emerald-300 hover:underline">
              Télécharger le PDF
            </a>
          )}
        </div>
      </GlowCard>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <img src={image} alt={`Certificat : ${titre}`} className="max-h-full max-w-full rounded-lg" />
        </div>
      )}
    </>
  );
}