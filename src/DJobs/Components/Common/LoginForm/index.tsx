import React, { useEffect, useState, createContext } from "react";
import dynamic from "next/dynamic";
const FormContents = dynamic(import("./FormContents").then(module => module.FormContents));
import { LoginContainer } from "./Styles";
import { LoginFormProps } from "./LoginForm";
import { SocialMediaButtons } from "./SocialMediaButtons";
import { LoginRegisterToggleButtons } from "./LoginRegisterToggleButtons";
import { TOGGLE_BUTTON_TYPES } from "./Utils/LoginForm";

export const LoginFormContext = createContext(
  {} as LoginFormProps.SigninContext
);

export const LoginForm = ({ type = "register" }: LoginFormProps.IProps) => {
  const [toggleButtonValue, setToggleButtonValue] = useState(
    type as LoginFormProps.toggleButtonType
  );
  const [loginType, setLoginType] = useState(type);

  const signInFormContextValue: LoginFormProps.SigninContext = {
    toggleButtonValue,
    setToggleButtonValue,
    loginType,
    setLoginType,
  };
  const showToggleButton =
    TOGGLE_BUTTON_TYPES.indexOf(
      (loginType as unknown) as LoginFormProps.toggleButtonType
    ) >= 0;

  useEffect(() => {
    setLoginType(type);
    setToggleButtonValue(type as LoginFormProps.toggleButtonType);
  }, [type]);

  return (
    <LoginFormContext.Provider value={signInFormContextValue}>
      <LoginContainer>
        {showToggleButton && <LoginRegisterToggleButtons />}
        <FormContents />
        {showToggleButton && <SocialMediaButtons />}
      </LoginContainer>
    </LoginFormContext.Provider>
  );
};
