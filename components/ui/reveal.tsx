// components/ui/reveal.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  className?: string;
  children: React.ReactNode;
  /** Delay before the reveal starts (ms) */
  delay?: number;
  /** Animation duration (ms) */
  duration?: number;
  /** CSS easing function */
  easing?: string;
  /** Slide-in direction */
  direction?: Direction;
  /** Reveal only once? */
  once?: boolean;
  /** IntersectionObserver rootMargin, e.g. "0px 0px -20% 0px" */
  margin?: string;
  /** IntersectionObserver threshold (0..1 or array) */
  threshold?: number | number[];
  /** How far to travel before reveal (px) */
  distance?: number;
}

export function Reveal({
  className = "",
  children,
  delay = 0,
  duration = 500,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)", // ease-out-ish
  direction = "up",
  once = true,
  margin,
  threshold,
  distance = 24, // px
}: RevealProps) {
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
          setTempWC(true);
          const t = window.setTimeout(
            () => {
              setTempWC(false);
            },
            duration + delay + 50
          ); // a tiny buffer
          // cleanup this timeout if the observer fires again
          return () => window.clearTimeout(t);
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: margin, threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, duration, once, margin, threshold]);

  // Compute the “hidden” translate based on direction + distance
  const hiddenTransform = (() => {
    const d = `${distance}px`;
    switch (direction) {
      case "up":
        return `translate3d(0, ${d}, 0)`;
      case "down":
        return `translate3d(0, -${d}, 0)`;
      case "left":
        return `translate3d(${d}, 0, 0)`;
      case "right":
        return `translate3d(-${d}, 0, 0)`;
      default:
        return "none";
    }
  })();

  return (
    <div
      ref={ref}
      style={{
        willChange: tempWC ? "transform, opacity" : "auto",
        transitionProperty: "transform, opacity",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
        transitionDelay: `${delay}ms`,
        transform: inView ? "none" : hiddenTransform,
        opacity: inView ? 1 : 0,
      }}
      className={["", "translate-x-0 translate-y-0", className].join(" ")}
    >
      {children}
    </div>
  );
}
