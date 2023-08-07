import instance from "@Axios/axios-user";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";

const getEducation = () => {
  return instance.get(DJOBS_API_PATHS.education);
};
const postEducation = body => {
  return instance.post(DJOBS_API_PATHS.education, body);
};
const updateEducation = (id, body) => {
  return instance.put(`${DJOBS_API_PATHS.education}/${id}`, body);
};
const deleteEducation = id => {
  return instance.delete(`${DJOBS_API_PATHS.education}/${id}`);
};

export const EducationAPI = {
  getEducation,
  postEducation,
  updateEducation,
  deleteEducation,
};
