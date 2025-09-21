import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 relative bg-muted/30">
      {/* Subtle top border divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ring/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-number">// 02</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The story behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal story */}
          <div className="space-y-8">
            <Card className="creative-card border-0 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Code className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold">The Developer</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m a Computer Science major at Cal State LA and a Junior
                  Web Developer Associate for the University&ndash;Student
                  Union. I build accessible, responsive websites using React,
                  TypeScript, and styled&ndash;components&mdash;focused on
                  performance, usability, and scalability. My stack includes
                  Next.js, Tailwind CSS, and shadcn/ui, and I specialize in
                  building reusable components, improving accessibility scores,
                  and solving real frontend challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="creative-card border-0 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold">The Problem Solver</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I don&apos;t just ship features&mdash;I solve problems that
                  matter. Whether I&apos;m debugging critical layout issues or
                  designing inclusive components with custom responsive styling,
                  I thrive in environments where clarity and impact come from
                  navigating constraints. I enjoy collaborating with others to
                  deliver maintainable, scalable solutions that users can trust.
                </p>
              </CardContent>
            </Card>

            <Card className="creative-card border-0 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Coffee className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold">The Human</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Outside the editor, I&apos;m passionate about inclusive
                  design, clean documentation, and helping others grow. I
                  contribute to student-led tech initiatives and constantly
                  explore how AI tools like V0 and GitHub Copilot can
                  enhance&mdash;never replace&mdash;creative development.
                  I&apos;m currently preparing for the AWS Solutions Architect
                  certification, building full&ndash;stack apps, and documenting
                  it all in a portfolio that reflects both skill and purpose.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Profile image with creative styling */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <img
                  src="https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/profile-image.webp"
                  alt="Image of Isaiah"
                  className="w-72 h-72 object-cover rounded-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-500 rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
