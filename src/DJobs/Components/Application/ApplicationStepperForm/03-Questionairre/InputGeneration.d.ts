import { type } from "os";

declare namespace InputGenerationProps {
  type commonPropsForField = {
    name: string;
    label: string;
    required: boolean;
    description?: string;
    placeholder?: string;
  };

  type header = {
    type: "header";
    subtype: "h1" | "h2";
    label: string;
  };
  type paragraph = {
    type: "paragraph";
    subtype: "output";
    label: string;
  };
  type Input = commonPropsForField & {
    type: "text";
  };
  type Select = commonPropsForField & {
    type: "select";
    values: { label: string; value: string }[];
    defaultValue?: string;
  };
  type Datepicker = commonPropsForField & {
    type: "date";
    defaultValue?: string; //DD/MM/YYYY format
  };
  type RichTextArea = commonPropsForField & {
    type: "richtextarea";
    showCount?: boolean;
    maxLength?: number;
  };
  type TextArea = commonPropsForField & {
    type: "textarea";
    rows?: number;
    showCount?: boolean;
    maxLength?: number;
  };
  type CheckBox = commonPropsForField & {
    type: "checkbox-group";
    values: { label: string; value: string }[];
  };
  type Radio = commonPropsForField & {
    type: "radio-group";
    values: { label: string; value: string }[];
  };

  type Iprops =
    | Input
    | Select
    | Datepicker
    | RichTextArea
    | TextArea
    | CheckBox
    | Radio
    | header
    | paragraph;
}

export { InputGenerationProps };
