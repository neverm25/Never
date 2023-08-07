// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
export const InputContainer = styled.div<{
  width: string;
  outline: boolean;
  error: boolean;
  value: string;
  color: string;
  radius: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 47px;
  padding: 0px 15px;
  background: ${djobsTheme.colors.white100};
  border: 1px solid ${djobsTheme.colors.black20};
  box-shadow: ${djobsTheme.effects.inputInnerShadow};
  border-radius: ${({ radius }) => (radius ? radius : "6px")};
  width: ${({ width }) => width};
  input {
    color: ${({ color }) => color};
    ${djobsTheme.text.djHeaderInputInitial.sm};
  }
  border: ${({ outline, value, error }) =>
    outline && value && error
      ? `3px solid ${djobsTheme.colors.red20}`
      : outline && value && `2px solid ${djobsTheme.colors.green100}`};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0px;
  color: ${djobsTheme.colors.black50};
  background: none;
  width: 100%;

  &::placeholder {
    color: ${djobsTheme.colors.black50};
    ${djobsTheme.text.djHeaderInputInitial.sm};
  }
`;
