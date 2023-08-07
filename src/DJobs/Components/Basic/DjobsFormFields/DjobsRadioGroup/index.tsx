import React from "react";

import { djobsTheme } from "@DJobs/Theme";
import { Radio, Space } from "antd";
import styled from "styled-components";
import { DjobsFormFieldsProps } from "..";
import {
  DjobsInputFieldCommonStyles,
  DJobsInputStyledComponents,
} from "../Common/InputStyles";
import { DjobsCommonFieldComponents } from "../Common/Components";

export const DjobsRadioGroup = ({
  options,
  name,
  value,
  variant = "default",
  label,
  isRequired = false,
  hasError,
  error = "Input required",
  idPrefix,
  handleChange,
  description,
}: DjobsFormFieldsProps.RadioFieldGroupProps) => {
  const ContainerForVariant: {
    [Key in DjobsFormFieldsProps.InputVariant]: any;
  } = {
    Questionairre: QuestionairreContainer,
    WhiteBackground: WhiteContainer,
    default: DefaultContainer,
  };
  const Container = ContainerForVariant[variant];

  return (
    <Container hasError={hasError} containerWidth={"100%"}>
      <DJobsInputStyledComponents.LabelWrapper>
        {label && <DjobsCommonFieldComponents.InputLabel value={label} />}
        {isRequired && (
          <DjobsCommonFieldComponents.RequiredLabel value="Required" />
        )}
      </DJobsInputStyledComponents.LabelWrapper>
      <DJobsInputStyledComponents.FieldWrapper>
        <Radio.Group
          name={name}
          value={value}
          onChange={handleChange}
          id={idPrefix + name}
        >
          <Space direction="vertical">
            {options.map((option, index) => (
              <Radio key={index} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </DJobsInputStyledComponents.FieldWrapper>
      {description && (
        <DjobsCommonFieldComponents.Description value={description} />
      )}
      {hasError && <DjobsCommonFieldComponents.ErrorLabel value={error} />}
    </Container>
  );
};

const DefaultContainer = styled.div<{
  hasError: boolean;
  containerWidth: string;
}>`
  width: 100%;
  .ant-radio-wrapper > span {
    margin-right: 10px;
    ${DjobsInputFieldCommonStyles.DefaultInputFieldText};
    color: ${djobsTheme.colors.blueGreyDark} !important;
  }
  .ant-radio-inner {
    border-width: 2.5px;
    transform: scale(1.3);
    background-color: white;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: ${djobsTheme.colors.blue50};
    border-width: 2px;
    background: ${djobsTheme.colors.white100};
  }
  .ant-radio-checked .ant-radio-inner:after {
    background: ${djobsTheme.colors.blue100};
  }
  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: ${djobsTheme.colors.blue50};
  }
  .ant-radio:hover .ant-radio-inner {
    border-color: ${djobsTheme.colors.blue100};
  }

  @media (min-width: 768px) {
    min-width: 150px;
    width: ${({ containerWidth }) => containerWidth};
  }
`;
const WhiteContainer = styled(DefaultContainer)`
  background: ${djobsTheme.colors.white100};
`;
const QuestionairreContainer = styled(WhiteContainer)`
  background: ${({ hasError }) =>
    hasError ? djobsTheme.colors.red05 : djobsTheme.colors.white110};
  box-shadow: ${djobsTheme.effects.questionairresBox};
  border: 1px solid ${djobsTheme.colors.black05};
  border-radius: 13px;
  padding: 30px 20px;
  @media (min-width: 768px) {
    padding: 30px 40px;
  }
`;
