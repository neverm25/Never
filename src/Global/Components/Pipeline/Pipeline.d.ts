import { PipelineCardsProps } from "@Components/PipelineCards/PipelineCards";

declare namespace PipelineProps {
  //Rating
  export type Rating = "Good fit" | "Maybe" | "Bad fit";
  export type RatingIcons = { [key in Rating]: JSX.Element };
  export type RatingColors = { [key in Rating]: string };
  export type CandidateCountInRating = {
    [key in Rating]: number;
  };

  //Pipeline status
  export type PipelineStatus = PipelineCardsProps.PipelineStatus;
  export type CandidateCountInPipelineStatus = {
    [key in PipelineStatus]: number;
  };

  //TabBar
  export type TabBarType =
    | "work-history"
    | "education-history"
    | "attachments"
    | "activity"
    | "comments";
  export type TabData = {
    value: number;
    label: string;
    labelValue: TabBarType;
  };
  export interface TabbarProps {
    tabs: TabData[];
    setActiveTab: Dispatch<SetStateAction<TabBarType>>;
    activeTab: string;
  }

  //Work Description
  export type WorkDescriptionElement = {
    description: string;
    "reason for leaving": string;
  };
  export interface WorkHistoryProps {
    id: number;
    Designation: string;
    CompanyName: string;
    Date: string;
    descriptions: string;
    reason_for_leaving: string
  }

  //Education Desctiption
  export type EducationDescriptionElement = {
    description: string;
    "reason for leaving": string;
  };
  export interface EducationHistory {
    id: number;
    Designation: string;
    CollegeName: string;
    Date: string;
    descriptions: string;
  }

  export interface Candidate {
    candidateId: number;
    name: string;
    role: string;
    location: string;
    profilePicture: string;
    rating: Rating;
    telephone: number;
    email: string;
    status: PipelineStatus;
    dateApplied: string;
  }
  export type CandidateList = Candidate[];
  export interface CandidateProps {
    candidate: Candidate;
    index: number;
  }
  export type UpdateCandidateProps = {
    fieldName: keyof PipelineProps.Candidate;
    fieldValue: any;
  };

  export type JobData = {
    postedDate: string;
  };

  export interface PipelineContextProps {
    candidateList: CandidateList;
    setCandidateList: Dispatch<SetStateAction<CandidateList>>;
    filteredCandidateList: CandidateList;
    setFilteredCandidateList: Dispatch<SetStateAction<CandidateList>>;
    selectedCandidate: Candidate;
    setSelectedCandidate: Dispatch<SetStateAction<Candidate>>;

    ratingFilterLabel: Rating | "ALL";
    setRatingFilterLabel: Dispatch<SetStateAction<Rating | "ALL">>;
    ratingFilterValue: Rating | "";
    setRatingFilterValue: Dispatch<SetStateAction<Rating | "">>;

    statusFilterLabel: PipelineStatus | "ALL";
    setStatusFilterLabel: Dispatch<SetStateAction<PipelineStatus | "ALL">>;
    statusFilterValue: PipelineStatus | "";
    setStatusFilterValue: Dispatch<SetStateAction<PipelineStatus | "">>;

    updateSelectedCandidateField: (props: UpdateCandidateProps) => void;

    jobData: JobData;
  }
}

export { PipelineProps };
