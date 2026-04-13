export type AwardItem = {
  id: string;
  title: string;
  organization?: string;
  year?: string;
  detail?: string;
};

export const awardItems: AwardItem[] = [
  {
    id: "edison-stem-scholarship",
    title: "Edison STEM Scholarship",
    detail: "$4,500 scholarship award",
  },
  {
    id: "king-memorial-scholarship",
    title: "King Memorial Scholarship",
    detail: "$700 scholarship award",
  },
  {
    id: "eyster-award",
    title: "Eyster Award",
    detail: "$1,010 scholarship award",
  },
  {
    id: "deans-list",
    title: "Dean's List",
    year: "2022 - Present",
    detail: "Consistent academic recognition at Cal State LA",
  },
  {
    id: "gmis-2025-award",
    title: "GMiS 2025 Conference Award Winner",
    detail: "Recognized at the Great Minds in STEM 2025 conference",
  },
];
