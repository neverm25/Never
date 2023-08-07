// # Global Imports
import React from "react";
import styled from "styled-components";
// #end Global Imports

// #region Local Imports
import { ITypography } from "./Typography";
import { theme } from "@Global/Theme";
// #endregion Local Imports

export const Typography = (props: ITypography.IProps) => {
  const {
    styleName = "headingOne",
    width = "100%",
    color = "black100",
    children,
  } = props;

  const typoContainerProps: ITypography.IProps = {
    styleName,
    width,
    color,
    children,
  };

  return <TypoContainer {...typoContainerProps}>{children}</TypoContainer>;
};

const TypoContainer = styled.div<ITypography.IProps>`
  color: ${({ color }) => theme.colors[color]};
  width: ${({ width }) => width};
  ${({ styleName }) => theme.text[styleName]}
  &:hover {
    color: ${({ styleName }) =>
      styleName === "interactiveTextSmall" ? theme.colors.blue80 : ""};
    text-decoration: ${({ styleName }) =>
      styleName === "interactiveTextSmall" ? "underline" : ""};
  }
`;
