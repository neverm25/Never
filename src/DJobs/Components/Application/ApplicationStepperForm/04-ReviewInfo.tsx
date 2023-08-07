import React, { useContext, useState } from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { StepHeading } from "./Common/StepHeading";
import { CareerHistory } from "@DJobs/Components/Common/CareerHistory";
import { EducationHistory } from "@DJobs/Components/Common/EducationHistory";
import { ApplicationStepperStyles } from "./Common/Styles";
import { ApplicationProcessContext } from ".";
import { BackButton, DjobsButton } from "@DJobs/Components/Basic";
import { ApplicationStepperFormProps } from "./ApplicationStepperForm";

export const ReviewInfoStepOne = () => <ReviewInfo stepNumber={1} />;
export const ReviewInfoStepTwo = () => <ReviewInfo stepNumber={2} />;

const ReviewInfo = ({
  stepNumber,
}: ApplicationStepperFormProps.ReviewInfoStepNumber) => {
  const showCareerInfo = stepNumber === 1;
  const showEducationInfo = stepNumber === 2;

  const { setStepNumber, applyJobData } = useContext(ApplicationProcessContext);
  const [isAddOrEditFormOpen, setIsAddOrEditFormOpen] = useState(false);

  return (
    <React.Fragment>
      <ApplicationStepperStyles.ApplicationStepContainer>
        <StepHeading
          stepHeading="Review your information before applying"
          stepHeadingTwo=""
          stepDescription="Please confirm whether these details are correct before proceeding."
        />
        <div>
          <Line />
          {showCareerInfo && (
            <CareerHistory
              setIsAddOrEditFormOpen={setIsAddOrEditFormOpen}
              titleStyleName="djSubTitleFour"
              gradient={false}
            />
          )}
          {showEducationInfo && (
            <EducationHistory
              setIsAddOrEditFormOpen={setIsAddOrEditFormOpen}
              titleStyleName="djSubTitleFour"
              gradient={false}
            />
          )}
        </div>
      </ApplicationStepperStyles.ApplicationStepContainer>
      <ApplicationStepperStyles.ButtonsWrapper>
        <BackButton
          handleClick={() => {
            //No need for going back to questionairre if questionairre doesn't exists
            let steps = 1;
            if (stepNumber === 1 && !applyJobData.questionnaire_data) steps = 2;
            setStepNumber(prev => prev - steps);
            window.scrollTo(0, 0);
          }}
        />
        {showCareerInfo && (
          <DjobsButton.NavActions
            variant="Stepper"
            label="Next"
            onClick={() => {
              setStepNumber(prev => prev + 1);
              window.scrollTo(0, 0);
            }}
            disabled={isAddOrEditFormOpen}
          />
        )}
        {showEducationInfo && (
          <DjobsButton.NavActions
            variant="Submit"
            label="Submit"
            onClick={() => {
              setStepNumber(prev => prev + 1);
              window.scrollTo(0, 0);
            }}
            disabled={isAddOrEditFormOpen}
          />
        )}
      </ApplicationStepperStyles.ButtonsWrapper>
    </React.Fragment>
  );
};

const Line = styled.div`
  height: 1px;
  background: ${djobsTheme.colors.blue150};
  border: 3px solid ${djobsTheme.gradients.purpleHover};
  width: 160px;
  margin-bottom: 8px;
  @media (min-width: 992px) {
    width: 200px;
  }
`;
