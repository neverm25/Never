declare namespace CommonCandidateDetails {
  type proficiency = "Native" | "Full" | "Professional" | "Limited" | "";
  type language = { language: string; proficiency: proficiency };
  interface Candidate {
    candidateId: number;
    firstName?: string;
    lastName?: string;
    name: string;
    role: string;
    country: string;
    city: string;
    profilePicture: string;
    rating: Rating;
    telephone: number;
    email: string;
    status: PipelineStatus;
    dateApplied: string;
    about: string;
    skills: string;
    languages: language[];
  }
  type CandidateList = Candidate[];
}
export { CommonCandidateDetails };
