// #region Global Imports
import React from "react";
import { Grid } from "antd";
// #endregion Global Imports

// #region Local Imports
import { ApplicationLoginStyles } from "./Styles";
import JobTitleContainer from "./Components/JobTitle";
import { AdUnit, BackButton, DJobsTypography } from "@DJobs/Components/Basic";
import { LoginForm } from "@DJobs/Components/Common/LoginForm";
import { adSlots } from "@DJobs/Components/Basic/AdUnit/Ad_slots";
import { useAppSelector } from "@Redux";
import { ApplicationLoginBgWrapper } from "@DJobs/Components/Layout/PageContentWrapper/Styles";
// #endregion Local Imports

export const ApplicationLogin = () => {
  const screen = Grid.useBreakpoint();
  const { jobData } = useAppSelector(store => store);
  const { applyJobData } = jobData;

  return (
    <ApplicationLoginStyles.Wrapper>
      <ApplicationLoginBgWrapper>
        <ApplicationLoginStyles.Container>
          <ApplicationLoginStyles.TopContainer>
            <BackButton btnType="redirectToPreviousPage" />
            {!applyJobData.is_advertised && (
              <AdUnit.GoogleAdSense
                type={screen.xs ? "rectangle" : "banner"}
                adSlot={adSlots.applicationLoginTop}
                showAd={!applyJobData.is_advertised}
              />
            )}
          </ApplicationLoginStyles.TopContainer>
          {screen.lg && (
            <ApplicationLoginStyles.MainTitle>
              <DJobsTypography styleName="djHeadingOne" color="black100">
                Apply easily!
              </DJobsTypography>
              <DJobsTypography styleName="djCardsTitle" color="black100">
                Please follow these easy steps to complete your application
              </DJobsTypography>
            </ApplicationLoginStyles.MainTitle>
          )}
          <ApplicationLoginStyles.LoginFormWrapper>
            <JobTitleContainer />
            <LoginForm type="login" />
          </ApplicationLoginStyles.LoginFormWrapper>
        </ApplicationLoginStyles.Container>
      </ApplicationLoginBgWrapper>
    </ApplicationLoginStyles.Wrapper>
  );
};
