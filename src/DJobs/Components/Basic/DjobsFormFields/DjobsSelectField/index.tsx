import * as React from "react";
import styled from "styled-components";
import { Select } from "antd";

import { AngleDownIcon } from "@Global/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { DjobsFormFieldsProps } from "../DjobsFormFields";
import {
  DjobsInputFieldCommonStyles,
  DJobsInputStyledComponents,
} from "../Common/InputStyles";
import { DjobsCommonFieldComponents } from "../Common/Components";

const { Option } = Select;

export const DjobsSelectField = (props: DjobsFormFieldsProps.SelectField) => {
  const {
    name,
    variant = "default",
    label,
    onBlur,
    onSelect,
    options,
    value,
    defaultValue = value,
    disabled = false,
    placeholder,
    width = "100%",
    showError = true,
    hasError = false,
    error = "Error",
    allowSearch = false,
    isRequired = false,
    showRequired = isRequired,
    idPrefix,
    handleChange,
    setFieldValue,
    description,
    notFoundMsg = "no data",
  } = props;
  const optionStyle = {
    ...djobsTheme.text.djSelectFieldOption,
    color: djobsTheme.colors.blue90,
    borderRadius: "7px",
    paddingTop: "10px",
  };

  const ContainerForVariant: {
    [Key in DjobsFormFieldsProps.InputVariant]: any;
  } = {
    Questionairre: QuestionairreSelect,
    WhiteBackground: WhiteSelect,
    default: DefaultSelect,
  };
  const Container = ContainerForVariant[variant];

  return (
    <Container containerWidth={width} hasError={hasError} value={value}>
      <DJobsInputStyledComponents.LabelWrapper>
        {label && <DjobsCommonFieldComponents.InputLabel value={label} />}
        {isRequired && showRequired && (
          <DjobsCommonFieldComponents.RequiredLabel value="Required" />
        )}
      </DJobsInputStyledComponents.LabelWrapper>
      <DJobsInputStyledComponents.FieldWrapper>
        <Select
          id={idPrefix + name}
          defaultValue={defaultValue ? defaultValue : null}
          disabled={disabled}
          suffixIcon={
            <AngleDownIcon color={djobsTheme.colors.black80} size={25} />
          }
          onSelect={(value: string) => {
            onSelect(value);
            handleChange && handleChange(value);
          }}
          onBlur={onBlur}
          placeholder={placeholder}
          showSearch={allowSearch}
          optionFilterProp="children"
          popupClassName="djobsSelectField"
          value={value}
          notFoundContent={
            <div style={{ textAlign: "center" }}>{notFoundMsg}</div>
          }
          onSearch={value => {
            setFieldValue(name, value);
            if (handleChange) value.length > 2 && handleChange(value);
          }}
        >
          {options.map(({ value, label }) => (
            <Option key={value} value={value} style={optionStyle}>
              {label}
            </Option>
          ))}
        </Select>
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

type SelectContainerProps = {
  containerWidth: string;
  hasError: boolean;
  value: string;
};

const DefaultSelect = styled.div<SelectContainerProps>`
  width: 100% !important;

  .ant-select {
    display: block;
    border-radius: 6px !important;
  }
  .ant-select-selector {
    ${DjobsInputFieldCommonStyles.DefaultInputField};
    ${DjobsInputFieldCommonStyles.DefaultInputFieldText};
    cursor: pointer !important;
    align-items: center;
    height: 56px !important;
  }
  .ant-select-selector:hover {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldHover};
  }
  .ant-select-focused .ant-select-selector {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldFocus};
  }
  .ant-select-focused {
    border: none !important;
    height: 56px !important;
  }
  .ant-select-selection-placeholder {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldPlaceholder};
  }
  .ant-select-selection-search {
    padding-top: 12px;
  }
`;
const WhiteSelect = styled(DefaultSelect)`
  .ant-select-selector {
    ${DjobsInputFieldCommonStyles.WhiteInputField};
  }
`;
const QuestionairreSelect = styled(WhiteSelect)`
  ${DjobsInputFieldCommonStyles.QuestionairreInputContainer};
  .ant-select-selector {
    ${DjobsInputFieldCommonStyles.QuestionairreInputField};
  }
`;
