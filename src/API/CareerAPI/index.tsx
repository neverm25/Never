import instance from "@Axios/axios-user";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";

const getCareer = () => {
  return instance.get(DJOBS_API_PATHS.career);
};
const postCareer = body => {
  return instance.post(DJOBS_API_PATHS.career, body);
};
const updateCareer = (id, body) => {
  return instance.put(`${DJOBS_API_PATHS.career}/${id}`, body);
};
const deleteCareer = id => {
  return instance.delete(`${DJOBS_API_PATHS.career}/${id}`);
};

export const CareerAPI = {
  getCareer,
  postCareer,
  updateCareer,
  deleteCareer,
};
