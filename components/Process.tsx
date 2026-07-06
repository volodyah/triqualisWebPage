import { PROCESS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div
        className="absolute top-0 left-1/2 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Our Engagement Process"
          title="From first conversation to production ownership."
          description="A disciplined, transparent path — whether you need a single developer or a full delivery team. You always know where the work stands, what ships next, and who is accountable for it."
        />

        <div className="relative mt-16">
          {/* Horizontal connector on large screens */}
          <div
            className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-slate-200 via-teal-200 to-yellow-200 lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS.map((step, i) => (
              <li key={step.step} className="group relative flex flex-col">
                <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:items-start">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-mono text-lg font-bold shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                      i === PROCESS.length - 1
                        ? "bg-yellow-400 text-slate-950 shadow-yellow-400/20"
                        : "bg-slate-950 text-white shadow-slate-900/20"
                    }`}
                  >
                    {step.step}
                  </span>
                  <div className="lg:mt-5">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {step.duration}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">{step.description}</p>

                <ul className="mt-5 space-y-2">
                  {step.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2 text-xs font-medium text-slate-700 transition-colors duration-200 group-hover:border-teal-100 group-hover:bg-white"
                    >
                      <svg
                        className="mt-px h-3.5 w-3.5 shrink-0 text-teal-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
