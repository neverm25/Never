import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";

const Wrapper = styled.div`
  background: ${djobsTheme.colors.white110};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 10px;
  padding-top: 87px;
  margin: 0 auto;
  gap: 38px;

  @media (min-width: 578px) {
    padding: 87px 50px 45px 50px;
    box-shadow: ${djobsTheme.effects.cardShadow};
  }

  @media (min-width: 992px) {
    gap: 60px;
  }
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  gap: 40px;
  @media (min-width: 992px) {
    padding: 0;
  }
`;
const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;
const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const ApplicationLoginStyles = {
  Wrapper,
  Container,
  TopContainer,
  MainTitle,
  LoginFormWrapper,
};
