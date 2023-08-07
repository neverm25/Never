import * as React from "react";
import { SVGProps } from "react";

const ProgressBarLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="100%"
    height="12"
    color={props.color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="8"
      y1="6"
      x2="100%"
      y2="6"
      stroke={props.color}
      strokeDasharray="1 13"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeWidth="6"
    />
  </svg>
);

export default ProgressBarLine;
