// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
import { IButton } from "../Button";
// #endregion Local Imports
export const IconButtonContainer = styled.button<IButton.IconButtonProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ variant }) =>
    variant === "success"
      ? theme.colors.green180
      : variant === "cancel"
      ? theme.colors.red100
      : theme.colors.black90};
  background: ${theme.colors.white100};
  cursor: ${({ variant }) =>
    variant === "disabled" ? "not-allowed" : "pointer"};
  padding: 7px 8px;
  font-family: Roboto, sans-serif;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: 1px solid
    ${({ variant }) =>
      variant === "success"
        ? theme.colors.green180
        : variant === "cancel"
        ? theme.colors.red80
        : theme.colors.black80};

  border-radius: 8.36836px;

  span {
    margin-top: 1px;
    margin-left: ${({ prefixIcon }) => prefixIcon && "5.7px"};
  }

  &:hover {
    color: ${({ variant }) =>
      variant === "success"
        ? theme.colors.green100
        : variant === "cancel"
        ? theme.colors.red100
        : theme.colors.black80};
    box-shadow: ${({ variant }) =>
      variant === "plain"
        ? "0px 1px 2px rgba(144, 163, 245, 0.25), inset 0px -4px 5px rgba(210, 216, 244, 0.61)"
        : variant === "success"
        ? "inset 0px 8px 11px rgba(245, 247, 255, 0.3), inset 0px -6px 11px rgba(15, 205, 159, 0.17)"
        : variant === "disabled"
        ? "0px 3.34734px 1.67367px -0.836836px rgba(0, 0, 0, 0.06), inset 0px -0.836836px 2.51051px 0.836836px rgba(0, 0, 0, 0.2)"
        : "inset 0px 8px 11px rgba(245, 247, 255, 0.3), inset 0px -6px 9px rgba(172, 0, 165, 0.17)"};
    border: 1px solid
      ${({ variant }) =>
        variant === "success"
          ? theme.colors.green100
          : variant === "cancel"
          ? theme.colors.red80
          : theme.colors.black80};
  }
`;

export const DropDownButtonContainer = styled.button<
  IButton.DropDownButtonProps
>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ variant }) =>
    variant === "primary" ? theme.colors.white100 : theme.colors.black80};
  background: ${({ variant }) =>
    variant === "primary" ? theme.gradients.purple100 : theme.colors.black90};
  cursor: ${({ variant }) =>
    variant === "disabled" ? "not-allowed" : "pointer"};
  padding: 7px 8px;
  font-family: Roboto, sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: 1px solid
    ${({ variant }) =>
      variant === "primary" ? theme.colors.blue150 : theme.colors.black80};
  box-shadow: inset 0px -0.836836px 2.51051px 0.836836px rgba(0, 0, 0, 0.2);
  border-radius: 8.36836px;

  span {
    margin: ${({ prefixIcon }) => prefixIcon && "0px 5px"};
  }

  &:hover {
    background: ${({ variant }) =>
      variant === "primary"
        ? theme.gradients.purpleHover
        : theme.colors.black50};
    color: ${({ variant }) =>
      variant === "primary" ? theme.colors.background : theme.colors.black50};
    box-shadow: ${({ variant }) =>
      variant === "primary"
        ? "none"
        : "0px 1px 2px rgba(144, 163, 245, 0.25), inset 0px -4px 5px rgba(210, 216, 244, 0.61)"};
  }
`;

export const MainButtonContainer = styled.button<IButton.MainButtonProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ variant }) =>
    variant === "plain"
      ? theme.colors.black80
      : variant === "disabled"
      ? theme.colors.black80
      : theme.colors.white100};
  background: ${({ variant, theme }) =>
    variant === "success"
      ? theme.colors.green100
      : variant === "cancel"
      ? theme.colors.red100
      : variant === "primary"
      ? theme.colors.blue100
      : variant === "disabled"
      ? theme.colors.black20
      : theme.colors.white100};
  cursor: ${({ variant }) =>
    variant === "disabled" ? "not-allowed" : "pointer"};
  padding: 15px 35px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  border: 1px solid
    ${({ variant }) =>
      variant === "success"
        ? theme.colors.green150
        : variant === "cancel"
        ? theme.colors.red150
        : variant === "primary"
        ? theme.colors.blue150
        : variant === "disabled"
        ? theme.colors.black90
        : theme.colors.black50};
  box-shadow: 0px 6px 3px -5px rgba(96, 109, 152, 0.4),
    0px 4px 3px -3px rgba(0, 0, 0, 0.1),
    inset 0px 2px 2px rgba(255, 255, 255, 0.55),
    inset 0px -1px 3px 1px rgba(0, 0, 0, 0.2);
  border-radius: 13px;

  &:hover {
    color: ${({ variant }) =>
      variant === "plain"
        ? theme.colors.black50
        : variant === "disabled"
        ? theme.colors.black80
        : theme.colors.white100};
    background: ${({ variant }) =>
      variant === "success"
        ? theme.colors.green80
        : variant === "cancel"
        ? theme.colors.red80
        : variant === "primary"
        ? theme.colors.blue80
        : variant === "disabled"
        ? theme.colors.black20
        : theme.colors.black20};
    box-shadow: ${({ variant }) =>
      variant === "plain"
        ? "0px 1px 2px rgba(144, 163, 245, 0.25), inset 0px -4px 5px rgba(210, 216, 244, 0.61)"
        : variant === "disabled"
        ? "0px 6px 3px -5px rgba(96, 109, 152, 0.4), 0px 4px 3px -3px rgba(0, 0, 0, 0.1), inset 0px 2px 2px rgba(255, 255, 255, 0.55), inset 0px -1px 3px 1px rgba(0, 0, 0, 0.2)"
        : "0px 6px 3px -5px rgba(96, 109, 152, 0.4), 0px 4px 3px -3px rgba(0, 0, 0, 0.1), inset 0px 2px 2px rgba(255, 255, 255, 0.55), inset 0px -5px 17px 1px rgba(98, 90, 121, 0.31)"};
  }
`;
