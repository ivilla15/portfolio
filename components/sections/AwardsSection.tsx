import { Trophy } from "lucide-react";

import { awardItems } from "@/data";
import { Card, CardContent, Section, Typography } from "@/components/ui";

export function AwardsSection() {
  return (
    <Section
      id="awards"
      kicker="Awards"
      title="Recognition and academic achievements"
      description="A few milestones that reflect my academic consistency, scholarship support, and continued growth as a computer science student."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {awardItems.map((award) => (
          <Card key={award.id} className="h-full">
            <CardContent className="flex h-full flex-col p-6 sm:p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary shadow-soft">
                <Trophy className="h-5 w-5" />
              </div>

              <Typography variant="h3" className="text-xl">
                {award.title}
              </Typography>

              {award.year ? (
                <Typography
                  variant="label"
                  className="mt-3 normal-case tracking-[0.08em]"
                >
                  {award.year}
                </Typography>
              ) : null}

              {award.organization ? (
                <Typography variant="body" className="mt-3 text-sm">
                  {award.organization}
                </Typography>
              ) : null}

              {award.detail ? (
                <Typography variant="body" className="mt-3 text-sm">
                  {award.detail}
                </Typography>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
