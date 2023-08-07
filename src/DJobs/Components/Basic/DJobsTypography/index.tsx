import React from "react";
import styled from "styled-components";

import { ITypography } from "./DJobsTypography";
import { djobsTheme } from "@DJobs/Theme";

export const DJobsTypography = (props: ITypography.IProps) => {
  const {
    styleName,
    color = "black100",
    children,
    showTextShadow = false,
    isLink = false,
    isLineBreakAllowed = true,
  } = props;

  const TypoContainerProps: ITypography.IProps = {
    styleName,
    color,
    showTextShadow,
    children,
    isLink,
    isLineBreakAllowed,
  };

  return <TypoContainer {...TypoContainerProps}>{children}</TypoContainer>;
};

const TypoContainer = styled.div<ITypography.IProps>`
  ${({ styleName }) => djobsTheme.text[styleName].sm};
  text-shadow: ${({ showTextShadow }) =>
    showTextShadow && djobsTheme.effects.textShadow};
  color: ${({ color }) => djobsTheme.colors[color]};
  white-space: ${({ isLineBreakAllowed }) => !isLineBreakAllowed && "nowrap"};

  @media (min-width: 768px) {
    ${({ styleName }) => djobsTheme.text[styleName].md}
  }
  @media (min-width: 992px) {
    ${({ styleName }) => djobsTheme.text[styleName].lg}
  }
  @media (min-width: 1600px) {
    ${({ styleName }) => djobsTheme.text[styleName].xl}
  }
`;
