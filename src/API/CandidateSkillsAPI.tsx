import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";
import { toast } from "react-toastify";
import { Skills } from "@Redux/slices/Skills/Skills";
import instance from "@Axios/axios-user";
import store, { actions } from "@Redux";

//#region Candidate
const getSkillsList = async () => {
  try {
    const response = await instance.get(DJOBS_API_PATHS.skills);
    const skillsList: Skills.Skill[] = response.data;
    store.dispatch(actions.skills.setSkillsList(skillsList));
  } catch (error) {
    console.error("Error while getting Skills: ", error);
    toast.error("Error while getting Skills: ", error);
  }
};

const getCandidateSkills = async () => {
  try {
    const response = await instance.get(DJOBS_API_PATHS.candidateSkills);
    const candidateSkills: Skills.CandidateSkill[] = response.data;
    store.dispatch(actions.skills.setCandidateSkillList(candidateSkills));
  } catch (error) {
    console.error("ERROR IN GET SKILLS: ", error);
    toast.error("Error while getting Skills", error);
  }
};

const updateSkills = async (candidateSkills: string[]) => {
  try {
    const { skillMap } = store.getState().skills;

    const candidateSkillIds = candidateSkills.map(skillName => ({
      skill_id: `${skillMap[skillName].id}`,
    }));
    const response = await instance.post(DJOBS_API_PATHS.candidateSkills, {
      skills: candidateSkillIds,
    });

    const newCandidateSkills: Skills.CandidateSkill[] = response.data;
    store.dispatch(actions.skills.setCandidateSkillList(newCandidateSkills));
  } catch (error) {
    console.log("ERROR IN UPDATE SKILLS: ", error);
    toast.error("Error while updating Skills: ", error);
  }
};

//#endregion
export const CandidateSkillsAPI = {
  getSkillsList,
  getCandidateSkills,
  updateSkills,
};
