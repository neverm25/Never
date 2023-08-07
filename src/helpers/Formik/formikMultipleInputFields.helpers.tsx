import {
  createInputBaseField,
  createInputBaseGroup,
  createRichTextArea,
  createSelectBaseField,
  createTextArea,
} from "./formikInputFields.helpers";
import { InputHelperProps } from "./formikInputFields.props";

export const getRequiredInputFields = (
  fields: InputHelperProps.FieldProps[]
) => {
  const requiredFields: { [key: string]: boolean } = {};
  fields.map(field => {
    const { inputFieldProps } = field;
    const { name, isRequired } = inputFieldProps;
    requiredFields["" + name + ""] = isRequired;
  });
  return requiredFields;
};

export const createInputFields = (fields: InputHelperProps.FieldProps[]) =>
  fields.map(field => createInputField(field));

export const createInputField = (props: InputHelperProps.FieldProps) => {
  const { fieldType, inputFieldProps } = props;

  switch (fieldType) {
    case "input":
      return createInputBaseField({ ...inputFieldProps });
    case "inputGroup":
      return createInputBaseGroup({ ...inputFieldProps });
    case "select":
      return createSelectBaseField({ ...inputFieldProps });
    case "richTextArea":
      return createRichTextArea({ ...inputFieldProps });
    case "qf_textArea":
      return createTextArea({ ...inputFieldProps });
    default:
      return null;
  }
};
