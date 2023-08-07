import { PayloadAction } from "@reduxjs/toolkit";
declare namespace Login {
  type jobRecommendations = any[];
  interface State {
    isLoggedin: boolean;
    accessToken: string;
    isLoginInitiatedInMiddle: boolean;
    urlBeforeInitiatingLogin: string;
  }
  type setLoginState = PayloadAction<boolean>;
  type setAccessToken = PayloadAction<string>;
  type setIsLoginInitiatedInMiddle = PayloadAction<boolean>;
  type setUrlBeforeInitiatingLogin = PayloadAction<string>;
}
export { Login };
