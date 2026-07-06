"use client";

import { useState } from "react";
import { COMPANY, CONTACT } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const CHANNEL_ICONS: Record<"location" | "email" | "phone", React.ReactNode> = {
  location: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  email: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        d="M5 4h4l1.5 4.5-2.25 1.5a12 12 0 005.75 5.75l1.5-2.25L20 15v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm shadow-slate-900/5 transition-all duration-200 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 focus:outline-none";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Project Inquiry — ${data.get("projectType")}`;
    const body = [
      `Full name: ${data.get("fullName")}`,
      `Corporate email: ${data.get("email")}`,
      `Project type: ${data.get("projectType")}`,
      "",
      "Project scope:",
      String(data.get("scope")),
    ].join("\n");
    // Static site, no backend: hand the inquiry to the visitor's mail client.
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="bg-dots-slate mask-radial-fade absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow={CONTACT.eyebrow}
          title={CONTACT.title}
          description={CONTACT.description}
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ---- Left: contact channels ---- */}
          <div className="flex flex-col gap-5">
            {CONTACT.channels.map((channel) => (
              <div
                key={channel.label}
                className="group flex items-start gap-4 rounded-2xl border premium-border bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-900/15 transition-transform duration-300 group-hover:scale-105">
                  {CHANNEL_ICONS[channel.icon]}
                </span>
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    {channel.label}
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-900">{channel.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{channel.sub}</p>
                </div>
              </div>
            ))}

            {/* Response-time promise card */}
            <div className="card-shine relative overflow-hidden rounded-2xl bg-[#0b1120] p-6 shadow-xl shadow-slate-900/20">
              <div className="bg-grid-light absolute inset-0 opacity-50" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" />
                  <p className="font-mono text-xs font-bold tracking-wider text-yellow-200 uppercase">
                    Response SLA
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Every inquiry is triaged by a{" "}
                  <span className="font-semibold text-white">senior engineer</span> — expect a
                  substantive technical response within{" "}
                  <span className="font-semibold text-white">one business day</span>, including an
                  honest assessment if we're not the right fit.
                </p>
              </div>
            </div>
          </div>

          {/* ---- Right: contact form ---- */}
          <div className="premium-shadow rounded-2xl border premium-border bg-white p-8 sm:p-10">
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <svg className="h-8 w-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">Almost there.</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                  Your email client just opened with the inquiry pre-filled — hit{" "}
                  <span className="font-semibold text-slate-900">Send</span> and it lands directly
                  with a senior triqualis engineer, who will respond within one business day. If
                  nothing opened, email us at{" "}
                  <span className="font-semibold text-slate-900">{COMPANY.email}</span> or call{" "}
                  <span className="font-semibold text-slate-900">{COMPANY.phone}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-500 hover:text-teal-800"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Jane Schmidt"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Corporate Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="mb-1.5 block text-sm font-semibold text-slate-800">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2364748b%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10`}
                  >
                    <option value="" disabled>
                      Select the closest match…
                    </option>
                    {CONTACT.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="scope" className="mb-1.5 block text-sm font-semibold text-slate-800">
                    Project Scope
                  </label>
                  <textarea
                    id="scope"
                    name="scope"
                    required
                    rows={5}
                    placeholder="Tell us about the system you're building — target platforms, existing stack, team situation, timeline pressure. The more technical detail, the sharper our first response."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group btn-shine mt-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-800"
                >
                  Submit Project Inquiry
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
                </button>

                <p className="text-center text-xs text-slate-400">
                  No mailing lists. No sales sequences. Your inquiry goes straight to engineering.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
