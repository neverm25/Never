// #Global Imports
import React from "react";
import styled from "styled-components";
import Head from "next/head";
// #endGlobal Imports

// #region Local Imports
import { DJobsTypography, BackButton } from "@DJobs/Components/Basic/";
import { AdUnit } from "../Basic";
import { LegalTab } from "./LegalTab";
import { djobsTheme } from "@DJobs/Theme";
import { LegalBgWrapper } from "../Layout/PageContentWrapper/Styles";
import { adSlots } from "../Basic/AdUnit/Ad_slots";
// #endregion Local Imports

export const Legal = () => {
  return (
    <LegalBgWrapper>
      <Head>
        <title>Legal | Ditto Jobs</title>
      </Head>
      <MainContainer>
        <TitleContainer>
          <BackButton btnType="redirectToPreviousPage" />
          <div style={{ paddingLeft: "10px" }}>
            <DJobsTypography styleName="djHeadingOne" color="black100">
              Legal
            </DJobsTypography>
            <BorderContainer />
          </div>
        </TitleContainer>
        <ResponsiveWrapper>
          <AdUnit.GoogleAdSense type="banner" adSlot={adSlots.legalTop} />
          <LegalTab />
          <AdUnit.GoogleAdSense type="banner" adSlot={adSlots.legalBottom} />
        </ResponsiveWrapper>
      </MainContainer>
    </LegalBgWrapper>
  );
};

const BorderContainer = styled.div`
  height: 2px;
  margin-top: 9px;
  margin-bottom: 25px;
  max-width: 400px;
  background: ${djobsTheme.gradients.jobViewAccent};
`;

const ResponsiveWrapper = styled.div`
  margin: auto;

  @media (min-width: 1200px) {
    max-width: 800px;
  }

  @media (min-width: 1600px) {
    max-width: 950px;
  }
`;

const MainContainer = styled.div`
  padding: 0px 15px;
  padding-top: 87px;
  @media (min-width: 992px) {
    padding: 87px 87px 40px 87px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 992px) {
    gap: 17px;
  }
`;
