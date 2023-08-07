import * as Yup from "yup";

import { DjobsFormFieldsProps } from "@DJobs/Components/Basic/DjobsFormFields";

const requiredFields = {
  jobTitle: true,
  companyName: true,
  startedFrom_month: true,
  startedFrom_year: true,
};
const validationSchema = Yup.object({
  jobTitle: Yup.string().required("Job title is required"),
  companyName: Yup.string().required("Company name is required"),
  startedFrom_month: Yup.string().required("Month is required"),
  startedFrom_year: Yup.number().required("Year is required"),
  workedTill_month: Yup.string().required("Month is required"),
  workedTill_year: Yup.number().required("Year is required"),
});
const initialErrors = {
  jobTitle: "Job title is required",
  companyName: "Company name is required",
  startedFrom_month: "Month is required",
  startedFrom_year: "Year is required",
  workedTill_month: "Month is required",
  workedTill_year: "Year is required",
};

const idPrefix = "career_info_add_";
const jobTitle: DjobsFormFieldsProps.CreateInputField = {
  name: "jobTitle",
  isRequired: true,
  inputType: "text",
  label: "Job Title",
  placeholder: "job title",
  variant: "WhiteBackground",
  idPrefix,
};
const companyName: DjobsFormFieldsProps.CreateInputField = {
  name: "companyName",
  inputType: "text",
  isRequired: true,
  label: "Company",
  placeholder: "company",
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
const reasonForLeaving: DjobsFormFieldsProps.CreateTextArea = {
  name: "reasonForLeaving",
  isRequired: false,
  placeholder: "reason for leaving",
  label: "Reason for Leaving",
  maxLength: 100,
  maxRows: 3,
  showCount: true,
  variant: "WhiteBackground",
  idPrefix,
};
const isCurrentPositionCheckBox: DjobsFormFieldsProps.CreateCheckBoxField = {
  name: "isCurrentPosition",
  isRequired: false,
  label: "Current Position",
  variant: "WhiteBackground",
  idPrefix,
};

const formFields = {
  jobTitle,
  companyName,
  description,
  reasonForLeaving,
  isCurrentPositionCheckBox,
};

export const CareerInfoData = {
  initialErrors,
  validationSchema,
  formFields,
  requiredFields,
  idPrefix,
};
