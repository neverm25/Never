import { StringSchema } from "yup";

declare namespace JobListCommon {
  type jobId = number;
  export interface jobData {
    id: jobId;
    title: string;
    description: string;
    company_name: string;
    postedDate: string;
    city: string;
    skillsRequired: string[];
    salary_from: number;
    salary_to: number;
    industryType: string;
    job_type: string;
    experience_from: string;
    experience_to: string;
    education: string;
    location: string;
    logo: string;
    posted_date: string;
    salary_type: string;
    is_internal: boolean;
  }
  export interface candidateData {
    candidateId: number;
    candidateName: string;
    appliedJobIds: jobId[];
    setJobSelId?: Dispatch<SetStateAction<number>>;
    jobSelId?: number;
  }

  export type jobsList = jobData[];

  export interface JobsListProps {
    jobsList: jobsList | CandidateDetailsProps.jobRecommendation[];
    allowPreview?: boolean;
    itemsForNextAd: number;
    redirectToJobPage: boolean;
    onClickJobDetails?: (number) => void;
    setJobSelId?: Dispatch<SetStateAction<number>>;
    jobSelId?: number;
  }

  export interface JobDataProps {
    jobData: jobData;
    isApplied: boolean;
    setJobSelId: Dispatch<SetStateAction<number>>;
    jobSelId: number;
  }
  export interface JobDataSubComponentProps {
    showPreview: boolean;
    setShowPreview: Dispatch<SetStateAction<boolean>>;
    jobData: jobData;
    setJobSelId: Dispatch<SetStateAction<number>>;
    jobSetId: number;
  }
  export interface JobMetaDataValue {
    value: string;
    Icon: (props: IIcons.UniconsProps) => JSX.Element;
  }
  export type JobMetaDataValues = JobMetaDataValue[];
}
export { JobListCommon };
