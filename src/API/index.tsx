export { LoginAPI } from "./LoginAPI";
export { CandidateLanguagesAPI } from "./CandidateLanguagesAPI";
export { CandidateSkillsAPI } from "./CandidateSkillsAPI";
export { ProfilePhotoAPI } from "./ProfilePhotoAPI";

export { CareerAPI } from "./CareerAPI";
export { EducationAPI } from "./EducationAPI";
export { FilesUploadAPI } from "./FilesUploadAPI";
import instance from "@Axios/axios-user";

export const getApiCall = endpont => {
  return instance
    .get(`${process.env.NEXT_PUBLIC_TS_API}/${endpont}`)
    .then(response => response.data)
    .catch(error => console.log("error", error));
};
export const postApiCall = (endpont, body) => {
  return instance
    .post(`${process.env.NEXT_PUBLIC_TS_API}/${endpont}`, body)
    .then(response => response.data)
    .catch(error => console.log("error", error));
};
