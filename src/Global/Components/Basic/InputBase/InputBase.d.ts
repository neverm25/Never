import React from "react";

declare namespace IInputBase {
  export interface IProps {
    type: "text" | "password" | "email" | "number" | "url";
    label?: string;
    hasLabel?: boolean;
    name: string;
    value: string;
    errorMsg?: string;
    hasError?: boolean;
    disabled?: boolean;
    placeholder?: string;
    isSearch?: boolean;
    width?: number;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    suffix?: React.ReactElement;
    prefix?: React.ReactElement;
    maxLength?: number;
    isAutoComplete?: boolean;
  }
}

export { IInputBase };
