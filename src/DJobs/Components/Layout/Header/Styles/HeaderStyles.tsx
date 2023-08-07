import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";

export const HeaderMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${djobsTheme.colors.black100};
  height: 68px;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  @media (min-width: 992px) {
    padding: 0px 45px;
    justify-content: center;
  }
`;

export const CompanyLogo = styled.div`
  margin-top: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const CountryFlagContainer = styled.div`
  border-radius: 5px;
  height: 47px;
  width: 62px;
  overflow: hidden;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 12px;
  gap: 10px;
  min-width: 132px;
  height: 47px;
  background: rgba(113, 125, 145, 0.6);
  border-radius: 7px;
  cursor: pointer;
`;

export const ProfileImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const SearchIconContainer = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${djobsTheme.gradients.purple100};
  border-radius: 100%;
`;
export const SearchContainer = styled.div`
  border-radius: 100%;
  background: ${djobsTheme.colors.black100};
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserIconContainer = styled.div`
  background: ${djobsTheme.gradients.green100};
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100%;
  @media (min-width: 992px) {
    background: ${djobsTheme.colors.blue50};
  }
`;

export const SearchModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const FlageHeaderMainContainer = styled.div<{
  isCountryCityModalOpen: string;
}>`
  display: flex;
  background: ${({ isCountryCityModalOpen }) =>
    isCountryCityModalOpen === "country"
      ? `${djobsTheme.gradients.blue80}`
      : "none"};
  padding: 2px;
  border-radius: 6px;
  cursor: pointer;
`;

export const UserProfileModalWrapper = styled.div<{
  isModalOpen: boolean;
}>`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 254px;
  background: ${djobsTheme.colors.black100};
  border-radius: 20px 0px 0px 20px;
  padding: 40px 36px 23px 23px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 34px;
  justify-content: start;
  gap: 27px;

  svg {
    margin-right: 0px;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  width: max-content;
  gap: 30px;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 1600px) {
    justify-content: flex-start;
    width: 100%;
  }
`;
export const FlagListMainContainer = styled.div`
  overflow: auto;
  max-height: 232px;
  &::-webkit-scrollbar {
  display: none;

`;
export const CityListMainContainer = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  max-height: 290px;
`;

export const FlagDropDownContainer = styled.div`
  position: absolute;
  top: 45px;
  right: 0px;
  width: 100%;
  padding: 0 24px;
  max-height: 389px;
  z-index: 6;
  background: ${djobsTheme.colors.black100};
  box-shadow:${djobsTheme.effects.countryPopupShadow}
  border-radius: 0px 0px 20px 20px;
  @media (min-width: 768px) {
    top:48px;
    right:0px;
  }
  @media (min-width: 992px) {
    z-index: -1;
    width: 267px;
    top: 30px;
    right: 151px;
    padding: 34px 0px 0px 0px;
  }

`;
export const CityDropDownContainer = styled.div`
  position: absolute;
  top: 45px;
  right: 0px;
  width: 100%;
  z-index: 6;
  max-height: 389px;
  background: ${djobsTheme.colors.black100};
  box-shadow: ${djobsTheme.effects.countryPopupShadow};
  border-radius: 0 0 20px 20px;

  @media (min-width: 992px) {
    z-index: -1;
    width: 267px;
    top: 30px;
    right: 151px;
    padding-top: 34px;
  }
`;
export const CityNotFoundConatiner = styled.div`
  position: absolute;
  padding: 20px;
  top: 47px;
  right: 0px;
  width: 205px;
  max-height: 389px;
  z-index: 11;
  background: ${djobsTheme.colors.black100};
  box-shadow: ${djobsTheme.effects.countryPopupShadow};
  border-radius: 20px 0px 20px 20px;
  @media (min-width: 992px) {
    top: 57px;
    right: 148px;
  }
`;
export const JobTitleDropDown = styled.div`
  position: absolute;
  padding: 20px;
  // top: -24px;
  right: 0px;
  width: 225px;
  z-index: 11;
  background: ${djobsTheme.colors.black100};
  box-shadow: ${djobsTheme.effects.countryPopupShadow};
  border-radius: 20px 0px 20px 20px;
  @media (min-width: 992px) {
    top: 57px;
    right: 62%;
  }
  @media (min-width: 1200px) {
    top: 57px;
    right: 62%;
  }
`;
export const ProfileDropDownContainer = styled.div`
  position: absolute;
  top: 67px;
  right: -19px;
  width:280px;
  padding: 50px;
  z-index: 20;
  background: ${djobsTheme.colors.black100};
  box-shadow:${djobsTheme.effects.countryPopupShadow}
  border-radius: 0px 0px 20px 20px;

  display:flex;
  flex-direction:column;
  gap: 34px;

  @media (min-width: 768px) {
  top:67px;
  right: 0px;
  }

  @media (min-width:992px){
    top:57px;
  }
`;
export const SearchDropDownContainer = styled.div<{
  isCountryCityModalOpen: string;
  isHomePage: boolean;
}>`
  position: ${({ isHomePage }) => (isHomePage ? "relative" : "fixed")};
  padding: 31px 24px 46px 24px;
  top: 67px;
  right:0px;
  width:100%;
  z-index: 9;
  background: ${({ isCountryCityModalOpen }) =>
    isCountryCityModalOpen === "country"
      ? djobsTheme.gradients.djsearchPopupcontainer
      : djobsTheme.gradients.searchPopupcontainer};
  box-shadow:${djobsTheme.effects.countryPopupShadow}
  border-radius: 0px 0px 20px 20px;
  @media (min-width:992px){
      display:none;
    }
`;
export const CountrySearchContainer = styled.div`
  margin: 32px 25px 25px 25px;
`;
export const SearchElementContainer = styled.span<{ color: string }>`
  cursor: pointer;
  color: ${props =>
    props.color === "green"
      ? `${djobsTheme.colors.green100}`
      : `${djobsTheme.colors.white100}`};
  ${djobsTheme.text.djTitleCase.sm}
  text-shadow: ${djobsTheme.effects.citydropdownItemShadow};
`;
export const IConsContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (min-width: 992px) {
    display: none;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 992px) {
    gap: 30px;
  }
`;
export const SearchMainContainer = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    gap: 16px;
    position: relative;
    margin-left: 30px;
  }
`;
export const LoginMainContainer = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    position: relative;
  }
`;
export const Item = styled.div<{ select: boolean }>`
  margin-bottom: 14px;
  padding: 10px 0px 10px 25px;
  border-radius: "4px";
  background-color: ${({ select }) =>
    select && djobsTheme.colors.countryHoverBackground};
  box-shadow: ${({ select }) =>
    select && djobsTheme.effects.countryHoverBackgroundShadow};
`;
