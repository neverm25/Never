import React from "react";
import styled from "styled-components";
import Head from "next/head";

import { CandidateProfileHeader } from "./CandidateProfileHeader";
import { CandidateProfileTab } from "./CandidateProfileTab";
import { RecommendationCarousel } from "@DJobs/Components/Common/RecommendationCarousel";
import { djobsTheme } from "@DJobs/Theme";
import { CandidateProfileBgWrapper } from "../Layout/PageContentWrapper/Styles";
import { useAppSelector } from "@Redux";

export const CandidateProfile = () => {
  const { candidateDetails } = useAppSelector(store => store);
  const candidateFullName =
    candidateDetails.first_name.charAt(0).toLocaleUpperCase() +
      candidateDetails.first_name.slice(1) || "";

  return (
    <CandidateProfileContainer>
      <Head>
        <title>{candidateFullName + " | Ditto Jobs"}</title>
      </Head>
      <CandidateProfileBgWrapper>
        <Container>
          <CandidateProfileHeader />
          <ContentWrapper>
            <CandidateProfileTab />
            {candidateDetails.job_recommendations.length > 0 && (
              <RecommendationWrapper>
                <RecommendationCarousel />
              </RecommendationWrapper>
            )}
          </ContentWrapper>
        </Container>
      </CandidateProfileBgWrapper>
    </CandidateProfileContainer>
  );
};

const CandidateProfileContainer = styled.div`
  background: ${djobsTheme.colors.white110};
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 35px;
  padding: 87px 10px 20px 10px;

  @media (min-width: 768px) {
    padding: 87px 20px 20px 20px;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 95%;
  }
  @media (min-width: 1200px) {
    width: 90%;
    max-width: 1250px;
    margin: 0 auto;
  }
  @media (min-width: 1600px) {
    width: 1450px;
    margin: 0 auto;
  }
`;
const RecommendationWrapper = styled.div`
  padding-top: 37px;
  margin: 0 auto;
  @media (min-width: 992px) {
    max-width: 785px;
  }
  @media (min-width: 1200px) {
    min-width: 785px;
    width: 75%;
    max-width: 950px;
  }
  @media (min-width: 1600px) {
    width: 1000px;
    max-width: 1000px;
  }
`;
