"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter() {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const target = 2.4;
          const duration = 2200;
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(eased * target);
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-baseline gap-2">
      <span className="font-display text-5xl lg:text-6xl text-charcoal tabular-nums">
        ${value.toFixed(1)}B
      </span>
      <span className="font-body text-base text-charcoal-soft tracking-wide">
        assets under management
      </span>
    </div>
  );
}
