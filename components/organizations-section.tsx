import { Section, Stagger } from "@/components/ui/section";
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
    <Section
      id="organizations"
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
            className="absolute left-[-10%] top-[25%] w-[46vw] h-[46vw] rounded-full blur-xl opacity-20
               bg-gradient-to-tr from-indigo-500/40 via-purple-500/28 to-fuchsia-500/24
               dark:opacity-25 dark:from-indigo-500/50 dark:via-purple-500/40 dark:to-fuchsia-500/35"
          />

          {/* Right glow */}
          <div
            className="absolute right-[-12%] top-[10%] w-[50vw] h-[50vw] rounded-full blur-xl opacity-20
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
      <div className="max-w-5xl mx-auto">
        <Stagger step={100}>
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mt-4 mb-6">
              Organizations &{" "}
              <span className="gradient-cta-text">Involvement</span>
            </h2>
            <p className="text-[1.05rem] text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Building connections, sharing knowledge
            </p>
          </div>

          {/* Timeline-style layout */}
          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-full" />

            <div className="space-y-12">
              {organizations.map((org, index) => (
                <Stagger key={org.name} step={0} start={index * 100}>
                  <div className="relative flex items-start space-x-8 group">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${org.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <Users className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Organization card */}
                    <div className="flex-1 bg-gradient-to-br from-background to-muted/20 rounded-2xl p-8 creative-card border-0">
                      <div className="space-y-4">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold">{org.name}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-base">
                              <div className="flex items-center">
                                <span className="font-medium mr-2">
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

                        <p className="text-[1.05rem] text-base leading-relaxed">
                          {org.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Stagger>
              ))}
            </div>
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
