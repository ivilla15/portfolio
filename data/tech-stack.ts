export type TechStackGroup = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const techStackGroups: TechStackGroup[] = [
  {
    id: "languages",
    title: "Languages",
    description:
      "Core programming languages I use across web development, backend systems, and academic work.",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C"],
  },
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Tools I use to build responsive, accessible interfaces and structured component systems.",
    items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "HTML5", "CSS3"],
  },
  {
    id: "backend-databases",
    title: "Backend & Databases",
    description:
      "Backend frameworks, APIs, validation tools, and data layers for full-stack application development.",
    items: [
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Zod",
      "Stripe",
      "NextAuth",
      "Java Spring",
      "Azure AD",
    ],
  },
  {
    id: "data-engineering-ai",
    title: "Data Engineering & AI",
    description:
      "Pipelines, retrieval systems, and tooling for scraping, indexing, and retrieval-augmented workflows.",
    items: [
      "ETL Pipelines",
      "Airflow",
      "BeautifulSoup",
      "ChromaDB",
      "FAISS",
      "RAG",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Deployment, infrastructure, and workflow tools I use to ship and maintain applications.",
    items: [
      "AWS Lambda",
      "AWS EventBridge",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Linux",
    ],
  },
  {
    id: "certifications",
    title: "Certifications",
    description:
      "Current certification work aligned with my cloud and backend development goals.",
    items: ["AWS Solutions Architect – Associate (in progress)"],
  },
];
