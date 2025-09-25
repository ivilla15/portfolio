import { Section, Stagger } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Zap } from "lucide-react";

export function CurrentlyLearningSection() {
  return (
    <Section
      id="learning"
      direction="up"
      className="min-h-[100svh] scroll-mt-32 overflow-hidden"
      contentClassName="px-4 py-24 md:py-28"
      once={false}
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
            className="absolute left-[-10%] top-[20%] w-[46vw] h-[46vw] rounded-full blur-xl opacity-20
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
          <div
            className="absolute inset-0
               bg-[radial-gradient(720px_420px_at_50%_40%,rgba(147,51,234,0.14),transparent_65%),radial-gradient(640px_380px_at_18%_22%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(600px_380px_at_82%_18%,rgba(168,85,247,0.10),transparent_60%)]
               dark:bg-[radial-gradient(780px_460px_at_50%_40%,rgba(147,51,234,0.18),transparent_65%),radial-gradient(680px_420px_at_18%_22%,rgba(99,102,241,0.14),transparent_60%),radial-gradient(620px_420px_at_82%_18%,rgba(168,85,247,0.12),transparent_60%)]"
          />
        </>
      }
    >
      <div className="max-w-5xl mx-auto">
        <Stagger step={120}>
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Always <span className="gradient-cta-text">Learning</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="creative-card border-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-base">
                  Current Focus
                </h3>
                <p className="text-base leading-relaxed">
                  Building standout full–stack projects using Next.js,
                  TypeScript, and Tailwind while preparing for the AWS Solutions
                  Architect Associate certification. Focused on accessibility,
                  performance, and real-world deployment using Vercel.
                </p>
              </CardContent>
            </Card>

            <Card className="creative-card border-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-base">Exploring</h3>
                <p className="text-base leading-relaxed">
                  Exploring design–to–code AI tools like V0, advanced React
                  patterns, and scalable UI systems with shadcn/ui and
                  styled–components. Also refining cloud fundamentals and
                  staying sharp with version control best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="creative-card border-0 bg-gradient-to-br from-green-500/5 to-teal-500/5">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-base">Next Up</h3>
                <p className="text-base leading-relaxed">
                  Deepening backend skills with API design, authentication, and
                  AWS architecture. Contributing to open source and launching
                  the Interview Prep Tracker—my self–paced system for mastering
                  DSA and system design before job season.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Closing quote */}
          <div className="mt-16 text-center">
            <p className="text-lg text-base italic">
              "The day you stop learning is the day you stop growing. I&apos;m
              committed to staying curious."
            </p>
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
