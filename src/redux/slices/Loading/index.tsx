import { Loading } from "./Loading";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Loading.State = {
  isLoading: true,
  isHomepageLoading: true,
};

const loadingSlice = createSlice({
  name: "UpdateLoggedInState",
  initialState,
  reducers: {
    setIsLoading: (state, action: Loading.setIsLoading) => {
      state.isLoading = action.payload || false;
    },
    setIsHomepageLoading: (state, action: Loading.setIsLoading) => {
      state.isHomepageLoading = action.payload || false;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
