import React from "react";
import { FormikValues } from "formik";

import { ISelectBase } from "@Global/Components/Basic/SelectBase/SelectBase";

declare namespace InputHelperProps {
  export interface CreateInputBaseProps {
    name: string;
    isRequired: boolean;
    placeholder: string;
    type?: React.InputHTMLAttributes;
    label?: string;
    isSearch?: boolean;
    isPassword?: boolean;
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    maxLength?: number;
    isAutoComplete?: boolean;
  }
  export interface CreateInputGroupProps {
    name: string;
    isRequired: boolean;
    label: string;
    inputs: CreateInputBaseProps[];
  }

  export type SelectOption = ISelectBase.selectOption;
  export interface CreateSelectBaseProps {
    name: string;
    isRequired: boolean;
    label?: string;
    options: ISelectBase.selectOption[];
    defaultValue?: string;
    placeholder?: string;
  }

  export interface RichTextAreaHasErrorProps {
    formik: FormikValues;
    editorState: EditorState;
    fieldName: string;
    textCount?: number;
    textLimit?: number;
  }
  export interface CreateRichTextAreaProps {
    name: string;
    isRequired: boolean;
    label?: string;
    placeholder?: string;
    initialHTMLValue?: string;
    minHeight?: number;
    showCount?: boolean;
    textLimit?: number;
  }
  export interface CreateTextAreaProps {
    name: string;
    isRequired: boolean;
    placeholder: string;
    label?: string;
    showCount?: boolean;
    maxLength?: number;
    minRows?: number;
    maxRows?: number;
  }

  export interface InputBaseFieldProps {
    fieldType: "input";
    inputFieldProps: CreateInputBaseProps;
  }
  export interface InputGroupProps {
    fieldType: "inputGroup";
    inputFieldProps: CreateInputGroupProps;
  }
  export interface SelectBaseFieldProps {
    fieldType: "select";
    inputFieldProps: CreateSelectBaseProps;
  }
  export interface RichTextAreaFieldProps {
    fieldType: "richTextArea";
    inputFieldProps: CreateRichTextAreaProps;
  }
  export interface TextAreaFieldProps {
    fieldType: "qf_textArea";
    inputFieldProps: CreateTextAreaProps;
  }

  export type FieldProps =
    | InputBaseFieldProps
    | InputGroupProps
    | SelectBaseFieldProps
    | RichTextAreaFieldProps
    | TextAreaFieldProps;
}
