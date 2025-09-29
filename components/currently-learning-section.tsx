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
                  Right now I&apos;m sharpening my skills across the stack. On
                  the frontend I&apos;m building with Next.js, TypeScript, and
                  Tailwind. On the backend I&apos;m working with APIs,
                  authentication, and databases. For my senior design project
                  I'm exploring AI integration. I&apos;m also preparing for the
                  AWS Certified Solutions Architect Associate exam. My focus is
                  accessibility, performance, and deploying real projects people
                  can actually use.
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
                  I&apos;m exploring ways to bring all of my skills together in
                  full stack projects that combine frontend, backend, databases,
                  and cloud. My goal is to keep pushing myself with challenging
                  builds that highlight scalability, accessibility, and real
                  world problem solving, while continuing to sharpen my workflow
                  with tools like Git and modern React patterns.
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
                  Beyond the code, I&apos;m focused on growing into a developer
                  who can create tools that really help people. The next step
                  for me is taking on projects and opportunities that challenge
                  me not only to code better, but to design with impact and
                  accessibility in mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
