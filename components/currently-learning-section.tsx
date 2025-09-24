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
      background={
        <>
          {/* centered vignette behind section */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[60vh] bg-[radial-gradient(60%_50%_at_50%_50%,rgba(37,99,235,.25),transparent_70%)]" />
          {/* side glows for depth */}
          <div className="absolute left-[-12%] top-[20%] w-[42vw] h-[42vw] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-indigo-500/50 via-purple-500/40 to-fuchsia-500/35" />
          <div className="absolute right-[-10%] bottom-[15%] w-[46vw] h-[46vw] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-cyan-400/40 via-sky-500/35 to-emerald-400/30" />
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
                <h3 className="text-xl font-bold mb-4 text-slate-100">
                  Current Focus
                </h3>
                <p className="text-slate-300/90 leading-relaxed">
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
                <h3 className="text-xl font-bold mb-4 text-slate-100">
                  Exploring
                </h3>
                <p className="text-slate-300/90 leading-relaxed">
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
                <h3 className="text-xl font-bold mb-4 text-slate-100">
                  Next Up
                </h3>
                <p className="text-slate-300/90 leading-relaxed">
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
            <p className="text-lg text-slate-300/80 italic">
              "The day you stop learning is the day you stop growing. I&apos;m
              committed to staying curious."
            </p>
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
