import React from "react";
import styled from "styled-components";

import { DjobsTheme } from "@DJobs/Theme/styled";
import { djobsTheme } from "@DJobs/Theme";
import { DJobsTypography } from "..";
import { DjobsButtonProps } from "./DjobsButton";

export const Apply = (props: DjobsButtonProps.applyButton) => {
  const { disabled, variant, btnType } = props;
  const variants: DjobsButtonProps.applyVariantsValue = {
    Primary,
    Success,
  };
  const disabledVariants: DjobsButtonProps.applyVariantsValue = {
    Primary: PrimaryDisabled,
    Success: SuccessDisabled,
  };
  const Button = disabled ? disabledVariants[variant] : variants[variant];

  const LABEL_COLOR: keyof DjobsTheme.DjobsColorsWithGlobal = !disabled
    ? "white100"
    : variant === "Primary"
    ? "blue30"
    : "black80";

  return (
    <Button {...props} type={btnType}>
      <DJobsTypography styleName="djBTNSRegular" color={LABEL_COLOR}>
        {props.label}
      </DJobsTypography>
    </Button>
  );
};

const ApplyButton = styled.button<DjobsButtonProps.applyButton>`
  height: 60px;
  padding: 0px 43px;
  border-radius: 39px;
  box-shadow: ${djobsTheme.effects.buttonNormal};
  width: fit-content;
  width: ${({ width }) => width};

  &:hover {
    box-shadow: ${djobsTheme.effects.buttonHoverState};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
  &:active {
    box-shadow: ${djobsTheme.effects.buttonClick};
  }
`;
const Primary = styled(ApplyButton)`
  background-color: ${djobsTheme.colors.blue100};
  border: 1px solid ${djobsTheme.colors.blue100};
  text-shadow: 0px 1px 2px #216faa;
`;
const Success = styled(ApplyButton)`
  background-color: ${djobsTheme.colors.green80};
  border: 1px solid ${djobsTheme.colors.green80};
  text-shadow: 0px 1px 2px #10c790, 0px 2px 4px #10c790;
`;

const ApplyButtonDisabled = styled(ApplyButton)`
  box-shadow: ${djobsTheme.effects.inputShadow};
  &:hover {
    box-shadow: ${djobsTheme.effects.inputShadow};
    cursor: not-allowed;
  }
  &:focus {
    box-shadow: ${djobsTheme.effects.inputShadow};
  }
`;
const PrimaryDisabled = styled(ApplyButtonDisabled)`
  background-color: ${djobsTheme.colors.blue40};
  border: 0;
`;
const SuccessDisabled = styled(ApplyButtonDisabled)`
  background-color: ${djobsTheme.colors.green20};
  border: 0;
`;
