import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { DjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import { createDjobsInputField } from "../Helpers";
import { DjobsFormFieldsProps } from "../DjobsFormFields";

const meta: Meta = {
  title: "Components/DJobs/InputField",
  component: DjobsInputField,
};
export default meta;

const Template: Story<DjobsFormFieldsProps.InputField> = args => {
  return <DjobsInputField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: "Default",
  onBlur: () => {},
  onChange: () => {},
  placeholder: "default input",
  inputType: "text",
  value: "",
  error: "Error",
  hasError: false,
  label: "Focused",
  isRequired: true,
  idPrefix: "story_template",
} as DjobsFormFieldsProps.InputField;

export const Interactive = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const inputFieldProps: DjobsFormFieldsProps.InputField = {
    name: "Default",
    onBlur: () => {
      if (!value) setError("Error");
    },
    onChange: event => {
      setValue(event.target.value);
      if (value) setError("");
    },
    placeholder: "default input",
    inputType: "text",
    value,
    hasError: error ? true : false,
    error,
    label: "Focused",
    disabled: true,
    isRequired: false,
    idPrefix: "story_input",
  };

  return <DjobsInputField {...inputFieldProps} />;
};

const formikFieldValidationSchema = Yup.object({
  formikField: Yup.string().required("Error"),
});
export const FormikField = () => (
  <Formik
    initialValues={{ formikField: "" }}
    onSubmit={() => {}}
    validationSchema={formikFieldValidationSchema}
  >
    {() => (
      <Form>
        {createDjobsInputField({
          name: "formikField",
          placeholder: "input with formik",
          inputType: "text",
          label: "Formik field",
          isRequired: true,
          idPrefix: "story_input",
        })}
      </Form>
    )}
  </Formik>
);
