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
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      year: "2026",
      status: "Planned",
      icon: Rocket,
      color: "from-teal-500 to-cyan-600",
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
      once={false}
    >
      <div className="max-w-6xl mx-auto">
        <Stagger step={100}>
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mt-4 mb-6">
              Professional{" "}
              <span className="gradient-cta-text">Certifications</span>
            </h2>
            <p className="text-[1.05rem] text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Validated expertise in cloud technologies
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Stagger key={cert.title} step={0} start={index * 80}>
                  <Card className="w-full min-h-[370px] max-w-sm creative-card border-0 bg-gradient-to-br from-background to-muted/20 overflow-hidden group">
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
                        <p className="text-[1.05rem] text-base font-medium leading-relaxed">
                          {cert.issuer}
                        </p>
                      </div>

                      <p className="text-[1rem] text-base leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm text-base">{cert.year}</span>
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
