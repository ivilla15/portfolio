export type InvolvementItem = {
  id: string;
  title: string;
  organization: string;
  timeframe: string;
  description: string;
};

export const involvementItems: InvolvementItem[] = [
  {
    id: "gmis-2025",
    title: "Conference Participant and Award Winner",
    organization: "Great Minds in STEM (GMiS) 2025",
    timeframe: "2025",
    description:
      "Participated in a national STEM conference focused on professional growth, networking, and opportunities in engineering and technology.",
  },
  {
    id: "cs-senior-design",
    title: "Senior Design Team Member",
    organization: "Cal State LA Computer Science",
    timeframe: "2025 - Present",
    description:
      "Contributing to the Amber AI support system project through data engineering, retrieval pipelines, and applied AI development work.",
  },
  {
    id: "university-student-union",
    title: "Campus Web Contributor",
    organization: "University-Student Union, Cal State LA",
    timeframe: "2025 - Present",
    description:
      "Collaborate on campus-facing web systems that support student programs, internal tools, and accessible digital experiences.",
  },
];
