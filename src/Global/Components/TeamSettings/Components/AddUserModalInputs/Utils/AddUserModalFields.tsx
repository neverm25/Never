import { InputHelperProps } from "src/helpers/Formik/formikInputFields.props";

const firstNameFieldProps: InputHelperProps.CreateInputBaseProps = {
  label: "Firstname*",
  name: "firstName",
  placeholder: "Firstname",
  isRequired: true,
};
const firstName: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: firstNameFieldProps,
};

const lastNameFieldProps: InputHelperProps.CreateInputBaseProps = {
  label: "Lastname*",
  name: "lastName",
  placeholder: "Lastname",
  isRequired: true,
};
const lastName: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: lastNameFieldProps,
};

const emailFieldProps: InputHelperProps.CreateInputBaseProps = {
  label: "Email*",
  name: "email",
  placeholder: "Email",
  isRequired: true,
};
const email: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: emailFieldProps,
};

const roleOptions: InputHelperProps.SelectOption[] = [
  { label: "Admin", value: "Admin" },
  { label: "Team Member", value: "Team Member" },
];

const roleFieldProps: InputHelperProps.CreateSelectBaseProps = {
  label: "Role*",
  name: "role",
  options: roleOptions,
  isRequired: true,
  placeholder: "Select Role",
};
const role: InputHelperProps.FieldProps = {
  fieldType: "select",
  inputFieldProps: roleFieldProps,
};

export const addUserInputFields = [firstName, lastName, email, role];
