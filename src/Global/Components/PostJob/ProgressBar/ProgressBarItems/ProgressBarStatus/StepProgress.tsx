import * as React from "react";
import styled from "styled-components";

import { IPostJob } from "@Global/Components/PostJob/PostJob";

import { progressBarItemBackgroundColor } from "../../";
import { ProgressBarLine } from "@Global/Components/Icons/";

const StepNumberBackgroundRadius = 31;
const StepNumberBackgroundWidth = StepNumberBackgroundRadius * 2;
const ProgressBarStatus = (props: IPostJob.StepProps) => {
  const { stepStatus = "pending", stepNumber } = props;
  return (
    <div>
      <StepNumberBackground StepStatus={stepStatus}>
        <StepNumberElement>{stepNumber}</StepNumberElement>
      </StepNumberBackground>
      <StepperLine>
        <ProgressBarLine color={progressBarItemBackgroundColor[stepStatus]} />
      </StepperLine>
    </div>
  );
};
export default ProgressBarStatus;

const StepNumberBackground = styled.div<{
  StepStatus: IPostJob.StepStatus;
}>`
  background-color: ${props =>
    progressBarItemBackgroundColor[props.StepStatus]};
  border-radius: 50%;

  box-sizing: border-box;
  border: 5.46269px solid #ffffff;
  box-shadow: 0px 3.64179px 2.73134px -1.8209px rgba(0, 0, 0, 0.1);

  height: ${StepNumberBackgroundWidth}px;
  width: ${StepNumberBackgroundWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StepNumberElement = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 27.3134px;
  line-height: 26px;
  letter-spacing: 0.273134px;

  color: #ffffff;
`;
const StepperLine = styled.div`
  height: 0;
  margin-left: ${StepNumberBackgroundWidth}px;
  position: relative;
  bottom: 42px;
  width: calc(100% - ${StepNumberBackgroundWidth}px);
`;
