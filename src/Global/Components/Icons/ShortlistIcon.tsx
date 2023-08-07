import React from "react";
import { IIcons } from "./icons";

export const ShortlistIcon = ({ width, height }: IIcons.IconProps) => (
  <svg
    width={width || "22"}
    height={height || "24"}
    viewBox="0 0 22 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 22H20V2H3V0H21C21.552 0 22 0.448 22 1V22Z" fill="#FEFEFE" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4H17C17.552 4 18 4.448 18 5V23C18 23.552 17.552 24 17 24H1C0.448 24 0 23.552 0 23V5C0 4.448 0.448 4 1 4ZM4 19H10V17H4V19ZM14 15H4V13H14V15ZM4 11H14V9H4V11Z"
      fill="#FEFEFE"
    />
  </svg>
);
export default ShortlistIcon;
