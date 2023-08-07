import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { DjobsTheme } from "@DJobs/Theme/styled";
import { DJobsTypography } from "..";
import { DjobsButtonProps } from "./DjobsButton";

export const NavActions = (props: DjobsButtonProps.navActionsButton) => {
  const { disabled, variant, btnType, label } = props;
  const variants: DjobsButtonProps.navActionsVariantsValue = {
    Stepper,
    Submit,
    View,
  };
  const disabledVariants: DjobsButtonProps.navActionsVariantsValue = {
    Stepper: StepperDisabled,
    Submit: SubmitDisabled,
    View: ViewDisabled,
  };
  const Button = disabled ? disabledVariants[variant] : variants[variant];

  const LABEL_COLOR: keyof DjobsTheme.DjobsColorsWithGlobal = props.disabled
    ? "black80"
    : "white100";

  return (
    <Button {...props} type={btnType}>
      <DJobsTypography styleName="djBTNSTertitary" color={LABEL_COLOR}>
        {label}
      </DJobsTypography>
    </Button>
  );
};

const DISABLED_STEPPER_BGCOLOR = djobsTheme.colors.purple10;
const DISABLED_SUBMIT_BGCOLOR = djobsTheme.colors.green10;
const DISABLED_VIEW_BGCOLOR = djobsTheme.colors.blue10;
const DISABLED_BOX_SHADOW = djobsTheme.effects.primaryDisabledBg;

const NavActionsButton = styled.button<DjobsButtonProps.Button>`
  padding: 0px 50px;
  border: 0;
  border-radius: 11px;
  box-shadow: ${djobsTheme.effects.shadowsStandard};
  width: fit-content;
  width: ${({ width }) => width};

  &:hover {
    box-shadow: ${djobsTheme.effects.buttonClick};
    cursor: pointer;
  }
  &:active {
    box-shadow: ${djobsTheme.effects.menusBtnHoverNoBevel};
  }
`;
const Stepper = styled(NavActionsButton)`
  height: 54px;
  background-color: ${djobsTheme.colors.purple100};
  &:hover {
    background-color: ${djobsTheme.colors.purple80};
  }
  &:active {
    background-color: ${djobsTheme.colors.purple80};
  }
`;
const Submit = styled(NavActionsButton)`
  height: 54px;
  background-color: ${djobsTheme.colors.green100};
  &:hover {
    background-color: ${djobsTheme.colors.green80};
  }
  &:active {
    background-color: ${djobsTheme.colors.green80};
  }
`;
const View = styled(NavActionsButton)`
  height: 45px;
  padding: 0px 35px;
  background-color: ${djobsTheme.colors.blue100};
`;

const NavActionsButtonDisabled = styled(NavActionsButton)`
  box-shadow: ${DISABLED_BOX_SHADOW};
  &:hover {
    box-shadow: ${DISABLED_BOX_SHADOW};
    cursor: not-allowed;
  }
  &:focus {
    box-shadow: ${DISABLED_BOX_SHADOW};
  }
`;
const StepperDisabled = styled(NavActionsButtonDisabled)`
  height: 54px;
  background-color: ${DISABLED_STEPPER_BGCOLOR};
  &:hover {
    background-color: ${DISABLED_STEPPER_BGCOLOR};
  }
  &:focus {
    background-color: ${DISABLED_STEPPER_BGCOLOR};
  }
`;
const SubmitDisabled = styled(NavActionsButtonDisabled)`
  height: 54px;
  background-color: ${DISABLED_SUBMIT_BGCOLOR};
  &:hover {
    background-color: ${DISABLED_SUBMIT_BGCOLOR};
  }
  &:focus {
    background-color: ${DISABLED_SUBMIT_BGCOLOR};
  }
`;
const ViewDisabled = styled(NavActionsButtonDisabled)`
  height: 45px;
  padding: 0px 35px;
  background-color: ${DISABLED_VIEW_BGCOLOR};
`;
