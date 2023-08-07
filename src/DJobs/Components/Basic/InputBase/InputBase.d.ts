import React from "react";

declare namespace IInputBase {
  export interface IProps {
    type: "text" | "password" | "email" | "number" | "url";
    name: string;
    value?: string;
    placeholder?: string;
    isSearch?: boolean;
    width?: string;
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    suffix?: React.ReactElement;
    prefix?: React.ReactElement;
  }
}

export { IInputBase };
