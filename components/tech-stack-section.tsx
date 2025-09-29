import { Section, Stagger } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export function TechStackSection() {
  const technologies = [
    // Frontend
    { name: "React", category: "frontend", color: "from-blue-500 to-cyan-500" },
    {
      name: "Next.js",
      category: "framework",
      color: "from-purple-700 to-purple-900",
    },
    {
      name: "TypeScript",
      category: "language",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "JavaScript",
      category: "language",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Tailwind CSS",
      category: "styling",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "styled-components",
      category: "styling",
      color: "from-pink-500 to-red-500",
    },
    {
      name: "shadcn/ui",
      category: "component-library",
      color: "from-green-600 to-pink-600",
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      color: "from-green-500 to-green-700",
    },
    {
      name: "REST APIs",
      category: "backend",
      color: "from-purple-500 to-indigo-600",
    },
    { name: "Spring", category: "backend", color: "from-cyan-700 to-teal-300" },
    {
      name: "Django",
      category: "backend",
      color: "from-indigo-500 to-pink-600",
    },

    // Databases
    {
      name: "SQL",
      category: "database",
      color: "from-fuchsia-500 to-fuchsia-700",
    },
    {
      name: "PostgreSQL",
      category: "database",
      color: "from-sky-600 to-blue-700",
    },
    {
      name: "Supabase",
      category: "database",
      color: "from-lime-500 to-emerald-600",
    },

    // Cloud & Deployment
    { name: "AWS", category: "cloud", color: "from-orange-500 to-yellow-500" },
    { name: "Vercel", category: "cloud", color: "from-purple-400 to-pink-500" },

    // Tooling
    {
      name: "Git",
      category: "tooling",
      color: "from-orange-500 to-orange-700",
    },

    // Languages
    {
      name: "Python",
      category: "language",
      color: "from-yellow-500 to-blue-600",
    },
    { name: "Java", category: "language", color: "from-red-700 to-blue-700" },
  ];

  return (
    <Section
      id="techstack"
      direction="up"
      className="min-h-[100svh] scroll-mt-32 overflow-hidden"
      contentClassName="px-4 py-24 md:py-28"
      once={false}
    >
      <div className="max-w-5xl mx-auto text-center">
        <Stagger step={100}>
          <div className="mb-20">
            {/* keep large bold header */}
            <h2 className="text-5xl font-bold mt-4 mb-6">
              Tech <span className="gradient-cta-text">Arsenal</span>
            </h2>
            <p className="text-[1.05rem] text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Tools I use to bring ideas to life
            </p>
          </div>

          {/* Gradient badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge
                key={tech.name}
                className={`text-sm px-6 py-3 bg-gradient-to-r ${tech.color} text-white border-0 hover:scale-110 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: "fadeInScale 0.5s ease-out forwards",
                }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-blue-500 font-bold">FE</span>
              </div>
              <p className="text-sm text-base">Frontend</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-green-500 font-bold">BE</span>
              </div>
              <p className="text-sm text-base">Backend</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-orange-500 font-bold">CL</span>
              </div>
              <p className="text-sm text-base">Cloud</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-purple-500 font-bold">DB</span>
              </div>
              <p className="text-sm text-base">Database</p>
            </div>
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
