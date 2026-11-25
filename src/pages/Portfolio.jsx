import { profil, etapes } from "../data/content";
import Reveal from "../components/Reveal";
import GlowCard from "../components/GlowCard";

const liens = [
  { id: "accueil", titre: "Accueil" },
  { id: "contexte", titre: "Contexte" },
  ...etapes.map((e) => ({ id: e.id, titre: e.titre })),
];

export default function Portfolio() {
  return (
    <>
      {/* Menu mobile */}
      <nav className="sticky top-14 z-30 -mx-4 mb-8 overflow-x-auto border-b border-white/10 bg-[#060a13]/80 px-4 py-2 backdrop-blur md:hidden">
        <ul className="flex gap-2 whitespace-nowrap font-mono text-xs">
          {liens.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="block rounded-full border border-white/10 px-3 py-1.5 text-slate-300 active:bg-white/10">
                {l.titre}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid gap-8 md:grid-cols-[190px_1fr] md:gap-12">
        <aside className="hidden md:block">
          <ul className="sticky top-24 space-y-3 border-l border-white/10 pl-4 font-mono text-xs">
            {liens.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-slate-400 transition hover:text-emerald-300">{l.titre}</a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 space-y-16 sm:space-y-24">
          <section id="accueil" className="scroll-mt-32">
            <Reveal className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex-1">
                <p className="font-mono text-sm text-emerald-400">&gt; {profil.titre}</p>
                <h1 className="text-gradient mt-3 break-words text-3xl font-bold leading-tight sm:text-5xl">{profil.nom}</h1>
                <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">{profil.accroche}</p>
                <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                  <a href="#analyse" className="rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:opacity-90">
                    Voir les réalisations
                  </a>
                  <a href="#contact" className="rounded-lg border border-cyan-400/40 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10">
                    Me contacter
                  </a>
                </div>
              </div>
              {profil.photo && (
                <img
                  src={profil.photo}
                  alt={profil.nom}
                  className="h-32 w-32 rounded-2xl object-cover ring-2 ring-emerald-400/60 shadow-[0_0_40px_rgba(16,185,129,0.35)] sm:h-44 sm:w-44"
                />
              )}
            </Reveal>
          </section>

          <section id="contexte" className="scroll-mt-32">
            <Reveal>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Contexte</h2>
              <GlowCard className="mt-5">
                <p className="text-slate-300">{profil.contexte}</p>
              </GlowCard>
            </Reveal>
          </section>

          {etapes.map((e, i) => (
            <section key={e.id} id={e.id} className="scroll-mt-32">
              <Reveal>
                <span className="font-mono text-sm text-cyan-400">0{i + 1}</span>
                <h2 className="text-xl font-bold text-white sm:text-2xl">{e.titre}</h2>
              </Reveal>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {e.taches.map((t, j) => (
                  <Reveal key={t.titre} delay={j * 120}>
                    <GlowCard className="h-full">
                      <h3 className="font-semibold text-white">{t.titre}</h3>
                      {t.pourquoi && <p className="mt-2 text-sm text-slate-400">{t.pourquoi}</p>}
                      {t.elements && (
                        <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                          {t.elements.map((el) => (
                            <li key={el} className="flex gap-2">
                              <span className="text-emerald-400">▹</span>
                              {el}
                            </li>
                          ))}
                        </ul>
                      )}
                      {t.competence && (
                        <span className="mt-4 inline-block rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 font-mono text-xs text-cyan-300">
                          {t.competence}
                        </span>
                      )}
                    </GlowCard>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}