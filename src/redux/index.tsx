import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import { reducers, actions } from "./slices";

export const store = configureStore({
  reducer: {
    loading: reducers.loading,
    login: reducers.login,
    candidateDetails: reducers.candidateDetails,
    languages: reducers.languages,
    skills: reducers.skills,
    career: reducers.career,
    education: reducers.education,
    files: reducers.files,
    jobData: reducers.jobData,
    company: reducers.company,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { actions };
