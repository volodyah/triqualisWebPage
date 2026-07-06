import { STATS } from "@/lib/data";
import CountUp from "./CountUp";
import SectionHeading from "./SectionHeading";

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
      <div className="bg-grid-light mask-fade-bottom absolute inset-0" aria-hidden="true" />
      <div
        className="animate-blob absolute -top-32 right-0 h-96 w-96 rounded-full bg-teal-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-blob-slow absolute bottom-0 left-0 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Scale & Track Record"
          title="Numbers we stand behind — audited by every client, every sprint."
          description="We publish the same metrics internally that we report to clients. When your delivery partner measures itself this openly, accountability stops being a promise and becomes a habit."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group bg-slate-950/90 p-8 transition-colors duration-300 hover:bg-slate-900"
            >
              <CountUp
                value={stat.value}
                className="font-mono text-4xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-teal-300 sm:text-5xl"
              />
              <p className="mt-3 text-sm font-semibold tracking-widest text-teal-300 uppercase">
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
