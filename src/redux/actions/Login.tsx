import { LOCAL_STORAGE_KEY } from "@DJobs/DjobsUtils/LocalStorageKeys";
import store from "@Redux";
import { actions } from "@Redux/slices";
import { setCookie } from "cookies-next";

const LoginToDjobs = accessToken => {
  store.dispatch(actions.login.setAccessToken(accessToken));
  store.dispatch(actions.login.setLoginState(true));
  localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, accessToken);
  setCookie(LOCAL_STORAGE_KEY.ACCESS_TOKEN, accessToken);
};
const LogoutFromDjobs = () => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, "");
    //typeof window === "object" && window.globalThis.FB?.logout();
    store.dispatch(actions.login.setAccessToken(""));
    store.dispatch(actions.login.setLoginState(false));
    store.dispatch(actions.education.setClearEducation());
    store.dispatch(actions.career.setClearCareer());
    store.dispatch(actions.files.setClearFiles());
    store.dispatch(actions.skills.setCandidateSkillList());
    store.dispatch(actions.languages.setCandidateLanguages());
    store.dispatch(actions.candidateDetails.setClearCandidate());
    setCookie(LOCAL_STORAGE_KEY.ACCESS_TOKEN, "");
  } catch (error) {
    console.log("error while logging out", error);
  }
};

export const login = { LoginToDjobs, LogoutFromDjobs };
