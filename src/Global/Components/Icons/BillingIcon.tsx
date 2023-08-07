import React from "react";
import { IIcons } from "./icons";

const BillingIcon = ({ fillColor }: IIcons.IconProps) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill={fillColor || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.60938 20.3094C6.87969 20.2711 7.8125 20.0727 7.8125 19.1406V17.9688H21.0938V19.1406C21.0938 20.6484 19.8672 21.875 18.3594 21.875H6.64062C5.13281 21.875 3.90625 20.6484 3.90625 19.1406V3.90625C3.90625 3.475 4.25625 3.125 4.6875 3.125H12.5V4.6875H5.46875V8.09296H16.6667V9.37501H5.46875V11.218H16.6667V12.5H5.46875V14.343H16.6667V15.625H5.46875V19.1406C5.46875 19.7758 5.97734 20.2922 6.60938 20.3094Z"
      fill="#A3AED0"
    />
  </svg>
);
export default BillingIcon;
