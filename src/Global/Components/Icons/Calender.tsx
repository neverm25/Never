import React from "react";
import { IIcons } from "./icons";

const CalenderIcon = ({ fillColor }: IIcons.IconProps) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill={fillColor || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="8" y="15" width="4" height="3" fill="#172B4D" />
    <rect x="14" y="15" width="4" height="3" fill="#172B4D" />
    <rect x="8" y="20" width="4" height="3" fill="#172B4D" />
    <rect x="14" y="20" width="4" height="3" fill="#172B4D" />
    <rect x="20" y="15" width="4" height="3" fill="#172B4D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 8H27C27.5523 8 28 8.44772 28 9V27C28 27.5523 27.5523 28 27 28H5C4.44772 28 4 27.5523 4 27V9C4 8.44772 4.44772 8 5 8H10V6C10 5.44772 10.4477 5 11 5C11.5523 5 12 5.44772 12 6V8H20V6C20 5.44772 20.4477 5 21 5C21.5523 5 22 5.44772 22 6V8ZM6 26H26V12H6V26Z"
      fill="#172B4D"
    />
  </svg>
);
export default CalenderIcon;
