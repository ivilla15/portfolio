// app/components/ui/reveal.tsx
"use client";
import React from "react";
import { useInView } from "@/hooks/use-in-view";

type Dir = "up" | "down" | "left" | "right" | "none";

export function Reveal({
  as: Tag = "div",
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className = "",
  once = true,
  margin = "-15% 0px -15% 0px",
  threshold = 0.1,
  exitDirection, // optional: different exit motion
}: {
  as?: any;
  children: React.ReactNode;
  direction?: Dir;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  margin?: string;
  threshold?: number;
  exitDirection?: Dir;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    once,
    margin,
    threshold,
  });

  const distance = 40; // px
  const map = (dir: Dir) => {
    switch (dir) {
      case "up":
        return `translateY(${distance}px)`; // start below, move up
      case "down":
        return `translateY(-${distance}px)`; // start above, move down
      case "left":
        return `translateX(-${distance}px)`; // start left, move right
      case "right":
        return `translateX(${distance}px)`; // start right, move left  ✅ FIXED
      default:
        return "none";
    }
  };

  const enterTranslate = "none";
  const exitTranslate = map(exitDirection ?? direction);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        transitionProperty: "opacity, transform, filter",
        transitionTimingFunction: "cubic-bezier(.22,.61,.36,1)",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? enterTranslate : exitTranslate,
        filter: inView ? "blur(0)" : "blur(4px)",
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </Tag>
  );
}
