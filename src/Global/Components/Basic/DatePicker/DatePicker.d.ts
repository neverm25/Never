import React from "react";
import { DatePickerProps } from "antd";

declare namespace IDatePicker {
  export interface IProps {
    label?: string;
    width?: string;
    onChangeHandler: DatePickerProps["onChange"];
  }
}

export { IDatePicker };
