import { ABOUT } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="bg-dots-slate mask-radial-fade absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Narrative column */}
          <div>
            <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
            <div className="mt-8 space-y-5">
              {ABOUT.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0 ? "text-lg font-medium text-slate-700" : "text-base text-slate-600"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Milestone timeline */}
            <div className="mt-12">
              <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">
                Trajectory
              </h3>
              <ol className="mt-6 space-y-0">
                {ABOUT.milestones.map((milestone, i) => (
                  <li key={i} className="relative flex gap-5 pb-7 last:pb-0">
                    {/* Connector line */}
                    {i < ABOUT.milestones.length - 1 && (
                      <span
                        className="absolute top-6 left-[13px] h-full w-px bg-gradient-to-b from-teal-300 to-slate-200"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-slate-200 bg-white">
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    </span>
                    <div className="pt-0.5">
                      <span className="font-mono text-xs font-bold text-teal-700">
                        {milestone.year}
                      </span>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-700">
                        {milestone.event}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Pillars column */}
          <div className="flex flex-col gap-6 lg:pt-24">
            {ABOUT.pillars.map((pillar, i) => (
              <article
                key={pillar.title}
                className="card-shine group relative overflow-hidden rounded-2xl bg-[#0b1120] p-8 text-white shadow-xl shadow-slate-900/20 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="bg-grid-light absolute inset-0 opacity-60" aria-hidden="true" />
                <div className="relative">
                  <span className="inline-block rounded-lg bg-white/10 px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-yellow-200 uppercase">
                    Pillar {i + 1} · {pillar.subtitle}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
