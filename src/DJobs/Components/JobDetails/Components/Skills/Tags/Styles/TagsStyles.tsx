import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
// #endregion Local Imports

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0px;

  @media (min-width: 1600px) {
    margin: 30px 0px;
  }
`;

export const Tag = styled.div<{
  gradientTag: boolean;
}>`
  display: flex;
  align-items: center;
  margin-right: ${({ gradientTag }) => (gradientTag ? "0px" : "8px")};
  margin-bottom: ${({ gradientTag }) => (gradientTag ? "0px" : "8px")};
  padding: 15px 25px;
  background: ${djobsTheme.colors.white100};
  border: ${({ gradientTag }) =>
    gradientTag ? "0px" : `1px solid ${djobsTheme.colors.purple110}`};
  box-shadow: ${djobsTheme.effects.tagsShadow};
  border-radius: 20px;

  @media (min-width: 992px) {
    padding: 11px 20px;
    margin-right: ${({ gradientTag }) => (gradientTag ? "0px" : "20px")};
    margin-bottom: ${({ gradientTag }) => (gradientTag ? "0px" : "15px")};
  }
  @media (min-width: 1600px) {
    padding: 11px 20px;
    margin-right: ${({ gradientTag }) => (gradientTag ? "0px" : "20px")};
    margin-bottom: ${({ gradientTag }) => (gradientTag ? "0px" : "15px")};
  }
`;

export const GradientBorderTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1px;
  background: ${djobsTheme.gradients.blue80};
  border-radius: 20px;
  margin-bottom: 8px;
  margin-right: 12px;

  @media (min-width: 1600px) {
    margin-right: 20px;
    margin-bottom: 15px;
  }
`;
