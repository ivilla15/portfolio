import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="floating-shape w-32 h-32 top-20 left-10 animate-float" style={{ animationDelay: "0s" }} />
      <div className="floating-shape w-24 h-24 top-40 right-20 animate-float" style={{ animationDelay: "2s" }} />
      <div className="floating-shape w-40 h-40 bottom-32 left-1/4 animate-float" style={{ animationDelay: "4s" }} />
      <div className="floating-shape w-28 h-28 bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-8 animate-fade-scale">
          {/* Creative name display */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
              <span className="block text-foreground">ISAIAH</span>
              <span className="block gradient-text">VILLALOBOS</span>
            </h1>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-glow opacity-60" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              <span className="section-number mr-2">// 01</span>
              FULL-STACK DEVELOPER & CLOUD ARCHITECT
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that matter. I build scalable web applications and cloud solutions that solve
              real problems and create lasting impact.
            </p>
          </div>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
          <Button
            size="lg"
            className="text-base px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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
            Let's Connect
          </Button>
        </div>

        {/* Featured in section */}
        <div className="pt-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm text-muted-foreground mb-6 tracking-wider">AS FEATURED IN</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">TechCorp</div>
            <div className="text-2xl font-bold text-muted-foreground">StartupXYZ</div>
            <div className="text-2xl font-bold text-muted-foreground">DevCommunity</div>
            <div className="text-2xl font-bold text-muted-foreground">CloudNative</div>
          </div>
        </div>
      </div>
    </section>
  )
}
