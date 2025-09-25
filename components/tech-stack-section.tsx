import { Section, Stagger } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export function TechStackSection() {
  const technologies = [
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
      name: "Node.js",
      category: "backend",
      color: "from-green-500 to-green-700",
    },
    {
      name: "styled-components",
      category: "styling",
      color: "from-pink-500 to-red-500",
    },
    {
      name: "Tailwind CSS",
      category: "styling",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "shadcn/ui",
      category: "component-library",
      color: "from-green-600 to-pink-600",
    },
    {
      name: "V0",
      category: "ai-tools",
      color: "from-fuchsia-500 to-indigo-500",
    },
    {
      name: "ESLint",
      category: "tooling",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      name: "Prettier",
      category: "tooling",
      color: "from-purple-400 to-pink-500",
    },
    { name: "Husky", category: "tooling", color: "from-rose-400 to-rose-600" },
    {
      name: "lint-staged",
      category: "tooling",
      color: "from-green-500 to-blue-600",
    },
    {
      name: "Git",
      category: "tooling",
      color: "from-orange-500 to-orange-700",
    },
    { name: "AWS", category: "cloud", color: "from-orange-500 to-yellow-500" },
    {
      name: "Python",
      category: "language",
      color: "from-yellow-500 to-blue-600",
    },
    {
      name: "REST APIs",
      category: "api",
      color: "from-purple-500 to-indigo-600",
    },
    { name: "Java", category: "language", color: "from-red-700 to-blue-700" },
    { name: "Spring", category: "backend", color: "from-cyan-700 to-teal-300" },
    {
      name: "Django",
      category: "backend",
      color: "from-indigo-500 to-pink-600",
    },
    {
      name: "SQL",
      category: "database",
      color: "from-fuchsia-500 to-fuchsia-700",
    },
    {
      name: "Supabase",
      category: "database",
      color: "from-lime-500 to-emerald-600",
    },
  ];

  return (
    <Section
      id="techstack"
      direction="up"
      className="min-h-[100svh] scroll-mt-32 overflow-hidden"
      contentClassName="px-4 py-24 md:py-28"
      once={false}
      background={
        <>
          {/* Center vignette */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[60vh]
               bg-[radial-gradient(60%_50%_at_50%_50%,rgba(88,28,135,0.18),transparent_70%)]
               dark:bg-[radial-gradient(60%_50%_at_50%_50%,rgba(88,28,135,0.33),transparent_70%)]"
          />

          {/* Left glow */}
          <div
            className="absolute left-[0%] top-[10%] w-[46vw] h-[46vw] rounded-full blur-2xl opacity-20
               bg-gradient-to-tr from-indigo-500/40 via-purple-500/28 to-fuchsia-500/24
               dark:opacity-25 dark:from-indigo-500/50 dark:via-purple-500/40 dark:to-fuchsia-500/35"
          />

          {/* Right glow */}
          <div
            className="absolute right-[-12%] top-[10%] w-[50vw] h-[50vw] rounded-full blur-2xl opacity-20
               bg-gradient-to-br from-cyan-400/28 via-sky-500/22 to-emerald-400/22
               dark:opacity-20 dark:from-cyan-400/35 dark:via-sky-500/28 dark:to-emerald-400/28"
          />

          {/* Soft wash */}
          <div
            className="absolute inset-0
               bg-[radial-gradient(720px_420px_at_50%_40%,rgba(147,51,234,0.14),transparent_65%),radial-gradient(640px_380px_at_18%_22%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(600px_380px_at_82%_18%,rgba(168,85,247,0.10),transparent_60%)]
               dark:bg-[radial-gradient(780px_460px_at_50%_40%,rgba(147,51,234,0.18),transparent_65%),radial-gradient(680px_420px_at_18%_22%,rgba(99,102,241,0.14),transparent_60%),radial-gradient(620px_420px_at_82%_18%,rgba(168,85,247,0.12),transparent_60%)]"
          />
        </>
      }
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
