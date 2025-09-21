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
      icon: ShieldCheck, // Or use BadgeCheck
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
      icon: BadgeCheck, // Or ShieldCheck
      color: "from-yellow-500 to-orange-600",
      description:
        "Planned certification to deepen AWS developer tooling expertise after SAA-C03, with focus on Lambda, DynamoDB, and CI/CD workflows.",
    },
  ];

  return (
    <section className="py-32 px-4 relative bg-muted/30">
      {/* Subtle top border divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ring/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-number">// CREDENTIALS</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Validated expertise in cloud technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card
                key={index}
                className="w-full max-w-sm creative-card border-0 bg-gradient-to-br from-background to-muted/20 overflow-hidden group"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: "slideInUp 0.8s ease-out forwards",
                }}
              >
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
                    <p className="text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-muted-foreground">
                      {cert.year}
                    </span>
                    <span className="section-number">0{index + 1}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
