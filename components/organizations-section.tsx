import { Users, Calendar, MapPin } from "lucide-react";

export function OrganizationsSection() {
  const organizations = [
    {
      name: "TIPSE – Technical Interview Preparation for Software Engineers",
      role: "Active Member",
      period: "2025 – Present",
      location: "Los Angeles, CA",
      description:
        "Student-led organization focused on preparing future software engineers through collaborative interview prep, technical workshops, peer mentorship, and community-driven learning. A supportive space to build confidence in algorithms, systems, and career readiness.",
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "ACM – Association for Computing Machinery",
      role: "Active Member",
      period: "2022 – Present",
      location: "Los Angeles, CA",
      description:
        "Provides computer science knowledge and professional development resources to students at Cal State LA. Hosts workshops on emerging technologies, project-based learning, and career preparation. Also offers mentorship opportunities and fosters a tight-knit student community through events and outreach.",
      color: "from-green-500 to-teal-600",
    },
  ];

  return (
    <section className="py-32 px-4 relative bg-muted/30">
      {/* Subtle top border divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ring/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-number">// COMMUNITY</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Organizations & <span className="gradient-text">Involvement</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building connections, sharing knowledge
          </p>
        </div>

        {/* Timeline-style layout */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-full" />

          <div className="space-y-12">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-8 group"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${org.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Organization card */}
                <div className="flex-1 bg-gradient-to-br from-background to-muted/20 rounded-2xl p-8 creative-card border-0 group-hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                          {org.name}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <span className="font-medium text-foreground mr-2">
                              {org.role}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {org.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-3 w-3" />
                            {org.location}
                          </div>
                        </div>
                      </div>
                      <span className="section-number text-2xl">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
