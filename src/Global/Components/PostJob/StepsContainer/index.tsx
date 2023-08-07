import React from "react";
import styled from "styled-components";

import StepHeader from "../Header";
import JobDetailsInputs from "./JobDetailsInputs";
import Advertise from "./Advertise";

import { IPostJob } from "../PostJob";

const initialJobDetailInputs: IPostJob.JobDetailInputsProps = {
  jobTitle: "",
  location: "",
  workSituation: "",
  employmentType: "fullTime",
  industry: "",
  skillsRequired: "",
  experienceRequired: "1",
  jobDescription: "",
};
const InitialAdvertiseInputs: IPostJob.AdvertiseInputsProps = {
  selectedPostType: "Standard",
  sendToPartnerEnabled: false,
  budgetAlertsEnabled: false,
  customApplyURL: "",
};

const Step = (props: IPostJob.StepContainerProps) => {
  const { stepNumber, stepTitle } = props.activeStepProps;

  //Input State Management for Both steps
  const [jobDetailInputs, setJobDetailInputs] = React.useState(
    initialJobDetailInputs
  );
  const [advertiseInputs, setAdvertiseInputs] = React.useState(
    InitialAdvertiseInputs
  );

  const stepComponentProps = {
    ...props.postJobStateManagementObject,
    jobDetailInputs,
    setJobDetailInputs,
    advertiseInputs,
    setAdvertiseInputs,
  };

  return (
    <StepContainer>
      <StepHeader regularText={`Step ${stepNumber}`} boldText={stepTitle} />
      {stepNumber === 1 ? (
        <JobDetailsInputs {...stepComponentProps} />
      ) : (
        <Advertise {...stepComponentProps} />
      )}
    </StepContainer>
  );
};
export default Step;

const StepContainer = styled.div`
  margin: 50px;
`;
