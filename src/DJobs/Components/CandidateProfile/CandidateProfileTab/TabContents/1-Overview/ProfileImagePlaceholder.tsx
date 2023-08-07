import { CandidateProfilePlaceholder } from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import React from "react";
import styled from "styled-components";

export const ProfileImagePlaceholder = () => (
  <Container>
    <div style={{ transform: "scale(0.6)" }}>
      <CandidateProfilePlaceholder />
    </div>
  </Container>
);

const Container = styled.div`
  position: relative;
  height: 140px;
  width: 140px;
  border-radius: 16px;
  border: 8px solid ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.boxShadow};
  background-color: ${djobsTheme.colors.blue40};
  display: flex;
  justify-content: center;
`;
