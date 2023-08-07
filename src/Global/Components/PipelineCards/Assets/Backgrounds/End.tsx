import * as React from "react";
import { AssetProps } from "../Assets";
import { STROKE_COLOR, STROKE_WIDTH_SECONDARY } from "../Helper";

export const End = ({ showStroke }: AssetProps.Pipecard) => (
  <svg
    width="147"
    height="80"
    viewBox="0 0 147 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      filter="url(#filter0_dd_1_1396)"
      stroke={STROKE_COLOR}
      strokeWidth={showStroke ? STROKE_WIDTH_SECONDARY : 0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29486 51.772C7.71633 56.9049 8.74027 60.2846 11.2279 62.7721C15.4557 67 22.2603 67 35.8696 67H107.725C122.468 67 129.84 67 134.42 62.4198C139 57.8397 139 50.468 139 35.7246V35V30.6667C139 17.6245 139 11.1034 134.948 7.05169C130.897 3 124.376 3 111.333 3H35.8696C22.2603 3 15.4557 3 11.2279 7.22785C8.65086 9.80485 7.64462 13.3392 7.25171 18.7883L12.4362 25.6398C16.8922 31.5286 16.8138 39.6824 12.2454 45.4845L7.29486 51.772Z"
        fill="url(#paint0_linear_1_1396)"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_1_1396"
        x="0.034317"
        y="0.594203"
        width="146.183"
        height="78.4348"
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
          result="effect1_dropShadow_1_1396"
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
          in2="effect1_dropShadow_1_1396"
          result="effect2_dropShadow_1_1396"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1_1396"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1_1396"
        x1="-0.848554"
        y1="80.9487"
        x2="47.4573"
        y2="-26.9893"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0104167" stopColor="#E9ABD9" />
        <stop offset="0.333333" stopColor="#785BEA" />
        <stop offset="0.645833" stopColor="#3495EE" />
        <stop offset="1" stopColor="#B0DEF0" />
      </linearGradient>
    </defs>
  </svg>
);
