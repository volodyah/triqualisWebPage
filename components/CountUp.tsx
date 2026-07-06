"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
};

/**
 * Animates the numeric portion of a stat string (e.g. "3.4M+", "99.99%")
 * from zero when it scrolls into view. Non-numeric strings render as-is.
 */
export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/[\d.]+/);
    const el = ref.current;
    if (!match || !el) return;

    const target = parseFloat(match[0]);
    const decimals = (match[0].split(".")[1] ?? "").length;
    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value.replace(match[0], (target * eased).toFixed(decimals)));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}
