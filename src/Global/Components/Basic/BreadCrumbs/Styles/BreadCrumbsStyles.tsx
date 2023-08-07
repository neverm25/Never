// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
// #endregion Local Imports

export const BreadCrumbsContainer = styled.div`
  font-family: Montserrat;
`;

export const BreadCrumbsPath = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${theme.colors.black80};
  span {
    background: ${theme.gradients.purpleHover};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
`;

export const BreadCrumbsTitle = styled.div`
  font-family: Montserrat;
  text-transform: capitalize;
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  margin-top: 4px;
  background: ${theme.colors.black100};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
