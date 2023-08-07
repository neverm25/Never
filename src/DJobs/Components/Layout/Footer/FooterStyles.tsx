import { djobsTheme } from "@DJobs/Theme";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  background: ${djobsTheme.colors.black100};
  flex-direction: column;
  min-width: 360px;
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const TopContainer = styled.div<{ isLoggedIn: boolean }>`
  background: ${({ isLoggedIn }) => !isLoggedIn && djobsTheme.colors.black90};
  background: ${djobsTheme.colors.black90};
  @media (min-width: 976px) {
    height: 83px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 70px 0 50px;
  }
  @media (min-width: 1600px) {
    padding: 0 80px 0 50px;
  }
`;

export const RegisterButtonContainer = styled.div`
  display: none;
  @media (min-width: 976px) {
    display: flex;
    align-items: center;
    border-bottom-right-radius: 30px;
    width: 58%;
    flex-direction: row;
    gap: 50px;
  }

  @media (min-width: 1600px) {
    width: 68%;
    gap: 60px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 10px;

  @media (min-width: 976px) {
    margin-top: 0px;
    gap: 50px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  flex-direction: column;
  padding: 38px 0px;

  @media (min-width: 976px) {
    flex-direction: row;
  }
`;

export const SocialIcon = styled.div<{
  padding?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  background: ${djobsTheme.colors.purple100};
  box-shadow: ${djobsTheme.effects.boxShadow};
  padding-top: ${({ padding }) => (padding ? padding : "0px")};
  &:hover {
    transform: scale(1.1);
  }
`;
export const IconContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (min-width: 976px) {
    gap: 30px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 50px 0px;

  @media (min-width: 976px) {
    height: 156px;
    flex-direction: row;
    padding: 10px 70px 0 50px;
  }
  @media (min-width: 1600px) {
    padding: 10px 80px 0 50px;
  }
`;
export const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media (min-width: 976px) {
    flex-direction: row;
    gap: 80px;
    align-items: center;
  }
`;

export const CompanyLogo = styled.div`
  @media (min-width: 976px) {
    margin-top: 14px;
  }
  img {
    cursor: pointer;
  }
`;
export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
`;
export const MainLinksContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 42px;
  margin-bottom: 42px;
  flex-direction: column;

  @media (min-width: 976px) {
    flex-direction: row;
    gap: 64px;
    margin-top: 28px;
  }
`;

export const OtherLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 38px;
  text-decoration: underline;
  text-decoration-color: ${djobsTheme.colors.white100} !important;
  a {
    color: ${djobsTheme.colors.white100};
  }
  @media (min-width: 976px) {
    gap: 50px;
    flex-direction: row;
    margin-bottom: 14px;
  }

  @media (min-width: 1600px) {
    gap: 87px;
  }
`;
