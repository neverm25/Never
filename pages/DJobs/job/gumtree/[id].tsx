import * as React from "react";

import { JobDetails } from "@DJobs/Components";
import { getServerSideProps } from "@Pages/DJobs/job-details/index";

const JobDetailsPage = ({ jobData, source }) => (
  <JobDetails {...{ jobData, source }} />
);

export default JobDetailsPage;

export { getServerSideProps };
