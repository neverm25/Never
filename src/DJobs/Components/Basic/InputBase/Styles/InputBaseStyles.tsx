// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
export const InputContainer = styled.div<{
  width: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 47px;
  padding: 0px 15px;
  background: ${djobsTheme.colors.white100};
  border: 1px solid ${djobsTheme.colors.black20};
  box-shadow: ${djobsTheme.effects.inputInnerShadow};
  border-radius: 6px;
  width: ${({ width }) => width};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  color: ${djobsTheme.colors.black50};
  background: none;
  width: 100%;

  &::placeholder {
    color: ${djobsTheme.colors.black50};
    ${djobsTheme.text.djInputRegular.sm};
  }
`;
