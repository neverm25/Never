// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
// #endregion Local Imports

export const Wrapper = styled.div<{
  isOpen: boolean;
}>`
  transition: all 0.5s ease-out;
  background: ${djobsTheme.colors.white100};
`;

export const Maincontainer = styled.div<{
  isOpen: boolean;
}>`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: ${({ isOpen }) =>
    isOpen ? `${djobsTheme.colors.purple10}` : djobsTheme.colors.white100};
  border-radius: 27px;
  box-shadow: ${djobsTheme.effects.cardShadow};
  cursor: pointer;

  svg {
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "")};
  }
`;

export const DropDownContainer = styled.div<{
  isOpen: boolean;
}>`
  position: relative;
  z-index: 1;
  margin-top: -20px;
  background: ${djobsTheme.colors.white100};
  border-radius: 0 0 24px 24px;
  box-shadow: ${djobsTheme.effects.cardShadow};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  padding: 20px;
  padding-top: 40px;
  height: max-content;
`;

export const ContentTitle = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 10px;
  flex-flow: wrap;
  max-width: 500px;
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: ${djobsTheme.colors.black80};
`;
