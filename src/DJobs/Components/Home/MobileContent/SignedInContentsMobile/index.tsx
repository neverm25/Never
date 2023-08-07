import React from "react";
import styled from "styled-components";

import { MobileGradientContentsSignedIn } from "./MobileGradientContents";
import dynamic from "next/dynamic";
const CandidateSummary = dynamic(import("../../Common").then(module => module.CandidateSummary));
export const SignedInContentsMobile = () => (
  <Container>
    <CandidateSummary />
    <MobileGradientContentsSignedIn />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
