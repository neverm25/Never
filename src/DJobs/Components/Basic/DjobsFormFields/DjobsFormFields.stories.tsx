import React from "react";
import { Meta } from "@storybook/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { DjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import {
  createDjobsInputField,
  createDjobsSelectField,
  createDjobsRichTextArea,
  createDjobsTextArea,
} from "./Helpers";
import styled from "styled-components";
import { DJobsTypography } from "../index";
import { DjobsDatePicker } from "@DJobs/Components/Basic/DjobsFormFields";

const meta: Meta = {
  title: "Components/DJobs/DjobsFormFields",
  component: DjobsInputField,
};
export default meta;

const formikFieldValidationSchema = Yup.object({
  formikField: Yup.string().required("Error"),
});
export const FormikField = () => (
  <Container>
    <DJobsTypography styleName="djHeaderTwo" color="black90">
      Formik Fields
    </DJobsTypography>
    <Formik
      initialValues={{
        formikInputField: "",
        formikSelectField: "",
        formikRichTextArea: "",
        dateField: "000",
      }}
      onSubmit={() => {}}
      validationSchema={formikFieldValidationSchema}
    >
      {formik => (
        <Form>
          {createDjobsInputField({
            name: "formikInputField",
            label: "Input Field",
            placeholder: "input with formik",
            inputType: "text",
            isRequired: true,
            idPrefix: "story_",
          })}
          {createDjobsSelectField({
            name: "formikSelectField",
            label: "Select Field",
            placeholder: "Select",
            isRequired: true,
            options: [
              { label: "Option1", value: "Option1" },
              { label: "Option2", value: "Option2" },
              { label: "Option3", value: "Option3" },
            ],
            idPrefix: "story_",
          })}
          {createDjobsRichTextArea({
            name: "formikRichTextArea",
            label: "Richtextarea",
            placeholder: "Enter description",
            isRequired: true,
            showCount: true,
            textLimit: 1000,
            idPrefix: "story_",
          })}
          {createDjobsTextArea({
            name: "formikTextArea",
            label: "Text area",
            placeholder: "Enter text...",
            isRequired: true,
            maxRows: 5,
            showCount: true,
            idPrefix: "story_",
          })}
          <DjobsDatePicker
            name="Datepicker"
            width="100%"
            label="Date Field"
            value={formik.values.dateField}
            error={formik.errors.dateField}
            hasError={formik.errors.dateField ? true : false}
            onChange={(_date, datestring) => {
              formik.setFieldValue("dateField", datestring);
            }}
            isRequired={false}
            idPrefix="story_"
          />
        </Form>
      )}
    </Formik>
  </Container>
);

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
`;
