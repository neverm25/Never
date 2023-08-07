import * as Yup from "yup";

import { DjobsFormFieldsProps } from "@DJobs/Components/Basic/DjobsFormFields";
import { LoginFormProps } from "../LoginForm";

//#region Form fields
const idPrefix = "login_";
const firstName: DjobsFormFieldsProps.CreateInputField = {
  name: "firstName",
  isRequired: true,
  inputType: "text",
  placeholder: "first name",
  showRequired: false,
  idPrefix,
};
const lastName: DjobsFormFieldsProps.CreateInputField = {
  name: "lastName",
  isRequired: true,
  inputType: "text",
  placeholder: "last name",
  showRequired: false,
  idPrefix,
};
const email: DjobsFormFieldsProps.CreateInputField = {
  name: "email",
  isRequired: true,
  inputType: "email",
  placeholder: "email",
  showRequired: false,
  idPrefix,
};
const password: DjobsFormFieldsProps.CreateInputField = {
  name: "password",
  isRequired: true,
  inputType: "password",
  placeholder: "password",
  showRequired: false,
  idPrefix,
};
const confirmPassword: DjobsFormFieldsProps.CreateInputField = {
  name: "confirmPassword",
  isRequired: true,
  inputType: "password",
  placeholder: "confirm password",
  showRequired: false,
  idPrefix,
};
//#endregion

//#region Sign-in
const LoginFormInitialValues = {} as LoginFormProps.LoginFields;
const LoginFormValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const LoginFormInitialErrors = {
  email: "Email is required",
  password: "Password is required",
};
const signInFormFields = {
  email,
  password,
};
const signInRequiredFields = { email: true, password: true };
export const signIn = {
  initialValues: LoginFormInitialValues,
  validationSchema: LoginFormValidationSchema,
  formFields: signInFormFields,
  requiredFields: signInRequiredFields,
  idPrefix,
  initialErrors: LoginFormInitialErrors,
};
//#endregion

//#region Register
const registerFormInitialValues = {} as LoginFormProps.RegisterFields;
const registerFormValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const registerFormInitialErrors = {
  email: "Email is required",
  password: "Password is required",
};
const registerFormFields: {
  [keyof in LoginFormProps.RegisterFieldNames]: DjobsFormFieldsProps.CreateInputField;
} = { email, password, firstName, lastName };
const registerRequiredFields = { email: true, password: true };
export const register = {
  initialValues: registerFormInitialValues,
  validationSchema: registerFormValidationSchema,
  formFields: registerFormFields,
  requiredFields: registerRequiredFields,
  idPrefix,
  initialErrors: registerFormInitialErrors,
};
//#endregion

//#region Forgot password
const forgotFormInitialValues = {} as LoginFormProps.ForgotFields;
const forgotFormValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
});
const forgotFormInitialErrors = { email: "Email is required" };
const forgotFormFields = { email };
const forgotRequiredFields = { email: true };
export const forgot = {
  initialValues: forgotFormInitialValues,
  validationSchema: forgotFormValidationSchema,
  formFields: forgotFormFields,
  requiredFields: forgotRequiredFields,
  idPrefix,
  initialErrors: forgotFormInitialErrors,
};

//#region Reset password
const resetFormInitialValues = {} as LoginFormProps.ResetFields;
const resetFormValidationSchema = Yup.object({
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm new password"),
});
const resetFormInitialErrors = {
  password: "Password is required",
  confirmPassword: "Confirm new password",
};
const resetFormFields = { password, confirmPassword };
const resetRequiredFields = { confirmPassword: true, password: true };
export const reset = {
  initialValues: resetFormInitialValues,
  validationSchema: resetFormValidationSchema,
  initialErrors: resetFormInitialErrors,
  formFields: resetFormFields,
  requiredFields: resetRequiredFields,
  idPrefix,
};
//#endregion

//#region Types
export const TOGGLE_BUTTON_TYPES = ["register", "login"] as const;
export const LOGIN_TYPES = ["register", "login", "forgot", "reset"] as const;
export const SOCIAL_AUTH_DOMAINS = ["Google", "Linkedin", "Facebook"] as const;
