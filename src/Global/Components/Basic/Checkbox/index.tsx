import * as React from "react";
import { ICheckBox } from "./Checkbox";
import { StyledCheckbox } from "./Styles/CheckboxStyles";

export const CheckboxInput = (props: ICheckBox.IProps) => {
  const { checked, setChecked } = props;
  const handleChange = () => {
    setChecked(checked => !checked);
  };

  return <StyledCheckbox checked={checked} onChange={handleChange} />;
};
