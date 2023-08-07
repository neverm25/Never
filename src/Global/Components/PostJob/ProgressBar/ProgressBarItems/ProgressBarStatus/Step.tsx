import * as React from "react";
import styled from "styled-components";

import { IPostJob } from "@Global/Components/PostJob/PostJob";
import StepTitle from "./StepTitle";
import StepProgress from "./StepProgress";

const ProgressBarStatusElement = (props: IPostJob.StepProps) => (
  <StepComponent>
    <StepTitle {...props} />
    <StepProgress {...props} />
  </StepComponent>
);
export default ProgressBarStatusElement;

const StepComponent = styled.div`
  width: 100%;
  border-radius: 0px;
`;
