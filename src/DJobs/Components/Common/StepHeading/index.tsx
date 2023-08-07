import React from "react";

import { DJobsTypography } from "@DJobs/Components/Basic";
import styled from "styled-components";

export const StepHeading = ({
  stepHeading,
  stepHeadingTwo,
  stepDescription,
}: {
  stepHeading: string;
  stepHeadingTwo?: string;
  stepDescription?: string;
}) => (
  <Container>
    <div style={{ width: `fit-content` }}>
      <DJobsTypography color="blue100" styleName="djSubTitleOne">
        {stepHeading}
      </DJobsTypography>
    </div>
    {stepHeadingTwo && (
      <DJobsTypography styleName="djSubTitleTwo" color="blue60">
        {stepHeadingTwo}
      </DJobsTypography>
    )}
    {stepDescription && (
      <DJobsTypography styleName="djFormsRegular" color="blue60">
        {stepDescription}
      </DJobsTypography>
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  @media (min-width: 992px) {
    gap: 18px;
  }
`;
