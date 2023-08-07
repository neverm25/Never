import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
import styled from "styled-components";

import { CalendarIcon } from "@Global/Components/Icons";
import {
  DjobsInputFieldCommonStyles,
  DJobsInputStyledComponents,
} from "../Common/InputStyles";
import { DjobsCommonFieldComponents } from "../Common/Components";
import { djobsTheme } from "@DJobs/Theme";
import { DjobsFormFieldsProps } from "../DjobsFormFields";

export const DjobsDatePicker = ({
  name,
  value,
  label,
  width = "410px",
  onChange,
  hasError,
  error,
  isRequired,
  variant = "default",
  onBlur,
  idPrefix,
  description,
}: DjobsFormFieldsProps.Datepicker) => {
  const ContainerForVariant: {
    [Key in DjobsFormFieldsProps.InputVariant]: any;
  } = {
    Questionairre: QuestionairreDatePicker,
    WhiteBackground: WhiteDatePicker,
    default: DefaultDatePicker,
  };
  const Container = ContainerForVariant[variant];
  const containerProps = { value, width, hasError, containerwidth: width };
  const dateFormat = "DD/MM/YYYY";

  return (
    <Container {...containerProps}>
      <DJobsInputStyledComponents.LabelWrapper>
        {label && <DjobsCommonFieldComponents.InputLabel value={label} />}
        {isRequired && (
          <DjobsCommonFieldComponents.RequiredLabel value="Required" />
        )}
      </DJobsInputStyledComponents.LabelWrapper>

      <DJobsInputStyledComponents.FieldWrapper>
        <DatePicker
          id={idPrefix + name}
          format={dateFormat}
          dropdownClassName="custom-antd-datepicker"
          suffixIcon={<CalendarIcon color={djobsTheme.colors.black80} />}
          onChange={onChange}
          onBlur={onBlur}
          inputReadOnly
          allowClear={false}
          defaultValue={value ? moment(value, dateFormat) : null}
        />
      </DJobsInputStyledComponents.FieldWrapper>
      {description && (
        <DjobsCommonFieldComponents.Description value={description} />
      )}
      {hasError && <DjobsCommonFieldComponents.ErrorLabel value={error} />}
    </Container>
  );
};

type DatePickerContainerProps = {
  width: string;
  hasError: boolean;
  value: string;
  containerWidth: string;
};

const DefaultDatePicker = styled.div<DatePickerContainerProps>`
  width: 100% !important;

  .ant-picker {
    ${DjobsInputFieldCommonStyles.DefaultInputField};
    cursor: pointer;
    height: 56px !important;

    input::placeholder {
      ${DjobsInputFieldCommonStyles.DefaultInputFieldPlaceholder};
    }
  }
  .ant-picker-input > input {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldText};
    cursor: pointer;
  }
  .ant-picker:hover {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldHover};
  }
  .ant-picker:hover,
  .ant-picker-focused {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldFocus};
  }
  .ant-picker-focused {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldFocus};
  }
`;
const WhiteDatePicker = styled(DefaultDatePicker)`
  .ant-picker {
    ${DjobsInputFieldCommonStyles.WhiteInputField};
  }
`;
const QuestionairreDatePicker = styled(WhiteDatePicker)`
  ${DjobsInputFieldCommonStyles.QuestionairreInputContainer};

  .ant-picker {
    cursor: pointer;
    ${DjobsInputFieldCommonStyles.QuestionairreInputField}
  }
`;
