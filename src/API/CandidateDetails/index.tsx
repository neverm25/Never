import instance from "@Axios/axios-user";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";

const getCandidateData = () => {
  return instance.get(DJOBS_API_PATHS.candidates);
};
const getCandidateOverview = () => {
  return instance.get(DJOBS_API_PATHS.candidateOverview);
};
const updateCandidateData = raw => {
  return instance.put(DJOBS_API_PATHS.candidates, raw);
};
const generateCandidateCv = () => {
  return instance.get(DJOBS_API_PATHS.candidateCv, {
    responseType: "arraybuffer",
  });
};

export const CandidateDetails = {
  getCandidateData,
  getCandidateOverview,
  updateCandidateData,
  generateCandidateCv,
};
