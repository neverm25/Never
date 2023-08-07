// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { IIcons } from "./Iocn";
// #endregion Local Imports

const DropdownArrowIcon = ({ fillColor, width, height }: IIcons.IconProps) => (
  <svg
    width={width || "22"}
    height={height || "23"}
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.24683 9.91348C7.24683 9.91348 9.83277 13.6821 11.0003 13.6821C12.1679 13.6821 14.7517 9.91348 14.7517 9.91348"
      stroke={fillColor || "#785BEA"}
      strokeWidth="1.62162"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 11.4723C1 18.9717 3.50054 21.4723 11 21.4723C18.4995 21.4723 21 18.9717 21 11.4723C21 3.97283 18.4995 1.47229 11 1.47229C3.50054 1.47229 1 3.97283 1 11.4723Z"
      stroke={fillColor || "#785BEA"}
      strokeWidth="1.62162"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={fillColor}
    />
  </svg>
);
export default DropdownArrowIcon;
