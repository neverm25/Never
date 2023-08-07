import * as React from "react";
import { SVGProps } from "react";

const DropdownMenuPointer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill={props.fill}
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="24px"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M128 320l128-128 128 128z"></path>
  </svg>
);

export default DropdownMenuPointer;
