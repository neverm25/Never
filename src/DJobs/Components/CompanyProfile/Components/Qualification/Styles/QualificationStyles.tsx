// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
// #endregion Local Imports

export const MainContainer = styled.div`
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.cardShadow};
  padding: 25px 26px 20px 26px;

  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  @media (min-width: 768px) {
    padding: 28px 38px;
  }
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 19px;
  flex-flow: wrap;

  @media (min-width: 992px) {
    gap: 31px;
    max-width: 550px;
  }

  @media (min-width: 1600px) {
    gap: 37px;
  }
`;

export const Qualification = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  @media (min-width: 992px) {
    gap: 11px;
  }
`;
