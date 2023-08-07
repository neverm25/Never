import React, { useState, useContext } from "react";
import { Form, Formik } from "formik";
import styled from "styled-components";

import { DJobsTypography, DjobsButton } from "@DJobs/Components/Basic/";
import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import { forgot } from "../Utils/LoginForm";
import { SubmitBtn } from "../SubmitBtn";
import { FormContentsStyles } from "./Styles/FormContentsStyles";
import { LoginFormContext } from "..";
import { FormContentHeading } from "../FormContentHeading";
import { LoginFormProps } from "../LoginForm";
import { handleFormSubmit } from "@Helpers/Formik";
import { LoginAPI } from "@API";

export const ForgotPasswordFormContents = () => {
  const { setLoginType } = useContext(LoginFormContext);
  const {
    formFields,
    initialValues,
    validationSchema,
    requiredFields,
    initialErrors,
    idPrefix,
  } = forgot;

  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);

  const onSubmitHandler = (values: LoginFormProps.ForgotFields) => {
    LoginAPI.handleForgotPassword(values?.email)
      .then(() => {
        setResetEmailSent(true);
      })
      .catch(() => setResetEmailSent(true));
  };

  return (
    <React.Fragment>
      <FormContentHeading heading="Forgot your Password?" />
      {resetEmailSent ? (
        <FormContentsStyles.SuccessContent>
          <span style={{ fontSize: "23px" }}>&#127881;</span>
          <DJobsTypography styleName="djSuccessSubHeading" color="green180">
            {`Check your email to reset your password`}
          </DJobsTypography>
        </FormContentsStyles.SuccessContent>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={validationSchema}
          initialErrors={initialErrors}
        >
          {formik => {
            return (
              <Form style={{ width: "100%" }}>
                <FormContentsStyles.FieldWrapper>
                  {createDjobsInputField(formFields.email)}
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
                    Reset Password
                  </SubmitBtn>
                </FormContentsStyles.FieldWrapper>
                <CancelButtonWrapper>
                  <DjobsButton.Actions
                    variant="Cancel"
                    label="Cancel"
                    onClick={() => setLoginType("login")}
                  />
                </CancelButtonWrapper>
              </Form>
            );
          }}
        </Formik>
      )}
    </React.Fragment>
  );
};

const CancelButtonWrapper = styled.div`
  padding-top: 20px;
  width: fit-content;
  margin: auto 0;
  @media (min-width: 578px) {
    margin: auto;
  }
`;
