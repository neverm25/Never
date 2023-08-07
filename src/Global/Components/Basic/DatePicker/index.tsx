// #region Global Imports
import React from "react";
import { DatePicker } from "antd";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
import { IDatePicker } from "./DatePicker";
import { DatePickerContainer, Label } from "./Styles/DatePickerStyles";
import { CalendarIcon } from "@Global/Components/Icons";
// #endregion Local Imports

const DateSelector: React.FC<IDatePicker.IProps> = ({
  label,
  width,
  onChangeHandler,
}) => {
  return (
    <DatePickerContainer width={width}>
      <Label>{label}</Label>

      <DatePicker
        dropdownClassName="custom-antd-datepicker"
        suffixIcon={<CalendarIcon color={theme.colors.black80} />}
        onChange={onChangeHandler}
        inputReadOnly
      />
    </DatePickerContainer>
  );
};

export default DateSelector;
