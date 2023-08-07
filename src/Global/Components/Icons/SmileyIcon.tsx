import React from "react";
import { IIcons } from "./icons";

export const SmileyIcon = ({ width, height }: IIcons.IconProps) => (
  <svg
    width={width || "22"}
    height={height || "22"}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 11C0 4.92487 4.92487 0 11 0C13.9174 0 16.7153 1.15893 18.7782 3.22183C20.8411 5.28473 22 8.08262 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM7.33333 5.5C5.81455 5.5 4.58333 6.73122 4.58333 8.25V9.16667H6.41667V8.25C6.41667 7.74374 6.82707 7.33333 7.33333 7.33333C7.83959 7.33333 8.25 7.74374 8.25 8.25V9.16667H10.0833V8.25C10.0833 6.73122 8.85212 5.5 7.33333 5.5ZM17.4167 11.9167C17.4167 15.4605 14.5438 18.3333 11 18.3333C7.45617 18.3333 4.58333 15.4605 4.58333 11.9167V11H6.41667V11.9167C6.41667 14.448 8.46869 16.5 11 16.5C13.5313 16.5 15.5833 14.448 15.5833 11.9167V11H17.4167V11.9167ZM15.5833 9.16667H17.4167V8.25C17.4167 6.73122 16.1855 5.5 14.6667 5.5C13.1479 5.5 11.9167 6.73122 11.9167 8.25V9.16667H13.75V8.25C13.75 7.74374 14.1604 7.33333 14.6667 7.33333C15.1729 7.33333 15.5833 7.74374 15.5833 8.25V9.16667Z"
      fill="#FEFEFE"
    />
  </svg>
);
export default SmileyIcon;
