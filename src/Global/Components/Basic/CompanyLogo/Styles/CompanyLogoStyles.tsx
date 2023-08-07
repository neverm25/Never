// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
// #endregion Local Imports
export const LogoContainer = styled.div`
  width: fit-content;
`;

export const SublineText = styled.div`
  font-family: ${theme.text.mainFont};
  font-style: italic;
  font-weight: 900;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: 0.045em;
  text-transform: capitalize;
  color: ${theme.colors.white100};
`;
