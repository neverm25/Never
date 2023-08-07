import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { Login } from "@DJobs/Components";
import { socialAuth } from "src/API/LoginAPI/SocialAuth";
import { LOCAL_STORAGE_KEY } from "@DJobs/DjobsUtils/LocalStorageKeys";

const RegisterLinkedin = () => {
  const router = useRouter();
  const code = router.query.code;
  const authCode = Array.isArray(code) ? code[0] : code;
  const currentPathname =
    typeof window === "object" ? localStorage.getItem("currentPathName") : "";
  useEffect(() => {
    const checkAlreadyLoggedIn = () => {
      const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
      if (accessToken) {
        router.push(currentPathname);
      }
    };
    window.addEventListener("load", checkAlreadyLoggedIn);
    window.document.readyState === "complete" && checkAlreadyLoggedIn();
  });

  const existingAccessToken =
    typeof window === "object"
      ? window.localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
      : "";
  if (authCode && !existingAccessToken) {
    socialAuth.getLinkedinAccessToken(authCode);
  }

  return <Login type="login" />;
};

export default RegisterLinkedin;
