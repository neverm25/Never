import { InputHelperProps } from "@Helpers/Formik/formikInputFields.props";

const firstNameFieldProps: InputHelperProps.CreateInputBaseProps = {
  name: "firstName",
  placeholder: "First Name",
  isRequired: true,
};
const firstName: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: firstNameFieldProps,
};

const lastNameFieldProps: InputHelperProps.CreateInputBaseProps = {
  name: "lastName",
  placeholder: "Last Name",
  isRequired: true,
};
const lastName: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: lastNameFieldProps,
};

const emailFieldProps: InputHelperProps.CreateInputBaseProps = {
  name: "email",
  type: "email",
  placeholder: "Email",
  isRequired: true,
};
const email: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: emailFieldProps,
};

const passwordFieldProps: InputHelperProps.CreateInputBaseProps = {
  name: "password",
  placeholder: "Password",
  isRequired: true,
  isPassword: true,
};
const password: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: passwordFieldProps,
};

export const LoginFormFields = [email, password];
export const RegisterFormFields = [firstName, lastName, email, password];
