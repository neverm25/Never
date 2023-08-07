import React from "react";
import styled from "styled-components";

import { DJobsTypography } from "@DJobs/Components/Basic";
import { Profile } from "./Profile";
import { About } from "./About";

export const Overview = () => {
  return (
    <Container>
      <DJobsTypography styleName="djHeadingTwo" color="black90">
        My Profile
      </DJobsTypography>
      <Profile />
      <About />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1600px) {
    gap: 30px;
  }
`;
