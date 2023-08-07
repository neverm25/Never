import { GlobalTheme } from "@Global/Theme/styled";
import React from "react";
import styled from "styled-components";

type GradientProps = {
  gradient: keyof GlobalTheme.Gradients;
  styleName: keyof GlobalTheme.Text;
  children: string | number;
};

export const GradientText = ({
  gradient,
  styleName,
  children,
}: GradientProps) => (
  <GradientTextWrapper gradient={gradient} styleName={styleName}>
    {children}
  </GradientTextWrapper>
);

const GradientTextWrapper = styled.label<GradientProps>`
  ${({ theme, styleName }) => theme.text[styleName]};
  background: ${({ theme, gradient }) => theme.gradients[gradient]};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  border: none;
`;
