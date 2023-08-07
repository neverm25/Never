import axios, { AxiosRequestConfig } from "axios";

import FormData from "form-data";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils/API-Paths";
import { SearchedJobsList } from "@Redux/slices/SearchedJobsList/SearchedJobsList";

const postJobData = ({
  job_id,
  source,
  access_token,
  origin,
}: SearchedJobsList.PostJobAPIProps) => {
  var formdata = new FormData();
  formdata.append("source", source);
  formdata.append("job_id", job_id);
  formdata.append("origin", origin);

  var config: AxiosRequestConfig = {
    method: "post",
    url: DJOBS_API_PATHS.jobDetails,
    headers: { Authorization: "Bearer " + access_token },
    data: formdata,
  };

  return axios(config);
};

export const JobAPI = { postJobData };
