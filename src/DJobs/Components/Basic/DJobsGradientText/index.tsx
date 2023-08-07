import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { GradientTextProps } from "./DJobsGradientText";

export const DJobsGradientText = ({
  gradient,
  styleName,
  children,
  width,
}: GradientTextProps.props) => (
  <GradientTextWrapper gradient={gradient} styleName={styleName} width={width}>
    {children}
  </GradientTextWrapper>
);

const GradientTextWrapper = styled.span<GradientTextProps.props>`
  ${({ styleName }) => djobsTheme.text[styleName].sm};
  line-height: normal;
  background: ${({ gradient }) => djobsTheme.gradients[gradient]};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: none;

  @media (min-width: 768px) {
    ${({ styleName }) => djobsTheme.text[styleName].md};
    line-height: normal;
  }
  @media (min-width: 992px) {
    ${({ styleName }) => djobsTheme.text[styleName].lg};
    line-height: normal;
  }
  @media (min-width: 1600px) {
    ${({ styleName }) => djobsTheme.text[styleName].xl};
    line-height: normal;
  }
`;
