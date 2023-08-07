import { CommonCandidateDetails } from "@Global/Components/Common/Candidate/Candidate";
declare namespace CandidateOverview {
  interface Language {
    name: string;
    proficiency: string;
    language_id: string;
    id?: string;
  }
  interface Skills {
    name: string;
    skill_id: string;
    id?: string;
  }
  interface option {
    label: string;
    value: string;
  }
  type skillOptions = options[];
  interface Context {
    isEditMode: boolean;
    setIsEditMode: Dispatch<SetStateAction<boolean>>;
    profilePhoto: string;
    setProfilePhoto: Dispatch<SetStateAction<string>>;
    getSkills: () => string[];
  }

  type language = CommonCandidateDetails.language;
  interface OverviewForm {
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    phoneNumber: string;
    email: string;
    description: string;
    skills: string;
    language?: string;
    proficiency?: CommonCandidateDetails.proficiency;
  }
}

export { CandidateOverview };
