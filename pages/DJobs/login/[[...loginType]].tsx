import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { Login } from "@DJobs/Components";
import { LoginFormProps } from "@DJobs/Components/Common/LoginForm/LoginForm";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { loginType } = router.query;
  const type = loginType ? loginType[0] : "login";
  return <Login type={type as LoginFormProps.loginType} />;
};

export default LoginPage;
