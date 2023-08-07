// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
// #endregion Local Imports

export const MainContainer = styled.div`
  border: 1px solid ${djobsTheme.colors.black20};
  border-radius: 24px;
  width: 100%;
  box-shadow: 0px 1px 4px rgba(21, 21, 21, 0.02),
    0px 8px 12px rgba(21, 21, 21, 0.08);

  @media (min-width: 992px) {
    margin: 0px 24px;
    border-radius: 5px;
    border: 1px solid transparent;
    background: linear-gradient(${djobsTheme.colors.white100} 0 0) padding-box,
      linear-gradient(210deg, #3580c6, #26ade2, #504edb, #9f71e9) border-box;
  }
`;
