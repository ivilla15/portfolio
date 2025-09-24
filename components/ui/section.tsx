"use client";

import React from "react";
import { Reveal } from "@/components/ui/reveal";

type Dir = "up" | "down" | "left" | "right" | "none";

type SectionProps = {
  id?: string;
  className?: string; // min-h, scroll-mt, overflow, etc.
  children: React.ReactNode; // content only
  background?: React.ReactNode; // full-bleed background
  contentClassName?: string; // where you add px/py
  direction?: Dir;
  margin?: string;
  threshold?: number;
  once?: boolean;
};

export function Section({
  id,
  className = "",
  children,
  background,
  contentClassName = "",
  direction = "up",
  margin = "-12% 0px -32% 0px",
  threshold = 0.15,
  once = false,
}: SectionProps) {
  return (
    <section id={id} className={`relative p-0 ${className}`}>
      {/* FULL-BLEED BACKGROUND (now z-0, not negative) */}
      {background ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {background}
        </div>
      ) : null}

      {/* CONTENT (sit above bg) */}
      <div className="relative z-10 w-full [min-height:inherit]">
        <Reveal
          once={once}
          direction={direction}
          margin={margin}
          threshold={threshold}
          className="block w-full h-full p-0 m-0 will-change-transform"
        >
          <div className={`block w-full h-full p-0 m-0 ${contentClassName}`}>
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  step?: number;
  start?: number;
  direction?: Dir;
  once?: boolean;
  itemClassName?: string;
};

export function Stagger({
  children,
  step = 120,
  start = 0,
  direction = "up",
  once = true,
  itemClassName = "",
}: StaggerProps) {
  const items = React.Children.toArray(children);
  return (
    <>
      {items.map((child, i) => (
        <Reveal
          key={i}
          delay={start + i * step}
          direction={direction}
          once={once}
          className={`block p-0 m-0 ${itemClassName}`}
        >
          <div className="block w-full p-0 m-0">{child}</div>
        </Reveal>
      ))}
    </>
  );
}
