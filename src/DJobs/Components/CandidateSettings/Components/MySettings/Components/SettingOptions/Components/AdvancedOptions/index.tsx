// #region Global Imports
import React, { useState } from "react";
import { Row } from "antd";
import { Formik, Form } from "formik";
// #endregion Global Imports

// #region Local Imports
import {
  Cancel,
  CloseAccountPhase,
  Confirmation,
  ContentWrapper,
  FieldWrapper,
  FormContainer,
} from "./Styles/AdvancedOptionsStyle";
import {
  LinkButton,
  DjobsButton,
  DJobsTypography,
} from "@DJobs/Components/Basic";
import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import {
  advancedOptionFormInitialValues,
  advancedOptionFormValidationSchema,
  deleteAccountDescription,
  FormFields,
  idPrefix,
  requiredFields,
} from "./Utils/AdvancedOptionsData";
import { IAdvancedOptionsProps } from "./AdvancedOptions";
import { handleFormSubmit } from "@Helpers/Formik";
import { CandidateSettingsApi } from "@API/CandidateSettings";
import { AdvancedOptionsFormFieldProps } from "./Utils/AdvancedOptions";
import { reduxActions } from "@Redux/actions";
import { useRouter } from "next/router";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";
// #endregion Local Imports

const AdvancedOptions: React.FC<IAdvancedOptionsProps.IProps> = ({
  closeAccountPhase,
  setCloseAccountPhase,
}) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmitHandler = (value: AdvancedOptionsFormFieldProps.Fields) => {
    CandidateSettingsApi.closeAccount(value)
      .then(() => {
        reduxActions.login.LogoutFromDjobs();
        router.push(DJOBS_ROUTES.home);
      })
      .catch(error => {
        console.log("Error while close account", error.response.data.detail);
        setErrorMessage(error.response.data.detail);
      });
  };
  return (
    <ContentWrapper>
      {!closeAccountPhase && (
        <LinkButton
          variant={"closeAccount"}
          onClick={() => setCloseAccountPhase(true)}
        >
          Close account
        </LinkButton>
      )}
      {closeAccountPhase && (
        <CloseAccountPhase>
          <Confirmation>
            <DJobsTypography styleName="djBackButtonText" color="red150">
              Are you sure?
            </DJobsTypography>
            <DJobsTypography styleName="djAlertDescription" color="red150">
              {deleteAccountDescription}
            </DJobsTypography>
          </Confirmation>
          <FormContainer>
            <Formik
              initialValues={advancedOptionFormInitialValues}
              onSubmit={() => {}}
              validationSchema={advancedOptionFormValidationSchema}
            >
              {formik => (
                <Form style={{ width: "", marginTop: "20px" }}>
                  <FieldWrapper>
                    {createDjobsInputField({
                      ...FormFields.currentPassword,
                      errorMessage,
                    })}
                  </FieldWrapper>

                  <Row justify="start" style={{ margin: "15px 0 25px" }}>
                    <DjobsButton.Actions
                      variant="Close"
                      label="close my account"
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
              )}
            </Formik>
            <Cancel>
              <LinkButton
                variant="cancel"
                onClick={() => setCloseAccountPhase(false)}
              >
                CANCEL
              </LinkButton>
            </Cancel>
          </FormContainer>
        </CloseAccountPhase>
      )}
    </ContentWrapper>
  );
};

export default AdvancedOptions;
