import { Card, CardContent } from "@/components/ui/card"
import { Code, Coffee, Lightbulb } from "lucide-react"

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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">The story behind the code</p>
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
                  I'm not just another developer who codes for a living. I'm someone who genuinely believes technology
                  can change lives. With 3+ years of turning coffee into code, I specialize in React, TypeScript, and
                  AWS—but more importantly, I specialize in solving problems that matter.
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
                  My journey started in Computer Science, but it really began when I realized that every line of code I
                  write has the potential to make someone's day a little easier. Whether it's optimizing a slow API or
                  building an intuitive user interface, I'm driven by impact.
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
                  When I'm not debugging or architecting cloud solutions, you'll find me contributing to open-source
                  projects, mentoring junior developers, or writing about the latest in serverless architecture. I
                  believe the best code comes from understanding people, not just syntax.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Profile image with creative styling */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Isaiah Villalobos"
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
  )
}
