import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, Lightbulb } from "lucide-react";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section
      id="about"
      direction="up"
      className="min-h-[100svh] scroll-mt-32 overflow-hidden"
      contentClassName="px-4 py-24 md:py-28"
      background={
        <>
          {/* Center vignette */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[60vh]
               bg-[radial-gradient(60%_50%_at_50%_50%,rgba(88,28,135,0.18),transparent_70%)]
               dark:bg-[radial-gradient(60%_50%_at_50%_50%,rgba(88,28,135,0.33),transparent_70%)]"
          />

          {/* Left glow */}
          <div
            className="absolute left-[-10%] top-[25%] w-[46vw] h-[46vw] rounded-full blur-xl opacity-20
               bg-gradient-to-tr from-indigo-500/40 via-purple-500/28 to-fuchsia-500/24
               dark:opacity-25 dark:from-indigo-500/50 dark:via-purple-500/40 dark:to-fuchsia-500/35"
          />

          {/* Right glow */}
          <div
            className="absolute right-[-12%] top-[10%] w-[50vw] h-[50vw] rounded-full blur-xl opacity-20
               bg-gradient-to-br from-cyan-400/28 via-sky-500/22 to-emerald-400/22
               dark:opacity-20 dark:from-cyan-400/35 dark:via-sky-500/28 dark:to-emerald-400/28"
          />

          {/* Soft wash */}
        </>
      }
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mt-4 mb-6">
            About <span className="gradient-cta-text">Me</span>
          </h2>
          <p className="text-xl text-base max-w-2xl mx-auto">
            The story behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="creative-card border-0 bg-gradient-to-br from-background to-muted/20 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10">
                    <Code className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-base">
                    The Developer
                  </h3>
                </div>
                <p className="text-base leading-relaxed">
                  I&apos;m a Computer Science major at Cal State LA and a Junior
                  Web Developer Associate for the University–Student Union. I
                  build accessible, responsive websites using React, TypeScript,
                  and styled-components—focused on performance, usability, and
                  scalability. My stack includes Next.js, Tailwind CSS, and
                  shadcn/ui, and I specialize in reusable components, better
                  a11y, and solving real frontend challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="creative-card border-0 bg-gradient-to-br from-background to-muted/20 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/10">
                    <Lightbulb className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-base">
                    The Problem Solver
                  </h3>
                </div>
                <p className="text-base leading-relaxed">
                  I don&apos;t just ship features—I solve problems that matter.
                  Whether I&apos;m debugging critical layout issues or designing
                  inclusive components with custom responsive styling, I thrive
                  in constraints and deliver maintainable, scalable solutions
                  that users can trust.
                </p>
              </CardContent>
            </Card>

            <Card className="creative-card border-0 bg-gradient-to-br from-background to-muted/20 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500/10">
                    <Coffee className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-base">The Human</h3>
                </div>
                <p className="text-base leading-relaxed">
                  Outside the editor, I&apos;m into inclusive design, clear
                  docs, and helping others grow. I explore how AI tools like V0
                  and Copilot can enhance—never replace—creative development.
                  I&apos;m currently prepping for AWS certs, building full-stack
                  apps, and documenting it all with purpose.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right column — image w/ hero-style glow + dots */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* soft aura like hero spotlight */}
              <div className="absolute -inset-10 -z-10">
                <div className="w-80 h-80 mx-auto rounded-full blur-2xl opacity-30 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-cyan-400" />
              </div>

              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <img
                  src="https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/profile-image.webp"
                  alt="Image of Isaiah"
                  className="w-72 h-72 object-cover rounded-2xl"
                />
              </div>

              {/* a couple of small hero-style accent dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-ping opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-bounce" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
