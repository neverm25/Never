// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { IButton } from "./Button";
import {
  DropDownButtonContainer,
  IconButtonContainer,
  MainButtonContainer,
} from "./Styles/ButtonStyles";
// #endregion Local Imports

export const Button: React.FunctionComponent<IButton.IProps> = ({
  variant = "plain",
  buttonCategory = "main",
  btnType = "button",
  prefixIcon,
  suffixIcon,
  onClick,
  children,
}): JSX.Element => {
  return buttonCategory === "icon" ? (
    <IconButtonContainer
      variant={variant as IButton.iconButtonvariant}
      prefixIcon={prefixIcon}
      onClick={onClick}
      type={btnType}
      disabled={variant === "disabled"}
    >
      {prefixIcon}
      {children && <span>{children}</span>}
    </IconButtonContainer>
  ) : buttonCategory === "dropdown" ? (
    <DropDownButtonContainer
      variant={variant as IButton.dropDownButtonvariant}
      prefixIcon={prefixIcon}
      suffixIcon={suffixIcon}
      onClick={onClick}
      type={btnType}
      disabled={variant === "disabled"}
    >
      {prefixIcon}
      <span>{children}</span>
      {suffixIcon}
    </DropDownButtonContainer>
  ) : (
    <MainButtonContainer
      variant={variant as IButton.mainButtonvariant}
      onClick={onClick}
      type={btnType}
      disabled={variant === "disabled"}
    >
      {children}
    </MainButtonContainer>
  );
};
