import { Overview, Career, Education, Files, Additional } from "../TabContents";

const Headers = [
  "Overview",
  "Career",
  "Education",
  "Files",
  "Additional",
] as const;

const HeaderContents = {
  Overview,
  Career,
  Education,
  Files,
  Additional,
};

export const CandidateProfileTabData = {
  Headers,
  HeaderContents,
};
