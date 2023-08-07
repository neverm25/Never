import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
// #endregion Local Imports

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  background: ${djobsTheme.colors.white110};
  box-shadow: ${djobsTheme.effects.cardShadow};
  border-radius: 10px;
  margin-top: 20px;

  @media (min-width: 576px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    padding: 30px 20px;
    background: ${djobsTheme.colors.white100};
  }
  @media (min-width: 992px) {
    padding: 36px 48px;
  }
`;

export const SocialIcon = styled.a<{
  padding?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  cursor: pointer;
  background: ${djobsTheme.colors.purple100};
  padding-bottom: ${({ padding }) => (padding ? padding : "0px")};
  &:hover {
    transform: scale(1.1);
  }
`;
