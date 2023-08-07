import React from "react";
import { IIcons } from "./icons";

const UpCircleIcon = ({ fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7532 12.9053C14.7532 12.9053 12.1672 9.13662 10.9997 9.13662C9.83209 9.13662 7.24831 12.9053 7.24831 12.9053"
        stroke={fillColor || "#7E8CA3"}
        strokeWidth="1.62162"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 11.3467C21 3.84722 18.4995 1.34668 11 1.34668C3.50054 1.34668 1 3.84722 1 11.3467C1 18.8461 3.50054 21.3467 11 21.3467C18.4995 21.3467 21 18.8461 21 11.3467Z"
        stroke={fillColor || "#7E8CA3"}
        strokeWidth="1.62162"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UpCircleIcon;
