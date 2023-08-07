import { SearchResults } from "../../../SearchList/SearchList"
declare namespace JobListTypes {
  export interface jobData {
    jobTitle: string;
    companyName: string;
    location: string;
    salary: number;
    workType: "Remote" | "Full-Time" | "Freelance";
  }
  export type jobsList = SearchResults.jobData[];
  export interface JobsListProps {
    jobsList: jobsList;
  }
  export interface JobDataProps {
    jobData: SearchResults.jobData;
  }
}
export { JobListTypes };
