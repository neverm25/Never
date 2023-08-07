import { CompanyProfileProps } from "./CompanyProfile";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CompanyProfileProps.State = {
  activeTab: "company",
  jobsList: {
    jobs: [],
    filters: { industries: [], skills: [] },
    total_jobs: 0,
  },
};

const companySlice = createSlice({
  name: "UpdateLoggedInState",
  initialState,
  reducers: {
    setActiveTab: (state, action: CompanyProfileProps.setActiveTab) => {
      state.activeTab = action.payload || initialState.activeTab;
    },
    setJobsList: (state, action: CompanyProfileProps.setJobsList) => {
      state.jobsList = action.payload || initialState.jobsList;
    },
  },
});

export const companyActions = companySlice.actions;
export const companyReducer = companySlice.reducer;
