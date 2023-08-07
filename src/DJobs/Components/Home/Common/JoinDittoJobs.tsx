import React, { useContext } from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { DjobsHomeContext } from "..";
import { TickIconDesktop, TickIconMobile } from "@DJobs/Components/Icons";

const Reason = (props: { reason: string }) => {
  const { isDesktopOrBigger } = useContext(DjobsHomeContext);
  return (
    <ReasonContainer>
      <CheckContainer>
        {isDesktopOrBigger ? <TickIconDesktop /> : <TickIconMobile />}
      </CheckContainer>
      <ReasonLabel>{props.reason}</ReasonLabel>
    </ReasonContainer>
  );
};

export const JoinDittoJobs = () => (
  <Container>
    <Heading>Join Ditto Jobs</Heading>
    <Reason reason="Register to get access to millions of new opportunities" />
    <Reason reason="Get expert recommendations straight to your inbox" />
    <Reason reason="Discover new jobs and reach your career potential" />
  </Container>
);

const Container = styled.div`
  margin-top: 60px;
  min-height: 100px;
  border-radius: 8px;

  min-width: 300px;

  @media (min-width: 768px) {
    margin-top: 37px;
  }
  @media (min-width: 992px) {
    width: 45%;
    padding: 33px 46px !important;
    max-width: 481px;
    background: ${djobsTheme.colors.white100};
    box-shadow: ${djobsTheme.effects.boxShadow};
    height: fit-content;
  }
  @media (min-width: 1600px) {
    width: 45%;
    max-width: 591px;
    padding: 40px 46px !important;
  }
`;
const Heading = styled.div`
  margin-bottom: 42px;
  font-family: Montserrat;
  font-size: 27px;
  font-weight: 800;
  line-height: 37px;
  letter-spacing: -0.30000001192092896px;
  text-align: left;
  color: ${djobsTheme.colors.white100};
  padding-left: 35px;
  @media (min-width: 992px) {
    color: ${djobsTheme.colors.black100};
  }
  @media (min-width: 1600px) {
    font-size: 40px;
    font-weight: 800;
  }
`;
const ReasonContainer = styled.div`
  padding-bottom: 41px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (min-width: 768px) {
    padding-bottom: 18px;
  }
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: linear-gradient(
    42.65deg,
    #e9abd9 -13.19%,
    #785bea 20.83%,
    #3495ee 53.75%,
    #b0def0 91.07%
  );
  border: 1px solid ${djobsTheme.colors.white100};
  padding: 7px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 992px) {
    margin-top: 5px;
    border: 0px;
    background: #27ae6030;
  }
`;
const ReasonLabel = styled.div`
  font-family: Lexend;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.03em
  text-align: left;
  max-width: 235px;
  color: ${djobsTheme.colors.white100};
  @media (min-width: 992px) {
    max-width: 385px;
    font-size: 18px;
    line-height: 27px;
    color: ${djobsTheme.colors.black100};
  }
  @media (min-width: 1600px) {
    max-width: 394px;
    font-size: 22px;
    text-align: left;
  }
`;
