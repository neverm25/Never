import * as Yup from "yup";

import { DjobsFormFieldsProps } from "@DJobs/Components/Basic/DjobsFormFields";

const requiredFields = {
  qualification: true,
  institution: true,
  startedFrom_year: true,
  studiedTill_year: true,
};
const validationSchema = Yup.object({
  qualification: Yup.string().required("Qualification is required"),
  institution: Yup.string().required("Institution name is required"),
  startedFrom_year: Yup.number().required("Year is required"),
  studiedTill_year: Yup.number().required("Year is required"),
});
const initialErrors = {
  qualification: "Qualification is required",
  institution: "Institution name is required",
  startedFrom_month: "Month is required",
  startedFrom_year: "Year is required",
  studiedTill_month: "Month is required",
  studiedTill_year: "Year is required",
};

const idPrefix = "education_info";
const qualification: DjobsFormFieldsProps.CreateInputField = {
  name: "qualification",
  isRequired: true,
  inputType: "text",
  label: "Qualification",
  placeholder: "qualification",
  variant: "WhiteBackground",
  idPrefix,
};
const institution: DjobsFormFieldsProps.CreateInputField = {
  name: "institution",
  inputType: "text",
  isRequired: true,
  label: "Institution",
  placeholder: "institution",
  variant: "WhiteBackground",
  idPrefix,
};
const description: DjobsFormFieldsProps.CreateRichTextArea = {
  name: "description",
  isRequired: false,
  label: "Description",
  placeholder: "Description",
  variant: "WhiteBackground",
  idPrefix,
};

const formFields = {
  qualification,
  institution,
  description,
};

export const EducationInfoData = {
  validationSchema,
  formFields,
  requiredFields,
  initialErrors,
  idPrefix,
};
