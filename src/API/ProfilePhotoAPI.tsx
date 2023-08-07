import { UploadFile } from "antd/lib/upload/interface";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";
import instance from "@Axios/axios-user";

const uploadFile = (file: UploadFile) => {
  const formData = new FormData();
  formData.append("file", file.originFileObj);
  return instance.post(DJOBS_API_PATHS.profilePicture, formData);
};

export const ProfilePhotoAPI = {
  uploadFile,
};
