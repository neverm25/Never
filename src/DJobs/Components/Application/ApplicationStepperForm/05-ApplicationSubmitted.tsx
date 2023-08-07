import React from "react";
import Image from "next/image";
import styled from "styled-components";

import LottieSuccess from "public/static/images/93814-success-graduation.gif";
import { StepHeading } from "./Common/StepHeading";
import JobTitleContainer from "../ApplicationLogin/Components/JobTitle";
import { DjobsButton } from "@DJobs/Components/Basic";
import { useAppSelector } from "@Redux";

export const ApplicationSubmitted = () => {
  const jobData = useAppSelector(state => state.jobData.applyJobData);

  return (
    <React.Fragment>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "44px",
          }}
        >
          <JobTitleContainer />
          <StepHeadingContainer>
            <StepHeading
              stepHeading="Success!"
              stepDescription={
                jobData?.is_internal
                  ? "Thanks for submitting your application."
                  : "Thanks for submitting your information."
              }
            />
          </StepHeadingContainer>
          {!jobData?.is_internal && (
            <DjobsButton.ExternalLink
              variant="DarkBlue"
              label="apply on company website"
              onClick={() => window.open(jobData?.url, "_blank")}
            />
          )}
        </div>
        <SuccessLottieAnimation>
          <Image
            alt="Mountains"
            src={LottieSuccess}
            layout="fixed"
            width={250}
            height={250}
            loading="lazy"
          />
        </SuccessLottieAnimation>
      </Container>
    </React.Fragment>
  );
};

const SuccessLottieAnimation = styled.div`
  margin: 0 auto;
`;
const StepHeadingContainer = styled.div`
  @media (max-width: 992px) {
    width: 80%;
    margin: auto;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 27px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
