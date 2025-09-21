import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  MapPin,
  Calendar,
  Briefcase,
  Code2,
  Rocket,
} from "lucide-react";

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
        "Led setup of ESLint, Prettier, Husky, and lint-staged across repos, improving code consistency and reducing review cycles by 30%.", // ✅ added from old version
        "Performed manual and automated accessibility audits using WAVE and Lighthouse, resolving 60+ issues across production environments.", // ✅ added
        "Collaborated in Agile sprints using Notion, Slack, and GitHub best practices (branching, PR reviews).",
        "Provided hands-on guidance to student designers, introducing them to HTML/CSS and layout best practices to deploy static pages.", // ✅ added
        "Contributed to discussions on secure REST API design and database CRUD features.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div
        className="floating-shape w-40 h-40 top-20 right-10 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="floating-shape w-32 h-32 bottom-32 left-20 animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-number">// 04</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
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
                <div
                  key={index}
                  className="relative flex items-start space-x-8 group"
                >
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
                            <div className="flex items-center space-x-3">
                              <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                                {exp.title}
                              </h3>
                              <Badge
                                className={`bg-gradient-to-r ${exp.color} text-white border-0`}
                              >
                                {exp.type}
                              </Badge>
                            </div>
                            <p className="text-xl text-muted-foreground font-medium">
                              {exp.company}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
                          {exp.responsibilities.map((responsibility, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-3 group/item"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" />
                              <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-200">
                                {responsibility}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
