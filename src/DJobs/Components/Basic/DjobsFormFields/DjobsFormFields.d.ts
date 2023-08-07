import React from "react";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { DatePickerProps, RadioChangeEvent } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

declare namespace DjobsFormFieldsProps {
  type InputVariant = "default" | "WhiteBackground" | "Questionairre";
  type Option = { label: string; value: string };

  //#region InputField
  type inputTypes = "text" | "password" | "email" | "number" | "url";
  interface InputField {
    idPrefix: string;
    name: string;
    inputType: inputTypes;
    isRequired: boolean;
    showRequired?: boolean;
    variant?: InputVariant;
    label?: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    hasError: boolean;
    showError?: boolean;
    error?: string;
    onBlur: (e: FocusEvent<HTMLInputElement>) => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    maxLength?: number;
    max?: number;
    suffix?: ReactElement;
    description?: string;
  }
  interface CreateInputField {
    idPrefix: string;
    name: string;
    inputType?: inputTypes;
    variant?: InputVariant;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    isRequired: boolean;
    width?: string;
    maxLength?: number;
    max?: number;
    isPassword?: boolean;
    suffix?: ReactElement;
    showError?: boolean;
    showRequired?: boolean;
    description?: string;
    errorMessage?: string;
  }
  interface CreateFormFieldInput {
    fieldType: "Input";
    fieldProps: CreateInputField;
  }
  //#endregion

  //#region Autocomplete
  type AutocompleteOption = { label: string | JSX.Element; value: string };
  interface AutocompleteProps {
    options: AutocompleteOption[];
    setOptions?: Dispatch<SetStateAction<AutocompleteOption[]>>;
    data?: any[];
    setData?: Dispatch<SetStateAction<any[]>>;
    setFieldValue?: (
      field: string,
      value: any,
      shouldValidate?: boolean
    ) => void;
    handleChange?: () => void;
    autoFilterNeeded?: boolean;
  }
  type CreateAutocompleteInputField = CreateInputField & AutocompleteProps;
  type AutocompleteInputField = InputField & AutocompleteProps;
  //#endregion

  //#region Select Field
  interface SelectOption {
    label: string | number;
    value: string | number;
  }
  interface SelectField {
    idPrefix: string;
    name: string;
    value: string;
    options: SelectOption[];
    isRequired: boolean;
    variant?: InputVariant;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    showError?: boolean;
    hasError?: boolean;
    error?: string;
    disabled?: boolean;
    onSelect: (string) => void;
    onBlur: (string) => void;
    width?: string;
    allowSearch?: boolean;
    showRequired?: boolean;
    handleChange?: (value?: string) => void;
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean
    ) => void;
    description?: string;
    notFoundMsg?: string;
  }
  interface CreateSelectField {
    idPrefix: string;
    name: string;
    options: SelectOption[];
    isRequired: boolean;
    showRequired?: boolean;
    variant?: InputVariant;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    disabled?: boolean;
    width?: string;
    showError?: boolean;
    allowSearch?: boolean;
    handleChange?: (value: string) => void;
    customValidation?: () => string;
    description?: string;
    notFoundMsg?: string;
  }
  interface CreateFormFieldSelect {
    fieldType: "Select";
    fieldProps: CreateSelectField;
  }
  //#endregion

  type CreateFormField = CreateFormFieldInput | CreateFormFieldSelect;
  type CreateFormFields = CreateFormField[];

  //#region  DateFieldGroup
  interface InputFieldGroup {
    groupName: string;
    formFields: CreateFormFields;
  }
  export interface DateFieldGroup {
    groupName: string;
    groupLabel?: string;
    isRequired: boolean;
    isDayRequired?: boolean;
    isMonthRequired?: boolean;
    isYearRequired?: boolean;
    addNumberOfFutureYears?: number;
    removeNumberOfPastYears?: number;
    dateAcceptance?: "past" | "future" | "any";
    customValidation?: () => string; //Must return an error message if has any else empty string
    variant?: InputVariant;
    description?: string;
  }
  //#endregion

  //#region Checkbox
  export interface CreateCheckboxFieldGroup {
    idPrefix: string;
    name: string;
    label?: string;
    options: string[Option];
    width?: string;
    isRequired: boolean;
    variant?: InputVariant;
    onChange?: (checkedValues: CheckboxValueType[]) => void;
    description?: string;
  }
  export interface CheckboxFieldGroupProps {
    idPrefix: string;
    name: string;
    label?: string;
    options: string[Option];
    width?: string;
    variant?: InputVariant;
    onChange: (checkedValue: CheckboxValueType[]) => void;
    isRequired: boolean;
    hasError?: boolean;
    error?: string;
    value?: CheckboxValueType[];
    description?: string;
  }
  //#endregion

  //#region Radio
  export interface RadioFieldGroupProps {
    idPrefix: string;
    name: string;
    label?: string;
    options: Option[];
    hasError?: boolean;
    error?: string;
    value?: string | boolean | number;
    variant?: InputVariant;
    isRequired?: boolean;
    handleChange: (e: RadioChangeEvent) => void;
    description?: string;
  }
  export interface CreateRadioFieldGroupProps {
    idPrefix: string;
    name: string;
    label: string;
    options: Option[];
    isRequired: boolean;
    value?: boolean;
    variant?: InputVariant;
    description?: string;
  }
  //#endregion

  //#region Datepicker
  export interface Datepicker {
    idPrefix: string;
    name: string;
    variant?: InputVariant;
    label?: string;
    width?: string;
    onChange: DatePickerProps["onChange"];
    onBlur?: (e: React.FocusEvent<any>) => void;
    onOpenChange?: () => void;
    hasError?: boolean;
    error: string;
    value: string;
    isRequired: boolean;
    description?: string;
  }
  export interface CreateDatePickerField {
    idPrefix: string;
    name: string;
    isRequired: boolean;
    label?: string;
    variant?: InputVariant;
    width?: string;
    hasError?: boolean;
    error?: string;
    value?: string;
    description?: string;
  }
  export interface DatePickerFieldProps {
    idPrefix: string;
    name: string;
    isRequired: boolean;
    label?: string;
    options: string[{ label: string; value: string }];
    width?: string;
    hasError?: boolean;
    errorMsg?: string;
    values?: string[];
    onChange?: () => void;
    description?: string;
  }
  //#endregion

  //#region RichTextArea
  interface RichTextArea {
    idPrefix: string;
    name: string;
    variant?: InputVariant;
    isRequired: boolean;
    label?: string;
    hasError?: boolean;
    error?: string;
    disabled?: boolean;
    placeholder?: string;
    width: string;
    editorState: EditorState;
    minHeight?: number;
    setEditorState: Dispatch<SetStateAction<EditorState>>;
    setTouched?: () => void;
    setFieldValue?: () => void;
    textCount?: number;
    showCount?: boolean;
    textLimit?: number;
    value?: string;
    description?: string;
  }
  interface CreateRichTextArea {
    idPrefix: string;
    name: string;
    isRequired: boolean;
    label?: string;
    placeholder?: string;
    initialHTMLValue?: string;
    minHeight?: number;
    showCount?: boolean;
    textLimit?: number;
    variant?: InputVariant;
    maxLength?: number;
    maxRows?: number;
    description?: string;
  }
  interface RichTextAreaHasErrorProps {
    formik: FormikValues;
    editorState: EditorState;
    fieldName: string;
    textCount?: number;
    textLimit?: number;
    description?: string;
  }

  //#endregion

  //#region TextArea
  interface TextArea {
    idPrefix: string;
    name: string;
    variant?: InputVariant;
    label?: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    hasError: boolean;
    error?: string;
    touched: boolean;
    showCount?: boolean;
    maxLength?: number;
    minRows?: number;
    maxRows?: number;
    isRequired: boolean;
    description?: string;
  }
  interface CreateTextArea {
    idPrefix: string;
    name: string;
    isRequired: boolean;
    placeholder: string;
    label?: string;
    showCount?: boolean;
    maxLength?: number;
    minRows?: number;
    maxRows?: number;
    variant?: InputVariant;
    description?: string;
  }

  //#endregion

  //#region CheckBox
  interface CheckBoxField {
    idPrefix: string;
    name: string;
    checked: boolean;
    isRequired: boolean;
    label?: string;
    hasError?: boolean;
    error?: string;
    onChange: (e: CheckboxChangeEvent) => void;
    variant?: InputVariant;
    description?: string;
  }
  interface CreateCheckBoxField {
    idPrefix: string;
    name: string;
    isRequired: boolean;
    label?: string;
    variant?: InputVariant;
    description?: string;
  }
  //#endregion

  //#region SwitchBase
  interface Switchbase {
    idPrefix: string;
    name: string;
    label?: string;
    error?: string;
    hasError?: boolean;
    checkedProp: boolean;
    setCheckedProp: (checked: boolean) => void;
    defaultChecked?: boolean;
  }
  interface CreateSwitchbase {
    idPrefix: string;
    name: string;
    label?: string;
    hasLabel?: boolean;
    errorMsg?: string;
    hasError?: boolean;
    checkedProp: boolean;
    setCheckedProp: (v: boolean) => void;
    defaultChecked?: boolean;
  }
  //#endregion

  type CreateField =
    | CreateInputField
    | CreateAutocompleteInputField
    | CreateSelectField
    | CreateCheckboxFieldGroup
    | CreateRadioFieldGroupProps
    | CreateDatePickerField
    | CreateRichTextArea
    | CreateTextArea
    | CreateCheckBoxField
    | CreateSwitchbase;
}

export { DjobsFormFieldsProps };
