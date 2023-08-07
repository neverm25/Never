import * as Yup from "yup";

import { DjobsFormFieldsProps } from "@DJobs/Components/Basic/DjobsFormFields";
import { CandidateOverview } from "../Overview";
import { CountryHelpers } from "@Helpers/CountryHelpers";

const skillsAutoCompleteList = [
  { label: "React", value: "React" },
  { label: "FrontEnd", value: "FrontEnd" },
  { label: "Nextjs", value: "Nextjs" },
  { label: "Nodejs", value: "Nodejs" },
  { label: "Vuejs", value: "Vuejs" },
  { label: "Webpack", value: "Webpack" },
  { label: "Javascript", value: "Javascript" },
  { label: "Java", value: "Java" },
  { label: "Sales", value: "Sales" },
];

//#region Form Fields
const idPrefix = "candidate_profile_";
const firstName: DjobsFormFieldsProps.CreateInputField = {
  name: "firstName",
  isRequired: true,
  inputType: "text",
  label: "First Name",
  placeholder: "first name",
  idPrefix,
};
const lastName: DjobsFormFieldsProps.CreateInputField = {
  name: "lastName",
  inputType: "text",
  isRequired: true,
  label: "Last Name",
  placeholder: "last name",
  idPrefix,
};
const phoneNumber: DjobsFormFieldsProps.CreateInputField = {
  name: "phoneNumber",
  inputType: "number",
  isRequired: false,
  label: "Phone Number",
  placeholder: "Phone number",
  maxLength: 20,
  idPrefix,
};
const country: DjobsFormFieldsProps.CreateSelectField = {
  name: "country",
  isRequired: true,
  label: "Country",
  placeholder: "country",
  options: CountryHelpers.CountryList.map(country => ({
    label: country.name,
    value: country.code,
  })),
  allowSearch: true,
  idPrefix,
};
const city: DjobsFormFieldsProps.CreateSelectField = {
  name: "city",
  isRequired: true,
  label: "City",
  placeholder: "city",
  idPrefix,
  options: [],
  allowSearch: true,
};
const email: DjobsFormFieldsProps.CreateInputField = {
  name: "email",
  inputType: "text",
  isRequired: true,
  label: "Email",
  placeholder: "email",
  disabled: true,
  idPrefix,
};
const description: DjobsFormFieldsProps.CreateRichTextArea = {
  name: "description",
  isRequired: false,
  label: "Description",
  placeholder: "Start typing here…",
  idPrefix,
};
const searchSkills: DjobsFormFieldsProps.CreateAutocompleteInputField = {
  name: "searchSkills",
  inputType: "text",
  isRequired: false,
  placeholder: "skills",
  width: "350px",
  options: skillsAutoCompleteList,
  idPrefix,
};
const language: DjobsFormFieldsProps.CreateSelectField = {
  name: "language",
  isRequired: false,
  label: "Language",
  placeholder: "Language",
  options: [
    { label: "English", value: "English" },
    { label: "Afrikaans", value: "Afrikaans" },
  ],
  allowSearch: true,
  idPrefix,
};
const proficiency: DjobsFormFieldsProps.CreateSelectField = {
  name: "proficiency",
  isRequired: false,
  label: "Proficiency",
  placeholder: "Proficiency",
  options: [
    {
      label: "Native or bilingual proficiency",
      value: "native",
    },
    {
      label: "Full professional proficiency",
      value: "full",
    },
    {
      label: "Professional working proficiency",
      value: "professional",
    },
    {
      label: "Limited working proficiency",
      value: "limited",
    },
  ],
  allowSearch: true,
  idPrefix,
};

const formFields = {
  firstName,
  lastName,
  phoneNumber,
  country,
  city,
  email,
  description,
  searchSkills,
  language,
  proficiency,
};
//#endregion

const initialValues = {
  country: "",
  description: "",
  email: "",
  firstName: "",
  lastName: "",
} as CandidateOverview.OverviewForm;

const requiredFields = {
  firstName: true,
  lastName: true,
  country: true,
  city: true,
  email: true,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  country: Yup.string()
    .required("Country is required")
    ?.nullable(),
  city: Yup.string().required("City is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
});
const initialErrors = {
  firstName: "First name is required",
  lastName: "Last name is required",
  country: "Country is required",
  city: "City is required",
  email: "Email is required",
};

export const CandidateProfileOverviewData = {
  formFields,
  initialValues,
  requiredFields,
  validationSchema,
  skillsAutoCompleteList,
  idPrefix,
  initialErrors,
};
