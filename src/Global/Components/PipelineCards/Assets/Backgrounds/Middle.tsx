import * as React from "react";

import { theme } from "@Global/Theme";
import { AssetProps } from "../Assets";
import { STROKE_COLOR, STROKE_WIDTH_SECONDARY } from "../Helper";

export const Middle = ({ showStroke, fillColor }: AssetProps.Pipecard) => (
  <svg
    width="150"
    height="80"
    viewBox="0 0 150 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      filter="url(#filter0_dd_1_1355)"
      stroke={STROKE_COLOR}
      strokeWidth={showStroke ? STROKE_WIDTH_SECONDARY : 0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.1389 49.8152C8.46133 56.0677 9.40994 59.9813 12.2007 62.7721C16.4286 67 23.2332 67 36.8424 67H105.555C112.794 67 116.414 67 119.578 65.5104C122.742 64.0209 125.048 61.2309 129.66 55.6511L131.499 53.4264C138.774 44.6265 142.411 40.2265 142.411 35.0328C142.411 29.839 138.774 25.4391 131.499 16.6391L128.578 13.105C124.498 8.16895 122.457 5.70093 119.659 4.38324C116.86 3.06555 113.658 3.06555 107.254 3.06555H36.8424C23.2332 3.06555 16.4286 3.06555 12.2007 7.2934C9.61786 9.87626 8.61291 13.4209 8.2219 18.8913L12.5508 24.6261C16.9912 30.5088 16.9131 38.6441 12.3605 44.4404L8.1389 49.8152Z"
        fill={`${theme.colors[fillColor]}`}
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_1_1355"
        x="0.921509"
        y="0.659754"
        width="148.707"
        height="78.3692"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4.81159" />
        <feGaussianBlur stdDeviation="3.6087" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0.08 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_1355"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.601449" />
        <feGaussianBlur stdDeviation="1.2029" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0.02 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_1_1355"
          result="effect2_dropShadow_1_1355"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1_1355"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
