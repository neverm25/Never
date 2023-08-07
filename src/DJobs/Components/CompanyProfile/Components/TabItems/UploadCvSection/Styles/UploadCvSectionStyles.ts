// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
// #rendegion Local Imports

export const ActionContainer = styled.div`
  border-top: 1px solid ${djobsTheme.colors.horizontalLineColor};
  padding: 20px 0 32px 0px;

  @media (min-width: 992px) {
    border: 0;
    padding-top: 41px;
  }
`;

export const ImageContainer = styled.div`
  margin: 0 auto;
`;

export const Container = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const TabComponentsWrapper = styled.div<{}>`
  padding: 30px 0px 30px 0px;
  margin: 10px;
  background: ${djobsTheme.colors.white100};
  border: 0.658436px solid ${djobsTheme.colors.black10};
  box-shadow: ${djobsTheme.effects.boxShadow};
  border-radius: 16px 16px 15.8025px 15.8025px;
  @media (min-width: 992px) {
    box-shadow: none;
    border: none;
    margin: 55px 65px 30px 65px;
    padding: 0px;
  }

  @media (min-width: 1600px) {
    margin: 75px 65px 30px 65px;
  }
`;

export const SliderContainer = styled.div`
  margin: 10px auto;
  @media (min-width: 1200px) {
    width: 770px;
  }
`;
