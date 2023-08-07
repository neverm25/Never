// #region Global Imports
import React from "react";
import { Form, Formik } from "formik";
import { Grid, Row } from "antd";
import { toast } from "react-toastify";

// #endregion Global Imports

// #region Local Imports
import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import {
  FieldWrapper,
  MainWrapper,
} from "./Styles/ResetPasswordFormFieldsStyles";
import { resetFormData } from "./Utils";
import { DjobsButton } from "@DJobs/Components/Basic";
import { IResetPasswordProps } from "./ResetPassword";
import { handleFormSubmit } from "@Helpers/Formik";
import { UpdatePasswordFormFieldsProps } from "./Utils/FormFieldsData";
import { CandidateSettingsApi } from "@API/CandidateSettings";

// #endregion Local Imports

const ResetPassword: React.FC<IResetPasswordProps.IProps> = ({
  setAccordianOpen,
}) => {
  const screens = Grid.useBreakpoint();
  const {
    FormFields,
    idPrefix,
    requiredFields,
    resetPasswordFormInitialValues,
    resetPasswordFormValidationSchema,
    initialErrors,
  } = resetFormData;

  const onSubmitHandler = (values: UpdatePasswordFormFieldsProps.Fields) => {
    CandidateSettingsApi.updatePassword(values)
      .then(() => {
        toast.success("Your password sucessfully updated");
        setAccordianOpen("");
      })
      .catch(error => toast.error(error.response.data.detail));
  };

  return (
    <MainWrapper>
      <Formik
        initialValues={resetPasswordFormInitialValues}
        onSubmit={() => {}}
        validationSchema={resetPasswordFormValidationSchema}
        initialErrors={initialErrors}
      >
        {formik => {
          return (
            <Form style={{ width: screens.lg ? "50%" : "100%" }}>
              <FieldWrapper>
                {createDjobsInputField(FormFields.currentPassword)}
              </FieldWrapper>
              <FieldWrapper>
                {createDjobsInputField(FormFields.newPassword)}
              </FieldWrapper>
              <Row
                style={{
                  margin: screens.lg ? "15px 0px 10px" : "15px 0px 10px",
                  justifyContent: screens.lg ? "start" : "end",
                }}
              >
                <DjobsButton.Actions
                  variant="Submit"
                  label="UPDATE PASSWORD"
                  onClick={event => {
                    event.preventDefault();
                    handleFormSubmit({
                      formik,
                      idPrefix,
                      onSubmitHandler,
                      requiredFields,
                    });
                  }}
                />
              </Row>
            </Form>
          );
        }}
      </Formik>
    </MainWrapper>
  );
};

export default ResetPassword;
