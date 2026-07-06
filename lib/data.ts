/* ---------------------------------------------------------------------------
 * triqualis — single source of truth for all site content.
 * Purely static: every section of the homepage reads from these constants.
 * ------------------------------------------------------------------------- */

export const COMPANY = {
  name: "triqualis",
  legalName: "triqualis LLC",
  tagline: "Engineering Your Success Story.",
  founded: 2024,
  hq: "Yerevan, Armenia",
  email: "info@triqualis.com",
  phone: "+374 93 07 44 58",
  copyrightYear: 2026,
} as const;

/* ---- Navigation --------------------------------------------------------- */

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Values", href: "#values" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

/* ---- Hero --------------------------------------------------------------- */

export const HERO = {
  eyebrow: "Elite Engineering Hub · Yerevan, Armenia",
  headlineTop: "Engineering",
  headlineMiddle: "Your Success",
  headlineBottom: "Story.",
  lede: "triqualis is a senior-only software engineering firm operating at both ends of the stack — from register-level C/C++ firmware and performance-critical desktop systems to globally distributed cloud, web, and SaaS architectures.",
  sublede: "Enterprises across Europe and North America engage us when the problem is too low-level for a typical web shop and too fast-moving for a traditional systems house. We close that gap with one accountable team: rigorous systems engineering discipline, delivered at modern product velocity.",
  primaryCta: { label: "Schedule a Consultation", href: "#contact" },
  secondaryCta: { label: "Explore Our Capabilities", href: "#services" },
  trustLine: "Trusted by high-demand SaaS platforms and industrial engineering teams",
} as const;

export const HERO_TICKER = [
  "C / C++ Systems Engineering",
  "QT / QML Interfaces",
  "Enterprise SaaS Platforms",
  "React & Node.js Delivery",
  "Embedded & Real-Time",
  "Cloud-Native Architecture",
  "Dedicated Engineering Pods",
  "Odoo Enterprise Solutions",
  "DevOps & CI/CD Pipelines",
  "Mission-Critical Desktop",
] as const;

/* ---- Stats / Scale ------------------------------------------------------ */

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export const STATS: Stat[] = [
  {
    value: "25+",
    label: "Senior Engineers On-Board",
    detail: "Median 9 years of production experience. No junior benches, no bait-and-switch staffing.",
  },
  {
    value: "60+",
    label: "Projects Delivered",
    detail: "From RTOS firmware and QT desktop suites to multi-tenant SaaS platforms in production today.",
  },
  {
    value: "98%",
    label: "Sprint Commitments Met",
    detail: "Measured across every active engagement since founding. Deadlines are engineering constraints, not aspirations.",
  },
  {
    value: "3.4M+",
    label: "Lines of C/C++ Maintained",
    detail: "Actively owned, tested, and evolved across embedded, desktop, and high-throughput backend codebases.",
  },
  {
    value: "99.99%",
    label: "Runtime Availability",
    detail: "Across the cloud platforms and services our teams design, harden, and operate for clients.",
  },
  {
    value: "< 2 wks",
    label: "Pod Assembly Time",
    detail: "From signed engagement to a fully briefed, dedicated engineering pod writing production code.",
  },
];

/* ---- Core Values -------------------------------------------------------- */

export type CoreValue = {
  index: string;
  title: string;
  headline: string;
  body: string;
  points: string[];
};

export const VALUES: CoreValue[] = [
  {
    index: "01",
    title: "Time",
    headline: "Deadlines are engineering constraints — we design for them.",
    body: "Every engagement begins with a delivery architecture, not just a software architecture. We decompose scope into independently shippable increments, front-load technical risk into the earliest sprints, and maintain a continuously integrated main branch so there is never a 'stabilization phase' hiding at the end of your roadmap. Progress is visible in working software every single week.",
    points: [
      "Risk-first sprint sequencing — the hardest problems are attacked first",
      "Continuous integration with release-ready main at all times",
      "Weekly demos of working software, never slideware",
    ],
  },
  {
    index: "02",
    title: "Budget",
    headline: "Hyper-efficient cost structures. Zero compromise on rigor.",
    body: "Operating from Armenia's elite engineering ecosystem lets us field genuinely senior teams at a fraction of Western European or North American rates — without the quality erosion typical of offshore staffing. Fixed, transparent pricing models, no pyramid of billable juniors, and an efficiency discipline that treats every engineering hour as your capital, because it is.",
    points: [
      "Senior-only teams — you never fund on-the-job training",
      "Transparent, predictable engagement pricing",
      "Architecture reviews that prevent expensive rewrites later",
    ],
  },
  {
    index: "03",
    title: "Innovation",
    headline: "Active R&D in modern C++ and cloud-native architecture.",
    body: "We don't just apply known patterns — we invest in staying ahead of them. Our engineers run internal working groups on modern C++ (C++20/23, coroutines, lock-free concurrency), evaluate emerging cloud primitives before clients need them, and feed those findings directly back into production engagements. When your platform hits a wall others call 'impossible,' that research is what gets you through it.",
    points: [
      "Internal C++20/23 and systems-performance working groups",
      "Continuous evaluation of cloud, edge, and tooling advances",
      "Innovation applied to production, not confined to labs",
    ],
  },
];

/* ---- About / Meet triqualis --------------------------------------------- */

export const ABOUT = {
  eyebrow: "Meet triqualis",
  title: "A deliberate company, built where deep engineering lives.",
  paragraphs: [
    "triqualis was founded in 2024 in Yerevan with a specific thesis: the global market is saturated with web agencies and staffed to the ceiling with generalists, yet critically short of teams who can move fluently between low-level systems programming and modern cloud product engineering. We built the firm to occupy exactly that intersection.",
    "Armenia was not a cost decision — it was a talent decision. The country carries one of the deepest mathematical and engineering traditions in the region, a legacy of Soviet-era scientific institutes that made Yerevan a computing research center decades before 'tech hub' was a phrase. Today that lineage feeds a thriving ecosystem of engineers who grew up on algorithms, compilers, and hard systems problems — precisely the profile that thrives on the work we take.",
    "The result is a firm that is small by design and senior by policy. Every triqualis engineer is expected to reason from first principles, communicate directly with client stakeholders, and hold the same bar whether the artifact is a lock-free queue in C++ or a multi-region deployment pipeline.",
  ],
  pillars: [
    {
      title: "High-Performance Systems",
      subtitle: "C / C++ · Desktop · Embedded",
      description: "Firmware, real-time processing, mission-critical desktop suites, and QT/QML interfaces engineered for determinism, memory discipline, and decade-long maintainability. This is the work most agencies can't touch — and the foundation of our reputation.",
    },
    {
      title: "Agile Modern Web",
      subtitle: "React · Node · Cloud",
      description: "Multi-tenant SaaS platforms, high-throughput APIs, and cloud-native infrastructure delivered with product-grade velocity. Type-safe codebases, automated pipelines, observability from day one — modern web engineering without the fragility.",
    },
  ],
  milestones: [
    { year: "2024", event: "Founded in Yerevan by senior systems and platform engineers." },
    { year: "2024", event: "First enterprise SaaS engagement enters production within one quarter." },
    { year: "2025", event: "Deep engineering partnership with matelso; embedded & QT practice formalized." },
    { year: "2026", event: "25+ senior engineers across systems, platform, and enterprise practices." },
  ],
} as const;

/* ---- Services ----------------------------------------------------------- */

export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  accent: "teal" | "emerald" | "slate";
};

export const SERVICES: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Engineering",
    tagline: "Full-cycle Web, Enterprise SaaS & Mission-Critical Desktop",
    description: "End-to-end ownership from discovery through production operation. We architect and build multi-tenant SaaS platforms, complex line-of-business web applications, and desktop systems where failure is not an option. Every codebase ships with automated test coverage, CI/CD pipelines, observability, and documentation your internal teams can actually inherit.",
    deliverables: [
      "Multi-tenant SaaS architecture & delivery",
      "Enterprise web applications (React, Vue, Node.js)",
      "Mission-critical desktop systems (C++, C#, QT)",
      "API design — REST, GraphQL, gRPC, event-driven",
      "Cloud infrastructure, CI/CD & observability baked in",
    ],
    accent: "teal",
  },
  {
    id: "embedded-systems",
    title: "Embedded & Systems Programming",
    tagline: "Performance-Critical C/C++ & QT/QML Interfaces",
    description: "Our defining discipline. We engineer firmware, real-time data paths, hardware-adjacent services, and rich QT/QML interfaces where every allocation, every lock, and every microsecond is accounted for. Static analysis, sanitizer-clean builds, and deterministic memory strategies are standard practice — because in this class of software, 'mostly correct' is a defect.",
    deliverables: [
      "Modern C++ (C++17/20/23) application & library engineering",
      "Embedded firmware & RTOS-based development",
      "QT / QML industrial and instrumentation interfaces",
      "Performance engineering: profiling, SIMD, lock-free concurrency",
      "Legacy C/C++ modernization & long-term stewardship",
    ],
    accent: "emerald",
  },
  {
    id: "team-augmentation",
    title: "Team Augmentation & Flexibility",
    tagline: "Dedicated Pods, Team Extensions & Technical Consulting",
    description: "Engineering capacity shaped to your organization, not the other way around. Dedicated pods that own a product area end-to-end, individual senior engineers embedded into your existing squads and ceremonies, or focused consulting engagements — architecture reviews, performance audits, C++ modernization roadmaps — when you need judgment more than headcount.",
    deliverables: [
      "Dedicated engineering pods (3–8 engineers + lead)",
      "Seamless team extension inside your tools & rituals",
      "Expert technical consulting & architecture review",
      "Performance audits & modernization roadmaps",
      "Flexible scaling — grow or contract with 2 weeks' notice",
    ],
    accent: "slate",
  },
];

/* ---- Engagement Process -------------------------------------------------- */

export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  description: string;
  outcomes: string[];
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Technical Audit",
    duration: "Week 1–2",
    description: "Senior engineers — not salespeople — sit with your stakeholders and your codebase. We map the domain, audit existing systems, identify the highest-risk technical unknowns, and produce a delivery architecture: scope decomposition, milestone plan, and an honest assessment of what will be hard.",
    outcomes: ["Technical audit report", "Delivery architecture & milestone map", "Fixed engagement proposal"],
  },
  {
    step: "02",
    title: "Team Assembly",
    duration: "Week 2–3",
    description: "We compose a pod matched to your stack and domain — systems engineers for the C++ core, platform engineers for cloud and web, a technical lead accountable to your leadership. Every member is briefed on the audit before their first commit. You approve the roster; we guarantee its seniority.",
    outcomes: ["Dedicated pod with named lead", "Shared tooling, access & rituals", "Sprint zero: environments & CI live"],
  },
  {
    step: "03",
    title: "Agile Delivery",
    duration: "Ongoing sprints",
    description: "Two-week sprints with working software demonstrated at every boundary. Risk-first sequencing pulls the hardest problems forward. Continuous integration keeps main releasable; code review, static analysis, and automated test gates keep quality non-negotiable. You see burn-down, velocity, and defect metrics — the same dashboards we see.",
    outcomes: ["Weekly demos of working software", "Transparent velocity & quality metrics", "Release-ready main branch, always"],
  },
  {
    step: "04",
    title: "Evolution & Scale",
    duration: "Long-term",
    description: "Shipping v1 is the midpoint, not the finish line. We operate what we build — hardening for scale, driving down latency and cost, extending the platform as your product grows, and transferring knowledge to your internal teams on whatever timeline serves you. Many clients scale their pod; others hand off entirely. Both are success.",
    outcomes: ["Production operation & SLO ownership", "Performance & cost optimization", "Structured knowledge transfer"],
  },
];

/* ---- Tech Stack ---------------------------------------------------------- */

export type TechItem = {
  name: string;
  note: string;
};

export type TechCategory = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: TechItem[];
};

export const TECH_STACK: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    title: "Interfaces engineered like systems",
    description: "Type-safe, componentized, and measured. We treat the browser as a runtime with real performance budgets — bundle size, interaction latency, and rendering cost are tracked like any other engineering metric.",
    items: [
      { name: "JavaScript", note: "ES2023+" },
      { name: "TypeScript", note: "Strict-mode everywhere" },
      { name: "React", note: "SPA & server components" },
      { name: "Next.js", note: "App Router, SSR/SSG" },
      { name: "Vue", note: "Vue 3 composition API" },
      { name: "Tailwind CSS", note: "Design-system driven" },
      { name: "Redux / Zustand", note: "Predictable state" },
      { name: "Vitest / Playwright", note: "Unit to E2E coverage" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    title: "High-throughput services that stay up",
    description: "From event-driven Node.js services to JVM and .NET enterprise backends, we design for horizontal scale, graceful degradation, and observability from the first commit — not as a retrofit.",
    items: [
      { name: "Node.js", note: "Event-driven services" },
      { name: "Python", note: "Services, tooling, data" },
      { name: "C#", note: ".NET enterprise backends" },
      { name: "Java", note: "JVM-scale platforms" },
      { name: "PHP", note: "Modern PHP 8 / Laravel" },
      { name: "PostgreSQL", note: "Modeling & tuning" },
      { name: "Redis / RabbitMQ", note: "Caching & messaging" },
      { name: "GraphQL / gRPC", note: "Typed API contracts" },
    ],
  },
  {
    id: "systems",
    label: "Embedded / C++",
    title: "Performance & low-level — our home turf",
    description: "The discipline that defines triqualis. Modern C++ with sanitizer-clean builds, deterministic memory strategies, real-time constraints honored by design, and QT/QML front-ends for industrial-grade tooling.",
    items: [
      { name: "C", note: "Firmware & kernel-adjacent" },
      { name: "C++", note: "C++17 / 20 / 23" },
      { name: "QT / QML", note: "Industrial UIs & tooling" },
      { name: "CMake / Conan", note: "Reproducible builds" },
      { name: "RTOS / Embedded Linux", note: "Real-time targets" },
      { name: "Sanitizers & Static Analysis", note: "ASan, UBSan, clang-tidy" },
      { name: "Profiling & SIMD", note: "perf, VTune, vectorization" },
      { name: "Lock-Free Concurrency", note: "Atomics done right" },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise & DevOps",
    title: "Platforms your operations run on",
    description: "Odoo-centered enterprise solutions and the delivery infrastructure that keeps everything shipping: containerized workloads, infrastructure as code, and pipelines that turn deployment into a non-event.",
    items: [
      { name: "Odoo", note: "ERP modules & integrations" },
      { name: "Docker", note: "Containerized everything" },
      { name: "Kubernetes", note: "Orchestration at scale" },
      { name: "AWS / Azure", note: "Cloud-native architecture" },
      { name: "Terraform", note: "Infrastructure as code" },
      { name: "GitLab / GitHub CI", note: "Automated pipelines" },
      { name: "Grafana / Prometheus", note: "Observability stacks" },
      { name: "Linux Administration", note: "Hardened environments" },
    ],
  },
];

/* ---- Case Study / Proven Capability -------------------------------------- */

export const CASE_STUDY = {
  eyebrow: "Proven Capability",
  client: "matelso",
  clientDescriptor: "High-demand European call-tracking & lead-management SaaS",
  title: "Deep engineering inside a high-demand SaaS platform",
  narrative: [
    "matelso operates in a segment where downtime is directly measurable in lost customer revenue: real-time call tracking and lead management for marketing-driven businesses across Europe. When platform demands outgrew available engineering capacity, triqualis embedded a dedicated pod directly into their delivery organization.",
    "Our engineers took ownership of performance-sensitive services and integration surfaces — working inside matelso's architecture, coding standards, and release cadence from the first sprint. The engagement demanded exactly the dual competency triqualis was built for: low-level runtime discipline to keep hot paths deterministic under load, and modern SaaS engineering to ship features at the pace their market requires.",
    "The result: seamless integration with zero disruption to running operations, sustained release velocity through periods of rapid platform growth, and runtime behavior their operations team describes in one word — bulletproof.",
  ],
  highlights: [
    { metric: "Seamless", label: "Integration into existing architecture, standards & release trains" },
    { metric: "Elastic", label: "Scalability sustained through rapid platform and traffic growth" },
    { metric: "Bulletproof", label: "Runtime execution across performance-critical service paths" },
  ],
  sectors: ["SaaS Platforms", "Telecommunications", "Industrial & Instrumentation", "Enterprise Operations", "MarTech"],
} as const;

/* ---- Contact -------------------------------------------------------------- */

export const CONTACT = {
  eyebrow: "Enterprise Contact Hub",
  title: "Let's scope your next engineering initiative.",
  description: "Tell us what you're building — or what's breaking. A senior engineer (never a sales rep) reviews every inquiry and responds within one business day with an honest read on fit, approach, and timeline.",
  channels: [
    {
      label: "Corporate HQ",
      value: "Yerevan, Armenia",
      sub: "Engineering operations · GMT+4, overlapping EU & US-East hours",
      icon: "location" as const,
    },
    {
      label: "Email",
      value: "info@triqualis.com",
      sub: "Reviewed by a senior engineer within one business day",
      icon: "email" as const,
    },
    {
      label: "Phone",
      value: "+374 93 07 44 58",
      sub: "Direct line · Mon–Fri, 09:00–19:00 GMT+4",
      icon: "phone" as const,
    },
  ],
  projectTypes: [
    "Custom Software Engineering",
    "Embedded / C & C++ Systems",
    "QT / QML Interface Development",
    "Enterprise SaaS Platform",
    "Team Augmentation / Dedicated Pod",
    "Odoo / Enterprise Solutions",
    "Technical Consulting & Audit",
    "Other / Not Sure Yet",
  ],
} as const;

/* ---- Footer ---------------------------------------------------------------- */

export type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About triqualis", href: "#about" },
      { label: "Core Values", href: "#values" },
      { label: "Engagement Process", href: "#process" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Custom Software Engineering", href: "#services" },
      { label: "Embedded & Systems Programming", href: "#services" },
      { label: "QT / QML Development", href: "#services" },
      { label: "Team Augmentation", href: "#services" },
      { label: "Technical Consulting", href: "#services" },
    ],
  },
  {
    heading: "Expertise",
    links: [
      { label: "Modern C++ (17/20/23)", href: "#stack" },
      { label: "React & Node.js Platforms", href: "#stack" },
      { label: "Cloud-Native Architecture", href: "#stack" },
      { label: "Odoo Enterprise Solutions", href: "#stack" },
      { label: "DevOps & CI/CD", href: "#stack" },
    ],
  },
];

export const SOCIALS = [
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
  { label: "GitHub", href: "#", icon: "github" as const },
  { label: "X / Twitter", href: "#", icon: "x" as const },
];
