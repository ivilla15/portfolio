import { Card, CardContent } from "@/components/ui/card"

export function AwardsSection() {
  const awards = [
    {
      title: "Dean's List",
      organization: "University of Technology",
      year: "2021",
      description: "Academic excellence with GPA above 3.8",
      emoji: "🎓",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Hackathon Finalist",
      organization: "TechCrunch Disrupt",
      year: "2022",
      description: "Top 10 finalist for innovative healthcare app",
      emoji: "🏆",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Employee of the Month",
      organization: "TechCorp Solutions",
      year: "2023",
      description: "Outstanding performance and team leadership",
      emoji: "⭐",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      year: "2023",
      description: "Active contributor to popular repositories",
      emoji: "💻",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Speaker",
      organization: "DevConf 2023",
      year: "2023",
      description: "Presented on serverless architecture patterns",
      emoji: "🎤",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Mentor",
      organization: "Code for Good",
      year: "2024",
      description: "Mentoring junior developers in web development",
      emoji: "🤝",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-number">// RECOGNITION</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">Milestones that shaped my journey</p>
        </div>

        {/* Badge-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="creative-card border-0 bg-gradient-to-br from-background to-muted/10 overflow-hidden group hover:shadow-2xl transition-all duration-500"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInScale 0.6s ease-out forwards",
              }}
            >
              <CardContent className="p-6 relative">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative space-y-4">
                  {/* Emoji and year */}
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{award.emoji}</div>
                    <div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${award.color} text-white text-sm font-medium`}
                    >
                      {award.year}
                    </div>
                  </div>

                  {/* Title and organization */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                      {award.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">{award.organization}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className={`w-8 h-8 bg-gradient-to-br ${award.color} rounded-full`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fun stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">6+</div>
            <p className="text-sm text-muted-foreground">Awards Received</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">50+</div>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">10+</div>
            <p className="text-sm text-muted-foreground">Developers Mentored</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">3</div>
            <p className="text-sm text-muted-foreground">Conference Talks</p>
          </div>
        </div>
      </div>
    </section>
  )
}
