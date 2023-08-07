import { StringSchema } from "yup";

declare namespace SearchResults {
  type jobId = number;
  interface jobData {
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
  interface filtter {
    key: string;
    doc_count: number;
  }
  interface filterType {
    skills: filtter[];
    industries: filter[];
  }
  type jobsList = {
    jobs: jobData[];
    total_jobs: number;
    filters: filterType;
    total_pages: number;
  };
  interface candidateData {
    candidateId: number;
    candidateName: string;
    appliedJobIds: jobId[];
  }

  interface JobsListProps {
    jobsList: jobsList;
    candidateData?: candidateData;
  }
  interface jobSelected {
    jobSelected: jobData;
  }
  interface JobDataProps {
    jobData: jobData;
    redirectToJobPage: boolean;
    isApplied: boolean;
    onClickJobDetails?: (number) => void;
    setJobSelId?: Dispatch<SetStateAction<number>>;
    allowPreview?: boolean;
  }
  interface JobDataContextProps {
    showPreview: boolean;
    setShowPreview: Dispatch<SetStateAction<boolean>>;
    jobData: jobData;
    onClickJobDetails?: (number) => void;
    setJobSelId?: Dispatch<SetStateAction<number>>;
    allowPreview?: boolean;
  }

  interface JobMetaDataValue {
    value: string;
    Icon: (props: IIcons.UniconsProps) => JSX.Element;
  }

  type JobMetaDataValues = JobMetaDataValue[];
}
export { SearchResults };
