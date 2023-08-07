import instance from "@Axios/axios-user";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";
import store from "@Redux";

const submitApplication = (
  file_id,
  job_id,
  questionnaire_question_data = "",
  questionnaire_answer_data = ""
) => {
  const { source } = store.getState().jobData;
  let body = {
    job_id,
    file_id,
    questionnaire_question_data,
    questionnaire_answer_data,
    source,
  };

  return instance.post(DJOBS_API_PATHS.application, body);
};

const cvParse = (file_id: string) => {
  return instance.post(DJOBS_API_PATHS.cvParse, {
    file_id: file_id,
    action: "parse",
  });
};

export const ApplicationAPI = {
  submitApplication,
  cvParse,
};
