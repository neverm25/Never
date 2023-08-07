import React from "react";
import { IIcons } from "./icons";

const NotificationIcon = ({ fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width="38"
      height="39"
      viewBox="0 0 38 39"
      fill={fillColor || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19.0061" cy="19.3252" r="18.9857" fill="#2B2B2B" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0037 13.3219C16.1974 13.3219 14.9781 15.863 14.9781 17.5428C14.9781 18.7982 15.1601 18.4288 14.4652 19.9603C13.6166 22.1427 17.0292 23.0348 19.0037 23.0348C20.9776 23.0348 24.3902 22.1427 23.5422 19.9603C22.8472 18.4288 23.0293 18.7982 23.0293 17.5428C23.0293 15.863 21.8093 13.3219 19.0037 13.3219Z"
        stroke="white"
        strokeWidth="1.13914"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4654 24.7122C19.6463 25.6271 18.3686 25.6379 17.5416 24.7122"
        stroke="white"
        strokeWidth="1.13914"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NotificationIcon;
