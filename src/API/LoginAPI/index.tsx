import Router from "next/router";

import { DJOBS_API_PATHS, DJOBS_ROUTES } from "@DJobs/DjobsUtils";
import { socialAuth } from "./SocialAuth";
import { toast } from "react-toastify";
import { reduxActions } from "@Redux/actions";
import store, { actions } from "@Redux";
import {
  getCandidateData,
  getCandidateOverview,
} from "@Redux/slices/CandidateDetails";
import instance from "@Axios/axios-user";

//#region Authentication
type registerProps = {
  socialAuthtoken: string;
  requestURL: string;
  currentPathname: string;
};

type resetPasswordProps = {
  email: string;
  token: string;
  password: string;
  confirmPassword: string;
};

const continueWithSocialAuthToken = async (props: registerProps) => {
  reduxActions.loading.enableLoading();
  const { socialAuthtoken, requestURL, currentPathname } = props;

  const body = JSON.stringify({ token: socialAuthtoken });
  const requestOptions = createPostRequestOptions(body);

  try {
    const response = await fetch(requestURL, requestOptions);
    const isRegistrationSuccess = response.ok;
    const returnData = await response.json();
    if (!isRegistrationSuccess) {
      const detail = returnData.detail;
      if (detail) toast.error(getErrorMessageFromReturnData(detail));
      reduxActions.loading.disableLoading();
      return;
    }
    handleAuthSuccess(returnData.access_token, currentPathname);
  } catch (Error) {
    Router.push(DJOBS_ROUTES.login);
    reduxActions.loading.disableLoading();
  }
};
const createPostRequestOptions = (body: RequestInit["body"]) => {
  const origin = typeof window === "object" ? window.location.origin : "*";
  const headers = new Headers();
  headers.append("access-control-allow-origin", origin);
  headers.append("Content-Type", "application/json");

  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    body,
    redirect: "follow",
  };
  return requestOptions;
};

const handleAuthSuccess = async (
  access_token: string,
  currentPathname: string
) => {
  try {
    const { dispatch, getState } = store;
    reduxActions.login.LoginToDjobs(access_token);
    reduxActions.loading.enableLoading();
    dispatch(getCandidateOverview());
    dispatch(getCandidateData());

    const { login } = getState();
    const { urlBeforeInitiatingLogin = "" } = login;

    let reRouteURL = currentPathname;
    if (urlBeforeInitiatingLogin) {
      reRouteURL = urlBeforeInitiatingLogin;
      actions.login.setUrlBeforeInitiatinLogin("");
    } else if (
      currentPathname.includes(DJOBS_ROUTES.login) ||
      currentPathname.includes(DJOBS_ROUTES.register) ||
      currentPathname.includes(DJOBS_ROUTES.google) ||
      currentPathname.includes(DJOBS_ROUTES.linkedin)
    ) {
      reRouteURL = DJOBS_ROUTES.home;
    }

    reduxActions.loading.disableLoading();
    Router.push(reRouteURL);
  } catch (exception) {
    toast.error("Error while Login");
    Router.push(DJOBS_ROUTES.login);
  }
};

const handleForgotPassword = (email: string) => {
  const formData = new FormData();
  formData.append("email", email);
  return instance.post(DJOBS_API_PATHS.forgotPassword, formData);
};

const handleResetPassword = (body: resetPasswordProps) => {
  const { email, token, password, confirmPassword } = body;
  const formData = new FormData();
  formData.append("email", email);
  formData.append("token", token);
  formData.append("new_password", password);
  formData.append("confirm_password", confirmPassword);
  return instance.post(DJOBS_API_PATHS.resetPassword, formData);
};

//#region Supporting Functions
const getErrorMessageFromReturnData = (returnData: any) => {
  const IS_API_ERROR = typeof returnData.detail === "object";
  const IS_VALIDATION_ERROR = !IS_API_ERROR;
  const detail = IS_VALIDATION_ERROR ? returnData.detail : returnData.detail[0];
  const errorMsg: string = IS_VALIDATION_ERROR
    ? detail
    : `${detail.loc[1]} ${detail.msg}`;
  return errorMsg;
};
//#endregion

export const LoginAPI = {
  createPostRequestOptions,
  handleAuthSuccess,
  getErrorMessageFromReturnData,
  continueWithSocialAuthToken,
  socialAuth,
  handleForgotPassword,
  handleResetPassword,
};
