import React from "react";
import styled from "styled-components";

import { DJobsTypography } from "@DJobs/Components/Basic/";

type AdditionalDetailEntryProps = {
  label: string;
  value?: string | number;
};

export const AdditionalDetailEntry = (props: AdditionalDetailEntryProps) => (
  <Container>
    <DJobsTypography styleName="djAdInputLabel" color="black100">
      {props.label}
    </DJobsTypography>
    <DJobsTypography styleName="djAdInputData" color="black100">
      {props.value}
    </DJobsTypography>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
