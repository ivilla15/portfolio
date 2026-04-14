import { Accessibility, MapPin, MonitorSmartphone } from "lucide-react";

import { Card, CardContent, Section, Typography } from "@/components/ui";

const highlights = [
  {
    icon: MapPin,
    title: "Based in Los Angeles",
    description:
      "Working as a full-stack web developer on production systems while completing my computer science degree.",
  },
  {
    icon: MonitorSmartphone,
    title: "Full-stack web focus",
    description:
      "I build APIs, authentication systems, and responsive web applications using modern full-stack tools.",
  },
  {
    icon: Accessibility,
    title: "Accessibility matters",
    description:
      "I focus on usability, clear interfaces, and building experiences that are easy to navigate and inclusive by design.",
  },
];

export function AboutSection() {
  return (
    <Section
      id="about"
      kicker="About"
      title="A little about me"
      description="A quick overview of how I approach building software and the work I focus on."
    >
      <div className="max-w-3xl">
        <Typography variant="body-lg">
          I am a full-stack software engineer currently working as a Junior Web
          Developer Associate at the Cal State LA University-Student Union. My
          work involves building and maintaining production web systems,
          including APIs, authentication flows, and user-facing applications
          used by students across campus.
        </Typography>

        <Typography variant="body-lg" className="mt-5">
          I enjoy working across the full stack, from designing backend systems
          and data models to building clean, responsive interfaces. I focus on
          writing maintainable code, improving performance, and creating
          experiences that feel polished and reliable.
        </Typography>

        <Typography variant="body" className="mt-5 text-muted-custom">
          Currently completing my Computer Science degree at Cal State LA,
          graduating Spring 2026.
        </Typography>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, description }) => (
          <Card key={title} variant="quiet" className="h-full">
            <CardContent className="flex h-full flex-col p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary shadow-soft">
                <Icon className="h-5 w-5" />
              </div>

              <Typography variant="h3" className="text-xl">
                {title}
              </Typography>

              <Typography variant="body" className="mt-3 text-sm">
                {description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
