import { DjobsButton } from "@DJobs/Components/Basic";
import React from "react";

import { ApplicationStepperStyles } from "./Styles";

type NextButtonProps = { onClick: () => void; disabled: boolean };

export const NextButton = ({ onClick, disabled }: NextButtonProps) => (
  <ApplicationStepperStyles.ButtonsWrapper>
    <DjobsButton.NavActions
      variant="Stepper"
      onClick={() => {
        onClick();
        window.scroll(0, 0);
      }}
      disabled={disabled}
      label="Next"
    />
  </ApplicationStepperStyles.ButtonsWrapper>
);
