import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";
import { toast } from "react-toastify";
import { Languages } from "@Redux/slices/Languages/Languages";
import instance from "@Axios/axios-user";
import store, { actions } from "@Redux";

//#region Candidate

const getLanguagesList = async () => {
  try {
    const response = await instance.get(DJOBS_API_PATHS.languages);
    const languagesList: Languages.Language[] = response.data;
    store.dispatch(actions.languages.setLanguagesList(languagesList));

    const languagesOptions: Languages.LanguageOption[] = languagesList.map(
      ({ name }) => ({
        label: name,
        value: name,
      })
    );
    store.dispatch(actions.languages.setLanguageOptions(languagesOptions));
  } catch (error) {
    console.error("Error while getting languages", error);
    toast.error("Error while getting languages", error);
  }
};

const getCandidateLanguages = async () => {
  const response = await instance.get(DJOBS_API_PATHS.candidateLanguages);
  const candidateLanguages: Languages.CandidateLanguage[] = response.data;
  store.dispatch(actions.languages.setCandidateLanguages(candidateLanguages));
};

const updateLanguages = async (
  candidateLanguages: Languages.CandidateLanguage[]
) => {
  try {
    const newLanguages = candidateLanguages.map(lang => ({
      language_id: lang.language_id,
      proficiency: lang.proficiency,
    }));
    const response = await instance.post(DJOBS_API_PATHS.candidateLanguages, {
      languages: newLanguages,
    });
    const newCandidateLanguages: Languages.CandidateLanguage[] = response.data;
    store.dispatch(
      actions.languages.setCandidateLanguages(newCandidateLanguages)
    );
  } catch (error) {
    console.error("Error while getting languages: ", error);
    toast.error("Error while getting languages: ", error);
  }
};

//#endregion
export const CandidateLanguagesAPI = {
  getLanguagesList,
  getCandidateLanguages,
  updateLanguages,
};
