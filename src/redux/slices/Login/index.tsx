import { Login } from "./Login";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Login.State = {
  isLoggedin: false,
  accessToken: "",
  isLoginInitiatedInMiddle: false,
  urlBeforeInitiatingLogin: "",
};

const loginSlice = createSlice({
  name: "UpdateLoggedInState",
  initialState,
  reducers: {
    setLoginState: (state, action: Login.setLoginState) => {
      state.isLoggedin = action.payload || false;
    },
    setAccessToken: (state, action: Login.setAccessToken) => {
      state.accessToken = action.payload || "";
    },
    setIsLoginInitiatedInMiddle: (
      state,
      action: Login.setIsLoginInitiatedInMiddle
    ) => {
      state.isLoginInitiatedInMiddle = action.payload || false;
    },
    setUrlBeforeInitiatinLogin: (
      state,
      action: Login.setUrlBeforeInitiatingLogin
    ) => {
      state.urlBeforeInitiatingLogin = action.payload || "";
    },
  },
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
