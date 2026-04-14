export type InvolvementItem = {
  id: string;
  title: string;
  organization: string;
  timeframe: string;
  description: string;
};

export const involvementItems: InvolvementItem[] = [
  {
    id: "acm",
    title: "Committee Member",
    organization: "Association for Computing Machinery (ACM)",
    timeframe: "Cal State LA",
    description:
      "Contributed to student web development projects and supported planning of computer science career events.",
  },
  {
    id: "interview-prep",
    title: "Technical Interview Preparation",
    organization: "Peer Collaboration",
    timeframe: "Cal State LA",
    description:
      "Participate in peer mock interviews and algorithm workshops focused on strengthening problem solving and technical interview skills.",
  },
];
