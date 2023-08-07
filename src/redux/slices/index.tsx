import { loginReducer, loginActions } from "./Login";
import { loadingReducer, loadingActions } from "./Loading";
import { languagesReducer, languagesActions } from "./Languages";
import { skillsReducer, skillsActions } from "./Skills";
import { careerReducer, careerActions } from "./Career";
import { educationReducer, educationActions } from "./Education";
import { filesUploadedReducer, filesUploadedActions } from "./Files";
import { companyActions, companyReducer } from "./CompanyProfile";
import {
  searchedJobsListReducer,
  searchedJobsListActions,
} from "./SearchedJobsList";
import {
  candidateDetailsActions,
  candidateDetailsReducer,
} from "./CandidateDetails";

export const reducers = {
  login: loginReducer,
  candidateDetails: candidateDetailsReducer,
  loading: loadingReducer,
  languages: languagesReducer,
  skills: skillsReducer,
  career: careerReducer,
  education: educationReducer,
  files: filesUploadedReducer,
  jobData: searchedJobsListReducer,
  company: companyReducer,
};
export const actions = {
  login: loginActions,
  candidateDetails: candidateDetailsActions,
  loading: loadingActions,
  languages: languagesActions,
  skills: skillsActions,
  career: careerActions,
  education: educationActions,
  files: filesUploadedActions,
  jobData: searchedJobsListActions,
  company: companyActions,
};
