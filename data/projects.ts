export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  impact: string;
  images?: {
    src: string;
    alt: string;
  }[];
  imageAlt?: string;
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
      "A full-stack K–5 mastery assessment platform designed for classroom use, with teacher and student flows separated through role-based access control.",
    impact:
      "Built 60+ RESTful API routes with Next.js 15, TypeScript, Prisma, PostgreSQL, and centralized Zod validation. Implemented custom session-based authentication with httpOnly secure cookies and PostgreSQL-backed session tokens, then architected an AWS Lambda and EventBridge automation pipeline to generate recurring classroom assignments with single-attempt lockout and mastery-based progression enforced server-side.",
    images: [
      {
        src: "https://swvefjmwvohdfnywagia.supabase.co/storage/v1/object/public/Marketing/Teacher%20Dashboard.webp",
        alt: "LearnMetrics dashboard view",
      },
      {
        src: "https://swvefjmwvohdfnywagia.supabase.co/storage/v1/object/public/Marketing/Score%20Distribution.webp",
        alt: "LearnMetrics score distribution view",
      },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "AWS Lambda",
      "EventBridge",
      "Stripe",
      "Zod",
      "RBAC",
    ],
    githubHref: "https://github.com/ivilla15/LearnMetrics",
    href: "https://learn-metrics.ivilla.dev/",
    featured: true,
  },
  {
    id: "book-management-system",
    title: "Book Management System",
    description:
      "A full-stack platform simulating a real-world book marketplace with authenticated user flows and role-based access control.",
    impact:
      "Built a marketplace-style experience with search, favorites, comments, cart functionality, and 12+ authenticated views, giving the project stronger real-world application structure than a basic CRUD app.",
    githubHref: "https://github.com/ivilla15/book-management-system-django",
    tags: ["Django", "RBAC", "Bootstrap", "Search", "Full-Stack"],
    featured: false,
  },
  {
    id: "swimming-academy-registration-system",
    title: "Swimming Academy Registration System",
    description:
      "A Spring Boot web application for managing class registration and student scheduling at a swim academy.",
    impact:
      "Implemented secure data handling with Spring Data and built a responsive server-rendered interface using JTE templates, modeling a practical scheduling and registration workflow.",
    githubHref:
      "https://github.com/ivilla15/Swimming-Academy-Registration-System",
    tags: ["Spring Boot", "Spring MVC", "JTE", "Bootstrap", "MySQL"],
    featured: false,
  },
  {
    id: "urban-traffic-signal-timings",
    title: "Optimizing Urban Traffic Signal Timings",
    description:
      "A research-oriented optimization project focused on reducing traffic delays through algorithmic comparison and analysis.",
    impact:
      "Compared DIRECT, gradient descent, and differential evolution optimization approaches, then produced diagnostic time-space and probabilistic visualizations to evaluate performance and scalability.",
    githubHref:
      "https://github.com/ivilla15/Optimizing-Urban-Traffic-Signal-Timings-Using-the-DIRECT-Global-Search-Algorithm",
    tags: ["Python", "Optimization", "Data Visualization", "Research"],
    featured: false,
  },
  {
    id: "peer-to-peer-chat-application",
    title: "Peer-to-Peer Chat Application",
    description:
      "A TCP-based client and server messaging system designed for reliable multi-user communication.",
    impact:
      "Implemented socket programming, multi-threading, robust error handling, and session controls to support concurrent messaging in a lower-level networking environment.",
    githubHref: "https://github.com/ivilla15/peer-to-peer-chat-app",
    tags: ["Python", "TCP/IP", "Multi-threading", "Socket Programming"],
    featured: false,
  },
];

export const featuredProjects = projectItems.filter(
  (project) => project.featured,
);
export const secondaryProjects = projectItems.filter(
  (project) => !project.featured,
);
