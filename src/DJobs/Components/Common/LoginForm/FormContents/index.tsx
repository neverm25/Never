import React, { useContext } from "react";

import { LoginFormProps } from "../LoginForm";
import { LoginFormContents } from "./LoginFormContents";
import { RegisterFormContents } from "./RegisterFormContents";
import { ForgotPasswordFormContents } from "./ForgotPasswordFormContents";
import { ResetFormContents } from "./ResetFormContents";
import { LoginFormContext } from "..";

export const FormContents = () => {
  const { loginType } = useContext(LoginFormContext);

  const FormContent: LoginFormProps.loginTypeContents = {
    login: <LoginFormContents />,
    register: <RegisterFormContents />,
    forgot: <ForgotPasswordFormContents />,
    reset: <ResetFormContents />,
  };

  return <React.Fragment>{FormContent[loginType]}</React.Fragment>;
};
