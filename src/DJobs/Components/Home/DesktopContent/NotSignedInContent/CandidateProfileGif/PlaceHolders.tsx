import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";

const RectangleTypes = [
  "Dark",
  "Light",
  "DarkGradient",
  "LightGradient",
] as const;

type Types = typeof RectangleTypes[number];
type RectangleProps = {
  height: number;
  width: string;
  type: Types;
  isHeading: boolean;
};

export const PlaceHolder = (props: RectangleProps) => {
  if (props.type === "Dark") {
    return <DarkContainer {...props} />;
  } else if (props.type === "Light") {
    return <LightContainer {...props} />;
  } else if (props.type === "DarkGradient") {
    return <DarkGradientContainer {...props} />;
  } else if (props.type === "LightGradient") {
    return <LightGradientContainer {...props} />;
  }
};

const Rectangle = styled.div<RectangleProps>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width};
  border-radius: 2px;
  margin-bottom: ${({ isHeading }) => (isHeading ? "10px" : "3px")};
`;
const DarkContainer = styled(Rectangle)`
  background: ${djobsTheme.colors.blue80};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const LightContainer = styled(Rectangle)`
  background: #cae6fa;
`;
const DarkGradientContainer = styled(Rectangle)`
  background: ${djobsTheme.colors.blue80};
`;
const LightGradientContainer = styled(Rectangle)`
  background: ${djobsTheme.gradients.blue80};
`;
