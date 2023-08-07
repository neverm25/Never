import React from "react";
import { IIcons } from "./icons";

const BriefCaseIcon = ({ width, height }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "17"}
      height={height || "19"}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 11.8051C10 12.1139 9.77625 12.364 9.5 12.364H6.5C6.22375 12.364 6 12.1139 6 11.8051V10.1287H0V15.1581C0 16.0522 0.7 16.8346 1.5 16.8346H14.5C15.3 16.8346 16 16.0522 16 15.1581V10.1287H10V11.8051ZM14.5 4.54044H12V2.86397C12 1.96985 11.3 1.1875 10.5 1.1875H5.5C4.7 1.1875 4 1.96985 4 2.86397V4.54044H1.5C0.7 4.54044 0 5.32279 0 6.21691V9.01103H16V6.21691C16 5.32279 15.3 4.54044 14.5 4.54044ZM10 4.54044H6V3.42279H10V4.54044Z"
        fill="#606D98"
      />
    </svg>
  );
};
export default BriefCaseIcon;
