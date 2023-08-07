import instance from "@Axios/axios-user";
import { UploadCvSectionProps } from "@DJobs/Components/CompanyProfile/Components/TabItems/UploadCvSection/UploadCvSection";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";

const fetchSubmittedFileList = (companyId: string) => {
  const URL = `${DJOBS_API_PATHS.submittedCV}/${companyId}`;
  instance
    .get(URL)
    .then(response => {
      const submittedFiles: UploadCvSectionProps.FilesSubmittedToCompany =
        response.data;
      console.log("SUBMITTED FILES", submittedFiles);
    })
    .catch(error => console.log("error", error));
};
const submitFileToCompany = (
  fileId: string,
  companyId: string,
  userId: string
) => {
  const URL = `${DJOBS_API_PATHS.submitCV}`;
  const body = {
    ats_company_id: companyId,
    ats_user_id: userId,
    file_id: fileId,
  };
  instance
    .post(URL, body)
    .then(response => console.log("SUBMIT RESPONSE", response))
    .catch(error => console.log("error", error));
};
const downloadFileFromList = (fileId: string, fileName: string) => {
  instance
    .get(`${process.env.NEXT_PUBLIC_TS_API}/candidates-file/${fileId}`, {
      responseType: "blob",
    })
    .then(response => {
      const url = window.URL.createObjectURL(response.data);
      const aElement = document.createElement("a") as HTMLAnchorElement;
      aElement.href = url;
      aElement.download = fileName;
      aElement.click();
    })
    .catch(error => console.log("error", error));
};

export const CandidatesFilesAPI = {
  fetchSubmittedFileList,
  submitFileToCompany,
  downloadFileFromList,
};
