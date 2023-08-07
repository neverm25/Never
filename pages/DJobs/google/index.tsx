import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { Login } from "@DJobs/Components";
import { socialAuth } from "src/API/LoginAPI/SocialAuth";
import { LOCAL_STORAGE_KEY } from "@DJobs/DjobsUtils/LocalStorageKeys";
import { toast } from "react-toastify";

const RegisterLinkedin = () => {
  const router = useRouter();
  const currentPathname =
    typeof window === "object" ? localStorage.getItem("currentPathName") : "";
  useEffect(() => {
    const checkAlreadyLoggedIn = () => {
      const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
      if (accessToken) router.push(currentPathname);
    };
    window.addEventListener("load", checkAlreadyLoggedIn);
    window.document.readyState === "complete" && checkAlreadyLoggedIn();

    //#region Separation of hash from URL
    const hash = typeof window === "object" && window.location.hash.slice(1);
    const hashEntries = hash.split("&");
    const params = {};
    hashEntries.map(hashItem => {
      const [key, value] = hashItem.split("=");
      params[key] = value;
    });
    const access_token = params["access_token"];
    const error = params["error"];
    error && toast.error(error);
    //#endregion

    const existingAccessToken =
      typeof window === "object"
        ? window.localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
        : "";
    if (access_token && !existingAccessToken) {
      socialAuth.continueWithGoogleAccessToken(access_token);
    }
  });

  return <Login type="login" />;
};

export default RegisterLinkedin;
