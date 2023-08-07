import { createSlice } from "@reduxjs/toolkit";

import { Languages } from "./Languages";

const initialState: Languages.State = {
  langugagesList: [],
  languageOptions: [],
  candidateLanguages: [],
};

const languagesSlice = createSlice({
  name: "Languages state",
  initialState,
  reducers: {
    setLanguagesList: (state, action: Languages.setLanguagesList) => {
      state.langugagesList = action.payload || [];
    },
    setLanguageOptions: (state, action: Languages.setLanguageOptions) => {
      state.languageOptions = action.payload || [];
    },
    setCandidateLanguages: (state, action: Languages.setCandidateLanguages) => {
      state.candidateLanguages = action.payload || [];
    },
  },
});

export const languagesActions = languagesSlice.actions;
export const languagesReducer = languagesSlice.reducer;
