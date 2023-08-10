import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { DJobsTypography, DjobsButton } from "../Basic";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";

export const Error = () => {
  const router = useRouter();

  return (
    <Container>
      <ErrorBgWrapper>
        <Content>
          <DJobsTypography styleName="djErrorPageTitle" color="white100">
            Oops!
          </DJobsTypography>
          <div style={{ maxWidth: "369px" }}>
            <DJobsTypography styleName="djErrorPageRegular" color="white100">
              Something went wrong here. Let’s take you back to safety.
            </DJobsTypography>
          </div>
          <div style={{ marginTop: "50px" }}>
            <DjobsButton.Actions
              variant="Submit"
              label="Home"
              width="200px"
              onClick={() => router.push(DJOBS_ROUTES.home)}
            />
          </div>
        </Content>
      </ErrorBgWrapper>
    </Container>
  );
};

const Container = styled.div``;
const Content = styled.div`
  min-width: 320px;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  padding: 50px;
  padding-top: 147px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 39px;

  @media (min-width: 992px) {
    padding-top: 217px;
  }
  @media (min-width: 1600px) {
    padding-top: 257px;
  }
`;
const ErrorBgWrapper = styled.div`
  background: none;

  background: url(/static/images/DjobsErrorPage/BlobMobile.svg);
  background-position: center 33.5px;
  background-size: 800px;
  background-repeat: no-repeat;

  @media (min-width: 992px) {
    background: url(/static/images/DjobsErrorPage/RobotLeft.svg),
      url(/static/images/DjobsErrorPage/RobotRight.svg),
      url(/static/images/DjobsErrorPage/BlobDesktop.svg);
    background-position: calc(50% - 220px) 380px, calc(50% + 293px) 455px,
      center 0px;
    background-size: 164px, 164px, 656px;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }

  @media (min-width: 1600px) {
    background: url(/static/images/DjobsErrorPage/RobotLeft.svg),
      url(/static/images/DjobsErrorPage/RobotRight.svg),
      url(/static/images/DjobsErrorPage/BlobDesktop.svg);
    background-position: calc(50% - 300px) 460px, calc(50% + 372px) 389px,
      center 20px;
    background-size: 196px, 196px, 813px;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
`;
