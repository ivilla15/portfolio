import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      {/* SHAPES LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* soft color wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 480px at 18% 12%, rgba(99,102,241,.22), transparent 60%), radial-gradient(700px 440px at 82% 22%, rgba(168,85,247,.18), transparent 55%)",
          }}
        />

        {/* spotlight behind name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[640px] h-[640px] rounded-full blur-xl opacity-35 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-cyan-400" />
        </div>

        {/* two mellow blobs (transform-only) */}
        <div className="absolute -top-24 -left-28">
          <div
            className="w-[520px] h-[520px] rounded-[40%] blur-2xl opacity-35 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,.8),rgba(168,85,247,.8),rgba(236,72,153,.65),rgba(99,102,241,.8))] animate-float"
            style={{ animationDuration: "14s" }}
          />
        </div>
        <div className="absolute bottom-10 -right-40">
          <div
            className="w-[440px] h-[440px] rounded-[40%] blur-2xl opacity-30 bg-[radial-gradient(60%_60%_at_40%_40%,rgba(34,211,238,.5),transparent),radial-gradient(60%_60%_at_70%_70%,rgba(99,102,241,.5),transparent)] animate-float"
            style={{ animationDuration: "16s", animationDelay: "0.8s" }}
          />
        </div>

        {/* accent dots — balanced top/middle/bottom, mixed sizes/opacities */}
        {/* TOP ROW */}
        <div className="absolute left-[8%] top-[10%]">
          <div
            className="w-6 h-6 rounded-full opacity-85 animate-pulse"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #60a5fa, transparent 60%), radial-gradient(circle at 70% 70%, #a78bfa, transparent 55%)",
            }}
          />
        </div>
        <div className="absolute left-[42%] top-[18%]">
          <div
            className="w-8 h-8 rounded-full opacity-9 0 animate-bounce"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #ec4899, transparent 60%), radial-gradient(circle at 70% 70%, #f59e0b, transparent 55%)",
            }}
          />
        </div>
        <div className="absolute right-[10%] top-[14%]">
          <div
            className="w-9 h-9 rounded-full opacity-85 animate-pulse"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #22c55e, transparent 60%), radial-gradient(circle at 70% 70%, #14b8a6, transparent 55%)",
            }}
          />
        </div>

        {/* MID FIELD */}
        <div className="absolute left-[10%] top-[28%]">
          <div
            className="w-8 h-8 rounded-full opacity-9 0 animate-pulse"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #f472b6, transparent 60%), radial-gradient(circle at 70% 70%, #a78bfa, transparent 55%)",
            }}
          />
        </div>
        <div className="absolute right-[18%] top-[28%]">
          <div
            className="w-10 h-10 rounded-full opacity-90 animate-pulse"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #22c55e, transparent 60%), radial-gradient(circle at 70% 70%, #3b82f6, transparent 55%)",
            }}
          />
        </div>

        {/* LOWER THIRD */}
        <div className="absolute left-[20%] bottom-[22%]">
          <div
            className="w-11 h-11 rounded-full opacity-75 animate-pulse"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #a78bfa, transparent 60%), radial-gradient(circle at 70% 70%, #06b6d4, transparent 55%)",
            }}
          />
        </div>
        <div className="absolute right-[12%] bottom-[16%]">
          <div
            className="w-7 h-7 rounded-full opacity-85 animate-bounce"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #34d399, transparent 60%), radial-gradient(circle at 70% 70%, #f472b6, transparent 55%)",
            }}
          />
        </div>
        <div className="absolute left-[45%] bottom-[10%]">
          <div
            className="w-5 h-5 rounded-full opacity-90 animate-ping"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #f87171, transparent 60%), radial-gradient(circle at 70% 70%, #fbbf24, transparent 55%)",
              animationDuration: "2.8s",
            }}
          />
        </div>

        {/* tiny aura glows behind two dots (soft, cheap) */}
        <div className="absolute left-[8%] top-[10%] -z-10">
          <div className="w-20 h-20 rounded-full blur-2xl opacity-25 bg-sky-400/60" />
        </div>
        <div className="absolute right-[10%] top-[14%] -z-10">
          <div className="w-24 h-24 rounded-full blur-2xl opacity-25 bg-emerald-400/60" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-8">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
              <span className="block">ISAIAH</span>
              {/* last name uses same gradient as CTA button */}
              <span className="block gradient-cta-text">VILLALOBOS</span>
            </h1>
          </div>

          <div className="space-y-4">
            {/* brighter than “grey”—readable but not shouting */}
            <h2 className="text-xl md:text-2xl text-slate-200/90 font-light tracking-wide">
              FULL-STACK DEVELOPER & CLOUD ARCHITECT
            </h2>
            <p className="text-[1.05rem] text-slate-200/90 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that matter. I build scalable web
              applications and cloud solutions that solve real problems and
              create lasting impact.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="text-base px-8 py-4 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-cyan-500 hover:scale-105 transition-all duration-300 border border-white/10 shadow-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 py-4 border-2 hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
          >
            <Mail className="mr-2 h-5 w-5" />
            Let&apos;s Connect
          </Button>
        </div>
      </div>

      {/* fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
