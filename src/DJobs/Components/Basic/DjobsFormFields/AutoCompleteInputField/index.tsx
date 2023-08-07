import React, { useState } from "react";
import styled from "styled-components";
import { AutoComplete } from "antd";

import { DJobsTypography, DJobsGradientText } from "../..";
import { djobsTheme } from "@DJobs/Theme";
import { DjobsFormFieldsProps } from "../DjobsFormFields";
import {
  DjobsInputFieldCommonStyles,
  DJobsInputStyledComponents,
} from "../Common/InputStyles";

export const AutoCompleteInputField = (
  props: DjobsFormFieldsProps.AutocompleteInputField
) => {
  const {
    label,
    name,
    error,
    hasError = false,
    width = "100%",
    options,
    data,
    setData,
    setFieldValue,
    variant = "default",
    idPrefix,
    handleChange,
    autoFilterNeeded = true,
  } = props;
  const { Option } = AutoComplete;

  const [autoCompleteOptions, setAutoCompleteOptions] = useState(
    [] as DjobsFormFieldsProps.AutocompleteOption[]
  );

  const onFocus = () => {
    const isInputEmpty = !props.value;
    if (isInputEmpty)
      setAutoCompleteOptions([] as DjobsFormFieldsProps.AutocompleteOption[]);
  };
  const handleSearch = (inputValue = "") => {
    setFieldValue(name, inputValue);
    if (handleChange) {
      let timer: NodeJS.Timeout = null;
      clearTimeout(timer);
      timer = setTimeout(() => {
        inputValue.length > 2 && handleChange();
      }, 0);
    }
    //filter out the options
    const excludeSelectedOptions = options.filter(option =>
      data?.indexOf(option.value) >= 0 ? false : true
    );

    const filteredOptions = excludeSelectedOptions.filter(option => {
      const value = option.value;
      const index = value.toUpperCase().indexOf(inputValue.toUpperCase());
      return index >= 0;
    });

    //Logic for coloring label
    const newOptions = autoFilterNeeded ? filteredOptions : options;
    const newAutoCompleteOptions = newOptions.map(option => {
      if (typeof option.label === "string") {
        const value = option.label;
        const index = value.toUpperCase().indexOf(inputValue.toUpperCase());

        const before = value.substring(0, index);
        const searchedValue = value.substring(index, index + inputValue.length);
        const after = value.substring(index + inputValue.length);
        const label = (
          <React.Fragment>
            <span>{before}</span>
            <span style={{ color: djobsTheme.colors.blue100 }}>
              {searchedValue}
            </span>
            <span>{after}</span>
          </React.Fragment>
        );
        return { label, value };
      }
    });
    setAutoCompleteOptions(newAutoCompleteOptions);
  };

  const ContainerForVariant: {
    [Key in DjobsFormFieldsProps.InputVariant]: any;
  } = {
    Questionairre: null,
    WhiteBackground: WhiteContainer,
    default: DefaultContainer,
  };
  const Container = ContainerForVariant[variant];
  const inputField = (
    <Container containerWidth={width} value={props.value} hasError={hasError}>
      {label && (
        <DJobsTypography styleName="djInputLabel" color="blueGreyDark">
          {label}
        </DJobsTypography>
      )}
      <DJobsInputStyledComponents.FieldWrapper>
        <AutoComplete
          id={idPrefix + name}
          popupClassName="djobsAutocomplete"
          options={autoCompleteOptions}
          filterOption={(inputValue, option) => {
            const optionHasInputValue =
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1;
            return autoFilterNeeded ? optionHasInputValue : true;
          }}
          onSelect={value => {
            if (setData) {
              setData([...data, value]);
              setFieldValue(name, "");
            } else {
              setFieldValue(name, value);
            }
          }}
          onSearch={handleSearch}
          onFocus={onFocus}
          value={props.value}
          notFoundContent={`No data`}
        >
          {autoCompleteOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </AutoComplete>
      </DJobsInputStyledComponents.FieldWrapper>
      <DJobsGradientText styleName="djInputError" gradient="red100">
        {hasError ? error : ""}
      </DJobsGradientText>
    </Container>
  );

  return inputField;
};

type ContainerProps = {
  containerWidth: string;
  value: string;
  hasError: boolean;
};
const DefaultContainer = styled.div<ContainerProps>`
  width: 100%;

  .ant-input-group-addon {
    display: none;
  }
  .ant-select {
    width: 100% !important;
    @media (min-width: 768px) {
      min-width: 150px;
      width: ${({ containerWidth }) => containerWidth};
    }
  }
  .ant-input {
    ${DjobsInputFieldCommonStyles.DefaultInputField};
    height: 56px;
    ${DjobsInputFieldCommonStyles.DefaultInputFieldText};
    height: 56px;
    margin-top: -12px;
  }

  .ant-input:focus {
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
  .ant-input:hover {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldHover};
  }
  .ant-select-selector:focus {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldFocus};
  }
  .ant-input:focus {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldFocus};
  }
  .ant-select-focused {
    height: 56px !important;
  }
  .ant-select-selection-placeholder {
    ${DjobsInputFieldCommonStyles.DefaultInputFieldPlaceholder};
  }
  .ant-select-selection-search {
    padding-top: 12px;
  }
`;
const WhiteContainer = styled(DefaultContainer)`
  .ant-input {
    ${DjobsInputFieldCommonStyles.WhiteInputField};
  }
`;
