import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { FindYourNextAnimation } from "./FindYourNextAnimation";
import { DeviceTypeHelpers, DeviceTypes } from "@Helpers/DeviceTypeHelpers";

export const HomePageSummary = () => {
  //Logic to update component when device width changes
  const [deviceWidth, setWidth] = useState(0);
  const [deviceType, setDeviceType] = useState<DeviceTypes>("mobile");
  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    setDeviceType(DeviceTypeHelpers.getDeviceType(deviceWidth));
    handleWindowResize();
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [deviceWidth, deviceType]);

  return (
    <React.Fragment>
      <FindYourNext>Find your next</FindYourNext>
      <FindYourNextAnimation />
      <ReadyToMoveWrapper>
        <ReadyToMoveText>Are you ready</ReadyToMoveText>
        <ReadyToMoveText>to make your move?</ReadyToMoveText>
      </ReadyToMoveWrapper>
      <SummaryDescription>
        Search endless opportunities on{" "}
        <SummaryDescBold> Ditto </SummaryDescBold> and join exceptional teams
        <SummaryDescBold> anywhere in the world.</SummaryDescBold>
      </SummaryDescription>
    </React.Fragment>
  );
};

const FindYourNext = styled.div`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 800;
  line-height: 44px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  color: ${djobsTheme.colors.black100};

  @media (min-width: 992px) {
    font-size: 40px;
  }
  @media (min-width: 1600px) {
    font-size: 60px;
  }
`;
const ReadyToMoveWrapper = styled.div`
  padding-top: 29px;
  @media (min-width: 992px) {
    padding-top: 56px;
  }
`;
const ReadyToMoveText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  color: ${djobsTheme.colors.black100};

  @media (min-width: 992px) {
    font-size: 31px;
    line-height: 37px;
  }
  @media (min-width: 1600px) {
    font-size: 40px;
    line-height: 40px;
  }
`;
const summaryDesc = css`
  font-family: Montserrat;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  letter-spacing: 0.3px;
  @media (min-width: 992px) {
    font-size: 18px;
  }
  @media (min-width: 1600px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
const SummaryDescription = styled.div`
  padding-top: 10px;

  ${summaryDesc};
  font-weight: 300;
  @media (min-width: 992px) {
    width: 375px;
  }
  @media (min-width: 1200px) {
    width: 469px;
  }
  @media (min-width: 1600px) {
    width: 600px;
    padding-top: 18px;
  }
`;
const SummaryDescBold = styled.span`
  ${summaryDesc};
  font-weight: 800;
`;
