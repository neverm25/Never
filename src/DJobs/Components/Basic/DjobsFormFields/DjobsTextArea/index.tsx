import React from "react";
import { Input } from "antd";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import {
  DjobsInputFieldCommonStyles,
  DJobsInputStyledComponents,
} from "../Common/InputStyles";
import { DjobsCommonFieldComponents } from "../Common/Components";
import { DjobsFormFieldsProps } from "../DjobsFormFields";

const { TextArea } = Input;

export const DjobsTextArea = (props: DjobsFormFieldsProps.TextArea) => {
  const {
    name,
    label,
    value,
    placeholder,
    disabled,
    onChangeHandler,
    onBlur,
    hasError,
    error = "Invalid input",
    showCount = false,
    maxLength = 100,
    minRows = 4,
    maxRows = 6,
    isRequired,
    variant = "default",
    idPrefix,
    description,
  } = props;

  const ContainerForVariant: {
    [Key in DjobsFormFieldsProps.InputVariant]: any;
  } = {
    Questionairre: QuestionairreTextArea,
    WhiteBackground: WhiteTextArea,
    default: DefaultTextArea,
  };
  const Container = ContainerForVariant[variant];

  return (
    <Container containerWidth={"100%"} value={props.value} hasError={hasError}>
      <DJobsInputStyledComponents.LabelWrapper>
        {label && <DjobsCommonFieldComponents.InputLabel value={label} />}
        {isRequired && (
          <DjobsCommonFieldComponents.RequiredLabel value="Required" />
        )}
      </DJobsInputStyledComponents.LabelWrapper>
      <DJobsInputStyledComponents.FieldWrapper>
        <TextArea
          id={idPrefix + name}
          name={name}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
          onBlur={onBlur}
          disabled={disabled}
          showCount={showCount}
          maxLength={maxLength}
          autoSize={{ minRows, maxRows }}
        />
      </DJobsInputStyledComponents.FieldWrapper>
      {description && (
        <DjobsCommonFieldComponents.Description value={description} />
      )}
      {hasError && !value ? (
        <DjobsCommonFieldComponents.ErrorLabel value={error} />
      ) : null}
    </Container>
  );
};

type TextAreaContainerProps = {
  containerWidth?: string;
  value?: string;
  hasError: boolean;
};

const DefaultTextArea = styled.div<TextAreaContainerProps>`
  width: 100%;

  @media (min-width: 768px) {
    min-width: 150px;
    width: ${({ containerWidth }) => containerWidth};
  }

  textarea {
    padding: 15px 12px;
    ${DjobsInputFieldCommonStyles.DefaultInputField};
    ${DjobsInputFieldCommonStyles.DefaultInputFieldText};

    textarea::placeholder {
      ${DjobsInputFieldCommonStyles.DefaultInputFieldPlaceholder};
    }
    .ant-input-textarea-show-count::after {
      color: ${djobsTheme.colors.black50};
    }
    ::-webkit-input-placeholder {
      ${DjobsInputFieldCommonStyles.DefaultInputFieldPlaceholder};
    }
  }
  textarea:hover {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldHover};
  }
  textarea:focus {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldFocus};
  }
`;
const WhiteTextArea = styled(DefaultTextArea)`
  textarea {
    ${DjobsInputFieldCommonStyles.WhiteInputField};
  }
`;
const QuestionairreTextArea = styled(DefaultTextArea)`
  ${DjobsInputFieldCommonStyles.QuestionairreInputContainer};
  textarea {
    ${DjobsInputFieldCommonStyles.QuestionairreInputField};
  }
`;
