import React from "react";

import { Button } from "@Global/Components/Basic";
import { ILogin } from "../../Login";
import {
  LoginButtonWrapper,
  RegisterFooterTitle,
} from "./Styles/RegisterFooterStyles";

const FOOTER_TITLE = "ALREADY A MEMBER?";
export const RegisterFooter = (props: ILogin.existingUserProps) => (
  <React.Fragment>
    <RegisterFooterTitle>{FOOTER_TITLE}</RegisterFooterTitle>
    <LoginButtonWrapper>
      <Button
        buttonCategory="main"
        variant="success"
        onClick={() => {
          props.setExistingUser(true);
        }}
      >
        LOGIN
      </Button>
    </LoginButtonWrapper>
  </React.Fragment>
);
