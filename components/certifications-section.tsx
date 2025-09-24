import { Section, Stagger } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Book, Rocket, ShieldCheck } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
      issuer: "Amazon Web Services",
      year: "2025",
      status: "In Progress",
      icon: ShieldCheck,
      color: "from-orange-500 to-yellow-500",
      description:
        "Studying core AWS services, architecture patterns, IAM, EC2, S3, and Lambda with hands-on projects and exam prep resources.",
    },
    {
      title: "Self-Paced Full-Stack Developer Curriculum",
      issuer: "Personal Project",
      year: "2025",
      status: "Ongoing",
      icon: Rocket,
      color: "from-teal-500 to-cyan-600",
      description:
        "Building real-world projects using React, TypeScript, Next.js, Node.js, shadcn/ui, and deploying to Vercel. Includes accessibility, performance, and mobile-first design best practices.",
    },
    {
      title: "Interview Prep Tracker (DSA + System Design)",
      issuer: "Personal Project",
      year: "2025",
      status: "Launching",
      icon: Book,
      color: "from-indigo-500 to-fuchsia-600",
      description:
        "Structured study plan for technical interviews covering data structures, algorithms, mock interviews, and behavioral prep with GitHub tracking.",
    },
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      year: "2026",
      status: "Planned",
      icon: BadgeCheck,
      color: "from-yellow-500 to-orange-600",
      description:
        "Planned certification to deepen AWS developer tooling expertise after SAA-C03, with focus on Lambda, DynamoDB, and CI/CD workflows.",
    },
  ];

  return (
    <Section
      id="certifications"
      direction="up"
      className="min-h-[100svh] scroll-mt-32 overflow-hidden"
      contentClassName="px-4 py-24 md:py-28"
      background={
        <>
          {/* centered vignette with feathered edge */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[60vh] bg-[radial-gradient(60%_50%_at_50%_50%,rgba(147,51,234,.22)_0%,rgba(147,51,234,.06)_70%,transparent_100%)]" />
          {/* side glows */}
          <div className="absolute left-[-12%] top-[22%] w-[44vw] h-[44vw] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-purple-500/45 via-fuchsia-500/35 to-pink-500/30" />
          <div className="absolute right-[-10%] bottom-[18%] w-[46vw] h-[46vw] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-cyan-400/40 via-sky-500/32 to-emerald-400/28" />
        </>
      }
    >
      <div className="max-w-6xl mx-auto">
        <Stagger step={100}>
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mt-4 mb-6">
              Professional{" "}
              <span className="gradient-cta-text">Certifications</span>
            </h2>
            <p className="text-[1.05rem] text-slate-200/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Validated expertise in cloud technologies
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Stagger key={cert.title} step={0} start={index * 80}>
                  <Card className="w-full max-w-sm creative-card border-0 bg-gradient-to-br from-background to-muted/20 overflow-hidden group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        <Badge
                          className={`bg-gradient-to-r ${cert.color} text-white border-0 font-medium`}
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold leading-tight group-hover:gradient-text transition-all duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-[1.05rem] text-slate-200/90 font-medium leading-relaxed">
                          {cert.issuer}
                        </p>
                      </div>

                      <p className="text-[0.95rem] text-slate-200/85 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm text-slate-200/75">
                          {cert.year}
                        </span>
                        <span className="section-number">0{index + 1}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Stagger>
              );
            })}
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
