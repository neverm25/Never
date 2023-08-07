// #region Global Imports
import { djobsTheme } from "@DJobs/Theme";
import styled from "styled-components";
// #endregion Global Imports

export const TitleContainer = styled.div`
  padding: 22px 0px 12px 0px;
  @media (min-width: 992px) {
    padding: 25px 0px 25px 0px;
  }
`;

export const BorderContainer = styled.div`
  padding-top: 1px;
  margin-top: 9px;
  background: linear-gradient(
      306.32deg,
      rgba(255, 255, 255, 0.8217) 65.18%,
      rgba(255, 255, 255, 0) 115.64%
    ),
    radial-gradient(
      1113.38% 1330.92% at 133.84% -55.84%,
      rgba(176, 222, 240, 0.184) 0%,
      rgba(108, 214, 255, 0.3956) 0.01%,
      rgba(134, 153, 255, 0.46) 54.69%,
      rgba(120, 91, 234, 0.46) 100%
    ),
    linear-gradient(0deg, #f2f5ff, #f2f5ff),
    linear-gradient(0deg, #ffffff, #ffffff);
`;

export const CompanyInfoContainer = styled.div`
  background: ${djobsTheme.colors.black100};
  border-radius: 10px 10px 0px 0px;
  box-shadow: ${djobsTheme.effects.boxShadow};
  padding-bottom: 5px;
  background: linear-gradient(
      90.06deg,
      #e9abd9 0.06%,
      #785bea 35.68%,
      #3495ee 70.14%,
      #7ec1ef 93.14%,
      #b0def0 109.2%
    )
    left bottom ${djobsTheme.colors.black100} no-repeat;
  background-size: 100% 4px;
  color: white;
`;

export const ProfileImage = styled.div<{
  bgURL: string;
}>`
  min-width: 83px;
  height: 83px;
  border: 2.13811px solid ${djobsTheme.colors.background};
  box-sizing: border-box;
  filter: drop-shadow(0px 0.927939px 0.927939px rgba(0, 0, 0, 0.19));
  border-radius: 2px;
  background: url(${({ bgURL }) => bgURL || ""}) no-repeat;
  background-size: cover;

  @media (min-width: 992px) {
    width: 147px;
    height: 147px;
  }
`;

export const LinkContainer = styled.a`
  padding-top: 20px;
  @media (min-width: 992px) {
    padding-top: 0;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 3px;
  @media (min-width: 992px) {
    gap: 7px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  padding: 20px;
  padding-bottom: 0;
  gap: 18px;
  align-items: center;
  @media (min-width: 992px) {
    padding: 20px 47px;
    gap: 46px;
    align-items: start;
  }

  @media (min-width: 1600px) {
    padding: 30px 60px 40px;
  }
`;

export const TabSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: transparent;
  border-radius: 32px 32px 27px 27px;
`;

export const TabSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 52px;
  box-shadow: 0px 1px 2px rgba(38, 70, 154, 0.68);
  border-radius: 10px;
  background: ${djobsTheme.colors.blue150};
  padding-left: 30px;

  @media (min-width: 992px) {
    margin: 0 34px;
    justify-content: start;
    gap: 60px;
  }
  @media (min-width: 1600px) {
    margin: 17px 30px 12px 30px;
  }
`;
export const TabSectionBody = styled.div`
  @media (min-width: 992px) {
    padding: 0 0px 35px 60px;
  }
`;

export const TabContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    div {
      color: ${djobsTheme.colors.white110};
    }
  }
`;

export const FilteredCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 34px;
  height: 34px;
  background: ${djobsTheme.colors.green50};
  position: relative;
  border-radius: 50%;
`;

export const FilterCount = styled.label`
  color: ${djobsTheme.colors.green180};
  font-family: Roboto;
  font-size: 11px;
  font-weight: 900;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-align: center;
  font-variation-settings: "wdth" 100;
`;

export const TabComponentTitleWrapper = styled.div<{
  margin?: string;
  padding?: string;
}>`
  padding-bottom: ${({ padding }) => padding || "30px"};
  border: 0.658436px solid ${djobsTheme.colors.black10};
  border-radius: 16px 16px 15.8025px 15.8025px;
  background: transparent;

  @media (min-width: 992px) {
    box-shadow: ${djobsTheme.effects.boxShadow};
    background: ${djobsTheme.colors.white100};
    margin: ${({ margin }) => margin || "30px 25px 30px 25px"};
    width: 47%;
    box-shadow: none;
    border: none;
    padding: 0px;
    margin: 0px;
  }
`;

export const TabComponentsWrapper = styled.div<{
  margin?: string;
  padding?: string;
}>`
  border: 0.658436px solid ${djobsTheme.colors.black10};
  box-shadow: ${djobsTheme.effects.boxShadow};
  border-radius: 16px 16px 15.8025px 15.8025px;
  background: ${djobsTheme.colors.white100};

  @media (min-width: 992px) {
    margin: ${({ margin }) => margin || "30px 25px 30px 25px"};
    width: 47%;
    box-shadow: none;
    border: none;
    padding: 0px;
    margin: 0px;
  }
`;

export const CompanyProfileInfoContainer = styled.div<{ bgURL: string }>`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 0 15px;
  @media (min-width: 992px) {
    gap: 51px;
    margin: auto;
    max-width: 1037px;
    padding: 0 23px;
    padding-top: 174px;
    border-radius: 32px 32px 27px 27px;
    background: linear-gradient(
        0deg,
        #ffffff 80.85%,
        rgba(255, 255, 255, 0) 85%
      ),
      url(${({ bgURL }) => bgURL || ""}) no-repeat;
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: ${djobsTheme.effects.boxShadow};
  }
  @media (min-width: 1600px) {
    background: linear-gradient(
        0deg,
        #ffffff 75.85%,
        rgba(255, 255, 255, 0) 83.31%
      ),
      url(${({ bgURL }) => bgURL || ""}) no-repeat;
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 1318px;
  }
`;
export const MainContainer = styled.div`
  background: ${djobsTheme.colors.white110};
  padding-top: 87px;
  padding-bottom: 52px;
`;
export const TitleWrapper = styled.div`
  padding-left: 13px;
  @media (min-width: 992px) {
    padding-left: 40px;
  }
`;

export const CompanyDescription = styled.div`
  color: ${djobsTheme.colors.white110};
  ${djobsTheme.text.djLinkBold.sm}
  @media (min-width: 1200px) {
    width: 36rem;
    ${djobsTheme.text.djLinkBold.lg};
  }
  @media (min-width: 1600px) {
    width: 36rem;
    ${djobsTheme.text.djHeadingThree.xl};
  }
`;
export const CompanyDescriptionMain = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-items: space-between;
  }
`;
export const CompanyMetaDataWrapper = styled.div`
  margin-bottom: 4px;
  display: flex;

  flex-direction: column;
  @media (min-width: 992px) {
    gap: 26px;
  }
`;

export const CompanyDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px 22px;
  @media (min-width: 1200px) {
    display: none;
  }
`;
