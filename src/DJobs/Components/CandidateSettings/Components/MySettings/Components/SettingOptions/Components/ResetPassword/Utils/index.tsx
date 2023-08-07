//#Global Imports
import * as Yup from "yup";
//#end Global Imports

//#Local Imports
import { DjobsFormFieldsProps } from "@DJobs/Components/Basic/DjobsFormFields";
import { UpdatePasswordFormFieldsProps } from "./FormFieldsData";
//#end Local Imports

const resetPasswordFormInitialValues = {} as UpdatePasswordFormFieldsProps.Fields;

const resetPasswordFormValidationSchema = Yup.object({
  currentPassword: Yup.string().required("Please enter your Current password"),
  newPassword: Yup.string().required("Please enter your New password"),
});
const initialErrors = {
  currentPassword: "Please enter your Current password",
  newPassword: "Please enter your New password",
};

const idPrefix = "reset_password";
const currentPassword: DjobsFormFieldsProps.CreateInputField = {
  name: "currentPassword",
  isRequired: true,
  showRequired: false,
  inputType: "password",
  placeholder: "Current Password",
  isPassword: true,
  idPrefix,
};
const newPassword: DjobsFormFieldsProps.CreateInputField = {
  name: "newPassword",
  isRequired: true,
  showRequired: false,
  inputType: "password",
  placeholder: "New Password",
  isPassword: true,
  idPrefix,
};
const requiredFields = {
  currentPassword: true,
  newPassword: true,
};

const FormFields = {
  currentPassword,
  newPassword,
};
export const resetFormData = {
  initialErrors,
  resetPasswordFormInitialValues,
  resetPasswordFormValidationSchema,
  FormFields,
  requiredFields,
  idPrefix,
};
