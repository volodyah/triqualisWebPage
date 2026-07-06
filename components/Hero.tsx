import { HERO, HERO_TICKER } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* Layered background: grid + soft gradient blooms */}
      <div className="bg-grid-slate mask-radial-fade absolute inset-0" aria-hidden="true" />
      <div
        className="animate-blob absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-teal-300/50 via-white/0 to-teal-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-blob-slow absolute top-40 -right-32 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 sm:pt-24 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* ---- Copy column ---- */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                Est. 2024
              </span>
              {HERO.eyebrow}
            </div>

            <h1 className="mt-7 text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-[4.6rem]">
              <span className="text-gradient-slate block">{HERO.headlineTop}</span>
              <span className="text-gradient-teal block">{HERO.headlineMiddle}</span>
              <span className="text-gradient-slate block">{HERO.headlineBottom}</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed font-medium text-slate-700">
              {HERO.lede}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">
              {HERO.sublede}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={HERO.primaryCta.href}
                className="group btn-shine inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-teal-800 to-teal-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-teal-700/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-teal-600/30"
              >
                {HERO.primaryCta.label}
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
              <a
                href={HERO.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition-all duration-200 hover:border-teal-300 hover:bg-teal-50/60 hover:text-teal-800"
              >
                {HERO.secondaryCta.label}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
              <span className="flex -space-x-1.5" aria-hidden="true">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 font-mono text-[9px] font-bold text-white ring-2 ring-white">
                  C++
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500 font-mono text-[9px] font-bold text-white ring-2 ring-white">
                  TS
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 font-mono text-[9px] font-bold text-white ring-2 ring-white">
                  QT
                </span>
              </span>
              {HERO.trustLine}
            </div>
          </div>

          {/* ---- Bento showcase column ---- */}
          <div className="animate-fade-in relative">
            {/* Floating badges */}
            <div className="animate-float absolute -top-5 left-3 z-10 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-xl shadow-slate-900/8 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-800">
                99.99% runtime availability
              </span>
            </div>
            <div className="animate-float-delayed absolute -right-2 -bottom-5 z-10 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-xl shadow-slate-900/8 sm:flex">
              <span className="font-mono text-xs font-bold text-teal-700">&lt;2wks</span>
              <span className="text-xs font-semibold text-slate-800">pod assembly</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Terminal card — spans full width */}
              <div className="card-shine col-span-2 rounded-2xl bg-slate-950 p-5 shadow-2xl shadow-slate-900/25">
                <div className="flex items-center gap-1.5 pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 font-mono text-[11px] text-slate-500">
                    triqualis — production deploy
                  </span>
                </div>
                <div className="space-y-1.5 font-mono text-[12px] leading-relaxed">
                  <p className="text-slate-400">
                    <span className="text-emerald-400">$</span> ctest --preset release
                    <span className="text-slate-600"> # 2,847 tests</span>
                  </p>
                  <p className="text-emerald-400">✓ 100% passed · 0 failed · sanitizers clean</p>
                  <p className="text-slate-400">
                    <span className="text-emerald-400">$</span> deploy --target production --region
                    eu-central
                  </p>
                  <p className="text-teal-300">
                    → rolling update · zero downtime · p99 latency 4.2ms
                  </p>
                  <p className="text-slate-500">
                    release v3.12.0 live <span className="text-emerald-400">●</span> all SLOs green{" "}
                    <span className="animate-blink text-teal-400">▍</span>
                  </p>
                </div>
              </div>

              {/* Systems depth card */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" rx="1" />
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
                  </svg>
                </div>
                <p className="mt-3.5 text-sm font-bold text-slate-900">Systems Depth</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  C/C++ · embedded · QT/QML — engineered to the microsecond.
                </p>
              </div>

              {/* Cloud velocity card */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M17.5 19a4.5 4.5 0 100-9 6 6 0 00-11.5 1.5A4 4 0 006 19h11.5z" />
                    <path d="M12 12v5M9.5 14.5L12 12l2.5 2.5" />
                  </svg>
                </div>
                <p className="mt-3.5 text-sm font-bold text-slate-900">Cloud Velocity</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  React · Node · SaaS platforms shipped at product speed.
                </p>
              </div>

              {/* Metric strip */}
              <div className="col-span-2 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur">
                {[
                  { value: "25+", label: "Sr. Engineers" },
                  { value: "60+", label: "Projects Live" },
                  { value: "98%", label: "Sprints On Time" },
                ].map((stat) => (
                  <div key={stat.label} className="px-4 py-4 text-center">
                    <p className="text-xl font-extrabold tracking-tight text-teal-700">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium tracking-wide text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Capability ticker ---- */}
      <div className="relative border-y border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-hidden px-0 py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-ticker flex w-max items-center gap-10">
            {[...HERO_TICKER, ...HERO_TICKER].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-10 text-sm font-semibold tracking-wide whitespace-nowrap text-slate-500"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-teal-400" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
