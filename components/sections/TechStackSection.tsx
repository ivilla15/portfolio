import { techStackGroups } from "@/data";
import { Card, CardContent, Section, Tag, Typography } from "@/components/ui";

export function TechStackSection() {
  return (
    <Section
      id="tech"
      kicker="Tech Stack"
      title="Tools and technologies"
      description="A grouped view of the languages, frameworks, platforms, and systems I use across full-stack, cloud, and AI-focused work."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {techStackGroups.map((group) => (
          <Card key={group.id} variant="quiet" className="h-full">
            <CardContent className="flex h-full flex-col p-6 sm:p-7">
              <Typography variant="h3" className="text-xl">
                {group.title}
              </Typography>

              <Typography variant="body" className="mt-3 text-sm sm:text-base">
                {group.description}
              </Typography>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag variant={"accent"} key={item}>
                    {item}
                  </Tag>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
