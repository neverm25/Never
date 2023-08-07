import React, { useState } from "react";
import { Checkbox } from "antd";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";

import { DJobsTypography } from "@DJobs/Components/Basic/";
import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import { register } from "../Utils/LoginForm";
import { SubmitBtn } from "../SubmitBtn";
import { DeviceTypeHelpers } from "@Helpers/index";
import { DJobsTextLink } from "@DJobs/Components/Basic/DjobsTextLink";
import { FormContentsStyles } from "./Styles/FormContentsStyles";
import { FormContentHeading } from "../FormContentHeading";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";
import { LoginFormProps } from "../LoginForm";
import { DjobsCommonFieldComponents } from "@DJobs/Components/Basic/DjobsFormFields/Common/Components";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils";
import { LoginAPI } from "@API";
import { handleFormSubmit } from "@Helpers/Formik";

export const RegisterFormContents = () => {
  const router = useRouter();

  const [isTNCChecked, setIsTNCChecked] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [errorMessageFromAPI, setErrorMessageFromAPI] = useState("");
  const {
    formFields,
    initialValues,
    validationSchema,
    requiredFields,
    idPrefix,
    initialErrors,
  } = register;

  const registerUser = async ({
    firstName,
    lastName,
    email,
    password,
  }: LoginFormProps.RegisterFields) => {
    //Construct request body
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("password", password);
    //Make API call
    try {
      const response = await fetch(DJOBS_API_PATHS.register, {
        method: "POST",
        body: formData,
      });
      //Handle response
      const isAuthenticationSuccess = response.ok;
      const returnData = await response.json();
      if (isAuthenticationSuccess) {
        setErrorMessageFromAPI("");
        LoginAPI.handleAuthSuccess(
          returnData.access_token,
          window.location.href
        );
        if (router.pathname.includes("login")) router.push(DJOBS_ROUTES.home);
      } else {
        const IS_API_ERROR = typeof returnData.detail === "object";
        const IS_VALIDATION_ERROR = !IS_API_ERROR;
        const detail = IS_VALIDATION_ERROR
          ? returnData.detail
          : returnData.detail[0];
        const errorMsg: string = IS_VALIDATION_ERROR
          ? detail
          : `${detail.loc[1]} ${detail.msg}`;
        setErrorMessageFromAPI(errorMsg);
      }
    } catch (exception) {
      router.push(DJOBS_ROUTES.error);
    }
  };

  return (
    <React.Fragment>
      <FormContentHeading
        heading="Welcome!"
        subHeading="Select your preferred registration method"
      />
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={validationSchema}
        initialErrors={initialErrors}
      >
        {formik => {
          const onSubmitHandler = (values: LoginFormProps.RegisterFields) => {
            registerUser(values);
          };

          return (
            <Form style={{ width: "100%" }}>
              <FormContentsStyles.FieldWrapper>
                {createDjobsInputField(formFields.firstName)}
                {createDjobsInputField(formFields.lastName)}
                {createDjobsInputField(formFields.email)}
                {createDjobsInputField(formFields.password)}
                {errorMessageFromAPI && (
                  <div style={{ width: "100%", marginTop: "5px" }}>
                    <DjobsCommonFieldComponents.ErrorLabel
                      value={errorMessageFromAPI}
                    />
                  </div>
                )}
                <FormContentsStyles.CheckBoxContainer>
                  <Checkbox
                    name="isTNCChecked"
                    checked={isTNCChecked}
                    onChange={() => setIsTNCChecked(prev => !prev)}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <DJobsTypography styleName="djIconText" color="black100">
                      I have read and agree to the
                    </DJobsTypography>
                    <DJobsTextLink
                      styleName="djIconText"
                      color={
                        DeviceTypeHelpers.isDeviceIsOrSmall({
                          comparedTo: "mobile",
                        })
                          ? "blue100"
                          : "purple100"
                      }
                      onClick={() => {
                        router.push(DJOBS_ROUTES.legalTerms);
                      }}
                    >
                      terms & conditions
                    </DJobsTextLink>
                  </div>
                </FormContentsStyles.CheckBoxContainer>
                <div style={{ width: "100%", marginTop: "10px" }}>
                  <SubmitBtn
                    width="100%"
                    isDisabled={
                      !isTNCChecked ||
                      (submitClicked && Object.keys(formik.errors).length !== 0)
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
                    Continue with Email
                  </SubmitBtn>
                </div>
              </FormContentsStyles.FieldWrapper>
            </Form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};
