import { Badge } from "@/components/ui/badge"

export function TechStackSection() {
  const technologies = [
    { name: "React", category: "frontend", color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", category: "language", color: "from-blue-600 to-blue-800" },
    { name: "Next.js", category: "framework", color: "from-gray-700 to-gray-900" },
    { name: "Node.js", category: "backend", color: "from-green-500 to-green-700" },
    { name: "Python", category: "language", color: "from-yellow-500 to-blue-600" },
    { name: "AWS", category: "cloud", color: "from-orange-500 to-yellow-500" },
    { name: "Docker", category: "devops", color: "from-blue-400 to-blue-600" },
    { name: "PostgreSQL", category: "database", color: "from-blue-700 to-indigo-700" },
    { name: "MongoDB", category: "database", color: "from-green-600 to-green-800" },
    { name: "Tailwind CSS", category: "styling", color: "from-cyan-400 to-blue-500" },
    { name: "GraphQL", category: "api", color: "from-pink-500 to-purple-600" },
    { name: "REST APIs", category: "api", color: "from-purple-500 to-indigo-600" },
  ]

  return (
    <section className="py-32 px-4 relative bg-muted/50">
      {/* Subtle top border divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ring/20 to-transparent" />

      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-20">
          <span className="section-number">// STACK</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground">Tools I use to bring ideas to life</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <Badge
              key={tech.name}
              className={`text-sm px-6 py-3 bg-gradient-to-r ${tech.color} text-white border-0 hover:scale-110 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInScale 0.6s ease-out forwards",
              }}
            >
              {tech.name}
            </Badge>
          ))}
        </div>

        {/* Tech categories */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg mx-auto flex items-center justify-center">
              <span className="text-blue-500 font-bold">FE</span>
            </div>
            <p className="text-sm text-muted-foreground">Frontend</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg mx-auto flex items-center justify-center">
              <span className="text-green-500 font-bold">BE</span>
            </div>
            <p className="text-sm text-muted-foreground">Backend</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg mx-auto flex items-center justify-center">
              <span className="text-orange-500 font-bold">CL</span>
            </div>
            <p className="text-sm text-muted-foreground">Cloud</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg mx-auto flex items-center justify-center">
              <span className="text-purple-500 font-bold">DB</span>
            </div>
            <p className="text-sm text-muted-foreground">Database</p>
          </div>
        </div>
      </div>
    </section>
  )
}
