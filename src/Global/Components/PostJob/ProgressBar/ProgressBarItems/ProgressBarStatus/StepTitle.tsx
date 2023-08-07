import * as React from "react";
import styled from "styled-components";
import { IPostJob } from "@Global/Components/PostJob/PostJob";

const ProgressBarStatusTitle = ({
  StepIcon,
  stepNumber,
}: IPostJob.StepProps) => (
  <StepContainer>
    <StepIcon />
    <StepTitle>{` ${stepNumber == 1 ? "job details" : "advertise"}`}</StepTitle>
  </StepContainer>
);
export default ProgressBarStatusTitle;

const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StepTitle = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: #92a0cf;
  margin-left: 10px;
`;
