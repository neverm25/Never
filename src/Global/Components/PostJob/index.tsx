import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import ProgressBar from "./ProgressBar";
import StepContainer from "./StepsContainer";

import { IPostJob } from "./PostJob";
import { FileIcon, BriefCaseIcon } from "@Global/Components/Icons";

const PostJob = () => {
  const [activeStepNumber, setActiveStepNumber] = useState<IPostJob.StepNumber>(
    1
  );
  const [postJobApplicationInputs, setPostJobApplicationInputs] = useState(
    {} as IPostJob.PostJobApplicationInputsProps
  );

  const PostJobStateManagementObject: IPostJob.PostJobStateManagementObject = {
    activeStepNumber,
    setActiveStepNumber,

    postJobApplicationInputs,
    setPostJobApplicationInputs,
  };

  return (
    <PostJobFrame>
      <ProgressBar steps={Steps} activeStepNumber={activeStepNumber} />
      <StepContainer
        activeStepProps={Steps[activeStepNumber - 1]}
        postJobStateManagementObject={PostJobStateManagementObject}
      />
    </PostJobFrame>
  );
};
export default PostJob;

const PostJobFrame = styled.div`
  border-radius: 19px;
  background: #ffffff;
  padding-bottom: 20px;
`;

export const Steps: Array<IPostJob.StepProps> = [
  {
    stepNumber: 1,
    stepTitle: "Job Details",
    StepIcon: FileIcon,
  },
  {
    stepNumber: 2,
    stepTitle: "Advertise",
    StepIcon: BriefCaseIcon,
  },
];
