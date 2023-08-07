import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { DJobsTypography } from "../Basic";
import { UniconsLibraryIcons } from "../Icons";

const ApplyMessage = () => {
  return (
    <ApplyMessageContainer>
      <UniconsLibraryIcons.InfoIcon
        color={djobsTheme.colors.blue100}
        size={21}
      />
      <DJobsTypography styleName="djInputRegular" color="blue100">
        You have already applied for this position
      </DJobsTypography>
    </ApplyMessageContainer>
  );
};

const ApplyMessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;

  @media (min-width: 580px) {
    padding-bottom: 0;
  }
`;
export const JobDetailsCommon = { ApplyMessage };
