import { SERVICES, type Service } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const ACCENTS: Record<
  Service["accent"],
  { chip: string; icon: string; check: string; hover: string }
> = {
  teal: {
    chip: "bg-teal-50 text-teal-700 border-teal-100",
    icon: "bg-teal-600 shadow-teal-600/30",
    check: "text-teal-600",
    hover: "hover:border-teal-200 hover:shadow-teal-900/12",
  },
  emerald: {
    chip: "bg-emerald-50 text-emerald-700 border-emerald-100",
    icon: "bg-emerald-600 shadow-emerald-600/30",
    check: "text-emerald-600",
    hover: "hover:border-emerald-200 hover:shadow-emerald-900/12",
  },
  slate: {
    chip: "bg-slate-100 text-slate-700 border-slate-200",
    icon: "bg-slate-800 shadow-slate-800/30",
    check: "text-slate-700",
    hover: "hover:border-slate-300 hover:shadow-slate-900/12",
  },
};

const ICONS: Record<Service["accent"], React.ReactNode> = {
  teal: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  emerald: (
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
    <section id="services" className="relative bg-[#F8F9FA] py-24 sm:py-28">
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
                className={`flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-20px_rgb(15_23_42_/_0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-20px_rgb(15_23_42_/_0.22)] ${accent.hover}`}
              >
                <div
                  className={`flex h-13 w-13 items-center justify-center rounded-2xl text-white shadow-lg ${accent.icon} h-[52px] w-[52px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {ICONS[service.accent]}
                </div>

                <span
                  className={`mt-6 inline-block w-fit rounded-full border px-3 py-1 text-[11px] font-bold tracking-wider uppercase ${accent.chip}`}
                >
                  {service.tagline}
                </span>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900">
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
