import instance from "@Axios/axios-user";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils/API-Paths";
const getJobsData = body => {
  return instance.post(DJOBS_API_PATHS.jobSearch, body);
};
export const JobSearchAPI = {
  getJobsData,
};
