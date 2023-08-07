import { djobsTheme } from "@DJobs/Theme";
import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  background-color: ${djobsTheme.colors.black100};
  box-shadow: 0px 6px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 2px -1px rgba(0, 0, 0, 0.06),
    inset 0px -1px 3px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 20px 20px;

  height: 70px;
  padding-left: 30px;
  @media (min-width: 800px) {
    height: 80px;
    padding-left: 50px;
  }
`;

export const ContentWrapper = styled.div`
  flex: auto;
  background-color: ${djobsTheme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  width: 100%;
  background-color: ${djobsTheme.colors.black100};

  height: 70px;
  padding-left: 30px;
  @media (min-width: 800px) {
    height: 80px;
    padding-left: 50px;
  }
`;
