import React, { useState } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";

import { DJobsTypography } from "@DJobs/Components/Basic/";
import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import { reset } from "../Utils/LoginForm";
import { SubmitBtn } from "../SubmitBtn";
import { djobsTheme } from "@DJobs/Theme";
import { CheckIconWithCircle } from "@Global/Components/Icons";
import { FormContentsStyles } from "./Styles/FormContentsStyles";
import { FormContentHeading } from "../FormContentHeading";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";
import { handleFormSubmit } from "@Helpers/Formik";
import { LoginFormProps } from "../LoginForm";
import { LoginAPI } from "@API";

export const ResetFormContents = () => {
  const [isResetSuccess, setIsResetSuccess] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const {
    formFields,
    initialValues,
    validationSchema,
    requiredFields,
    idPrefix,
    initialErrors,
  } = reset;
  const { password, confirmPassword } = formFields;

  const router = useRouter();
  const { email, token }: any = router?.query;

  const onSubmitHandler = (values: LoginFormProps.ResetFields) => {
    LoginAPI.handleResetPassword({ ...values, email, token })
      .then(() => {
        setIsResetSuccess(true);
      })
      .catch(error => console.log(error, "reset-password-error"));
  };

  return (
    <React.Fragment>
      {isResetSuccess ? (
        <FormContentHeading heading="Password Reset" />
      ) : (
        <FormContentHeading
          heading="Reset Your Password"
          subHeading="Please create a new password to log in"
        />
      )}
      {isResetSuccess ? (
        <React.Fragment>
          <SuccessContent>
            <CheckIconWithCircle color={djobsTheme.colors.white100} size={34} />
            <SuccessTextWrapper>
              <DJobsTypography styleName="djSuccessHeading" color="black100">
                Success
              </DJobsTypography>
              <DJobsTypography styleName="djSuccessSubHeading" color="black100">
                Your password has been updated!
              </DJobsTypography>
            </SuccessTextWrapper>
          </SuccessContent>
          <SubmitBtn
            width="auto"
            onClick={() => router.push(DJOBS_ROUTES.login)}
          >
            Sign In
          </SubmitBtn>
        </React.Fragment>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={validationSchema}
          initialErrors={initialErrors}
        >
          {formik => {
            const { getFieldMeta, setFieldError } = formik;

            //Password and confirm password has to be same
            const passwordMeta = getFieldMeta("password");
            const confirmMeta = getFieldMeta("confirmPassword");
            if (
              passwordMeta.touched &&
              confirmMeta.touched &&
              !confirmMeta.error &&
              passwordMeta.value !== confirmMeta.value
            ) {
              setFieldError("confirmPassword", "Passwords must match");
            }
            return (
              <Form style={{ width: "100%" }}>
                <FormContentsStyles.FieldWrapper>
                  {createDjobsInputField(password)}
                  {createDjobsInputField(confirmPassword)}

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
              </Form>
            );
          }}
        </Formik>
      )}
    </React.Fragment>
  );
};

const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 70px;
  width: 100%;
  padding: 0 40px;
  margin-bottom: 30px;
  align-items: center;
  background: ${djobsTheme.colors.green50};
  border-radius: 65.5755px;
`;
const SuccessTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-grow: start;
`;
