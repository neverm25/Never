import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";

export const Loading = ({ isLoading }: { isLoading: boolean }) => (
  <BackgroundOverlay isLoading={isLoading}>
    <ReactLoading type="spin" color={djobsTheme.colors.blue50} />
  </BackgroundOverlay>
);

const BackgroundOverlay = styled.div<{
  isLoading: boolean;
}>`
  position: fixed;
  width: 100%;
  display: ${({ isLoading }) => (isLoading ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  top: 0px;
  bottom: 0;
  padding-top: 67px;
  background: rgba(30, 32, 45, 0.6);
  z-index: 11;
  max-height: 100%;
  overflow: auto;
`;
