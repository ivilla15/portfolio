import { Section, Stagger } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Calendar, Briefcase, Code2 } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Junior Web Developer Associate (Full-Stack)",
      company: "California State University Los Angeles Student Union",
      location: "Los Angeles, CA",
      period: "May 2025 - Present",
      type: "Intern",
      icon: Code2,
      color: "from-blue-500 to-purple-600",
      responsibilities: [
        "Built and launched Student Union web pages—including U-Krew, Fraternity & Sorority Life, and Wingspan—using React, Next.js, TypeScript, styled-components, and Supabase.",
        "Enhanced a platform serving approximately 100,000 users annually with SEO, image optimization, Google Analytics, and Vercel Analytics.",
        "Delivered the Wingspan LA page in under 2 weeks, reaching hundreds of users.",
        "Optimized performance and accessibility with 99% Lighthouse, 100% Vercel Speed Insights, and 0 WAVE errors via server-side rendering.",
        "Created reusable React components, reducing CSS duplication by 30% and improving maintainability.",
        "Led setup of ESLint, Prettier, Husky, and lint-staged across repos, improving code consistency and reducing review cycles by 30%.",
        "Performed manual and automated accessibility audits using WAVE and Lighthouse, resolving 60+ issues across production environments.",
        "Collaborated in Agile sprints using Notion, Slack, and GitHub best practices (branching, PR reviews).",
        "Provided hands-on guidance to student designers, introducing them to HTML/CSS and layout best practices to deploy static pages.",
        "Contributed to discussions on secure REST API design and database CRUD features.",
      ],
    },
  ];

  return (
    <Section
      id="experience"
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
              Professional <span className="gradient-cta-text">Journey</span>
            </h2>
            <p className="text-[1.05rem] text-base font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Where code meets impact
            </p>

            <a
              href="https://docs.google.com/document/d/14V33xczTaa3y4XikyRw5mQzBGU6ivXI5MWp6coXcffc/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30" />

            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <Stagger key={exp.title} step={0} start={index * 120}>
                    <div className="relative flex items-start space-x-8 group">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        {/* Connecting line to card */}
                        <div className="absolute top-8 left-16 w-8 h-0.5 bg-gradient-to-r from-muted-foreground/30 to-transparent" />
                      </div>

                      {/* Experience card */}
                      <Card className="creative-card flex-1 border-0 bg-gradient-to-br from-background to-muted/10 group-hover:shadow-2xl transition-all duration-500">
                        <CardContent className="p-8">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex items-center flex-wrap gap-3">
                                  <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                                    {exp.title}
                                  </h3>
                                  <Badge
                                    className={`bg-gradient-to-r ${exp.color} text-white border-0`}
                                  >
                                    {exp.type}
                                  </Badge>
                                </div>
                                <p className="text-[1.05rem] text-base font-medium leading-relaxed">
                                  {exp.company}
                                </p>
                              </div>

                              <div className="flex flex-wrap gap-4 text-sm text-base">
                                <div className="flex items-center">
                                  <MapPin className="mr-2 h-4 w-4" />
                                  {exp.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="mr-2 h-4 w-4" />
                                  {exp.period}
                                </div>
                              </div>
                            </div>

                            <div className="text-right">
                              <span className="section-number text-2xl">
                                0{index + 1}
                              </span>
                            </div>
                          </div>

                          <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-4 flex items-center">
                              <Briefcase className="mr-2 h-5 w-5" />
                              Key Achievements
                            </h4>

                            <div className="grid gap-3">
                              {exp.responsibilities.map(
                                (responsibility, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start space-x-3 group/item"
                                  >
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" />
                                    <span className="text-[1.05rem] text-base leading-relaxed group-hover/item:text-foreground group-hover/item:font-semibold transition-all duration-200">
                                      {responsibility}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </Stagger>
                );
              })}
            </div>
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
