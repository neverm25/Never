import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 578px) {
    padding: 21px 75px 45px 75px;
    background: ${djobsTheme.colors.white100};
    box-shadow: ${djobsTheme.effects.cardShadow};
    width: 493px;
    min-height: 550px;
  }
  @media (min-width: 1600px) {
    width: 600px;
  }
`;

export const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
