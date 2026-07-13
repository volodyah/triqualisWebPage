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
  lede: "triqualis is a senior-led software engineering firm operating at both ends of the stack — from performance-critical C++ and C# systems to modern websites, cloud platforms, and SaaS products.",
  sublede: "Companies across Europe engage us when the problem is too low-level for a typical web shop and too fast-moving for a traditional systems house. We close that gap with one accountable team: rigorous engineering discipline, delivered at product velocity.",
  primaryCta: { label: "Schedule a Consultation", href: "#contact" },
  secondaryCta: { label: "Explore Our Capabilities", href: "#services" },
  trustLine: "Trusted by high-demand SaaS platforms and product companies across Europe",
} as const;

export const HERO_TICKER = [
  "C / C++ Systems Engineering",
  "C# / .NET Development",
  "Enterprise SaaS Platforms",
  "Website Design & Delivery",
  "React & Node.js",
  "Cloud-Native Architecture",
  "Team Augmentation",
  "QT / QML Interfaces",
  "DevOps & CI/CD Pipelines",
  "Technical Consulting",
] as const;

/* ---- Stats / Scale ------------------------------------------------------ */

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export const STATS: Stat[] = [
  {
    value: "2",
    label: "Ways to Engage",
    detail: "Embed our developers directly into your team, or hand triqualis the entire project end-to-end. Both models, one standard of quality.",
  },
  {
    value: "Any Role",
    label: "Positions We Staff",
    detail: "Need one developer or five? Tell us the role and seniority — we source vetted engineers who slot straight into your existing team.",
  },
  {
    value: "E2E",
    label: "Full Project Delivery",
    detail: "Discovery, architecture, implementation, and production operation — one accountable partner across the whole lifecycle.",
  },
  {
    value: "2024",
    label: "Founded in Yerevan",
    detail: "Built on Armenia's deep mathematical and engineering tradition — deliberately lean, senior-minded, and quality-first.",
  },
  {
    value: "C++ → Cloud",
    label: "Both Ends of the Stack",
    detail: "Performance-critical C++ and C# on one side, websites, SaaS, and cloud on the other — a span few firms cover with a single team.",
  },
  {
    value: "1–2 days",
    label: "Response Time",
    detail: "Every inquiry is read by an engineer, not a sales rep — and we reply as quickly as we can, usually within a day or two.",
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
    body: "Operating from Armenia's elite engineering ecosystem lets us field genuinely senior teams at a fraction of Western European rates — without the quality erosion typical of offshore staffing. It's an efficiency discipline that treats every engineering hour as your capital, because it is.",
    points: [
      "Senior-led teams — no unsupervised juniors, ever",
      "Transparent, predictable engagement pricing",
      "Architecture reviews that prevent expensive rewrites later",
    ],
  },
  {
    index: "03",
    title: "Innovation",
    headline: "Staying ahead in systems programming and cloud architecture.",
    body: "We don't just apply known patterns — we invest in staying ahead of them. Our engineers continuously sharpen their craft across the stack: following language and tooling advances in low-level systems work, evaluating emerging cloud primitives before clients need them, and feeding those findings directly back into production engagements. When your platform hits a wall others call 'impossible,' that habit is what gets you through it.",
    points: [
      "Continuous learning in systems performance and modern tooling",
      "Early evaluation of cloud, edge, and platform advances",
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
    "The result is a firm that is small by design and senior-led by policy. Every triqualis engineer is expected to reason from first principles, communicate directly with client stakeholders, and hold the same bar whether the artifact is low-level systems code or a multi-region deployment pipeline.",
  ],
  pillars: [
    {
      title: "High-Performance Systems",
      subtitle: "C++ · C# · Desktop",
      description: "C++ and C# engineering where performance and correctness are non-negotiable: desktop applications, compute-heavy services, and QT/QML interfaces built for decade-long maintainability. This is the work most agencies can't touch — and the foundation of our reputation.",
    },
    {
      title: "Web & SaaS Delivery",
      subtitle: "Websites · React · Node · Cloud",
      description: "Company websites, multi-tenant SaaS platforms, and high-throughput APIs delivered with product-grade velocity. Type-safe codebases, automated pipelines, observability from day one — modern web engineering without the fragility.",
    },
    {
      title: "Flexible Engagement",
      subtitle: "Team Extension · Full Delivery",
      description: "Two ways to work with us: embed our developers into your team for any role you need, or hand us a project to own end-to-end. The same senior standard applies either way — you scale the engagement to fit, never the reverse.",
    },
  ],
  milestones: [
    { year: "2024", event: "Founded in Yerevan by senior systems and platform engineers." },
    { year: "2025", event: "Partnership with matelso begins — triqualis developers join their product teams." },
    { year: "2026", event: "Flexible engagement network spanning systems, platform, and enterprise practices." },
  ],
} as const;

/* ---- Services ----------------------------------------------------------- */

export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  accent: "teal" | "yellow" | "slate";
};

export const SERVICES: Service[] = [
  {
    id: "web-saas",
    title: "Web & SaaS Engineering",
    tagline: "Websites, Web Applications & Enterprise SaaS",
    description: "Full ownership from discovery through production operation. We design and build company websites, complex web applications, and multi-tenant SaaS platforms — with automated test coverage, CI/CD pipelines, observability, and documentation your internal teams can actually inherit.",
    deliverables: [
      "Company websites — designed, built & deployed",
      "Web applications (React, Vue, Node.js)",
      "Multi-tenant SaaS architecture & delivery",
      "API design — REST, GraphQL, gRPC",
      "Cloud infrastructure, CI/CD & observability baked in",
    ],
    accent: "teal",
  },
  {
    id: "cpp-csharp-systems",
    title: "C++ & C# Systems",
    tagline: "Desktop, Compute-Critical & QT/QML",
    description: "Our deepest discipline. We build software where performance and correctness are non-negotiable — desktop applications, compute-critical services, and rich QT/QML interfaces where every allocation and every millisecond is accounted for. Static analysis, sanitizer-clean builds, and disciplined code review are standard practice, because in this class of software 'mostly correct' is a defect.",
    deliverables: [
      "Modern C/C++ application & library engineering",
      "C# / .NET desktop & backend systems",
      "QT / QML interface development",
      "Performance engineering & profiling",
      "Legacy codebase modernization & long-term stewardship",
    ],
    accent: "yellow",
  },
  {
    id: "team-augmentation",
    title: "Team Augmentation & Flexibility",
    tagline: "Dedicated Teams, Team Extensions & Technical Consulting",
    description: "Engineering capacity shaped to your organization, not the other way around. A dedicated team that owns a product area, individual senior developers who join your existing squads and ceremonies, or focused consulting engagements — architecture reviews, performance audits, modernization roadmaps — when you need judgment more than headcount.",
    deliverables: [
      "Dedicated development teams with a named lead",
      "Seamless team extension inside your tools & rituals",
      "Expert technical consulting & architecture review",
      "Performance audits & modernization roadmaps",
      "Flexible scaling — grow or contract as the project demands",
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
    duration: "~2 weeks",
    description: "We compose a team matched to your stack and domain — systems engineers for the low-level core, platform engineers for cloud and web, a technical lead accountable to your leadership. Every member is briefed on the audit before their first commit. You approve the roster; we guarantee its seniority.",
    outcomes: ["Dedicated team with a named lead", "Shared tooling, access & rituals", "Dev environments & pipelines ready to ship"],
  },
  {
    step: "03",
    title: "Agile Delivery",
    duration: "Ongoing sprints",
    description: "A delivery rhythm tailored to your project — together we agree the cadence that fits, whether that's classic two-week sprints, weekly increments, or continuous flow. Whatever the rhythm, working software is demonstrated at every boundary, risk-first sequencing pulls the hardest problems forward, and code review, static analysis, and automated test gates keep quality non-negotiable. You see the same dashboards we see.",
    outcomes: ["Cadence agreed together, per project", "Regular demos of working software", "Release-ready main branch, always"],
  },
  {
    step: "04",
    title: "Evolution & Scale",
    duration: "Long-term",
    description: "Shipping v1 is the midpoint, not the finish line. We operate what we build — hardening for scale, driving down latency and cost, extending the platform as your product grows, and transferring knowledge to your internal teams on whatever timeline serves you. Many clients grow their team with us; others hand off entirely. Both are success.",
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
    label: "C++ / C# Systems",
    title: "Performance-critical software — our home turf",
    description: "Modern C++ and C# with sanitizer-clean builds, disciplined memory management, and QT/QML front-ends for rich desktop tooling — engineered for the workloads where every millisecond counts.",
    items: [
      { name: "C", note: "Low-level & systems code" },
      { name: "C++", note: "C++17 / 20 / 23" },
      { name: "C# / .NET", note: "Desktop & services" },
      { name: "QT / QML", note: "Rich desktop UIs" },
      { name: "CMake / Conan", note: "Reproducible builds" },
      { name: "Sanitizers & Static Analysis", note: "ASan, UBSan, clang-tidy" },
      { name: "Profiling & Optimization", note: "Hot paths, memory, I/O" },
      { name: "Concurrency & Multithreading", note: "Correct under load" },
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
  eyebrow: "Strategic Partnership",
  client: "matelso",
  clientWebsite: "https://matelso.com",
  clientDescriptor: "High-demand European call-tracking & lead-management SaaS",
  title: "Embedded inside matelso — our biggest engineering partnership.",
  narrative: [
    "matelso is triqualis' closest partner: a leading European SaaS platform for real-time call tracking and lead management, operating in a market where downtime is directly measurable in lost customer revenue. It is also the clearest proof of how we work.",
    "Our developers aren't an external vendor throwing code over a wall — they work alongside matelso's own engineers as full members of the product teams: the same standups, the same sprint boards, the same codebase and quality bar. That depth of integration demands exactly the dual competency triqualis was built for — low-level runtime discipline to keep performance-critical paths deterministic under load, and modern SaaS engineering to ship features at the pace the market requires.",
    "The result of working this way: seamless integration with zero disruption to running operations, sustained release velocity through rapid platform growth, and runtime behavior the operations team describes in one word — bulletproof.",
  ],
  testimonial: {
    quote:
      "A big thanks goes out to our software development partners at triqualis for an amazing year of collaboration and innovation. Their expertise has been a key asset in driving our projects forward.",
    author: "matelso GmbH",
    context: "One year of partnership · via LinkedIn",
    url: "https://www.linkedin.com/posts/matelso_triqualis-activity-7380855595249332224-m79y",
  },
  highlights: [
    { metric: "Seamless", label: "Integration into existing architecture, standards & release trains" },
    { metric: "Elastic", label: "Scalability sustained through rapid platform and traffic growth" },
    { metric: "Bulletproof", label: "Runtime execution across performance-critical service paths" },
  ],
  sectors: ["SaaS Platforms", "Telecommunications", "MarTech", "Enterprise Software"],
} as const;

/* ---- Contact -------------------------------------------------------------- */

export const CONTACT = {
  eyebrow: "Enterprise Contact Hub",
  title: "Let's scope your next engineering initiative.",
  description: "Tell us what you're building — or what's breaking. An engineer — never a sales rep — reads every inquiry and replies with an honest read on fit, approach, and timeline, usually within a day or two.",
  channels: [
    {
      label: "Corporate HQ",
      value: "Yerevan, Armenia",
      sub: "Engineering operations · GMT+4, overlapping European business hours",
      icon: "location" as const,
    },
    {
      label: "Email",
      value: "info@triqualis.com",
      sub: "For documents, RFPs, and anything longer than a form",
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
    "Hire Developers — extend my team",
    "End-to-End Project Delivery",
    "Web, Cloud & SaaS Development",
    "C++ / C# Systems & Desktop",
    "Consulting or Architecture Review",
    "Something Else / Not Sure Yet",
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
      { label: "Web & SaaS Engineering", href: "#services" },
      { label: "C++ & C# Systems", href: "#services" },
      { label: "QT / QML Development", href: "#services" },
      { label: "Team Augmentation", href: "#services" },
      { label: "Technical Consulting", href: "#services" },
    ],
  },
  {
    heading: "Expertise",
    links: [
      { label: "C & C++ Systems", href: "#stack" },
      { label: "React & Node.js Platforms", href: "#stack" },
      { label: "Cloud-Native Architecture", href: "#stack" },
      { label: "Odoo Enterprise Solutions", href: "#stack" },
      { label: "DevOps & CI/CD", href: "#stack" },
    ],
  },
];

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/triqualis", icon: "linkedin" as const },
];
