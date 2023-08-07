import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";

export const Hiring = () => {
  return (
    <Container>
      <Heading>Hiring?</Heading>
      <Content>The world’s top recruiters get the job done with Ditto.</Content>
      <LearnMoreButton href={DJOBS_ROUTES.dittoHire} target="_blank">
        LEARN MORE
      </LearnMoreButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  box-shadow: ${djobsTheme.effects.cardShadow};
  border-radius: 24px;
  padding: 26px 52px;
  gap: 30px;

  @media (min-width: 992px) {
    background: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    gap: 23px;
  }
`;
const Heading = styled.div`
  font-family: Montserrat;
  font-weight: 800;
  font-size: 31px;
  line-height: 37px;
  letter-spacing: -0.3px;
  color: ${djobsTheme.colors.black100};
  @media (min-width: 992px) {
    font-size: 38px;
    text-align: center;
  }
`;
const Content = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.3px;
  text-align: center;
  min-width: 220px;
  max-width: 251px;
  color: ${djobsTheme.colors.black100};

  @media (min-width: 992px) {
    font-size: 21px;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    max-width: 362px;
    padding-top: 9px;
  }
`;
const LearnMoreButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  ${djobsTheme.text.djButtonNext};
  font-weight: 800;
  color: ${djobsTheme.colors.white100};
  border: 0;
  border-radius: 11px;
  cursor: pointer;
  height: 54px;
  width: 140px;

  background: ${djobsTheme.gradients.purple100};
  &:hover {
    background: ${djobsTheme.colors.purple150};
    color: ${djobsTheme.colors.white100};
  }
`;
