import * as React from "react";
import { Field, FieldProps } from "formik";

import { PasswordEyeIcon } from "@Global/Components/Icons";

import { InputBase } from "@Global/Components/Basic/InputBase";
import { SelectBase } from "@Global/Components/Basic/SelectBase";

import { InputHelperProps } from "./formikInputFields.props";
import {
  getHTMLContentFromEditorState,
  getInitialContentState_WithHTML,
  getPlainTextFromEditorState,
  getRichTextAreaHasError,
  getRichTextAreaMinHeight,
} from "./richTextEditor.helpers";
import RichTextArea from "@Global/Components/Basic/RichTextArea";
import { InputGroup } from "@Global/Components/Basic/InputGroup";
import { TextAreaInput } from "@Global/Components/Basic";

export const createInputBaseField = (
  inputDetails: InputHelperProps.CreateInputBaseProps
) => (
  <Field name={inputDetails.name} key={inputDetails.name}>
    {({ field, meta }: FieldProps) => {
      const { name, onChange, onBlur } = field;
      const { value, touched, error } = meta;
      const fieldHasErrorValue = error ? true : false;

      //Setting prefix / suffix props
      const { prefix, suffix } = inputDetails;
      let prefixProps = {};
      let suffixProps = {};
      if (prefix) {
        prefixProps = { prefix };
      }
      if (suffix) {
        suffixProps = { suffix };
      }

      //Password Handling
      if (inputDetails.isPassword) {
        const [showPassword, setShowPassword] = React.useState(false);
        const passwordProps = { showPassword, setShowPassword };
        suffixProps = {
          suffix: <PasswordEyeIcon {...passwordProps} />,
          type: showPassword ? "text" : "password",
        };
      }

      return (
        <InputBase
          key={name}
          hasLabel={inputDetails.label ? true : false}
          label={inputDetails.label}
          name={name}
          value={value}
          isSearch={inputDetails.isSearch ? true : false}
          isAutoComplete={inputDetails.isAutoComplete ? true : false}
          type={inputDetails.type ? inputDetails.type : "text"}
          placeholder={inputDetails.placeholder}
          onChangeHandler={onChange}
          onBlur={onBlur}
          hasError={inputDetails.isRequired && touched && fieldHasErrorValue}
          errorMsg={error}
          maxLength={inputDetails.maxLength}
          {...suffixProps}
          {...prefixProps}
        />
      );
    }}
  </Field>
);

export const createInputBaseGroup = (
  inputDetails: InputHelperProps.CreateInputGroupProps
) => <InputGroup key={inputDetails.name} {...inputDetails} />;

export const createSelectBaseField = (
  inputDetails: InputHelperProps.CreateSelectBaseProps
) => (
  <Field name={inputDetails.name} key={inputDetails.name}>
    {({ field, form, meta }: FieldProps) => {
      const { name } = field;
      const { value, touched, error } = meta;
      const fieldHasErrorValue = error ? true : false;

      const defaultValue = value ? value : inputDetails.defaultValue;

      return (
        <SelectBase
          key={name}
          hasLabel={inputDetails.label ? true : false}
          label={inputDetails.label}
          name={name}
          value={value}
          placeholder={inputDetails.placeholder}
          defaultValue={defaultValue}
          options={inputDetails.options}
          onSelect={value => {
            form.setFieldValue(name, value);
          }}
          onBlur={() => {
            form.setFieldTouched(name);
          }}
          hasError={inputDetails.isRequired && touched && fieldHasErrorValue}
          errorMsg={error}
        />
      );
    }}
  </Field>
);

export const createRichTextArea = (
  inputDetails: InputHelperProps.CreateRichTextAreaProps
) => (
  <Field name={inputDetails.name} key={inputDetails.name}>
    {({ field, form, meta }: FieldProps) => {
      const { name } = field;
      const { value, error } = meta;
      const { label, minHeight, showCount, textLimit } = inputDetails;

      const editorStateContent = getInitialContentState_WithHTML(value || "");
      const [editorState, setEditorState] = React.useState(editorStateContent);
      const textCount = getPlainTextFromEditorState(editorState).length;

      const richTextAreaHasErrorProps: InputHelperProps.RichTextAreaHasErrorProps = {
        formik: form,
        editorState,
        fieldName: name,
        textCount,
        textLimit,
      };
      return (
        <RichTextArea
          id={name}
          key={name}
          name={name}
          hasLabel={label ? true : false}
          label={label}
          hasError={getRichTextAreaHasError(richTextAreaHasErrorProps)}
          errorMsg={error}
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
          minHeight={minHeight ? minHeight : getRichTextAreaMinHeight()}
          placeholder="Enter text here..."
          editorState={editorState}
          setEditorState={setEditorState}
          showCount={showCount}
          textCount={textCount}
          textLimit={textLimit}
        />
      );
    }}
  </Field>
);

export const createTextArea = (
  inputDetails: InputHelperProps.CreateTextAreaProps
) => (
  <Field name={inputDetails.name} key={inputDetails.name}>
    {({ field, meta }: FieldProps) => {
      const { name, onChange, onBlur } = field;
      const { value, touched, error } = meta;
      const fieldHasErrorValue = error ? true : false;

      return (
        <TextAreaInput
          key={name}
          name={name}
          hasLabel={inputDetails.label ? true : false}
          label={inputDetails.label}
          value={value}
          placeholder={inputDetails.placeholder}
          onChangeHandler={onChange}
          onBlur={onBlur}
          hasError={inputDetails.isRequired && touched && fieldHasErrorValue}
          errorMsg={error}
        />
      );
    }}
  </Field>
);
