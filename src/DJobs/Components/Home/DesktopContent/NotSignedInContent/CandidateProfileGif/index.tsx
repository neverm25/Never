import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { Overview } from "./1-Overview";
import { Career } from "./2-Career";
import { Education } from "./3-Education";
import { Files } from "./4-Files";
import { Additional } from "./5-Additional";

export const CandidateProfileGif = () => {
  const Contents = [Overview, Career, Education, Files, Additional];
  const [stepNumber, setStepNumber] = useState(0);
  const ContentData = Contents[stepNumber];

  useEffect(() => {
    const timeout = setTimeout(
      () => setStepNumber((stepNumber + 1) % Contents.length),
      2500
    );

    return () => clearTimeout(timeout); // Clear the timeout when the component is unmounted
  }, [stepNumber, Contents.length]);
  // setTimeout(() => setStepNumber((stepNumber + 1) % Contents.length), 2500);

  return (
    <Container>
      <Header>
        <HeaderContent StepNumber={stepNumber} />
      </Header>
      <Content>
        <ContentData />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  width: 40%;
  min-width: 400px;
  height: 390px;
  background: ${djobsTheme.colors.white100};
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 8px;
  padding: 19px 24px;

  @media (min-width: 1200px) {
    max-width: 481px;
    height: 390px;
  }
  @media (min-width: 1600px) {
    max-width: 592px;
    height: 480px;
  }
`;
const Header = styled.div`
  height: 34px;
  border-radius: 2px;
  background: ${djobsTheme.gradients.purple100};
`;
const HeaderContent = styled.div<{ StepNumber: number }>`
  position: relative;
  left: calc(19% * ${({ StepNumber }) => StepNumber} + 15px);
  height: 34px;
  width: 20%;

  background: ${djobsTheme.colors.black10};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;
const Content = styled.div`
  padding: 10px 36px;
  height: 85%;
`;
