import { COMPANY, FOOTER_COLUMNS, SOCIALS } from "@/lib/data";
import Logo from "./Logo";

const SOCIAL_ICONS: Record<"linkedin" | "github" | "x", React.ReactNode> = {
  linkedin: (
    <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  ),
  github: (
    <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0012 2z" />
    </svg>
  ),
  x: (
    <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b1120]">
      <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/45 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* CTA band */}
        <div className="flex flex-col items-start gap-6 border-b border-white/10 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to build something that lasts?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
              One conversation with a senior engineer is usually enough to know whether we're the
              right partner. It costs nothing to find out.
            </p>
          </div>
          <a
            href="#contact"
            className="group btn-shine inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-200"
          >
            Schedule a Consultation
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

        {/* Mega columns */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {COMPANY.tagline} An elite software engineering firm in {COMPANY.hq} — bridging
              high-performance C/C++ systems with modern cloud and SaaS platforms for global
              enterprises.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-200 hover:border-yellow-300/40 hover:bg-white/10 hover:text-white"
                >
                  {SOCIAL_ICONS[social.icon]}
                </a>
              ))}
            </div>
            <div className="mt-8 space-y-1.5 font-mono text-xs text-slate-500">
              <p>{COMPANY.legalName} · {COMPANY.hq}</p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-slate-300">
                  {COMPANY.email}
                </a>
              </p>
              <p>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-slate-300">
                  {COMPANY.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-bold tracking-widest text-slate-300 uppercase">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                    >
                      <span className="h-px w-0 bg-yellow-300 transition-all duration-200 group-hover:w-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start gap-4 border-t border-white/10 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {COMPANY.copyrightYear} {COMPANY.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              All systems operational
            </span>
            <span className="font-mono">Yerevan · GMT+4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
