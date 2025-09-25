"use client";

import React from "react";
import { Reveal } from "@/components/ui/reveal";

type Dir = "up" | "down" | "left" | "right" | "none";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: React.ReactNode;
  contentClassName?: string;
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
      {/* Full-bleed background */}
      {background ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {background}
        </div>
      ) : null}

      {/* Content */}
      <div className="relative z-10 w-full [min-height:inherit]">
        <Reveal
          once={once}
          direction={direction}
          margin={margin}
          threshold={threshold}
          className="block w-full h-full p-0 m-0"
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
  once = true, // by default, children animate only once
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
