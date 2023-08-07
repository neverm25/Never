import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { DeviceTypeHelpers, DeviceTypes } from "@Helpers/DeviceTypeHelpers";
import { CandidateProfileContentProps } from "./CandidateProfileTab";
import { TabHeader } from "./TabHeader";
import { CandidateProfileTabData } from "./Utils";

export const CandidateProfileContext = createContext(
  {} as CandidateProfileContentProps.Context
);

export const CandidateProfileTab = () => {
  //Logic to update component when device width changes
  const [width, setWidth] = useState(0);
  const [deviceType, setDeviceType] = useState<DeviceTypes>("desktop");
  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    setDeviceType(DeviceTypeHelpers.getDeviceType());
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const [activeHeading, setActiveHeading] = useState(
    "Overview" as CandidateProfileContentProps.Header
  );
  const { HeaderContents } = CandidateProfileTabData;
  const TabContent = HeaderContents[activeHeading];
  const contextValue: CandidateProfileContentProps.Context = {
    activeHeading,
    setActiveHeading,
    deviceType,
  };

  return (
    <CandidateProfileContext.Provider value={contextValue}>
      <Container>
        <TabHeader />
        <Wrapper>
          <TabContent />
        </Wrapper>
      </Container>
    </CandidateProfileContext.Provider>
  );
};

const Container = styled.div`
  margin: 0 auto;
  // min-height: 500px;
  border-radius: 24px;
  @media (min-width: 768px) {
    background: ${djobsTheme.colors.white100};
    box-shadow: ${djobsTheme.effects.boxShadow};
  }
  @media (min-width: 992px) {
    max-width: 785px;
  }
  @media (min-width: 1200px) {
    min-width: 785px;
    width: 75%;
    max-width: 950px;
  }
  @media (min-width: 1600px) {
    width: 1000px;
    max-width: 1000px;
  }
`;
const Wrapper = styled.div`
  padding: 0 10px;
  @media (min-width: 768px) {
    padding: 42px 55px 80px 55px;
  }
  @media (min-width: 992px) {
    padding: 64px 94px 66px 50px;
  }
`;
