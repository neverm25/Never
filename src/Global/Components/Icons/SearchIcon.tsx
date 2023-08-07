import * as React from "react";
import { SVGProps } from "react";

const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M9.476 2.061a6.501 6.501 0 1 1 0 13.003 6.501 6.501 0 0 1 0-13.003ZM16.025 14.04a1.072 1.072 0 1 1 0 2.143 1.072 1.072 0 0 1 0-2.143Z"
      stroke={props.fill || "#2B2B2B"}
      strokeWidth={1.139}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSearchIcon;
