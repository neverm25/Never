import React, { useContext } from "react";
import styled from "styled-components";

import { EducationHistory } from "@DJobs/Components/Common/EducationHistory";
import { djobsTheme } from "@DJobs/Theme";
import { CandidateProfileContext } from "../..";
import { DeviceTypeHelpers } from "@Helpers/DeviceTypeHelpers";

export const Education = () => {
  const { deviceType } = useContext(CandidateProfileContext);
  const isMobile = DeviceTypeHelpers.isDeviceIsOrSmall({
    currentDevice: deviceType,
    comparedTo: "mobile",
  });
  return (
    <Container isMobile={isMobile}>
      <EducationHistory />
    </Container>
  );
};

const Container = styled.div<{ isMobile: boolean }>`
  ${({ isMobile }) =>
    isMobile &&
    `background:${djobsTheme.colors.white100};
    padding:31px 25px;
    box-shadow:${djobsTheme.effects.cardShadow};
    border: 0.658436px solid ${djobsTheme.colors.black10};
    border-radius: 16px 16px 15.8025px 15.8025px;
    `};
`;
