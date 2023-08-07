import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { DjobsTheme } from "@DJobs/Theme/styled";
import { DJobsTypography } from "..";
import { DjobsButtonProps } from "./DjobsButton";

export const Others = (props: DjobsButtonProps.othersButton) => {
  const { variant, btnType, label } = props;
  const variants: DjobsButtonProps.othersVariantsValue = {
    Signin,
  };
  const Button = variants[variant];

  const LABEL_COLOR: keyof DjobsTheme.DjobsColorsWithGlobal = props.disabled
    ? "black80"
    : "white100";

  return (
    <Button {...props} type={btnType}>
      <DJobsTypography styleName="djHeadingFour" color={LABEL_COLOR}>
        {label}
      </DJobsTypography>
    </Button>
  );
};

const OthersButton = styled.button<DjobsButtonProps.Button>``;
const Signin = styled(OthersButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: ${djobsTheme.effects.mainButton};
  width: fit-content;
  width: ${({ width }) => width};
  background-color: ${djobsTheme.colors.blue100};
  text-transform: capitalize;
`;
