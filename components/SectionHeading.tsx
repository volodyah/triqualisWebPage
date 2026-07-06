type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-[0.16em] uppercase ${
          dark
            ? "border-white/15 bg-white/[0.04] text-teal-200"
            : "border-slate-200 bg-white text-teal-800 shadow-sm shadow-slate-900/5"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-yellow-300" : "bg-yellow-400"}`}
        />
        {eyebrow}
      </div>
      <h2
        className={`mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.08] ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
