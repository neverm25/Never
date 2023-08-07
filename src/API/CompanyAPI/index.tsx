import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils/API-Paths";
const getCompanyData = id => {
  return fetch(`${DJOBS_API_PATHS.companyProfile}/${id}`);
};
export const CompanyAPI = {
  getCompanyData,
};
