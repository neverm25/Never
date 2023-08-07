import React, { useContext } from "react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";

import { Button } from "@Global/Components/Basic";
import {
  createInputFields,
  getRequiredInputFields,
} from "@Helpers/Formik/formikMultipleInputFields.helpers";
import {
  companyProfileFields,
  leftInputFields,
  rightInputFields,
  companyProfileValidationSchema,
} from "./Utils/CompanyFormUtils";
import { CompanyProfileProps } from "../../CompanyProfile";
import { PhotoGallery } from "./Components/PhotoGallery";
import { CompanyProfileContext } from "../../Context/CompanyProfileContext";
import { UserCircleIcon, WarningIcon } from "@Global/Components/Icons";
import { theme } from "@Global/Theme";
import {
  CompanyFormContainer,
  ButtonWrapper,
  DataWrapper,
  FormInputs,
  Left,
  Right,
  SaveProfileButtonWrapper,
  ViewProfileButtonWrapper,
  WarningMessage,
  WarningWrapper,
} from "./Styles/CompanyFormStyles";

const companyProfileInputs: CompanyProfileProps.InputFields = {
  companyDescription: "",
  CompanySize: "",
  companyBio: "",
  companyDisplayName: "",
  locations: "",
};

export const CompanyForm = () => {
  const router = useRouter();
  const { setFormFields, showModal } = useContext(CompanyProfileContext);
  const [showData, setShowData] = React.useState(false);

  const onSubmitHandler = () => {};

  return (
    <CompanyFormContainer>
      <Formik
        initialValues={companyProfileInputs}
        onSubmit={onSubmitHandler}
        validationSchema={companyProfileValidationSchema}
      >
        {formik => {
          const requiredInputFields = getRequiredInputFields(
            companyProfileFields
          );
          const requiredInputFieldKeys = Object.keys(requiredInputFields);

          //Check any Field has validation error
          let hasValidationError: boolean = false;
          requiredInputFieldKeys.forEach(key => {
            const metaData = formik.getFieldMeta(key);
            if (!hasValidationError) {
              hasValidationError =
                metaData.touched && metaData.error ? true : false;
            }
          });

          //Check any values in form has been changed
          const changeDetected =
            JSON.stringify(formik.values) !==
            JSON.stringify(formik.initialValues);

          return (
            <Form>
              <FormInputs>
                <Left>{createInputFields(leftInputFields)}</Left>
                <Right>{createInputFields(rightInputFields)}</Right>
              </FormInputs>
              <PhotoGallery />
              <ButtonWrapper>
                <SaveProfileButtonWrapper>
                  <Button
                    key="saveProfileButton"
                    buttonCategory="main"
                    variant={hasValidationError ? "disabled" : "success"}
                    onClick={event => {
                      event.preventDefault();
                      if (Object.keys(formik.touched).length > 0) {
                        if (formik.isValid) {
                          setFormFields(formik.values);
                          onSubmitHandler();
                          setShowData(true);
                        }
                      }
                      formik.setTouched(
                        getRequiredInputFields(companyProfileFields)
                      );
                      formik.validateForm();
                    }}
                  >
                    {" SAVE PROFILE CHANGES "}
                  </Button>
                </SaveProfileButtonWrapper>
                <ViewProfileButtonWrapper>
                  <Button
                    key={"ViewCompanyProfile"}
                    buttonCategory="icon"
                    variant="plain"
                    prefixIcon={
                      <UserCircleIcon color={theme.colors.black90} size={15} />
                    }
                    onClick={() => router.push("./")}
                  >
                    {`View Company Profile`}
                  </Button>
                  {showModal || changeDetected ? (
                    <React.Fragment>
                      <WarningWrapper>
                        <WarningIcon size={20} />
                        <WarningMessage className="warning-message">
                          {`There’s unsaved changes on this page`}
                        </WarningMessage>
                      </WarningWrapper>
                    </React.Fragment>
                  ) : null}
                </ViewProfileButtonWrapper>
              </ButtonWrapper>
              {showData && (
                <DataWrapper>
                  <div>FIELDS:</div>
                  {JSON.stringify(formik.values, null, 2)}
                </DataWrapper>
              )}
            </Form>
          );
        }}
      </Formik>
    </CompanyFormContainer>
  );
};
