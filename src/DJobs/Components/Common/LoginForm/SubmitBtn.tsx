import React from "react";

import { djobsTheme } from "@DJobs/Theme";
import styled from "styled-components";
import { LoginFormProps } from "./LoginForm";

export const SubmitBtn: React.FC<LoginFormProps.SubmitBtn> = ({
  onClick,
  children,
  isDisabled,
  width,
}): JSX.Element => (
  <MainButtonContainer width={width} disabled={isDisabled} onClick={onClick} type="submit">
    {children}
  </MainButtonContainer>
);

const MainButtonContainer = styled.button<LoginFormProps.SubmitBtn>`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: ${({ width }) => width};
  align-items: center;
  color: ${({ disabled }) =>
    disabled ? djobsTheme.colors.black50 : djobsTheme.colors.white110};
  background: ${({ disabled }) =>
    disabled ? `${djobsTheme.colors.blue10}30` : djobsTheme.colors.blue100};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  padding: 22px 56px 22px 56px;
  ${djobsTheme.text.djSignButtonText.sm};
  border: 1px solid ${({ disabled }) => (disabled ? "transparent" : "#1e96f2")};

  box-shadow: ${({ disabled }) =>
    disabled
      ? djobsTheme.effects.inputShadow
      : djobsTheme.effects.signInButtonShadow};
  border-radius: 6px;

  &:hover {
    background: ${({ disabled }) => !disabled && djobsTheme.colors.blue150};
  }
`;
