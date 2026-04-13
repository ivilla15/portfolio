import { Users, GraduationCap, Network } from "lucide-react";

import { involvementItems } from "@/data";
import { Card, CardContent, Section, Typography } from "@/components/ui";

const icons = [Users, GraduationCap, Network];

export function InvolvementSection() {
  return (
    <Section
      id="involvement"
      kicker="Leadership & Involvement"
      title="Beyond the code"
      description="A few experiences that reflect collaboration, academic involvement, and continued growth outside of project work alone."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {involvementItems.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <Card key={item.id} className="h-full">
              <CardContent className="flex h-full flex-col p-6 sm:p-7">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>

                <Typography variant="h3" className="text-xl">
                  {item.title}
                </Typography>

                <Typography
                  variant="label"
                  className="mt-3 normal-case tracking-[0.08em]"
                >
                  {item.timeframe}
                </Typography>

                <Typography variant="body" className="mt-3 text-sm font-medium">
                  {item.organization}
                </Typography>

                <Typography variant="body" className="mt-3 text-sm">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
