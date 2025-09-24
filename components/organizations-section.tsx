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
      background={
        <>
          {/* centered vignette (feathered) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[58vh] bg-[radial-gradient(60%_50%_at_50%_50%,rgba(99,102,241,.22)_0%,rgba(99,102,241,.06)_70%,transparent_100%)]" />
          {/* side glows (lightweight) */}
          <div className="absolute left-[-12%] top-[24%] w-[42vw] h-[42vw] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-purple-500/45 via-fuchsia-500/35 to-pink-500/28" />
          <div className="absolute right-[-10%] bottom-[18%] w-[44vw] h-[44vw] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-cyan-400/38 via-sky-500/30 to-emerald-400/26" />
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
            <p className="text-[1.05rem] text-slate-200/90 font-medium max-w-2xl mx-auto leading-relaxed">
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
                            <div className="flex flex-wrap gap-4 text-sm text-slate-200/80">
                              <div className="flex items-center">
                                <span className="font-medium text-slate-200/95 mr-2">
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

                        <p className="text-[1.05rem] text-slate-200/90 leading-relaxed">
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
