import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { Hiring, HomePageSummary, SignedInBgCircle } from "../../Common";
import { RecommendationCarousel } from "@DJobs/Components/Common/RecommendationCarousel";
import { useAppSelector } from "@Redux";

const CandidateSearchComponent = () => (
  <React.Fragment>
    <div style={{ float: "left", marginLeft: "280px" }}>
      <SignedInBgCircle />
    </div>
    <CandidateSearchBgMobile>
      <SmallCircleWrapper>
        <SignedInBgCircle />
      </SmallCircleWrapper>
    </CandidateSearchBgMobile>
  </React.Fragment>
);
const CandidateSearchBgMobile = styled.div`
  position: relative;
  z-index: 2;
  height: 364px;
  background: url(/static/images/ditto-candidatesearch-mobile.svg);
  background-repeat: no-repeat;
  background-position: 0 30px;
`;
const SmallCircleWrapper = styled.div`
  transform: scale(0.6);
  position: absolute;
  top: 10px;
  left: 47px;
`;

export const MobileGradientContentsSignedIn = () => {
  const { candidateDetails } = useAppSelector(store => store);
  const { job_recommendations } = candidateDetails;
  const isRecommendationExists = job_recommendations.length > 0;

  return (
    <Container>
      <CandidateSearchComponent />
      <FindYourNextGradient>
        <HomePageSummary />
      </FindYourNextGradient>
      <HiringGradient isRecommendationExists={isRecommendationExists}>
        <RecommendationWrapper>
          <RecommendationCarousel />
        </RecommendationWrapper>
        <Hiring />
      </HiringGradient>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const FindYourNextGradient = styled.div`
  position: relative;
  z-index: 1;
  bottom: 170px;
  background: ${djobsTheme.gradients.homeMobileGradient};
  padding: 150px 38px 250px 38px;
  clip-path: polygon(0 0px, 0 100%, 100% calc(100% - 50px), 100% 0);
`;
const HiringGradient = styled.div<{ isRecommendationExists: boolean }>`
  clip-path: polygon(0 50px, 0 100%, 100% 100%, 100% 0);
  padding: 10px 10px 50px 10px;
  padding-top: ${({ isRecommendationExists }) =>
    isRecommendationExists ? "10px" : "60px"};

  position: relative;
  z-index: 3;
  bottom: 401px;
  margin-bottom: -402px;
  background: ${djobsTheme.colors.white110};
`;
const RecommendationWrapper = styled.div`
  padding: 33px 0;
`;
