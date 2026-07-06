"use client";

import { useState } from "react";
import { TECH_STACK } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function TechStack() {
  const [activeId, setActiveId] = useState(TECH_STACK[0].id);
  const active = TECH_STACK.find((category) => category.id === activeId) ?? TECH_STACK[0];

  return (
    <section id="stack" className="relative overflow-hidden bg-[#F8F9FA] py-24 sm:py-28">
      <div className="bg-grid-slate mask-radial-fade absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Technology Expertise"
          title="A stack that spans from silicon to SaaS."
          description="Most firms live on one floor of the stack. triqualis was built to work across all of them — select a discipline to see the tools we ship with in production."
        />

        {/* Tab selector */}
        <div
          className="mx-auto mt-12 flex w-fit max-w-full flex-wrap justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/5"
          role="tablist"
          aria-label="Technology categories"
        >
          {TECH_STACK.map((category) => {
            const isActive = category.id === activeId;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`tab-${category.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${category.id}`}
                onClick={() => setActiveId(category.id)}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div
          key={active.id}
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="animate-fade-up mx-auto mt-10 max-w-5xl"
        >
          <div className="card-shine rounded-3xl bg-white p-8 shadow-[0_25px_60px_-25px_rgb(15_23_42_/_0.18)] sm:p-10">
            <div className="flex flex-col gap-2 border-b border-slate-100 pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">{active.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                  {active.description}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-teal-50 px-3.5 py-1.5 font-mono text-xs font-bold text-teal-700">
                {active.items.length} core technologies
              </span>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {active.items.map((item, i) => (
                <div
                  key={item.name}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className="group animate-fade-up rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-white hover:shadow-lg hover:shadow-teal-900/8"
                >
                  <p className="text-sm font-bold text-slate-900 transition-colors duration-200 group-hover:text-teal-700">
                    {item.name}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-slate-500">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
