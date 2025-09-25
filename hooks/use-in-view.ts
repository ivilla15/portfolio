"use client";
import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>({
  root = null,
  margin = "-15% 0px -15% 0px",
  threshold = 0.1,
  once = true,
} = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin: margin, threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [root, margin, threshold, once]);

  return { ref, inView };
}
