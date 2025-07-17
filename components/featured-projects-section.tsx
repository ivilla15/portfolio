import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, ExternalLink, Star } from "lucide-react"

export function FeaturedProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution that doesn't just sell products—it creates experiences. Built with modern architecture and scalable design.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      codeUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Task Management API",
      description:
        "RESTful API that transforms chaos into clarity. Real-time collaboration features that actually work the way teams think.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "Jest"],
      codeUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "Weather app that goes beyond 'sunny' or 'rainy'. Interactive forecasts with the kind of detail that helps you plan your life.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "PWA"],
      codeUrl: "#",
      liveUrl: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-number">// 03</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Code that solves real problems for real people
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`creative-card border-0 bg-gradient-to-br from-background to-muted/20 overflow-hidden group ${
                project.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="relative aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-0">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <span className="section-number">0{index + 1}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-muted-foreground/20 hover:border-blue-500/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-2 hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
