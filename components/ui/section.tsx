"use client";

import React from "react";
import { Reveal } from "@/components/ui/reveal";

type Dir = "up" | "down" | "left" | "right" | "none";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** Optional: override background */
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
    <section
      id={id}
      className={`relative isolate p-0 ${className}`}
      style={
        {
          "--radial-h": "75%", // 👈 default radial height for all sections
        } as React.CSSProperties
      }
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {background ? (
          background
        ) : (
          <>
            {/* Dark mode */}
            <div
              aria-hidden
              className="absolute inset-0 hidden dark:block"
              style={{
                backgroundImage: `
                  radial-gradient(
                    var(--radial-w,60%) var(--radial-h) at 50% 50%,
                    rgba(120,60,200,0.50),
                    transparent 70%
                  ),
                  linear-gradient(
                    to bottom,
                    transparent 0%,
                    rgba(10,10,30,0.26) var(--wash-top,40%),
                    rgba(5,5,20,0.54) var(--wash-bottom,60%),
                    transparent 100%
                  )
                `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Light mode */}
            <div
              aria-hidden
              className="absolute inset-0 block dark:hidden"
              style={{
                backgroundImage: `
                  radial-gradient(
                    var(--radial-w,60%) var(--radial-h) at 50% 50%,
                    rgba(140,100,220,0.25),
                    transparent 70%
                  ),
                  linear-gradient(
                    to bottom,
                    transparent 0%,
                    rgba(240,242,255,0.50) var(--wash-top,40%),
                    rgba(230,234,252,0.80) var(--wash-bottom,60%),
                    transparent 100%
                  )
                `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </>
        )}
      </div>

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

/* ---- Stagger (unchanged) ---- */
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
