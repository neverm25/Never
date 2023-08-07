import { SearchedJobsList } from "@Redux/slices/SearchedJobsList/SearchedJobsList";
import React from "react";
declare namespace JobDescriptionProps {
  export interface Iprops {
    JobData: SearchedJobsList.jobData;
  }
  interface ContextProps {
    JobData: JobsList.jobData;
  }
}

export { JobDescriptionProps };
