export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  impact: string;
  image: string;
  imageAlt: string;
  href?: string;
  githubHref?: string;
  tags: string[];
  featured?: boolean;
};

export const projectItems: ProjectItem[] = [
  {
    id: "learnmetrics",
    title: "LearnMetrics",
    description:
      "A full-stack K-5 mastery assessment platform designed for classroom use, with separate teacher and student workflows, secure authentication, and automated assignment generation.",
    impact:
      "Built 60+ RESTful API routes with Next.js 15, TypeScript, PostgreSQL, Prisma, and centralized Zod validation, then extended the platform with AWS Lambda and EventBridge to support recurring server-side assignment automation and mastery-based progression.",
    image: "/images/projects/learnmetrics.png",
    imageAlt: "Screenshot of the LearnMetrics platform",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "AWS Lambda",
      "EventBridge",
      "Stripe",
      "Zod",
    ],
    githubHref: "https://github.com/your-username/learnmetrics",
    href: "https://your-live-site.com",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "A portfolio website rebuilt around a tighter design system, cleaner information hierarchy, and more credible project presentation.",
    impact:
      "Redesigned to remove generic AI-looking patterns by replacing decorative gradients, filler content, and stock visuals with real project screenshots, reusable UI primitives, and a more product-focused layout.",
    image: "/images/projects/portfolio.png",
    imageAlt: "Screenshot of the portfolio homepage",
    githubHref: "https://github.com/your-username/your-portfolio-repo",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI Systems"],
    featured: true,
  },
];

export const featuredProjects = projectItems.filter(
  (project) => project.featured,
);
