import { CASE_STUDY } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function CaseStudy() {
  return (
    <section id="case-studies" className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
      <div className="bg-grid-light mask-fade-bottom absolute inset-0" aria-hidden="true" />
      <div
        className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-teal-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-blob-slow absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          {/* Narrative */}
          <div>
            <SectionHeading dark eyebrow={CASE_STUDY.eyebrow} title={CASE_STUDY.title} />

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white font-mono text-lg font-extrabold tracking-tighter text-slate-900">
                m.
              </span>
              <div>
                <p className="text-base font-bold text-white">{CASE_STUDY.client}</p>
                <p className="text-sm text-slate-400">{CASE_STUDY.clientDescriptor}</p>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              {CASE_STUDY.narrative.map((paragraph, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights & sectors */}
          <div className="flex flex-col gap-6 lg:pt-24">
            {CASE_STUDY.highlights.map((highlight) => (
              <div
                key={highlight.metric}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-teal-400/30 hover:bg-white/[0.08]"
              >
                <p className="font-mono text-2xl font-bold tracking-tight text-teal-300">
                  {highlight.metric}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{highlight.label}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                Sectors we serve
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CASE_STUDY.sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="group btn-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-teal-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-teal-500/35"
            >
              Discuss a similar engagement
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
