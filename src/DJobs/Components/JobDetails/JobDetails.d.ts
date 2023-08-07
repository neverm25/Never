import { SearchedJobsList } from "@Redux/slices/SearchedJobsList/SearchedJobsList";
import React from "react";

declare namespace IJobView {
  export interface IProps {
    jobData: SearchedJobsList.ApplyJobData;
    source: string;
  }
  interface ContextProps {
    jobData: SearchedJobsList.ApplyJobData;
  }
}

export { IJobView };
