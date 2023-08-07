import React from "react";

import { IIcons } from "./Iocn";

export const DownloadIcon = ({ fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width="12"
      height="19"
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 17.5647H12" stroke={fillColor || "#8096AA"} strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.19958 6.66009V0.435387H7.79958V6.66009H11.7731L5.99958 13.7148L0.226074 6.66009H4.19958Z"
        fill={fillColor || "#8096AA"}
      />
    </svg>
  );
};
