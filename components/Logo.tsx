type LogoProps = {
  dark?: boolean;
};

/**
 * Brand mark: monochrome vertical bar + handwritten lowercase wordmark,
 * mirroring the official triqualis logo (white bar and wordmark on black).
 */
export default function Logo({ dark = false }: LogoProps) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="triqualis — home">
      <span
        className="h-9 w-[5px] rounded-full bg-yellow-400 shadow-[0_0_10px_rgb(250_204_21_/_0.4)] transition-transform duration-300 group-hover:scale-y-110"
        aria-hidden="true"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-logo text-[1.7rem] leading-none tracking-wide ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          triqualis
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold tracking-[0.22em] uppercase ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Time · Budget · Quality
        </span>
      </span>
    </a>
  );
}
