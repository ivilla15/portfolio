"use client";
import React, { useEffect, useState } from "react";

export function Parallax({
  children,
  speed = 0.18, // 0.1–0.6 feels good
  start = 0,
  max = 120, // clamp px
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  start?: number;
  max?: number;
  as?: any;
  className?: string;
}) {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const v = window.scrollY * speed + start;
        const clamped = Math.max(-max, Math.min(max, v));
        setY(clamped);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed, start, max]);

  return (
    <Tag
      className={className}
      style={{ transform: `translate3d(0, ${y}px, 0)` }}
    >
      {children}
    </Tag>
  );
}
