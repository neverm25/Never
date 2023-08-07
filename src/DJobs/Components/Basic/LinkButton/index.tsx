// #region Global Imports
import React from "react";
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { ILinkButton } from "./LinkButton";
import { djobsTheme } from "@DJobs/Theme";
import { DJobsTypography } from "@DJobs/Components/Basic";
// #endregion Local Imports

export const LinkButton: React.FC<ILinkButton.IProps> = ({
  variant,
  onClick,
  children,
}): JSX.Element => {
  const hoverTextColor = {
    forgotPassword: djobsTheme.colors.blue100,
    cancel: djobsTheme.colors.black50,
    closeAccount: djobsTheme.colors.red150,
  };

  return (
    <MainContainer onClick={onClick} hoverColor={hoverTextColor[variant]}>
      <DJobsTypography
        styleName={
          variant === "forgotPassword"
            ? "djForgotLinkRegular"
            : variant === "cancel"
            ? "djCloseLinkAllCaps"
            : "djCloseLinkAllCaps"
        }
        color={
          variant === "forgotPassword"
            ? "blue100"
            : variant === "cancel"
            ? "black50"
            : "red150"
        }
      >
        {children}
      </DJobsTypography>
    </MainContainer>
  );
};

export default LinkButton;

export const MainContainer = styled.div<{
  hoverColor: string;
}>`
  cursor: pointer;

  div {
    &:hover {
      color: ${({ hoverColor }) => hoverColor};
      text-decoration: underline;
    }
    text-decoration: none;
    display: inline-block;
  }
`;
