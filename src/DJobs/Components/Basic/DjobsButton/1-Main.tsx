import React from "react";
import styled from "styled-components";

import { DjobsTheme } from "@DJobs/Theme/styled";
import { djobsTheme } from "@DJobs/Theme";
import { DJobsTypography } from "..";
import { DjobsButtonProps } from "./DjobsButton";

export const Main = (props: DjobsButtonProps.mainButton) => {
  const { disabled, btnType, label, variant } = props;
  const variants: DjobsButtonProps.mainVariantsValue = {
    Primary,
    Success,
  };
  const disabledVariants: DjobsButtonProps.mainVariantsValue = {
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
        {label}
      </DJobsTypography>
    </Button>
  );
};

const MainButton = styled.button<DjobsButtonProps.mainButton>`
  height: 47px;
  box-sizing: content-box;
  padding: 0px 40px;
  border-radius: 47px;
  box-shadow: ${djobsTheme.effects.buttonNormal};
  width: fit-content;
  width: ${({ width }) => width};

  &:hover {
    box-shadow: ${djobsTheme.effects.buttonHoverState};
    cursor: pointer;
  }
  &:active {
    box-shadow: ${djobsTheme.effects.buttonClick};
  }
`;
const Primary = styled(MainButton)`
  background-color: ${djobsTheme.colors.blue100};
  border: 1px solid ${djobsTheme.colors.blue150};
  text-shadow: 0px 1px 2px #216faa;
`;
const Success = styled(MainButton)`
  background-color: ${djobsTheme.colors.green80};
  border: 1px solid ${djobsTheme.colors.green150};
  text-shadow: 0px 1px 2px #10c790, 0px 2px 4px #10c790;
`;

const MainButtonDisabled = styled(MainButton)`
  box-shadow: ${djobsTheme.effects.inputShadow};
  &:hover {
    box-shadow: ${djobsTheme.effects.inputShadow};
    cursor: not-allowed;
  }
  &:focus {
    box-shadow: ${djobsTheme.effects.inputShadow};
  }
`;
const PrimaryDisabled = styled(MainButtonDisabled)`
  background-color: ${djobsTheme.colors.blue40};
  border: 0;
`;
const SuccessDisabled = styled(MainButtonDisabled)`
  background-color: ${djobsTheme.colors.green20};
  border: 0;
`;
