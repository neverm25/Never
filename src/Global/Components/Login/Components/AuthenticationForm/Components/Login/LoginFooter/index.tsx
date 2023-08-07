import React from "react";

import { Button } from "@Global/Components/Basic";
import { ILogin } from "../../Login";
import {
  LoginFooterTitle,
  RegisterButtonWrapper,
} from "./Styles/LoginFooterStyles";

const FOOTER_TITLE = "New to ditto.jobs?";
export const LoginFooter = (props: ILogin.existingUserProps) => (
  <React.Fragment>
    <LoginFooterTitle>{FOOTER_TITLE}</LoginFooterTitle>
    <RegisterButtonWrapper>
      <Button
        buttonCategory="main"
        variant="success"
        onClick={() => {
          props.setExistingUser(false);
        }}
      >
        REGISTER
      </Button>
    </RegisterButtonWrapper>
  </React.Fragment>
);
