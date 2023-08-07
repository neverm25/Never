import React from "react";
import { IIcons } from "./icons";

const LogoutIcon = ({ fillColor }: IIcons.IconProps) => (
  <svg
    width="43"
    height="43"
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Iconly/Curved/Logout">
      <circle
        id="Ellipse 1"
        r="21.5"
        transform="matrix(1 0 0 -1 21.5 21.5)"
        fill={fillColor || "#1E96F2"}
      />
      <g id="Logout">
        <path
          id="Stroke 1"
          d="M13.595 21.911H22.4752"
          stroke="white"
          strokeWidth="1.10625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M15.7534 19.7604L13.594 21.911L15.7534 24.0615"
          stroke="white"
          strokeWidth="1.10625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 4"
          d="M17.6005 18.599C17.8439 15.9588 18.8321 15 22.763 15C28 15 28 16.7036 28 21.8219C28 26.9401 28 28.6438 22.763 28.6438C18.8321 28.6438 17.8439 27.685 17.6005 25.0448"
          stroke="white"
          strokeWidth="1.10625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);
export default LogoutIcon;
