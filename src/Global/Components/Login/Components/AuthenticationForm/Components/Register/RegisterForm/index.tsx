import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { CheckboxInput } from "@Global/Components/Basic";
import { Button } from "@Global/Components/Basic/Button";
import {
  createInputFields,
  getRequiredInputFields,
} from "@Helpers/Formik/formikMultipleInputFields.helpers";
import { VALIDATION } from "../../../Utils/Form.constants";
import { RegisterFormFields } from "../../../Utils/FormFields";
import {
  Label,
  Link,
  RegisterButtonWrapper,
  TermsAndConditionsWrapper,
  Title,
} from "./Styles/RegisterFormStyles";

//#region RegisterForm Content

//#region  Formik Inputs
export const REGISTER_TITLE = "Register to your account";

const registerForminitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
export const registerFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required(VALIDATION.FIRSTNAME),
  lastName: Yup.string().required(VALIDATION.LASTNAME),
  email: Yup.string()
    .email(VALIDATION.EMAIL)
    .required(VALIDATION.EMAIL),
  password: Yup.string().required(VALIDATION.PASSWORD),
});

const registerFormOnSubmit = () => {
  return;
};
//#endregion

export const RegisterForm = () => {
  const [
    isTermsAndConditionsAccepted,
    setTermsAndConditionsAccepted,
  ] = React.useState(false);
  const termsAndConditionsAcceptedProps = {
    checked: isTermsAndConditionsAccepted,
    setChecked: setTermsAndConditionsAccepted,
  };

  return (
    <React.Fragment>
      <Title>{REGISTER_TITLE}</Title>
      <Formik
        initialValues={registerForminitialValues}
        validationSchema={registerFormValidationSchema}
        onSubmit={registerFormOnSubmit}
      >
        {formik => (
          <Form>
            {createInputFields(RegisterFormFields)}
            <TermsAndConditionsWrapper>
              <CheckboxInput {...termsAndConditionsAcceptedProps} />
              <Label>{"I accept the "}</Label>
              <Link >{"Terms and Conditions"}</Link>
            </TermsAndConditionsWrapper>
            <RegisterButtonWrapper>
              <Button
                buttonCategory="main"
                variant="primary"
                onClick={event => {
                  event.preventDefault();
                  if (Object.keys(formik.touched).length > 0) {
                    if (formik.isValid) registerFormOnSubmit();
                  }
                  formik.setTouched(getRequiredInputFields(RegisterFormFields));
                  formik.validateForm();
                }}
              >
                Register
              </Button>
            </RegisterButtonWrapper>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};
