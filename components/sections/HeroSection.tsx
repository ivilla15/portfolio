import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Button, FluidContainer, Tag, Typography } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="hero-shell">
      <FluidContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="order-2 max-w-3xl lg:order-1">
            <Tag className="mb-5">Full-Stack Software Engineer</Tag>

            <Typography variant="h1" className="max-w-4xl">
              Isaiah Villalobos
            </Typography>

            <Typography
              variant="body-lg"
              className="mt-5 text-m max-w-2xl text-base sm:text-lg"
            >
              I build accessible, responsive web applications with React,
              Next.js, TypeScript, and modern backend tools.
            </Typography>

            <Typography
              variant="body"
              className="mt-5 text-m max-w-2xl text-base sm:text-lg"
            >
              I care about clean UI, thoughtful engineering, and building
              software that feels practical, polished, and easy to use.
            </Typography>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="soft-panel mx-auto w-full max-w-[420px] p-3 sm:p-4 lg:ml-auto lg:mr-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-surface-3 shadow-medium">
                <Image
                  src="https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/Portfolio-Hero.webp"
                  alt="Portrait of Isaiah Villalobos"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 90vw"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent dark:from-black/40" />
              </div>
            </div>
          </div>
        </div>
      </FluidContainer>
    </section>
  );
}
