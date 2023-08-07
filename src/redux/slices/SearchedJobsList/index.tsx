import { createSlice } from "@reduxjs/toolkit";
import { SearchedJobsList } from "./SearchedJobsList";

const initialState: SearchedJobsList.State = {
  jobs: [],
  total_jobs: 0,
  filters: [],
  total_pages: 0,
  pageNumber: 0,
  selectedJob: {} as SearchedJobsList.jobData,
  selectedJobId: "",
  applyJobData: {} as SearchedJobsList.ApplyJobData,
  source: "",
};

const searchedJobsListSlice = createSlice({
  name: "UpdateLoggedInState",
  initialState,
  reducers: {
    setSearchedJobsListFromAPI: (
      state,
      action: SearchedJobsList.set_SearchedJobListFromAPI
    ) => {
      const { jobs, total_jobs, filters, total_pages } = action.payload;

      state.jobs = jobs;
      state.total_jobs = total_jobs;
      state.filters = filters;
      state.total_pages = total_pages;

      if (!jobs.length) return;
      const selectedJob = jobs[0];
      state.selectedJob = selectedJob;
      state.selectedJobId = selectedJob.id;
    },
    setSelectedJobId: (state, action: SearchedJobsList.set_selectedJobId) => {
      state.selectedJobId = action.payload;
      const selectedJob = state.jobs.find(job => job.id === action.payload);
      state.selectedJob = selectedJob;
    },
    setApplyJobData: (state, action: SearchedJobsList.setApplyJobData) => {
      state.applyJobData = action.payload;
      state.selectedJobId = action.payload.id;
    },
    setSource: (state, action: SearchedJobsList.setSource) => {
      state.source = action.payload;
    },
  },
});

export const searchedJobsListActions = searchedJobsListSlice.actions;
export const searchedJobsListReducer = searchedJobsListSlice.reducer;
