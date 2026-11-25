import { certificats, experiences } from "../data/content";
import CertificateCard from "../components/CertificateCard";
import GlowCard from "../components/GlowCard";
import Reveal from "../components/Reveal";

const organisations = new Set(experiences.map((x) => x.organisation)).size;
const stats = [
  { n: experiences.length, label: "Expériences" },
  { n: organisations, label: "Organisations" },
  { n: certificats.length, label: "Certificats" },
];

export default function Parcours() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section>
        <Reveal>
          <p className="font-mono text-sm text-emerald-400">&gt; parcours</p>
          <h1 className="text-gradient mt-2 text-3xl font-bold sm:text-4xl">Expériences</h1>
        </Reveal>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <GlowCard className="text-center">
                <p className="text-gradient text-3xl font-bold sm:text-4xl">{s.n}</p>
                <p className="mt-1 font-mono text-[10px] uppercase text-slate-400 sm:text-xs">{s.label}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <ol className="relative mx-auto mt-12 max-w-4xl sm:mt-14">
          <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-emerald-400 via-cyan-400 to-violet-500 md:left-1/2" />
          {experiences.map((x, i) => (
            <li key={x.poste + x.organisation} className="relative mb-8 pl-12 sm:mb-10 md:pl-0">
              <span className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400/60 [animation-iteration-count:3]" />
                <span className="relative block h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />
              </span>
              <Reveal className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}>
                <GlowCard>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-cyan-300">{x.periode}</span>
                    {x.periode === "En cours" && (
                      <span className="rounded-md bg-emerald-400/15 px-2 py-1 font-mono text-xs text-emerald-300">● actuel</span>
                    )}
                  </div>
                  <h3 className="mt-3 font-semibold text-white">{x.poste}</h3>
                  <p className="mt-1 text-sm text-slate-400">{x.organisation}</p>
                </GlowCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <Reveal>
          <p className="font-mono text-sm text-emerald-400">&gt; certifications</p>
          <h2 className="text-gradient mt-2 text-3xl font-bold sm:text-4xl">Certificats</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {certificats.map((c, i) => (
            <Reveal key={c.id} delay={i * 100}>
              <CertificateCard {...c} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}