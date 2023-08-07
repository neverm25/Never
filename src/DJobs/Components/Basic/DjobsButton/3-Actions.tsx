import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { DjobsTheme } from "@DJobs/Theme/styled";
import { DJobsTypography } from "..";
import { DjobsButtonProps } from "./DjobsButton";

export const Actions = (props: DjobsButtonProps.actionsButton) => {
  const { disabled, variant, btnType, label } = props;
  const variants: DjobsButtonProps.actionsVariantsValue = {
    Cancel,
    Close,
    Submit,
  };
  const disabledVariants: DjobsButtonProps.actionsVariantsValue = {
    Cancel: CancelDisabled,
    Close: CloseDisabled,
    Submit: SubmitDisabled,
  };
  const Button = disabled ? disabledVariants[variant] : variants[variant];
  const LABEL_COLOR: keyof DjobsTheme.DjobsColorsWithGlobal =
    disabled && variant !== "Cancel" ? "black80" : "white100";

  return (
    <Button {...props} type={btnType}>
      <DJobsTypography styleName="djBTNSSecondary" color={LABEL_COLOR}>
        {label}
      </DJobsTypography>
    </Button>
  );
};

const DISABLED_CANCEL_BGCOLOR = djobsTheme.colors.black20;
const DISABLED_CLOSE_BGCOLOR = djobsTheme.colors.red05;
const DISABLED_SUBMIT_BGCOLOR = djobsTheme.colors.green10;
const DISABLED_SHADOW = djobsTheme.effects.inputShadow;

const ActionsButton = styled.button<DjobsButtonProps.actionsButton>`
  height: 44px;
  padding: 0px 35px;
  border-radius: 34px;
  border: 0;
  box-shadow: ${djobsTheme.effects.shadowsStandard};
  width: fit-content;
  width: ${({ width }) => width};

  &:hover {
    box-shadow: ${djobsTheme.effects.menusBtnHoverNoBevel};
    cursor: pointer;
  }
  &:active {
    box-shadow: ${djobsTheme.effects.buttonClick};
  }
`;
const Cancel = styled(ActionsButton)`
  background-color: ${djobsTheme.colors.black90};
  &:hover {
    background-color: ${djobsTheme.colors.black80};
  }
  &:active {
    background-color: ${djobsTheme.colors.black100};
  }
`;
const Close = styled(ActionsButton)`
  background-color: ${djobsTheme.colors.red100};
`;
const Submit = styled(ActionsButton)`
  background-color: ${djobsTheme.colors.green80};
  box-shadow: ${djobsTheme.effects.shadowsStandard};
`;

//#region Disabled buttons
const ActionsButtonDisabled = styled(ActionsButton)`
  box-shadow: ${DISABLED_SHADOW};
  &:hover {
    box-shadow: ${DISABLED_SHADOW};
    cursor: not-allowed;
  }
`;
const CancelDisabled = styled(ActionsButtonDisabled)`
  background-color: ${DISABLED_CANCEL_BGCOLOR};
  &:hover {
    background-color: ${DISABLED_CANCEL_BGCOLOR};
  }
`;
const CloseDisabled = styled(ActionsButtonDisabled)`
  background-color: ${DISABLED_CLOSE_BGCOLOR};
`;
const SubmitDisabled = styled(ActionsButtonDisabled)`
  background-color: ${DISABLED_SUBMIT_BGCOLOR};
`;
//#endregion
