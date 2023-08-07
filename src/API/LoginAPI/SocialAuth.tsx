import Router from "next/router";

import {
  DJOBS_API_PATHS,
  DJOBS_ROUTES,
  SOCIAL_AUTH_IDS,
} from "@DJobs/DjobsUtils";
import { LoginAPI } from ".";
import { reduxActions } from "@Redux/actions";
import { LOCAL_STORAGE_KEY } from "@DJobs/DjobsUtils/LocalStorageKeys";

//#region Google Login
const handleGoogleClick = () => {
  localStorage.setItem("currentPathName", window.location.href);
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  if (accessToken) {
    Router.push(window.location.pathname);
    return;
  }

  const origin = typeof window === "object" && window.location.origin;
  const GOOGLE_OAUTH_URL = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_URL;
  const response_type = `token`;
  const client_id = SOCIAL_AUTH_IDS.GOOGLE_CLIENT_ID;
  const redirect_uri = `${origin}${DJOBS_ROUTES.google}`;
  const scope = `${process.env.NEXT_PUBLIC_GOOGLE_SCOPE_EMAIL} ${process.env.NEXT_PUBLIC_GOOGLE_SCOPE_PROFILE}`;

  const URL = `${GOOGLE_OAUTH_URL}?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
  Router.push(URL);
};
const continueWithGoogleAccessToken = access_token => {
  const socialAuthtoken = access_token;
  const requestURL = DJOBS_API_PATHS.googleRegister;
  const currentPathname =
    typeof window === "object" ? localStorage.getItem("currentPathName") : "";
  LoginAPI.continueWithSocialAuthToken({
    socialAuthtoken,
    requestURL,
    currentPathname,
  });
};

const handleGoogleCredentialResponse = response => {
  const socialAuthtoken = response.credential;
  const requestURL = DJOBS_API_PATHS.googleRegister;
  const currentPathname =
    typeof window === "object" ? localStorage.getItem("currentPathname") : "";
  LoginAPI.continueWithSocialAuthToken({
    socialAuthtoken,
    requestURL,
    currentPathname,
  });
};
const initializeGoogle = () => {
  const google = typeof window === "object" && window.globalThis.google; //Variable obtained due to script loading in _app
  if (!google) return;

  google.accounts.id.initialize({
    client_id: SOCIAL_AUTH_IDS.GOOGLE_CLIENT_ID,
    callback: handleGoogleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("GoogleLoginButton"),
    {
      type: "icon",
      text: "continue_with",
      logo_alignment: "center",
      width: 350,
    }
  );
};
//#endregion

//#region Linkedin Login
//Linkedin Step-1 => Getting Linkedin Auth code
const LINKEDIN_AUTH_URL = process.env.NEXT_PUBLIC_LINKEDIN_OAUTH_URL;
const client_id = SOCIAL_AUTH_IDS.LINKEDIN_CLIENT_ID;
const origin = typeof window === "object" && window.location.origin;
const redirect_uri = `${origin}${DJOBS_ROUTES.linkedin}`;
const scope = `r_liteprofile%20r_emailaddress`;
const response_type = `code`;
const handleLinkedinClick = () => {
  localStorage.setItem("currentPathName", window.location.href);
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  if (accessToken) {
    Router.push(window.location.pathname);
    return;
  }

  const URL = `${LINKEDIN_AUTH_URL}?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
  Router.push(URL);
};
//Linkedin Step-2 => Getting Linkedin Auth token
const getLinkedinAccessToken = async (code: string) => {
  reduxActions.loading.enableLoading();
  const existingAccessToken =
    typeof window === "object"
      ? localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
      : "";
  const currentPathname =
    typeof window === "object" ? localStorage.getItem("currentPathName") : "";

  if (existingAccessToken || !code) {
    Router.push(currentPathname);
    reduxActions.loading.disableLoading();
    return;
  }
  const socialAuthtoken = code;
  const requestURL = DJOBS_API_PATHS.linkedinRegister;
  LoginAPI.continueWithSocialAuthToken({
    socialAuthtoken,
    requestURL,
    currentPathname,
  });
};
//#endregion

//#region FB login
const handleFacebookClick = () => {
  localStorage.setItem("currentPathName", window.location.href);
  try {
    reduxActions.loading.enableLoading();
    const FB = window.globalThis.FB;
    let alreadyLoggedIn = false;

    FB.getLoginStatus(response => {
      alreadyLoggedIn = onFBLogin(response);
    });

    if (alreadyLoggedIn) return;
    FB.login(onFBLogin, { scope: "public_profile,email" });
  } catch (Error) {
    Router.push(DJOBS_ROUTES.error);
    reduxActions.loading.disableLoading();
  }
};
const onFBLogin = response => {
  const isLoginSuccess = response.status === "connected";
  if (!isLoginSuccess) {
    reduxActions.loading.disableLoading();
    return false;
  }

  const socialAuthtoken = response.authResponse.accessToken;
  const requestURL = DJOBS_API_PATHS.facebookRegister;
  const currentPathname =
    typeof window === "object" ? localStorage.getItem("currentPathName") : "";

  if (isLoginSuccess)
    LoginAPI.continueWithSocialAuthToken({
      socialAuthtoken,
      requestURL,
      currentPathname,
    });

  return isLoginSuccess;
};
//#endregion

export const socialAuth = {
  handleGoogleClick,
  continueWithGoogleAccessToken,
  initializeGoogle,
  handleLinkedinClick,
  getLinkedinAccessToken,
  handleFacebookClick,
};
