import * as React from "react";
import styled from "styled-components";

import Step from "./Step";
import { IPostJob } from "@Global/Components/PostJob/PostJob";
import {
  PROGRESS_PENDING,
  PROGRESS_ACTIVE,
  PROGRESS_COMPLETED,
} from "@Global/Components/PostJob/ProgressBar";

const ProgressBarStatus = (props: IPostJob.ProgressBarProps) => {
  const ActiveStepNumber = props.activeStepNumber;
  const Steps = props.steps;
  return (
    <ProgressBarStatusFrame>
      {Steps.map((step: IPostJob.StepProps) => (
        <Step
          key={`Step_${step.stepNumber}`}
          {...step}
          stepStatus={getProgressStatusOfStep(
            step.stepNumber,
            ActiveStepNumber
          )}
        />
      ))}
    </ProgressBarStatusFrame>
  );
};
export default ProgressBarStatus;

const ProgressBarStatusFrame = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  margin: 0 30px;
  flex-grow: 1;
`;

const getProgressStatusOfStep = (
  currentStep: IPostJob.StepNumber,
  activeStep: IPostJob.StepNumber
) => {
  if (currentStep === activeStep) return PROGRESS_ACTIVE;
  if (currentStep < activeStep) return PROGRESS_COMPLETED;
  return PROGRESS_PENDING;
};
