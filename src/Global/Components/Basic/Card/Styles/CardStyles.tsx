// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
// #endregion Local Imports

export const CardContainer = styled.div<{
  width?: string;
  height: string;
  bgColor: string;
  borderRadius?: string;
}>`
  display: flex;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "97px"};
  background: ${({ bgColor }) => bgColor || theme.colors.white100};
  box-shadow: 0px 0px 1px rgba(21, 21, 21, 0.02),
    0px 2px 4px rgba(21, 21, 21, 0.08);
  border-radius: ${({ borderRadius }) => borderRadius || "20px"};
`;
