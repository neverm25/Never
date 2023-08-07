import * as Yup from "yup";

import { InputHelperProps } from "@Helpers/Formik/formikInputFields.props";

//#region Upload Modal fields
const titleFieldProps: InputHelperProps.CreateInputBaseProps = {
  name: "title",
  label: "Title: (max 70 characters)",
  placeholder: "",
  isRequired: true,
  maxLength: 70,
};
const titleField: InputHelperProps.InputBaseFieldProps = {
  fieldType: "input",
  inputFieldProps: titleFieldProps,
};

const captionFieldProps: InputHelperProps.CreateTextAreaProps = {
  name: "caption",
  label: "Caption: (max 100 characters)",
  placeholder: "",
  isRequired: true,
};
const captionField: InputHelperProps.TextAreaFieldProps = {
  fieldType: "qf_textArea",
  inputFieldProps: captionFieldProps,
};

export const uploadModalInputFields: InputHelperProps.FieldProps[] = [
  titleField,
  captionField,
];
//#endregion

export const uploadModalValidationSchema = Yup.object({
  title: Yup.string().required("Please enter Title"),
  caption: Yup.string().required("Please enter Caption"),
  uploadedContent: Yup.string().required("Please upload the File"),
});
