import React from "react";
import { IIcons } from "./icons";

const StaticChartIcon = ({ fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill={fillColor || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19.1284" cy="19.3252" r="18.9857" fill="#2B2B2B" />
      <rect
        width="18.2263"
        height="18.2263"
        transform="translate(10.0153 10.212)"
        fill="#2B2B2B"
      />
      <path
        d="M15.6982 18.0045V23.0879"
        stroke="white"
        strokeWidth="1.13914"
        strokeLinecap="round"
      />
      <path
        d="M19.1564 15.5717V23.0884"
        stroke="white"
        strokeWidth="1.13914"
        strokeLinecap="round"
      />
      <path
        d="M22.5578 20.6908V23.0882"
        stroke="white"
        strokeWidth="1.13914"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.762 19.3532C11.762 13.8078 13.611 11.9587 19.1564 11.9587C24.7018 11.9587 26.5508 13.8078 26.5508 19.3532C26.5508 24.8986 24.7018 26.7476 19.1564 26.7476C13.611 26.7476 11.762 24.8986 11.762 19.3532Z"
        stroke="white"
        strokeWidth="1.13914"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default StaticChartIcon;
