import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Star } from "lucide-react";

export function FeaturedProjectsSection() {
  const projects = [
    {
      title: "Book Management System",
      description:
        "Full-stack platform simulating a real-world book marketplace. Features role-based access control (RBAC), search, favorites, comments, and cart across 12+ authenticated views.",
      image: "/images/book-preview.webp",
      technologies: ["Django", "Bootstrap", "PostgreSQL", "RBAC", "Python"],
      codeUrl: "https://github.com/ivilla15/book-management-system-django",
      liveUrl: "https://book.ivilla.dev",
      featured: true,
    },
    {
      title: "Swimming Academy Registration System",
      description:
        "Spring Boot web app for managing class registration and student scheduling at a swim academy. Implements secure data handling with Spring Data and a responsive UI using JTE templates.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Spring Boot", "Spring MVC", "JTE", "Bootstrap", "MySQL"],
      codeUrl:
        "https://github.com/ivilla15/Swimming-Academy-Registration-System", // <-- replace with actual GitHub link
      liveUrl: "#", // or deployed URL if available
      featured: false,
    },
    // existing projects...
  ];

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
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
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

                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-2 hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
