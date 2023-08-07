import React from "react";
import styled from "styled-components";
import { Input, InputProps } from "antd";

import { DjobsFormFieldsProps } from "../DjobsFormFields";
import {
  DJobsInputStyledComponents,
  DjobsInputFieldCommonStyles,
} from "../Common/InputStyles";
import { DjobsCommonFieldComponents } from "../Common/Components";

export const DjobsInputField = (props: DjobsFormFieldsProps.InputField) => {
  const {
    label,
    name,
    value,
    placeholder,
    disabled,
    maxLength,
    max,
    onBlur,
    error,
    hasError = false,
    showError = hasError,
    onChange,
    width = "100%",
    suffix,
    isRequired,
    showRequired = isRequired,
    variant = "default",
    inputType = "text",
    idPrefix,
    description,
  } = props;

  const inputProps: InputProps = {
    name,
    value,
    placeholder,
    disabled,
    maxLength,
    max,
    onBlur,
    onChange,
  };

  const ContainerForVariant: {
    [Key in DjobsFormFieldsProps.InputVariant]: any;
  } = {
    Questionairre: QuestionairreInput,
    WhiteBackground: WhiteInput,
    default: DefaultInput,
  };
  const Container = ContainerForVariant[variant];

  return (
    <Container containerWidth={width} value={props.value} hasError={hasError}>
      <DJobsInputStyledComponents.LabelWrapper>
        {label && <DjobsCommonFieldComponents.InputLabel value={label} />}
        {isRequired && showRequired && (
          <DjobsCommonFieldComponents.RequiredLabel value="Required" />
        )}
      </DJobsInputStyledComponents.LabelWrapper>
      <DJobsInputStyledComponents.FieldWrapper>
        <Input
          id={idPrefix + name}
          {...inputProps}
          suffix={suffix}
          type={inputType === "number" ? "text" : inputType}
        />
      </DJobsInputStyledComponents.FieldWrapper>
      {description && (
        <DjobsCommonFieldComponents.Description value={description} />
      )}
      {showError && hasError && (
        <DjobsCommonFieldComponents.ErrorLabel value={error} />
      )}
    </Container>
  );
};

type ContainerProps = {
  containerWidth: string;
  value: string;
  hasError: boolean;
};
const DefaultInput = styled.div<ContainerProps>`
  width: 100%;

  input {
    ${DjobsInputFieldCommonStyles.DefaultInputField};
    ${DjobsInputFieldCommonStyles.DefaultInputFieldText};
    height: 56px;
  }
  input:hover {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldHover};
  }
  input:focus {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldFocus};
  }
  .ant-input-suffix {
    cursor: pointer;
  }
  input::placeholder {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldPlaceholder};
  }
  input::-webkit-inner-spin-button {
    display: none;
  }

  //Password input handling
  .ant-input-affix-wrapper {
    padding: 0px 11px !important;
    ${DjobsInputFieldCommonStyles.DefaultInputField};
    ${DjobsInputFieldCommonStyles.DefaultInputFieldText};
  }
  .ant-input-affix-wrapper:hover {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldHover};
  }
  .ant-input-affix-wrapper input {
    background: transparent !important;
    box-shadow: none !important;
    border: 0px !important;
    border-radius: 6px;
    margin-top: -3px;
    margin-right: 2px;
  }
  .ant-input-affix-wrapper-focused {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldFocus};
  }
`;
const WhiteInput = styled(DefaultInput)<ContainerProps>`
  input {
    ${DjobsInputFieldCommonStyles.WhiteInputField};
  }
`;
const QuestionairreInput = styled(WhiteInput)<ContainerProps>`
  ${DjobsInputFieldCommonStyles.QuestionairreInputContainer};
  input {
    ${DjobsInputFieldCommonStyles.QuestionairreInputField};
  }
`;
