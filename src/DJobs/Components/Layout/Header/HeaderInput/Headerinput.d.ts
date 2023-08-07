import React from "react";

declare namespace IHeaderInput {
  export interface IProps {
    type: "text" | "password" | "email" | "number" | "url";
    name: string;
    value?: string;
    placeholder?: string;
    isSearch?: boolean;
    width?: string;
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    suffix?: React.ReactElement;
    outline?: boolean;
    error?: boolean;
    color: string;
    autofocus?: boolean;
    radius?: string;
  }
}

export { IHeaderInput };
