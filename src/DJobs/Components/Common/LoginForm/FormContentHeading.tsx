import React from "react";
import styled from "styled-components";

import { DJobsTypography } from "@DJobs/Components/Basic";

type FormContentHeadingProps = {
  heading: string;
  subHeading?: string;
};

export const FormContentHeading = (props: FormContentHeadingProps) => (
  <Container>
    <DJobsTypography styleName="djSubTitleOne" color="black100">
      {props.heading}
    </DJobsTypography>
    {props.subHeading && (
      <DJobsTypography styleName="djTextRegular" color="black100">
        {props.subHeading}
      </DJobsTypography>
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 37px 0px 42px 0px;
  gap: 12px;
`;
