import React from "react";
import styled from "styled-components";

import { BackButton, DJobsTypography } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";

export const CandidateProfileHeader = () => (
  <div>
    <BackButton btnType="redirectToPreviousPage" />
    <TitleWrapper>
      <DJobsTypography styleName="djHeadingOne" color="black100">
        My Profile
      </DJobsTypography>
      <Line />
    </TitleWrapper>
  </div>
);

const TitleWrapper = styled.div`
  padding-top: 22px;
  max-width: 350px;
`;
const Line = styled.div`
  margin-top: 8px;
  height: 3px;
  background: ${djobsTheme.gradients.jobInsideAccent};

  border: 3px solid ${djobsTheme.gradients.jobInsideAccent};
`;
