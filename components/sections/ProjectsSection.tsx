import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { featuredProjects, secondaryProjects } from "@/data";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Section,
  Tag,
  Typography,
} from "@/components/ui";

export function ProjectsSection() {
  const primaryProject = featuredProjects[0];

  return (
    <Section
      id="projects"
      kicker="Projects"
      title="Selected work"
      description="Projects that reflect how I approach building software across full-stack systems, backend architecture, and applied engineering."
    >
      <div className="space-y-6">
        {primaryProject ? (
          <Card className="overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-4 bg-surface-3 p-4 sm:p-6">
                {primaryProject.images?.map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-[16px] bg-surface-2 shadow-soft"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-contain"
                      priority
                    />
                  </div>
                ))}
              </div>

              <div className="flex h-full flex-col">
                <CardHeader className="pb-3">
                  <Typography
                    variant="label"
                    className="normal-case tracking-[0.08em]"
                  >
                    Featured Project
                  </Typography>

                  <CardTitle className="text-[clamp(1.6rem,2.5vw,2.2rem)]">
                    {primaryProject.title}
                  </CardTitle>

                  <CardDescription className="text-base sm:text-lg">
                    {primaryProject.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col pt-0">
                  <Typography variant="body" className="text-base">
                    {primaryProject.impact}
                  </Typography>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {primaryProject.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </CardContent>

                {primaryProject.href || primaryProject.githubHref ? (
                  <CardFooter className="mt-auto flex flex-wrap gap-3">
                    {primaryProject.href ? (
                      <Button asChild size="sm">
                        <Link
                          href={primaryProject.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Site
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    ) : null}

                    {primaryProject.githubHref ? (
                      <Button asChild variant="muted" size="sm">
                        <Link
                          href={primaryProject.githubHref}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    ) : null}
                  </CardFooter>
                ) : null}
              </div>
            </div>
          </Card>
        ) : null}

        {secondaryProjects.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {secondaryProjects.map((project) => (
              <Card
                key={project.id}
                variant="default"
                className="flex h-full flex-col"
              >
                {project.images?.length ? (
                  <div className="grid gap-3 bg-surface-3 p-4">
                    {project.images.map((image) => (
                      <div
                        key={image.src}
                        className="overflow-hidden rounded-[14px] bg-surface-2 shadow-soft"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt ?? project.title}
                          width={1200}
                          height={800}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}

                <CardHeader className="pb-3">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col pt-0">
                  <Typography variant="body" className="text-base">
                    {project.impact}
                  </Typography>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </CardContent>

                {project.href || project.githubHref ? (
                  <CardFooter className="mt-auto flex flex-wrap gap-3">
                    {project.href ? (
                      <Button asChild size="sm">
                        <Link
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Site
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    ) : null}

                    {project.githubHref ? (
                      <Button asChild variant="muted" size="sm">
                        <Link
                          href={project.githubHref}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    ) : null}
                  </CardFooter>
                ) : null}
              </Card>
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
