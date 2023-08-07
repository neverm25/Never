import { useAppSelector } from "@Redux";
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
const Hiring = dynamic(import("../Common").then(module => module.Hiring));
export const SignedInBg = () => {
  const { candidateDetails } = useAppSelector(store => store);
  const { job_recommendations } = candidateDetails;
  const recommendSize = 3;
  const jobRecommendationLength =
    job_recommendations.length > recommendSize
      ? recommendSize
      : job_recommendations.length;

  return (
    <Container>
      <CandidateSearchBg />
      <GradientBg jobRecommendationLength={jobRecommendationLength}>
        {jobRecommendationLength === recommendSize && <WorkingManBg />}
      </GradientBg>
      <HiringContainer>
        <Hiring />
      </HiringContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;
const CandidateSearchBg = styled.div`
  position: relative;
  z-index: 2;
  height: 507px;
  @media (min-width: 992px) {
    background: url(/static/images/ditto-candidatesearch.svg);
    background-position: calc(100% - 20px) 100px;
    background-repeat: no-repeat;
  }
  @media (min-width: 1200px) {
    background: url(/static/images/ditto-candidatesearch.svg);
    background-position: calc(100% - 121px) 100px;
    background-repeat: no-repeat;
  }
  @media (min-width: 992px) {
    max-width: 1370px;
  }
  @media (min-width: 1600px) {
    max-width: 1500px;
  }
`;
const HiringContainer = styled.div`
  padding-bottom: 95px;
`;
const GradientBg = styled.div<{ jobRecommendationLength: number }>`
  position: relative;
  bottom: 100px;
  padding-bottom: 100px;
  height: ${({ jobRecommendationLength }) =>
    `${jobRecommendationLength * 200 + 407}px`};
  z-index: 1;
  background: linear-gradient(
      283.63deg,
      #785bea -3.86%,
      rgba(176, 222, 240, 0.4) 13.75%,
      rgba(255, 255, 255, 0) 83.7%
    ),
    linear-gradient(
      160.92deg,
      #4490ea -43.12%,
      #785bea -8.21%,
      rgba(144, 163, 245, 0.83) 10.34%,
      rgba(52, 138, 238, 0.38) 23.6%,
      rgba(36, 64, 89, 0.11) 47.24%,
      rgba(255, 255, 255, 0) 78.21%
    ),
    #ffffff;
  clip-path: polygon(0 112px, 0 calc(100%), 100% calc(100% - 112px), 100% 0);
`;
const WorkingManBg = styled.div`
  position: relative;
  top: calc(31%);
  height: 100%;
  @media (min-width: 992px) {
    background: url(/static/images/working-man.svg);
    background-position: -500px 200px;
    background-repeat: no-repeat;
  }
`;
