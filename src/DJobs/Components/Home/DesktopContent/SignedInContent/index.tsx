import { RecommendationCarousel } from "@DJobs/Components/Common/RecommendationCarousel";
import React from "react";
import styled from "styled-components";

import { HomePageSummary } from "../../Common/";
import dynamic from "next/dynamic";
const CandidateSummary = dynamic(import("../../Common").then(module => module.CandidateSummary));

export const SignedInContent = () => (
  <React.Fragment>
    <HomePageSummary />
    <Wrapper>
      <CandidateSummary />
      <RecommendationWrapper>
        <RecommendationCarousel />
      </RecommendationWrapper>
    </Wrapper>
  </React.Fragment>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
const RecommendationWrapper = styled.div`
  margin-top: 250px;
  gap: 46px;
  width: 51%;
  max-width: 600px;
`;
