import { BriefcaseBusiness, MapPin } from "lucide-react";

import {
  experienceItems,
  formatExperienceDateRange,
  sortExperience,
} from "@/data";
import { Card, CardContent, Section, Tag, Typography } from "@/components/ui";

const sortedExperience = sortExperience(experienceItems);

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      kicker="Experience"
      title="Professional experience"
      description="A timeline of roles where I have applied my skills, grown as a developer, and contributed to real projects."
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-[0.9375rem] top-0 h-full w-px bg-primary/15 md:left-[8.75rem]"
        />

        <div className="space-y-8">
          {sortedExperience.map((item) => {
            const dateRange = formatExperienceDateRange(item);

            return (
              <article
                key={item.id}
                className="relative grid gap-4 md:grid-cols-[8rem_1.5rem_minmax(0,1fr)] md:gap-6"
              >
                <div className="md:pt-1">
                  <Typography
                    variant="label"
                    className="text-left normal-case tracking-[0.08em] text-muted-custom"
                    as="p"
                  >
                    {dateRange}
                  </Typography>
                </div>

                <div className="relative flex md:justify-center">
                  <div className="absolute left-[0.5625rem] top-0 h-full w-px bg-transparent md:left-1/2 md:-translate-x-1/2" />
                  <div className="relative z-10 mt-1 h-3.5 w-3.5 rounded-full bg-primary shadow-medium ring-4 ring-primary/10" />
                </div>

                <Card className="h-full">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="min-w-0">
                          <Typography
                            variant="h3"
                            className="text-xl sm:text-2xl"
                          >
                            {item.title}
                          </Typography>

                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                            <div className="inline-flex items-center gap-2 text-sm text-secondary">
                              <BriefcaseBusiness className="h-4 w-4 text-primary" />
                              <span className="font-medium text-primary">
                                {item.organization}
                              </span>
                            </div>

                            <div className="inline-flex items-center gap-2 text-sm text-secondary">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{item.location}</span>
                            </div>

                            {item.employmentType ? (
                              <Tag className="text-m">
                                {item.employmentType}
                              </Tag>
                            ) : null}

                            {item.isCurrent ? (
                              <Tag className="bg-primary/10 text-primary">
                                Current
                              </Tag>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      {item.summary ? (
                        <Typography
                          variant="body"
                          className="text-sm sm:text-base"
                        >
                          {item.summary}
                        </Typography>
                      ) : null}

                      <ul className="space-y-3">
                        {item.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm leading-7 text-secondary sm:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {item.technologies?.length ? (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.technologies.map((tech) => (
                            <Tag key={tech}>{tech}</Tag>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
