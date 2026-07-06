import { VALUES } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

export default function Values() {
  return (
    <section id="values" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Core Values"
          title="Three commitments. Zero asterisks."
          description="Time, budget, and innovation aren't slogans at triqualis — they're the three axes every engagement is measured against, and the reason the company carries the name it does."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {VALUES.map((value) => (
            <SpotlightCard
              key={value.index}
              className="premium-shadow flex flex-col rounded-2xl border premium-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200"
            >
              {/* Oversized numeral watermark */}
              <span
                className="pointer-events-none absolute -top-7 -right-3 font-mono text-[8rem] leading-none font-bold text-slate-100 transition-colors duration-300 select-none group-hover:text-yellow-100"
                aria-hidden="true"
              >
                {value.index}
              </span>

              <div className="relative">
                <span className="font-mono text-sm font-bold text-teal-700">{value.index}</span>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-base font-semibold text-slate-800">{value.headline}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{value.body}</p>

                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                  {value.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-700"
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
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
