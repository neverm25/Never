import React, { useContext, useState } from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { DjobsTheme } from "@DJobs/Theme/styled";
import { CandidateProfileContext } from ".";
import { CandidateProfileTabData } from "./Utils";
import { LeftArrowIcon, RightArrowIcon } from "@Global/Components/Icons";
import { theme } from "@Global/Theme";
import { DeviceTypeHelpers } from "@Helpers/DeviceTypeHelpers";

export const TabHeader = () => {
  const { Headers } = CandidateProfileTabData;
  const { activeHeading, setActiveHeading, deviceType } = useContext(
    CandidateProfileContext
  );
  const isMobile = DeviceTypeHelpers.isDeviceIsOrSmall({
    currentDevice: deviceType,
    comparedTo: "mobile",
  });

  //Slide through the window in mobile
  const headerWindowSize = isMobile ? 3 : 5;
  const [startIndex, setStartIndex] = useState(0);
  const newHeaders = [...Headers];

  return (
    <Container id="candidateTabItem">
      {isMobile && startIndex > 0 && (
        <IconWrapper onClick={() => setStartIndex(startIndex - 1)}>
          <LeftArrowIcon color={theme.colors.white100} />
        </IconWrapper>
      )}
      {newHeaders.splice(startIndex, headerWindowSize).map(Header => {
        const isActive = Header === activeHeading;
        return (
          <Heading
            key={Header}
            styleName={isActive ? "djTabNavActive" : "djTabNavDefault"}
            onClick={() => setActiveHeading(Header)}
          >
            {Header}
          </Heading>
        );
      })}
      {isMobile && startIndex < 2 && (
        <IconWrapper onClick={() => setStartIndex(startIndex + 1)}>
          <RightArrowIcon color={theme.colors.white100} />
        </IconWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  background: ${djobsTheme.colors.dittoBlue};
  box-shadow: ${djobsTheme.effects.buttonNormal};
  padding: 0px 25px;
  border-radius: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    padding: 0px 35px;
    border-radius: 24px 24px 0 0;
    margin-bottom: 0px;
  }
`;
const IconWrapper = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const Heading = styled.div<{
  styleName: keyof DjobsTheme.DjobsText;
}>`
  align-self: center;
  cursor: pointer;

  ${({ styleName }) => djobsTheme.text[styleName].sm};
  color: ${djobsTheme.colors.white100};
  @media (min-width: 768px) {
    ${({ styleName }) => djobsTheme.text[styleName].md}
  }
  @media (min-width: 992px) {
    ${({ styleName }) => djobsTheme.text[styleName].lg}
  }
  @media (min-width: 1600px) {
    ${({ styleName }) => djobsTheme.text[styleName].xl}
  }

  &:hover {
    text-decoration: underline;
  }
`;
