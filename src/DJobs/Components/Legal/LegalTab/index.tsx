// #Global Imports
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
// #endGlobal Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
import { TabHeader } from "./TabHeader";
import { LegalTabData } from "./Utils";
// #endregion Local Imports

export const LegalTab = () => {
  //Logic to update component when device width changes
  const [width, setWidth] = useState(0);
  const handleWindowResize = () => setWidth(window.innerWidth);
  const router = useRouter();

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const activeHeading = router.pathname.split("/").pop();
  const { HeaderContents } = LegalTabData;
  const TabContent = HeaderContents[activeHeading];

  return (
    <Container>
      <TabHeader />
      <TabContent />
    </Container>
  );
};

export const Container = styled.div`
  margin: 50px 0px;
  min-height: 500px;
  border-radius: 24px;
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.boxShadow};
`;
