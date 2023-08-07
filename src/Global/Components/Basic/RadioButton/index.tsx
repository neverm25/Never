import * as React from "react";

import { IRadioButton } from "./RadioButton";
import { StyledRadioButton } from "./Styles/RadioButtonStyles";

export const RadioButton = (props: IRadioButton.IProps) => {
  const { checked, variant = "default", disabled, size = "medium" } = props;
  return (
    <StyledRadioButton
      checked={checked}
      disabled={disabled}
      size={size}
      variant={variant}
    />
  );
};

//Styles of Radio
