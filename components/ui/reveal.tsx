// components/ui/reveal.tsx (relevant idea)
import React, { useEffect, useRef, useState } from "react";

export function Reveal({
  className = "",
  children,
  /* ...your other props... */
  delay = 0,
  direction = "up",
  once = true,
  margin,
  threshold,
}: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [tempWC, setTempWC] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setTempWC(true); // ✅ turn on will-change while animating
          const t = setTimeout(() => {
            // clear after animation finishes
            setTempWC(false);
          }, 600 + delay); // match your animation duration + delay
          return () => clearTimeout(t);
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: margin, threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, once, margin, threshold]);

  const dirMap: Record<string, string> = {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
    none: "",
  };

  return (
    <div
      ref={ref}
      // ✅ will-change only while animating; otherwise 'auto'
      style={{ willChange: tempWC ? "transform, opacity" : "auto" }}
      className={[
        className,
        "transition duration-500 ease-out",
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${dirMap[direction]}`,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
