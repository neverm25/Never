import { DJobsTypography } from "@DJobs/Components/Basic";
import SettingOptions from "./Components/SettingOptions";
import { settingOptionsData } from "./Utils/MySettingsData";
import styled from "styled-components";
import { djobsTheme } from "@DJobs/Theme";

const MySettings = () => (
  <MainContainer>
    <TitleWrapper>
      <DJobsTypography styleName="djHeadingSix" color="blue100">
        My Settings
      </DJobsTypography>
    </TitleWrapper>
    <SettingOptions data={settingOptionsData} />
  </MainContainer>
);

export default MySettings;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-left: 21px;
  @media (min-width: 992px) {
    gap: 27px;
    padding-left: 0px;
  }
`;

const MainContainer = styled.div`
  background: ${djobsTheme.colors.white100};
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  @media (min-width: 992px) {
    padding: 21px 48px 80px 48px;
    box-shadow: ${djobsTheme.effects.cardShadow};
    width: 784px;
    margin: auto;
    gap: 60px;
    border-radius: 0px 0px 24px 24px;
  }
  @media (min-width: 1600px) {
    width: 1000px;
  }
`;
