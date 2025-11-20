import { Section, Stagger } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Star } from "lucide-react";

export function FeaturedProjectsSection() {
  const projects = [
    {
      title: "Amber AI Support System",
      team: "Data Engineering & RAG Development",
      description:
        "Industry partnered senior design project with the Amber Molecular Dynamics team. As part of the Data Engineering and Retrieval Augmented Generation (RAG) team, I designed and implemented an end to end pipeline to parse, clean, and structure 20+ years of Amber user support emails into an AI ready knowledge base. This data powers a domain specific chatbot that retrieves expert insights and provides intelligent troubleshooting assistance for Amber users. My work included building and refining the RAG workflow, creating modular Python components for data retrieval and prompt construction, integrating a Chroma vector database and deploying the pipeline to the Amber server for live testing. This project was a direct collaboration with Amber developers via Microsoft Teams to align with their requirements.",
      image:
        "https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/Amber.webp",
      technologies: [
        "Python",
        "BeautifulSoup",
        "Regex",
        "LangChain",
        "ChromaDB",
        "OpenAI API",
        "Pandas",
      ],
      liveUrl: "https://ambermd.org",
      featured: true,
    },
    {
      title: "Book Management System",
      description:
        "Full-stack platform simulating a real-world book marketplace. Features role-based access control (RBAC), search, favorites, comments, and cart across 12+ authenticated views.",
      image:
        "https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/book.webp",
      technologies: ["Django", "RBAC", "Bootstrap"],
      codeUrl: "https://github.com/ivilla15/book-management-system-django",
      featured: false,
    },
    {
      title: "Swimming Academy Registration System",
      description:
        "Spring Boot web app for managing class registration and student scheduling at a swim academy. Implements secure data handling with Spring Data and a responsive UI using JTE templates.",
      image:
        "https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/class-management.webp",
      technologies: ["Spring Boot", "Spring MVC", "JTE", "Bootstrap", "MySQL"],
      codeUrl:
        "https://github.com/ivilla15/Swimming-Academy-Registration-System",
      featured: false,
    },
    {
      title: "Optimizing Urban Traffic Signal Timings",
      description:
        "Compared DIRECT, gradient descent, and differential evolution optimization algorithms to reduce traffic delays by 20%. Produced diagnostic time–space and probabilistic diagrams to evaluate scalability.",
      image:
        "https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/traffic-light.webp",
      technologies: ["Python", "Optimization", "Data Visualization"],
      codeUrl:
        "https://github.com/ivilla15/Optimizing-Urban-Traffic-Signal-Timings-Using-the-DIRECT-Global-Search-Algorithm",
      featured: false,
    },
    {
      title: "Peer-to-Peer Chat Application",
      description:
        "Developed a TCP-based client and server system enabling reliable multi-user messaging. Implemented socket programming with multi-threading, robust error handling, and session controls.",
      image:
        "https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/socket-programming.webp",
      technologies: [
        "Python",
        "TCP/IP",
        "Multi-threading",
        "Socket Programming",
      ],
      featured: false,
    },
  ];

  // Arrange so the featured project renders first, followed by the rest.
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const ordered = [
    ...(featuredProject ? [featuredProject] : []),
    ...otherProjects,
  ];

  function ProjectCard({
    project,
    index,
    isFeatured,
  }: {
    project: (typeof projects)[number];
    index: number;
    isFeatured: boolean;
  }) {
    return (
      <Card
        key={project.title}
        className="creative-card border-0 bg-gradient-to-br from-background to-muted/20 overflow-hidden group"
      >
        {/* Image */}
        <div className="relative aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
          {isFeatured && (
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
            className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
              isFeatured && project.title === "Amber AI Support System"
                ? "bg-white"
                : ""
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>
            <span className="section-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="text-[1.05rem] text-base leading-relaxed">
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

          <div
            className={`grid ${project.liveUrl ? "grid-cols-2" : "grid-cols-1"} gap-4`}
          >
            {project.codeUrl && (
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
            )}
            {project.liveUrl && (
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
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Section
      id="projects"
      direction="up"
      className="min-h-[100svh] scroll-mt-32 overflow-hidden"
      contentClassName="px-4 py-24 md:py-28"
      once={false}
    >
      <div className="max-w-7xl mx-auto">
        <Stagger step={100}>
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mt-4 mb-6">
              Featured <span className="gradient-cta-text">Projects</span>
            </h2>
            <p className="text-[1.05rem] text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Code that solves real problems for real people
            </p>
          </div>

          {/*
            Layout rules:
            - Single grid for all cards so the featured item (col-span-2) sits beside the first small card on lg.
            - Remaining cards flow naturally into a responsive 3-col grid below.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ordered.map((project, i) => {
              const isFeatured = project.featured === true;
              return (
                <div
                  key={project.title}
                  className={
                    isFeatured
                      ? "md:col-span-2 lg:col-span-2"
                      : "md:col-span-1 lg:col-span-1"
                  }
                >
                  <ProjectCard
                    project={project}
                    index={i}
                    isFeatured={isFeatured}
                  />
                </div>
              );
            })}
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
