import { useState } from "react";
import Portfolio from "./pages/Portfolio";
import Parcours from "./pages/Parcours";
import ContactForm from "./components/ContactForm";
import Reveal from "./components/Reveal";
import { profil } from "./data/content";

export default function App() {
  const [page, setPage] = useState("portfolio");
  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };
  const tab = (p) =>
    `rounded-lg px-3 py-1.5 text-sm font-medium transition sm:px-4 ${
      page === p
        ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900"
        : "text-slate-300 hover:bg-white/5"
    }`;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="bg-tech" aria-hidden="true">
        <div className="orb -left-20 top-20 h-72 w-72 bg-emerald-500" />
        <div className="orb right-0 top-1/2 h-80 w-80 bg-cyan-500" />
        <div className="orb bottom-0 left-1/3 h-72 w-72 bg-violet-500" />
      </div>

      <header className="sticky top-0 z-40 h-14 border-b border-white/10 bg-[#060a13]/70 backdrop-blur-md">
        <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <span className="font-mono text-sm text-emerald-300">&lt;{profil.nom.split(" ")[0].slice(0, 8)} /&gt;</span>
          <div className="flex gap-1">
            <button className={tab("portfolio")} onClick={() => go("portfolio")}>Portfolio</button>
            <button className={tab("parcours")} onClick={() => go("parcours")}>Parcours</button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        {page === "portfolio" ? <Portfolio /> : <Parcours />}
      </main>

      <section id="contact" className="scroll-mt-20 border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-2xl px-4 py-12">
          <Reveal>
            <h2 className="text-gradient text-2xl font-bold sm:text-3xl">Me contacter</h2>
            <p className="mt-2 mb-6 text-slate-400">Écrivez-moi ici, je vous réponds sur le canal de votre choix.</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}