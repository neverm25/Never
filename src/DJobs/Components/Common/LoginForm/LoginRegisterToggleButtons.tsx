import React, { useContext } from "react";
import styled from "styled-components";

import { DjobsButton } from "@DJobs/Components/Basic/";
import { djobsTheme } from "@DJobs/Theme";
import { LoginFormContext } from ".";

const ToggleButton = ({ value }: { value: string }) => (
  <DjobsButton.Others variant="Signin" width="127px" label={value} />
);

export const LoginRegisterToggleButtons = () => {
  const { toggleButtonValue, setToggleButtonValue, setLoginType } = useContext(
    LoginFormContext
  );

  //#region Click handlers
  const toggleToRegister = () => {
    setToggleButtonValue("register");
    setLoginType("register");
  };
  const toggleToLogin = () => {
    setToggleButtonValue("login");
    setLoginType("login");
  };
  const toggleButtonState = () => {
    if (toggleButtonValue === "login") toggleToRegister();
    else toggleToLogin();
  };
  //#endregion

  return (
    <ToggleButtonContainer
      onClick={toggleButtonState}
      toggleButtonValue={toggleButtonValue}
    >
      {toggleButtonValue === "register" ? (
        <ToggleButton value="register" />
      ) : (
        <div style={{ paddingLeft: "20px" }}>Register</div>
      )}
      {toggleButtonValue === "login" ? (
        <ToggleButton value="sign in" />
      ) : (
        <div>Sign In</div>
      )}
    </ToggleButtonContainer>
  );
};

const ToggleButtonContainer = styled.div<{
  toggleButtonValue: string;
}>`
  position: relative;
  display: flex;
  width: 231px;
  height: 42px;
  justify-content: space-between;
  align-items: center;
  border-radius: 32px;
  cursor: pointer;
  padding-left: ${({ toggleButtonValue }) =>
    toggleButtonValue === "Sign In" && "23px"};
  padding-right: ${({ toggleButtonValue }) =>
    toggleButtonValue === "register" && "23px"};
  background: ${djobsTheme.colors.black50};
  color: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.switchInputShadow};
  ${djobsTheme.text.djTitleTwo.sm};

  button {
    border-radius: 15px;
    padding: 13px 0 !important;
    box-shadow: ${djobsTheme.effects.switchButtonShadow} !important;
  }
`;
