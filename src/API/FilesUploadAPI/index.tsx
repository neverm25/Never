import instance from "@Axios/axios-user";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";

const getFiles = () => {
  return instance.get(DJOBS_API_PATHS.candidatesFile);
};
const postFiles = body => {
  return instance.post(DJOBS_API_PATHS.candidatesFile, body);
};
const deleteFiles = id => {
  return instance.delete(`${DJOBS_API_PATHS.candidatesFile}/${id}`);
};

export const FilesUploadAPI = {
  getFiles,
  postFiles,
  deleteFiles,
};
