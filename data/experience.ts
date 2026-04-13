export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  location: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  summary?: string;
  bullets: string[];
  technologies?: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    id: "amber-ai-support-system",
    title: "AI & Data Engineering Student Developer",
    organization: "California State University, Los Angeles",
    location: "Los Angeles, CA",
    startDate: "2025-08",
    isCurrent: true,
    summary:
      "Developing data pipelines and retrieval systems for an AI support platform that transforms unstructured archives into searchable, citation-backed knowledge.",
    bullets: [
      "Built ETL pipelines to scrape, parse, and clean 20+ years of AMBER mailing list archives and tutorials using BeautifulSoup, regex, and Python, producing 42,000+ structured documents for downstream vector indexing.",
      "Developed automated data ingestion workflows using Apache Airflow to schedule daily scraping, HTML to JSON conversion, metadata extraction, and ChromaDB indexing tasks.",
      "Implemented a RAG pipeline using ChromaDB vector search and FAISS-based PDF retrieval to generate responses with automated citation links, served via a Llama 3.1 inference server on Linux HPC infrastructure.",
    ],
    technologies: [
      "Python",
      "BeautifulSoup",
      "Apache Airflow",
      "ChromaDB",
      "FAISS",
      "RAG",
      "Linux",
      "Ollama",
      "Llama 3.1",
    ],
  },
  {
    id: "cal-state-la-u-su",
    title: "Junior Web Developer Associate",
    organization: "University-Student Union, Cal State LA",
    location: "Los Angeles, CA",
    employmentType: "Full-Stack",
    startDate: "2025-05",
    isCurrent: true,
    summary:
      "Building and maintaining production web systems with a focus on accessibility, authentication, backend APIs, and end-to-end delivery.",
    bullets: [
      "Architected and shipped RESTful CRUD APIs for BOD document management and announcement banners using Supabase and Node.js, with the banner API serving all pages across 100,000+ annual visits.",
      "Built a student contact form API with rate limiting, input validation, and JotForm integration using Next.js API routes and Node.js, solving a gap where students had no reliable way to submit concerns to USU administration.",
      "Implemented secure SSO authentication using NextAuth and Microsoft Azure AD with role-based access control for 6 administrative users, following service-oriented architecture patterns across internal back-office systems.",
      "Fully designed and shipped the Wingspan program page from scratch and led major rebuilds of FSL and U-Krew, owning the full SDLC from requirements gathering through solo deployment on Vercel.",
      "Maintained zero WAVE accessibility errors and strong Google Lighthouse scores across all production pages through responsive design, image optimization, and AI search indexing following Agile development workflows.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "Node.js",
      "NextAuth",
      "Azure AD",
      "Vercel",
    ],
  },
];

export function sortExperience(items: ExperienceItem[]) {
  return [...items].sort((a, b) => {
    const aEnd = a.isCurrent ? "9999-12" : (a.endDate ?? a.startDate);
    const bEnd = b.isCurrent ? "9999-12" : (b.endDate ?? b.startDate);

    if (aEnd !== bEnd) {
      return bEnd.localeCompare(aEnd);
    }

    return b.startDate.localeCompare(a.startDate);
  });
}

export function formatExperienceDateRange(item: ExperienceItem) {
  const start = formatMonthYear(item.startDate);
  const end = item.isCurrent
    ? "Present"
    : item.endDate
      ? formatMonthYear(item.endDate)
      : "Present";

  return `${start} - ${end}`;
}

function formatMonthYear(value: string) {
  const [year, month] = value.split("-").map(Number);

  if (!year || !month) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1));
}
