// #region Global Imports
import React from "react";
import { storiesOf } from "@storybook/react";
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports
import DatePicker from "@Global/Components/Basic/DatePicker";
storiesOf("Components/Basic/DatePicker", module).add("Default", () => {
  const getSelectedDate = (_date, _datestring) => {};

  return (
    <div>
      <DatePicker label={"Label"} onChangeHandler={getSelectedDate} />
    </div>
  );
});
