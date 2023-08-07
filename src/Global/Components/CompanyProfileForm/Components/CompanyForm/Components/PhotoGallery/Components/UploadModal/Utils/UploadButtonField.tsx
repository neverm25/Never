import React from "react";
import { Field, FieldProps } from "formik";
import styled from "styled-components";

import { theme } from "@Global/Theme";
import { Button } from "@Global/Components/Basic";
import { UploadFileIcon } from "@Global/Components/Icons";
import { PhotoUploadButton } from "@Global/Components/Common/PhotoUploadButton";
import { PhotoUploadButtonProps } from "@Global/Components/Common/PhotoUploadButton/PhotoUploadButton";
import { CompanyProfileProps } from "@Global/Components/CompanyProfileForm/CompanyProfile";

export const UploadButtonField = (
  props: CompanyProfileProps.uploadButtonFieldProps
) => {
  const { fileContent, setFileContent, fileObject, setFileObject } = props;
  const uploadButtonProps: PhotoUploadButtonProps.Button = {
    modalTitle: "Company Photo",
    fileContent,
    setFileContent,
    fileObject,
    setFileObject,
    showFileList: true,
  };

  return (
    <Field name="uploadedContent" key="uploadedContent">
      {({ field, meta, form }: FieldProps) => {
        const { name } = field;
        const { error, touched } = meta;
        const { setFieldError, setFieldValue, setFieldTouched } = form;

        const formikFieldProps: PhotoUploadButtonProps.formikFieldProps = {
          fieldName: name,
          fieldError: error,
          fieldTouched: touched,
          setFieldError,
          setFieldValue,
          setFieldTouched,
        };

        return (
          <React.Fragment>
            <UploadButtonWrapper>
              <PhotoUploadButton {...uploadButtonProps} {...formikFieldProps}>
                <Button
                  buttonCategory="icon"
                  btnType="button"
                  variant="plain"
                  prefixIcon={
                    <UploadFileIcon size={16} color={theme.colors.black90} />
                  }
                >
                  {"UPLOAD"}
                </Button>
              </PhotoUploadButton>
            </UploadButtonWrapper>
            {touched && error && <ErrorMessage>{error}</ErrorMessage>}
          </React.Fragment>
        );
      }}
    </Field>
  );
};

const UploadButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2px;
`;
const ErrorMessage = styled.div`
  ${theme.text.errorMessage};
  width: fit-content;
  height: fit-content;
  margin: 0;
  margin-bottom: 10px;
`;
