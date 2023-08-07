import React from "react";
import styled from "styled-components";
import { Checkbox } from "antd";

import { djobsTheme } from "@DJobs/Theme";
import {
  DjobsInputFieldCommonStyles,
  DJobsInputStyledComponents,
} from "../Common/InputStyles";
import { DjobsFormFieldsProps } from "../DjobsFormFields";
import { DjobsCommonFieldComponents } from "../Common/Components";

export const DjobsCheckBoxGroup = (
  props: DjobsFormFieldsProps.CheckboxFieldGroupProps
) => {
  const {
    options,
    width,
    label,
    onChange,
    name,
    variant = "default",
    isRequired,
    error = "Input required",
    hasError,
    value,
    idPrefix,
    description,
  } = props;

  const ContainerForVariant: {
    [Key in DjobsFormFieldsProps.InputVariant]: any;
  } = {
    Questionairre: QuestionairreContainer,
    WhiteBackground: WhiteContainer,
    default: DefaultContainer,
  };
  const Container = ContainerForVariant[variant];

  return (
    <Container hasError={hasError} containerWidth={width}>
      <DJobsInputStyledComponents.LabelWrapper>
        {label && <DjobsCommonFieldComponents.InputLabel value={label} />}
        {isRequired && (
          <DjobsCommonFieldComponents.RequiredLabel value="Required" />
        )}
      </DJobsInputStyledComponents.LabelWrapper>
      <DJobsInputStyledComponents.FieldWrapper id={idPrefix + name}>
        <Checkbox.Group
          options={options}
          name={name}
          onChange={onChange}
          value={value}
        />
      </DJobsInputStyledComponents.FieldWrapper>
      {description && (
        <DjobsCommonFieldComponents.Description value={description} />
      )}
      {hasError && <DjobsCommonFieldComponents.ErrorLabel value={error} />}
    </Container>
  );
};

const DefaultContainer = styled.div<{
  containerWidth: string;
  hasError: boolean;
}>`
  .ant-checkbox {
    transform: scale(1.1);
  }
  .ant-checkbox-group {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 8px;
  }
  .ant-checkbox-wrapper > span {
    margin-right: 10px;
    ${DjobsInputFieldCommonStyles.DefaultInputFieldText};
    color: ${djobsTheme.colors.blueGreyDark} !important;
  }
  @media (min-width: 768px) {
    min-width: 150px;
    width: ${({ containerWidth }) => containerWidth};
  }
`;
const WhiteContainer = styled(DefaultContainer)`
  background: ${djobsTheme.colors.white100};
`;
const QuestionairreContainer = styled(DefaultContainer)`
  border: 1px solid ${djobsTheme.colors.black05};
  background: ${({ hasError }) =>
    hasError ? djobsTheme.colors.red10 : djobsTheme.colors.white110};
  box-shadow: ${djobsTheme.effects.questionairresBox};
  border-radius: 13px;
  padding: 30px 20px;

  @media (min-width: 768px) {
    padding: 30px 40px;
  }
`;
