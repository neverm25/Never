//#region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
// #endregion Local Imports

export const FieldWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2px;
  margin-top: 0px !important;

  input {
    background: ${djobsTheme.colors.black30};
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .bwMrDu {
    padding-top: 0px !important;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;

  @media (min-width: 992px) {
    margin: 27px 0 0 25px;
  }
`;
