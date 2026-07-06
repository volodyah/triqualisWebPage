import { STATS } from "@/lib/data";
import CountUp from "./CountUp";
import SectionHeading from "./SectionHeading";

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-[#0b1120] py-24 sm:py-28">
      <div className="bg-grid-light mask-fade-bottom absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="How We Work"
          title="One partner, two ways to engage."
          description="Bring us in as individual developers for any position on your team, or hand us the whole project and we deliver it end-to-end. We scale to fit your situation — without the overhead of a bench you don't need."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group bg-[#0b1120]/95 p-8 transition-colors duration-300 hover:bg-slate-900"
            >
              <CountUp
                value={stat.value}
                className="font-mono text-4xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-200 sm:text-5xl"
              />
              <p className="mt-3 text-sm font-semibold tracking-widest text-teal-200 uppercase">
                {stat.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
