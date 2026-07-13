import { CASE_STUDY } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function CaseStudy() {
  return (
    <section id="case-studies" className="relative overflow-hidden bg-[#0b1120] py-24 sm:py-28">
      <div className="bg-grid-light mask-fade-bottom absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          {/* Narrative */}
          <div>
            <SectionHeading dark eyebrow={CASE_STUDY.eyebrow} title={CASE_STUDY.title} />

            <a
              href={CASE_STUDY.clientWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:border-yellow-300/40 hover:bg-white/[0.07]"
            >
              {/* matelso brand mark: chartreuse disc with black zigzag M */}
              <svg
                viewBox="0 0 100 100"
                className="h-12 w-12 shrink-0 transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="50" fill="#E6F63C" />
                <path
                  d="M19 51 L33 30 V69 L57 31 V69 L81 30"
                  fill="none"
                  stroke="#0a0a0a"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="flex items-center gap-1.5 text-base font-bold text-white">
                  {CASE_STUDY.client}
                  <svg
                    className="h-3.5 w-3.5 text-slate-400 transition-colors duration-200 group-hover:text-yellow-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </p>
                <p className="text-sm text-slate-400">{CASE_STUDY.clientDescriptor}</p>
                <p className="mt-0.5 font-mono text-xs text-yellow-200/80">matelso.com</p>
              </div>
            </a>

            <div className="mt-7 space-y-5">
              {CASE_STUDY.narrative.map((paragraph, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Public endorsement from matelso */}
            <figure className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <svg className="h-6 w-6 text-yellow-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.5 6C5 6 3 8 3 10.5S5 15 7.5 15c.2 0 .4 0 .6-.05C7.3 16.6 5.8 18 4 18.5c-.4.1-.6.5-.5.9.1.4.5.6.9.5 3.3-.9 5.6-3.9 5.6-7.4V10.5C10 8 8 6 7.5 6zm9 0C14 6 12 8 12 10.5s2 4.5 4.5 4.5c.2 0 .4 0 .6-.05-.8 1.65-2.3 3.05-4.1 3.55-.4.1-.6.5-.5.9.1.4.5.6.9.5 3.3-.9 5.6-3.9 5.6-7.4V10.5C19 8 17 6 16.5 6z" />
              </svg>
              <blockquote className="mt-3 text-[15px] leading-relaxed font-medium text-white">
                {CASE_STUDY.testimonial.quote}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 text-sm">
                <span className="font-semibold text-white">{CASE_STUDY.testimonial.author}</span>
                <span className="text-slate-500">·</span>
                <a
                  href={CASE_STUDY.testimonial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 underline decoration-slate-600 underline-offset-2 transition-colors hover:text-yellow-200"
                >
                  {CASE_STUDY.testimonial.context}
                </a>
              </figcaption>
            </figure>
          </div>

          {/* Highlights & sectors */}
          <div className="flex flex-col gap-6 lg:pt-24">
            {CASE_STUDY.highlights.map((highlight) => (
              <div
                key={highlight.metric}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:border-yellow-300/30 hover:bg-white/[0.08]"
              >
                <p className="font-mono text-2xl font-bold tracking-tight text-yellow-200">
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
              className="group btn-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-200"
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
