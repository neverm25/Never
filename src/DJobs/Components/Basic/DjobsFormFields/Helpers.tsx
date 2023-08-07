import React, { useState } from "react";
import { Field, FieldProps } from "formik";

import {
  DjobsInputField,
  DjobsSelectField,
  DjobsDatePicker,
  DjobsSwitchBase,
  AutoCompleteInputField,
  DjobsCheckBoxGroup,
  DjobsCheckBox,
  DjobsRichTextArea,
  DjobsTextArea,
  DjobsFormFieldsProps,
  DjobsPasswordField,
  DjobsRadioGroup,
} from "./index";
import {
  getHTMLContentFromEditorState,
  getInitialContentState_WithHTML,
  getPlainTextFromEditorState,
  getRichTextAreaHasError,
} from "@Helpers/Formik/richTextEditor.helpers";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { PasswordEyeIcon } from "@DJobs/Components/Icons";
import { RadioChangeEvent } from "antd";

const regexNumberOrSymbol = /^[0-9!@#\s\$%\^\&*\)\(+=._-]*$/;
//const phoneNumberRegex = /^((\\+[1-9]{1,9}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const createDjobsInputField = (
  inputDetails: DjobsFormFieldsProps.CreateInputField
) => (
  //
  <Field name={inputDetails.name} key={inputDetails.name}>
    {({ field, meta, form }: FieldProps) => {
      const {
        name,
        inputType = "text",
        isRequired,
        suffix,
        label,
        errorMessage,
      } = inputDetails;
      const { onChange, onBlur } = field;
      const { value, touched, error } = meta;
      const { setFieldValue } = form;

      //Error validation
      const hasError =
        isRequired && touched && (error || errorMessage || !value)
          ? true
          : false;
      let errorLabel = error;
      if (hasError && !error) {
        errorLabel = label ? `${label} is required` : `Input required`;
      }
      if (value && errorMessage) {
        errorLabel = errorMessage;
      }
      const onChangeNumber = e => {
        const { value: inputValue } = e.target;
        if (regexNumberOrSymbol.test(inputValue))
          setFieldValue(name, inputValue);
      };

      const inputFieldProps = {
        onBlur,
        onChange: inputType === "number" ? onChangeNumber : onChange,
        value,
        hasError,
        error: errorLabel,
        inputType: inputType,
      };

      let suffixProps = {};
      if (suffix) {
        suffixProps = { suffix };
      }

      //Password Handling
      if (inputDetails.inputType === "password") {
        const [showPassword, setShowPassword] = useState(false);
        const passwordProps = {
          showPassword,
          setShowPassword,
        };
        suffixProps = {
          suffix: <PasswordEyeIcon {...passwordProps} />,
          inputType: showPassword ? "text" : "password",
        };
      }

      return (
        <React.Fragment>
          {inputDetails.inputType === "password" ? (
            <DjobsPasswordField
              {...inputDetails}
              {...inputFieldProps}
              {...suffixProps}
            />
          ) : (
            <DjobsInputField
              {...inputDetails}
              {...inputFieldProps}
              {...suffixProps}
            />
          )}
        </React.Fragment>
      );
    }}
  </Field>
);

export const createDjobsAutocompleteInputField = (
  inputDetails: DjobsFormFieldsProps.CreateAutocompleteInputField
) => (
  //
  <Field name={inputDetails.name} key={inputDetails.name}>
    {({ field, meta, form }: FieldProps) => {
      const { name, inputType, isRequired, suffix } = inputDetails;
      const { onChange, onBlur } = field;
      const { value, touched, error } = meta;
      const { setFieldValue } = form;

      const hasError =
        isRequired && touched && (error || !value) ? true : false;

      const onChangeNumber = e => {
        const { value: inputValue } = e.target;
        if (regexNumberOrSymbol.test(inputValue))
          setFieldValue(name, inputValue);
      };

      const inputFieldProps = {
        onBlur,
        onChange: inputType === "number" ? onChangeNumber : onChange,
        value,
        hasError,
        error,
        inputType: inputType,
      };

      let suffixProps = {};
      if (suffix) {
        suffixProps = { suffix };
      }

      return (
        <AutoCompleteInputField
          {...inputDetails}
          {...inputFieldProps}
          {...suffixProps}
          setFieldValue={setFieldValue}
        />
      );
    }}
  </Field>
);

export const createDjobsSelectField = (
  inputDetails: DjobsFormFieldsProps.CreateSelectField
) => (
  <Field name={inputDetails.name} key={inputDetails.name} autoComplete="off">
    {({ form, meta }: FieldProps) => {
      const { setFieldValue, setFieldTouched } = form;
      const { name, isRequired, customValidation, label } = inputDetails;
      const { touched, error, value } = meta;

      //Error validation
      let customError = customValidation ? customValidation() : "";
      const hasError =
        isRequired && touched && (error || !value) ? true : false;
      let errorLabel = customError ? customError : error;
      if (hasError && !error) {
        errorLabel = label ? `${label} is required` : `Input required`;
      }
      const selectFieldProps: DjobsFormFieldsProps.SelectField = {
        ...inputDetails,
        onBlur: () => setFieldTouched(name),
        onSelect: value => setFieldValue(name, value),
        hasError,
        error: errorLabel,
        value,
        setFieldValue,
      };

      return <DjobsSelectField key={name} {...selectFieldProps} />;
    }}
  </Field>
);

export const createDjobsRichTextArea = (
  inputDetails: DjobsFormFieldsProps.CreateRichTextArea
) => (
  <Field name={inputDetails.name} key={inputDetails.name}>
    {({ form, meta }: FieldProps) => {
      const { value, error, touched } = meta;
      const { name, textLimit, isRequired, label } = inputDetails;

      const editorStateContent = getInitialContentState_WithHTML(value || "");
      const [editorState, setEditorState] = useState(editorStateContent);
      const textCount = getPlainTextFromEditorState(editorState).length;

      //Error validation
      const hasError =
        isRequired && touched && (error || !value) ? true : false;
      let errorLabel = error;
      if (hasError && !error) {
        errorLabel = label ? `${label} is required` : `Input required`;
      }

      const richTextAreaHasErrorProps: DjobsFormFieldsProps.RichTextAreaHasErrorProps = {
        formik: form,
        editorState,
        fieldName: name,
        textCount,
        textLimit,
      };

      return (
        <DjobsRichTextArea
          {...inputDetails}
          key={name}
          hasError={
            isRequired && getRichTextAreaHasError(richTextAreaHasErrorProps)
          }
          error={errorLabel}
          setTouched={() => {
            form.setFieldTouched(name, true);
          }}
          setFieldValue={() => {
            form.setFieldValue(
              name,
              textCount > 0 ? getHTMLContentFromEditorState(editorState) : ""
            );
          }}
          width="100%"
          editorState={editorState}
          setEditorState={setEditorState}
          textCount={textCount}
          value={getPlainTextFromEditorState(editorState)}
          textLimit={inputDetails.maxLength}
        />
      );
    }}
  </Field>
);

export const createDjobsTextArea = (
  inputDetails: DjobsFormFieldsProps.CreateTextArea
) => {
  const { name, isRequired, label } = inputDetails;
  return (
    <Field name={name} key={name}>
      {({ field, meta }: FieldProps) => {
        const { name, onChange, onBlur } = field;
        const { value, touched, error } = meta;
        //Error validation
        const hasError =
          isRequired && touched && (error || !value) ? true : false;
        let errorLabel = error;
        if (hasError && !error) {
          errorLabel = label ? `${label} is required` : `Input required`;
        }

        return (
          <DjobsTextArea
            key={name}
            {...inputDetails}
            value={value}
            onChangeHandler={onChange}
            onBlur={onBlur}
            hasError={hasError}
            error={errorLabel}
            touched={touched}
          />
        );
      }}
    </Field>
  );
};

export const createDatePickerField = (
  inputDetails: DjobsFormFieldsProps.CreateDatePickerField
) => {
  const { name, isRequired, label } = inputDetails;
  return (
    <Field name={name} key={name}>
      {({ form, meta }: FieldProps) => {
        const { name } = inputDetails;
        const { value = inputDetails.value, error, touched } = meta;
        const { setFieldValue, setFieldTouched, setFieldError } = form;

        const hasError = isRequired && touched && !value;
        let errorLabel = error;
        if (hasError && !error) {
          errorLabel = label ? `${label} is required` : `Input required`;
        }

        const setErrors = () => {
          if (!hasError) {
            setFieldError(name, errorLabel);
          } else if (!form.errors[name]) {
            setFieldError(name, "");
          }
        };
        const getSelectedDate = (_date: moment.Moment, datestring: string) => {
          setErrors();
          setFieldValue(name, datestring);
          setFieldTouched(name, true);
        };

        const datePickerFieldProps: DjobsFormFieldsProps.Datepicker = {
          ...inputDetails,
          value,
          hasError,
          error: errorLabel,
          onChange: getSelectedDate,
          onBlur: () => setFieldTouched(name),
          onOpenChange: setErrors,
        };

        return <DjobsDatePicker {...datePickerFieldProps} />;
      }}
    </Field>
  );
};

export const CreateCheckBoxField = (
  inputDetails: DjobsFormFieldsProps.CreateCheckBoxField
) => (
  <Field name={inputDetails.name} key={inputDetails.name}>
    {/*  */}
    {({ field, meta }: FieldProps) => {
      const { name, isRequired, label } = inputDetails;
      const { onChange } = field;
      const { value, touched, error } = meta;

      const hasError =
        isRequired && touched && (error || !value) ? true : false;

      const djobsCheckBoxProps: DjobsFormFieldsProps.CheckBoxField = {
        ...inputDetails,
        name,
        isRequired,
        label,
        onChange,
        hasError,
        checked: value ? true : false,
      };

      return <DjobsCheckBox {...djobsCheckBoxProps} />;
    }}
  </Field>
);
export const createCheckboxGroupField = (
  inputDetails: DjobsFormFieldsProps.CreateCheckboxFieldGroup
) => {
  const { name, isRequired, label } = inputDetails;
  return (
    <Field name={name} key={name}>
      {({ form, meta, field }: FieldProps<CheckboxValueType[]>) => {
        const { setFieldValue, setFieldTouched } = form;
        const { touched, error } = meta;
        const { value, name } = field;

        const hasError =
          isRequired && touched && (!value || value.length === 0)
            ? true
            : false;
        //Error validation
        let errorLabel = error;
        if (hasError && !error) {
          errorLabel = label ? `${label} is required` : `Input required`;
        }
        const handleChange = (checkedValues: CheckboxValueType[]) => {
          setFieldValue(name, checkedValues);
          setFieldTouched(name);
        };

        const checkboxGroupFieldProps: DjobsFormFieldsProps.CheckboxFieldGroupProps = {
          ...inputDetails,
          value,
          hasError,
          error: errorLabel,
          onChange: handleChange,
        };

        return (
          <DjobsCheckBoxGroup
            {...checkboxGroupFieldProps}
            label={label}
            hasError={hasError}
            name={name}
            onChange={handleChange}
          />
        );
      }}
    </Field>
  );
};

export const createRadioGroupField = (
  inputDetails: DjobsFormFieldsProps.CreateRadioFieldGroupProps
) => {
  const { name, isRequired, label } = inputDetails;
  return (
    <Field name={name} key={name}>
      {({ meta, form }: FieldProps) => {
        const { touched, error, value } = meta;
        const { setFieldValue, setFieldTouched } = form;
        const handleChange = (e: RadioChangeEvent) => {
          setFieldValue(name, e.target.value);
          setFieldTouched(name);
        };
        //Error validation
        const hasError =
          isRequired && touched && (error || !value) ? true : false;
        let errorLabel = error;
        if (hasError && !error) {
          errorLabel = label ? `${label} is required` : `Input required`;
        }

        const radioGroupFieldProps: DjobsFormFieldsProps.RadioFieldGroupProps = {
          ...inputDetails,
          hasError: isRequired && touched && !value ? true : false,
          isRequired,
          error: errorLabel,
          handleChange,
          value,
        };

        return <DjobsRadioGroup {...radioGroupFieldProps} />;
      }}
    </Field>
  );
};

export const createSwitchBase = (
  inputDetails: DjobsFormFieldsProps.CreateSwitchbase
) => (
  <Field name={inputDetails.name} key={inputDetails.name}>
    {({ meta }: FieldProps) => {
      const { value, error, touched } = meta;

      const fieldHasErrorValue = error ? true : false;
      const hasError = touched && fieldHasErrorValue;

      const inputFieldProps = {
        value,
        hasError,
        error,
      };

      return <DjobsSwitchBase {...inputDetails} {...inputFieldProps} />;
    }}
  </Field>
);

export const createDjobsFormField = (
  props: DjobsFormFieldsProps.CreateFormField
) => {
  const { fieldType, fieldProps } = props;

  if (fieldType === "Input") return createDjobsInputField(fieldProps);
  if (fieldType === "Select") return createDjobsSelectField(fieldProps);
};

export const createDjobsFormFields = (
  fields: DjobsFormFieldsProps.CreateFormFields
) => fields.map(field => createDjobsFormField(field));
