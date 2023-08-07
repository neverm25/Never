import React from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";

import { Button } from "@Global/Components/Basic";
import {
  createInputFields,
  getRequiredInputFields,
} from "@Helpers/Formik/formikMultipleInputFields.helpers";
import { CompanyProfileProps } from "@Global/Components/CompanyProfileForm/CompanyProfile";
import {
  uploadModalInputFields,
  uploadModalValidationSchema,
} from "../Utils/UploadModalFormHelper";
import { UploadButtonField } from "../Utils/UploadButtonField";
import {
  ErrorMessage,
  FormInputs,
  ButtonContainer,
  SaveButtonWrapper,
} from "./Styles/UploadModalFormStyles";

export const UploadModalForm = (props: CompanyProfileProps.UploadModalForm) => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const {
    handleSubmit,
    handleCancel,
    initialValues,
    setFileContent,
    setFileObject,
  } = props;
  const fileContent = initialValues.fileContent;
  const fileObject = initialValues.fileObject;
  const isEdit = fileContent ? true : false;

  const UploadButtonFieldProps: CompanyProfileProps.uploadButtonFieldProps = {
    fileContent,
    setFileContent,
    fileObject,
    setFileObject,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={uploadModalValidationSchema}
    >
      {formik => {
        //Handlers
        const submitForm = () => {
          if (formik.isValid) {
            try {
              handleSubmit(formik.values);
              if (isEdit) {
                toast.info("Photo details updated successfully");
              } else {
                toast.success("Photo added successfully");
              }
            } catch (exception) {
              if (exception instanceof Error) {
                setErrorMessage(exception.message);
                toast.error("Error while saving photo details");
              }
            }
          }
        };

        const handleClick = () => {
          if (isEdit || Object.keys(formik.touched).length > 0) {
            submitForm();
          }

          if (isEdit) {
            formik.setTouched(getRequiredInputFields(uploadModalInputFields));
          } else {
            formik.setTouched({
              ...getRequiredInputFields(uploadModalInputFields),
              uploadedContent: true,
            });
          }
          formik.validateForm();
        };

        return (
          <Form style={{ width: "97%" }}>
            <FormInputs>{createInputFields(uploadModalInputFields)}</FormInputs>
            <UploadButtonField {...UploadButtonFieldProps} />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <ButtonContainer>
              <SaveButtonWrapper>
                <Button
                  key="saveButton"
                  buttonCategory="main"
                  variant={"success"}
                  onClick={handleClick}
                >
                  {" SAVE "}
                </Button>
              </SaveButtonWrapper>
              <Button
                key="cancelButton"
                buttonCategory="main"
                variant="cancel"
                onClick={handleCancel}
              >
                {" CANCEL "}
              </Button>
            </ButtonContainer>
          </Form>
        );
      }}
    </Formik>
  );
};
