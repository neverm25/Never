import React, { useContext, useState } from "react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";

import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import { signIn } from "../Utils/LoginForm";
import { SubmitBtn } from "../SubmitBtn";
import { DJobsTextLink } from "@DJobs/Components/Basic/DjobsTextLink";
import { FormContentsStyles } from "./Styles/FormContentsStyles";
import { LoginFormContext } from "..";
import { FormContentHeading } from "../FormContentHeading";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";
import { LoginFormProps } from "../LoginForm";
import { DjobsCommonFieldComponents } from "@DJobs/Components/Basic/DjobsFormFields/Common/Components";
import { LoginAPI } from "@API";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";
import { handleFormSubmit } from "@Helpers/Formik";

export const LoginFormContents = () => {
  const router = useRouter();

  const { setLoginType } = useContext(LoginFormContext);
  const [errorMessageFromAPI, setErrorMessageFromAPI] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const {
    formFields,
    initialValues,
    validationSchema,
    requiredFields,
    idPrefix,
    initialErrors,
  } = signIn;
  const { email, password } = formFields;

  const authenticate = async ({
    email,
    password,
  }: LoginFormProps.LoginFields) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await fetch(DJOBS_API_PATHS.login, {
        method: "POST",
        body: formData,
      });

      const isAuthenticationSuccess = response.ok;
      const returnData = await response.json();
      if (isAuthenticationSuccess) {
        LoginAPI.handleAuthSuccess(
          returnData.access_token,
          window.location.href
        );
      } else {
        const errorMsg: string = LoginAPI.getErrorMessageFromReturnData(
          returnData
        );
        setErrorMessageFromAPI(errorMsg);
      }
    } catch (exception) {
      router.push(DJOBS_ROUTES.error);
    }
  };

  return (
    <React.Fragment>
      <FormContentHeading
        heading="Welcome back!"
        subHeading="Select your preferred sign in method"
      />
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={validationSchema}
        initialErrors={initialErrors}
      >
        {formik => {
          const onSubmitHandler = (values: LoginFormProps.LoginFields) => {
            authenticate(values);
          };

          return (
            <Form style={{ width: "100%" }}>
              <FormContentsStyles.FieldWrapper>
                {createDjobsInputField(email)}
                {createDjobsInputField(password)}
                {errorMessageFromAPI && (
                  <div style={{ width: "100%", marginTop: "5px" }}>
                    <DjobsCommonFieldComponents.ErrorLabel
                      value={errorMessageFromAPI}
                    />
                  </div>
                )}
                <SubmitBtn
                  width="100%"
                  isDisabled={
                    submitClicked && Object.keys(formik.errors).length !== 0
                  }
                  onClick={() => {
                    setSubmitClicked(true);
                    handleFormSubmit({
                      formik,
                      idPrefix,
                      onSubmitHandler,
                      requiredFields,
                    });
                  }}
                >
                  Sign in
                </SubmitBtn>
              </FormContentsStyles.FieldWrapper>
              <div style={{ paddingTop: "12px" }}>
                <DJobsTextLink
                  styleName="djLinkRegular"
                  color="blue100"
                  onClick={() => setLoginType("forgot")}
                >
                  Forgot Password?
                </DJobsTextLink>
              </div>
            </Form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};
