import * as Yup from "yup";

import { DjobsFormFieldsProps } from "@DJobs/Components/Basic/DjobsFormFields";
import { CountryHelpers } from "@Helpers/CountryHelpers";

const requiredFields = {
  first_name: true,
  last_name: true,
  country: true,
  city: true,
  // dob_day: true,
  // dob_month: true,
  // dob_year: true,
};

//#region Form fields
const idPrefix = "user_details_";
const firstName: DjobsFormFieldsProps.CreateInputField = {
  name: "first_name",
  isRequired: true,
  inputType: "text",
  label: "First Name",
  placeholder: "first name",
  variant: "default",
  idPrefix,
};
const lastName: DjobsFormFieldsProps.CreateInputField = {
  name: "last_name",
  isRequired: true,
  inputType: "text",
  label: "Last Name",
  placeholder: "last name",
  idPrefix,
};
const country: DjobsFormFieldsProps.CreateSelectField = {
  name: "country",
  label: "Country",
  isRequired: true,
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

export const formFields = {
  firstName,
  lastName,
  country,
  city,
};
//#endregion

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
});

export const UserDetailsFormUtils = {
  idPrefix,
  formFields,
  requiredFields,
  validationSchema,
};
