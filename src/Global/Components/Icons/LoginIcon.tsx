import React from "react";
import { IIcons } from "./icons";

const LoginIcon = ({ fillColor }: IIcons.IconProps) => (
  <svg
    width="43"
    height="43"
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="21.5"
      cy="21.5"
      r="21.5"
      transform="rotate(-180 21.5 21.5)"
      fill={fillColor || "#1E96F2"}
    />
    <path
      d="M29.405 21.911H20.5248"
      stroke="white"
      strokeWidth="1.10625"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.2466 19.7604L29.406 21.911L27.2466 24.0615"
      stroke="white"
      strokeWidth="1.10625"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.3995 18.599C25.1561 15.9588 24.1679 15 20.237 15C15 15 15 16.7037 15 21.8219C15 26.9402 15 28.6438 20.237 28.6438C24.1679 28.6438 25.1561 27.685 25.3995 25.0448"
      stroke="white"
      strokeWidth="1.10625"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LoginIcon;
