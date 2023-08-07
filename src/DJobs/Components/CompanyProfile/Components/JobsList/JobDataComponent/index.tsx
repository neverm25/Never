import React from "react";

import { JobDataContainer } from "./JobDataStyle";
import { JobDataContainerLeft } from "./JobDataContainerLeft";
import { JobListTypes } from "../../JobsList/JobsList";

export const JobDataComponent = (props: JobListTypes.JobDataProps) => {
  const { jobData } = props;

  return (
    <JobDataContainer>
      <JobDataContainerLeft jobData={jobData} />
    </JobDataContainer>
  );
};
