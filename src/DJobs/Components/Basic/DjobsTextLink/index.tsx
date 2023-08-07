import React from "react";
import styled from "styled-components";

import { DJobsTextLinkProps } from "./DjobsTextLink";
import { djobsTheme } from "@DJobs/Theme";

export const DJobsTextLink = (props: DJobsTextLinkProps.IProps) => {
  const { color = "black100", children, ...rest } = props;

  const TypoContainerProps: DJobsTextLinkProps.IProps = {
    color,
    children,
    ...rest,
  };

  return (
    <DJobsTextLinkContainer {...TypoContainerProps}>
      {children}
    </DJobsTextLinkContainer>
  );
};

const DJobsTextLinkContainer = styled.span<DJobsTextLinkProps.IProps>`
  ${({ styleName }) => djobsTheme.text[styleName].sm};
  text-shadow: ${({ showTextShadow }) =>
    showTextShadow && djobsTheme.effects.textShadow};
  color: ${({ color }) => djobsTheme.colors[color]};

  @media (min-width: 768px) {
    ${({ styleName }) => djobsTheme.text[styleName].md}
  }
  @media (min-width: 992px) {
    ${({ styleName }) => djobsTheme.text[styleName].lg}
  }
  @media (min-width: 1600px) {
    ${({ styleName }) => djobsTheme.text[styleName].lg}
  }
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
