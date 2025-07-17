import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Target, Zap } from "lucide-react"

export function CurrentlyLearningSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-number">// GROWTH</span>
          <h2 className="text-4xl font-bold mt-4 mb-6">
            Always <span className="gradient-text">Learning</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="creative-card border-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Current Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                AWS Developer Associate certification and diving deep into serverless architecture patterns.
              </p>
            </CardContent>
          </Card>

          <Card className="creative-card border-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exploring</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced React patterns, microservices with Docker & Kubernetes, and ML fundamentals with Python.
              </p>
            </CardContent>
          </Card>

          <Card className="creative-card border-0 bg-gradient-to-br from-green-500/5 to-teal-500/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Next Up</h3>
              <p className="text-muted-foreground leading-relaxed">
                Infrastructure as code with Terraform and system design principles for large-scale applications.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground italic">
            "The day you stop learning is the day you stop growing. I'm committed to staying curious."
          </p>
        </div>
      </div>
    </section>
  )
}
