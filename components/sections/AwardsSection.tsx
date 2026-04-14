import { Trophy } from "lucide-react";

import { awardItems } from "@/data";
import { Card, CardContent, Section, Typography } from "@/components/ui";

export function AwardsSection() {
  return (
    <Section
      id="awards"
      kicker="Awards"
      title="Recognition and academic achievements"
      description="A few milestones that reflect academic consistency, scholarship support, and continued growth as a computer science student."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {awardItems.map((award) => (
          <Card key={award.id} variant="quiet" className="h-full">
            <CardContent className="flex h-full flex-col p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shadow-soft">
                <Trophy className="h-4 w-4" />
              </div>

              <Typography variant="h3" className="text-lg sm:text-xl">
                {award.title}
              </Typography>

              {award.year ? (
                <Typography variant="muted" className="mt-2">
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
