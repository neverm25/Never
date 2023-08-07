import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import {
  HomePageSummary,
  JoinDittoJobs,
  RegisterAndLoginButtons,
  Hiring,
} from "../../Common";

export const MobileGradientContentsNotSignedIn = () => {
  return (
    <Container>
      <FindYourNextGradient>
        <HomePageSummary />
      </FindYourNextGradient>
      <ButtonsWrapper>
        <RegisterAndLoginButtons />
      </ButtonsWrapper>
      <JoinDittoGradient>
        <JoinDittoJobs />
      </JoinDittoGradient>
      <HiringBackground>
        <Hiring />
      </HiringBackground>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const FindYourNextGradient = styled.div`
  position: relative;
  z-index: 1;
  bottom: 160px;
  background: ${djobsTheme.gradients.homeMobileGradient};
  padding: 110px 38px 150px 38px;
  clip-path: polygon(0 0px, 0 100%, 100% calc(100% - 50px), 100% 0);
`;
const ButtonsWrapper = styled.div`
  padding: 0 30px;
  position: absolute;
  z-index: 4;
  top: 220px;
  @media (min-width: 578px) {
    padding: 0 40px;
    top: 210px;
  }
  @media (min-width: 976px) {
    top: 240px;
  }
`;

const JoinDittoGradient = styled.div`
  padding: 50px 40px 250px 40px;
  position: relative;
  z-index: 2;
  bottom: 250px;
  background: linear-gradient(
      323.43deg,
      #fbd0b5 14.68%,
      #614edb 49.2%,
      rgba(32, 95, 217, 0.65) 91.11%,
      #6367c0 114.83%
    ),
    #fbd0b5;
  clip-path: polygon(0 80px, 0px 100%, 100% calc(100% - 58px), 100% 0);
`;
const HiringBackground = styled.div`
  padding: 80px 10px 50px 10px;
  position: relative;
  bottom: 500px;
  margin-bottom: -500px;
  z-index: 3;
  background: ${djobsTheme.colors.black10};
  clip-path: polygon(0 58px, 0 100%, 100% 100%, 100% 0);
`;
