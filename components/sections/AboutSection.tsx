import { Accessibility, MapPin, MonitorSmartphone } from "lucide-react";

import { Card, CardContent, Section, Typography } from "@/components/ui";

const highlights = [
  {
    icon: MapPin,
    title: "Based in Los Angeles",
    description:
      "Computer Science student at Cal State LA focused on building practical software for real users.",
  },
  {
    icon: MonitorSmartphone,
    title: "Full-stack web focus",
    description:
      "I work primarily with React, Next.js, TypeScript, and modern tools for building responsive web applications.",
  },
  {
    icon: Accessibility,
    title: "Accessibility matters",
    description:
      "I care about usability, clear interfaces, and building experiences that are easy to navigate and inclusive by design.",
  },
];

export function AboutSection() {
  return (
    <Section
      id="about"
      kicker="About"
      title="A little about me"
      description="I am a computer science student who enjoys building software that feels thoughtful, useful, and well-crafted."
    >
      <div className="max-w-3xl">
        <Typography variant="body-lg">
          I am currently studying Computer Science at Cal State LA while working
          as a Junior Web Developer Associate at the University-Student Union.
          My work has helped me strengthen my frontend foundations while also
          giving me real experience maintaining and improving production-facing
          web pages.
        </Typography>

        <Typography variant="body" className="mt-5">
          I am especially interested in full-stack development, accessibility,
          and modern product-focused engineering. I like building interfaces
          that are clean and responsive, but I also care about the structure
          behind them, including maintainable code, performance, and the overall
          user experience.
        </Typography>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="h-full">
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
