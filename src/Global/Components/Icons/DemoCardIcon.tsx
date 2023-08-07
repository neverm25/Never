import React from "react";
import { IIcons } from "./icons";

export const DemoCardIcon = ({ width, height }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "22"}
      height={height || "24"}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.4 18.0469V20.2125C4.4 21.0087 3.7422 21.6562 2.93333 21.6562C2.12447 21.6562 1.46667 21.0087 1.46667 20.2125V1.44375H11.7333V0H0.733333C0.328533 0 0 0.3234 0 0.721875V20.2125C0 21.805 1.3156 23.1 2.93333 23.1H18.3333C19.9511 23.1 21.2667 21.805 21.2667 20.2125V18.0469H4.4Z"
        fill="#FEFEFE"
      />
      <path
        d="M16.8667 11.55C15.5108 11.55 14.2494 11.1443 13.2 10.4513V16.3274L16.8667 14.5227L20.5334 16.3274V10.4513C19.484 11.1443 18.2226 11.55 16.8667 11.55Z"
        fill="#FEFEFE"
      />
      <ellipse
        cx="16.8667"
        cy="5.05312"
        rx="5.13333"
        ry="5.05312"
        fill="#FEFEFE"
      />
    </svg>
  );
};

export default DemoCardIcon;
