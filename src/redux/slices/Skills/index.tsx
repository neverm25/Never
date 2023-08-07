import { createSlice } from "@reduxjs/toolkit";

import { Skills } from "./Skills";

const initialState: Skills.State = {
  skillsList: [],
  skillsOptions: [],
  skillMap: {},
  candidateSkillsList: [],
};

const skillsSlice = createSlice({
  name: "Skills state",
  initialState,
  reducers: {
    setSkillsList: (state, action: Skills.setSkillsList) => {
      const skillList = action.payload || initialState.skillsList;
      state.skillsList = skillList;

      const skillsOptions: Skills.SkillOption[] = [];
      const skillMap = {};
      skillList.forEach(skill => {
        const { name } = skill;
        skillsOptions.push({ label: name, value: name });
        skillMap[name] = skill;
      });
      state.skillsOptions = skillsOptions;
      state.skillMap = skillMap;
    },
    setCandidateSkillList: (state, action: Skills.setCandidateSkillList) => {
      state.candidateSkillsList =
        action.payload || initialState.candidateSkillsList;
    },
  },
});

export const skillsActions = skillsSlice.actions;
export const skillsReducer = skillsSlice.reducer;
