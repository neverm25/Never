import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const HomePageSummary = dynamic(import("../../Common").then(module => module.HomePageSummary));
const RegisterAndLoginButtons = dynamic(import("../../Common").then(module => module.RegisterAndLoginButtons));
const JoinDittoJobs = dynamic(import("../../Common").then(module => module.JoinDittoJobs));
const CandidateProfileGif = dynamic(import("./CandidateProfileGif").then(module => module.CandidateProfileGif));
export const NotSignedInContent = () => (
  <Container>
    <HomePageSummary />
    <RegisterAndLoginButtons />
    <Wrapper>
      <JoinDittoJobs />
      <CandidateProfileGif />
    </Wrapper>
  </Container>
);

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
