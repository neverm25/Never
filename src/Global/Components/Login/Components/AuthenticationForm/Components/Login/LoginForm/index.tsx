import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button } from "@Global/Components/Basic/Button";
import {
  createInputFields,
  getRequiredInputFields,
} from "@Helpers/Formik/formikMultipleInputFields.helpers";
import { VALIDATION } from "../../../Utils/Form.constants";
import { LoginFormFields } from "../../../Utils/FormFields";
import {
  ForgotPasswordLink,
  ForgotPasswordLinkWrapper,
  LoginButtonWrapper,
  Title,
} from "./Styles/LoginStyles";

//#region LoginForm Content

//#region  Formik Inputs
export const LOGIN_TITLE = "Login to your account";

const loginForminitialValues = { email: "", password: "" };
export const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(VALIDATION.EMAIL)
    .required(VALIDATION.EMAIL),
  password: Yup.string().required(VALIDATION.PASSWORD),
});

const loginFormOnSubmit = () => {
  return;
};
//#endregion

export const LoginForm = () => (
  <React.Fragment>
    <Title>{LOGIN_TITLE}</Title>
    <Formik
      initialValues={loginForminitialValues}
      validationSchema={loginFormValidationSchema}
      onSubmit={loginFormOnSubmit}
    >
      {formik => (
        <Form>
          {createInputFields(LoginFormFields)}
          <ForgotPasswordLinkWrapper>
            <ForgotPasswordLink>{"Forgot Password?"}</ForgotPasswordLink>
          </ForgotPasswordLinkWrapper>
          <LoginButtonWrapper>
            <Button
              buttonCategory="main"
              variant="primary"
              onClick={event => {
                event.preventDefault();
                if (Object.keys(formik.touched).length > 0) {
                  if (formik.isValid) loginFormOnSubmit();
                }
                formik.setTouched(getRequiredInputFields(LoginFormFields));
                formik.validateForm();
              }}
            >
              Login
            </Button>
          </LoginButtonWrapper>
        </Form>
      )}
    </Formik>
  </React.Fragment>
);

//#region LoginForm styles
