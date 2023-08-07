//#Global Imports
import * as Yup from "yup";
//#end Global Imports

//#Local Imports
import { DjobsFormFieldsProps } from "@DJobs/Components/Basic/DjobsFormFields";
import { AdvancedOptionsFormFieldProps } from "./AdvancedOptions";
//#end Local Imports

export const advancedOptionFormInitialValues = {} as AdvancedOptionsFormFieldProps.Fields;

export const advancedOptionFormValidationSchema = Yup.object({
  currentPassword: Yup.string().required("Please enter your Current password"),
});
export const idPrefix = "advanced_options";

const currentPassword: DjobsFormFieldsProps.CreateInputField = {
  name: "currentPassword",
  isRequired: true,
  inputType: "password",
  placeholder: "Current Password",
  isPassword: true,
  idPrefix: idPrefix,
  showError: true,
};

export const FormFields = {
  currentPassword,
};
export const requiredFields = {
  currentPassword: true,
};

export const deleteAccountDescription =
  "Your account will be permanently closed and you will not be able to undo this. All your personal details will be removed on Ditto Jobs and you will no longer be able to retrieve your profile. Type in your account password to confirm.";
