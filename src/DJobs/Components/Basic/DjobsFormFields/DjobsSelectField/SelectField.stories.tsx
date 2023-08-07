import React from "react";
import { Meta, Story } from "@storybook/react";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import { DjobsSelectField } from "@DJobs/Components/Basic/DjobsFormFields";
import { createDjobsSelectField } from "../Helpers";
import { DjobsFormFieldsProps } from "../DjobsFormFields";

const meta: Meta = {
  title: "Components/DJobs/SelectField",
  component: DjobsSelectField,
};
export default meta;

const Template: Story<DjobsFormFieldsProps.SelectField> = args => {
  return <DjobsSelectField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "",
  hasError: false,
  name: "Default",
  onBlur: _ => {},
  onSelect: _ => {},
  placeholder: "Default",
  options: [
    { label: "option1", value: "value1" },
    { label: "option2", value: "value2" },
  ],
  error: "Error",
} as DjobsFormFieldsProps.SelectField;

const formikFieldValidationSchema = Yup.object({
  formikSelectField: Yup.string().required("Error"),
});

export const FormikField = () => (
  <Formik
    initialValues={{ formikField: "" }}
    onSubmit={() => {}}
    validationSchema={formikFieldValidationSchema}
  >
    {() => (
      <Form>
        {createDjobsSelectField({
          name: "formikSelectField",
          placeholder: "Select",
          label: "Formik Select",
          isRequired: true,
          options: [
            { label: "option1", value: "value1" },
            { label: "option2", value: "value2" },
          ],
          defaultValue: "option2",
          idPrefix: "",
        })}
      </Form>
    )}
  </Formik>
);
