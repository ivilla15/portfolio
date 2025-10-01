import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Briefcase } from "lucide-react";
import { Section } from "@/components/ui/section";

export function HeroSection() {
  return (
    <Section
      id="home"
      direction="up"
      once={false}
      className="min-h-[100svh] scroll-mt-16 overflow-hidden"
      contentClassName="px-4 pt-20 pb-24"
      background={
        <section
          id="home"
          className="relative overflow-hidden"
          style={{
            height: "calc(100dvh - var(--nav-h,70px))", // full screen minus navbar
          }}
        >
          {/* 1) Background wash */}
          <div
            aria-hidden
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(700px 420px at 18% 12%, rgba(99,102,241,.16), transparent 60%), radial-gradient(680px 420px at 82% 22%, rgba(168,85,247,.14), transparent 55%)",
            }}
          />

          {/* 2) Spotlight (centered glow behind name) */}
          <div
            aria-hidden
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
          >
            <div
              className="rounded-full"
              style={{
                width: "min(1100px, 88vw)",
                height: "min(900px, 78vh)",
                background:
                  "radial-gradient(closest-side, rgba(168,85,247,.45), rgba(99,102,241,.28) 45%, transparent 70%)",
                filter: "blur(40px)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 58%, transparent 78%)",
                maskImage:
                  "radial-gradient(ellipse at center, black 58%, transparent 78%)",
                opacity: 1,
              }}
            />
          </div>

          {/* 3) Side glows */}
          <div
            aria-hidden
            className="absolute -left-24 top-[18%] z-10 w-[clamp(220px,38vw,520px)] h-[clamp(220px,38vw,520px)] rounded-full blur-lg opacity-20 bg-gradient-to-tr from-indigo-500/40 via-purple-500/28 to-fuchsia-500/24"
          />
          <div
            aria-hidden
            className="absolute -right-28 top-[10%] z-10 w-[clamp(220px,40vw,560px)] h-[clamp(220px,40vw,560px)] rounded-full blur-lg opacity-20 bg-gradient-to-br from-cyan-400/24 via-sky-500/20 to-emerald-400/20"
          />

          {/* 4) Accent dots */}
          <div
            aria-hidden
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ contain: "paint" }}
          >
            {/* top row */}
            <div className="absolute left-[8%] top-[10%]">
              <div
                className="w-5 h-5 rounded-full opacity-90 motion-safe:animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #60a5fa, transparent 60%), radial-gradient(circle at 70% 70%, #a78bfa, transparent 55%)",
                }}
              />
            </div>
            <div className="absolute right-[10%] top-[14%]">
              <div
                className="w-6 h-6 rounded-full opacity-85 motion-safe:animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #22c55e, transparent 60%), radial-gradient(circle at 70% 70%, #14b8a6, transparent 55%)",
                }}
              />
            </div>

            {/* mid field */}
            <div className="absolute left-[12%] top-[28%]">
              <div
                className="w-6 h-6 rounded-full opacity-90 motion-safe:animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #f472b6, transparent 60%), radial-gradient(circle at 70% 70%, #a78bfa, transparent 55%)",
                }}
              />
            </div>

            {/* lower third */}
            <div className="absolute right-[12%] bottom-[25%]">
              <div
                className="w-6 h-6 rounded-full opacity-85 motion-safe:animate-bounce"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #34d399, transparent 60%), radial-gradient(circle at 70% 70%, #f472b6, transparent 55%)",
                }}
              />
            </div>

            {/* tiny aura glows behind two dots */}
            <div className="absolute left-[8%] top-[10%] -z-10">
              <div className="w-16 h-16 rounded-full blur-lg opacity-25 bg-sky-400/60" />
            </div>
            <div className="absolute right-[10%] top-[14%] -z-10">
              <div className="w-16 h-16 rounded-full blur-lg opacity-25 bg-emerald-400/60" />
            </div>
          </div>
        </section>
      }
    >
      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-12 h-[calc(100vh-70px)]">
        <div className="space-y-8">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
              <span className="block">ISAIAH</span>
              <span className="block gradient-cta-text select-text">
                VILLALOBOS
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-slate-700/80 dark:text-slate-200/90 font-light tracking-wide">
              FULL-STACK DEVELOPER & CLOUD ENGINEER IN TRAINING
            </h2>
            <p className="text-[1.05rem] text-slate-700/80 dark:text-slate-200/90 max-w-3xl mx-auto leading-relaxed">
              Engineering elegant, fast, and reliable web applications.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#experience">
            <Button
              size="lg"
              className="text-base px-8 py-4 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-cyan-500 hover:scale-105 transition-all duration-300 border border-white/10 shadow-lg"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View My Experience
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-4 border-2 hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let&apos;s Connect
            </Button>
          </a>
        </div>
      </div>

      {/* fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </Section>
  );
}
