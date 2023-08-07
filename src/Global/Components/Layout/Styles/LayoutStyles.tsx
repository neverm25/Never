// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
import { getSideBarWidth } from "../Utils/LayoutUtils";
// #endregion Local Imports

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const SideBarContainer = styled.div<{ isHideSidebar: boolean }>`
  background: ${theme.colors.black100};
  position: fixed;
  left: 0;
  z-index: 20;
  height: 100%;
  width: ${({ isHideSidebar }) => getSideBarWidth(isHideSidebar)};
  border-top-right-radius: 20px;
  transition: all 0.2s ease-out;
`;
