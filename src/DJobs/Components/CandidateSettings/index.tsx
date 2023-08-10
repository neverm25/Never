'use client'

// #region Global Imports
import React from "react";
import { Col, Grid, Row } from "antd";
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { BackButton, DJobsTypography } from "@DJobs/Components/Basic";
import { CandidateSettingsBgWrapper } from "../Layout/PageContentWrapper/Styles";
import MySettings from "./Components/MySettings";
import { djobsTheme } from "@DJobs/Theme";
// #endregion Local Imports

const CandidateSettings = () => {
  const screens = Grid.useBreakpoint();

  return (
    <CandidateSettingsBgWrapper>
      <Container>
        <BackButton btnType="redirectToPreviousPage" />
        {screens.lg && (
          <Row justify="start" align="middle">
            <Col xs={0} lg={24}>
              <DJobsTypography
                styleName="candidateSettingHeadingOne"
                color="black100"
              >
                Account Settings
              </DJobsTypography>
            </Col>
            <Col xs={0} lg={7}>
              <BorderContainer />
            </Col>
          </Row>
        )}
        <ContentWrapper>
          <MySettings />
        </ContentWrapper>
      </Container>
    </CandidateSettingsBgWrapper>
  );
};

export default CandidateSettings;

const Container = styled.div`
  padding: 10px;
  padding-top: 87px;
  @media (min-width: 992px) {
    padding: 30px;
    padding-top: 87px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 39px 0;
  margin: 0 auto;
  justify-content: center;
  @media (min-width: 992px) {
    padding: 26px 0;
    width: 95%;
    max-width: 984px;
  }
`;

const BorderContainer = styled.div`
  height: 2px;
  margin-top: 9px;
  background: ${djobsTheme.gradients.jobViewAccent};
`;
