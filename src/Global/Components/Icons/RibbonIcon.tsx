import React from "react";

const RIBBON_BOTTOM_COLOR = "#FFDD75";
const RIBBON_INNERCIRCLE_COLOR = "#FFECB2";
const RIBBON_OUTERCIRCLE_COLOR = "#FFC978";

const RibbonIcon = () => (
  <svg width="80px" height="80px" xmlns="http://www.w3.org/2000/svg">
    <svg x={25} y={30}>
      <path
        d="M0.0713959 49L14.8213 39.85L29.9285 49V0.142883H0.0713959V49Z"
        fill={RIBBON_BOTTOM_COLOR}
      />
    </svg>
    <circle
      cx={40}
      cy={25}
      r={21}
      fill={RIBBON_INNERCIRCLE_COLOR}
      stroke={RIBBON_OUTERCIRCLE_COLOR}
      strokeWidth={5}
    />
  </svg>
);

export default RibbonIcon;
