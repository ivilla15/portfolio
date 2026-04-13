import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { featuredProjects } from "@/data";
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
  return (
    <Section
      id="projects"
      kicker="Projects"
      title="Selected work"
      description="A few projects that reflect how I approach building software, from interface design to application structure and real-world usability."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative aspect-[16/10] bg-surface-3">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <CardHeader className="pb-3">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <Typography variant="body" className="text-sm sm:text-base">
                {project.impact}
              </Typography>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </CardContent>

            {(project.href || project.githubHref) && (
              <CardFooter className="flex flex-wrap gap-3">
                {project.href ? (
                  <Button asChild size="sm">
                    <Link href={project.href} target="_blank" rel="noreferrer">
                      Live Site
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : null}

                {project.githubHref ? (
                  <Button asChild variant="secondary" size="sm">
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
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
