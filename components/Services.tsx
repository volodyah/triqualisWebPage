import { SERVICES, type Service } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const ACCENTS: Record<
  Service["accent"],
  { chip: string; icon: string; check: string; hover: string }
> = {
  teal: {
    chip: "bg-teal-50 text-teal-800 border-teal-100",
    icon: "bg-teal-700 text-white shadow-teal-700/20",
    check: "text-teal-700",
    hover: "hover:border-teal-200",
  },
  yellow: {
    chip: "bg-yellow-50 text-slate-800 border-yellow-100",
    icon: "bg-yellow-400 text-slate-950 shadow-yellow-400/20",
    check: "text-teal-700",
    hover: "hover:border-yellow-200",
  },
  slate: {
    chip: "bg-slate-100 text-slate-700 border-slate-200",
    icon: "bg-slate-900 text-white shadow-slate-900/20",
    check: "text-slate-700",
    hover: "hover:border-slate-300",
  },
};

const ICONS: Record<Service["accent"], React.ReactNode> = {
  teal: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  yellow: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3M9.5 9.5h5v5h-5z" strokeLinecap="round" />
    </svg>
  ),
  slate: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5M16 5.5a3.2 3.2 0 010 5M18.5 14.7c1.3.8 2.1 2.1 2.5 3.8" strokeLinecap="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="section-surface relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services & Expertise"
          title="Three disciplines. One accountable engineering partner."
          description="Every service line is staffed by engineers who own outcomes, not tickets. Whatever the engagement shape, you get the same standard: senior people, measurable quality gates, and software your teams can inherit with confidence."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const accent = ACCENTS[service.accent];
            return (
              <SpotlightCard
                key={service.id}
                className={`premium-shadow flex flex-col rounded-2xl border premium-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 ${accent.hover}`}
              >
                <div
                  className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl shadow-lg ${accent.icon} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {ICONS[service.accent]}
                </div>

                <span
                  className={`mt-6 inline-block w-fit rounded-full border px-3 py-1 text-[11px] font-bold tracking-wider uppercase ${accent.chip}`}
                >
                  {service.tagline}
                </span>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${accent.check}`}
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
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
