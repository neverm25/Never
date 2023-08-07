import * as React from "react";

import { theme } from "@Global/Theme";
import { AssetProps } from "../Assets";
import { STROKE_COLOR, STROKE_WIDTH_SECONDARY } from "../Helper";

export const Start = ({ showStroke, fillColor }: AssetProps.Pipecard) => (
  <svg
    width="146"
    height="80"
    viewBox="0 0 146 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      filter="url(#filter0_dd_1_1345)"
      stroke={STROKE_COLOR}
      strokeWidth={showStroke ? STROKE_WIDTH_SECONDARY : 0}
    >
      <path
        d="M8 19.2391C8 10.2705 15.2705 3 24.2391 3H110.385C115.383 3 120.104 5.30209 123.181 9.241L135.283 24.7305C139.83 30.5489 139.878 38.7019 135.401 44.5739L123.179 60.6061C120.108 64.6353 115.331 67 110.265 67H24.2391C15.2705 67 8 59.7295 8 50.7609V19.2391Z"
        fill={`${theme.colors[fillColor]}`}
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_1_1345"
        x="0.782608"
        y="0.594203"
        width="145.161"
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
          result="effect1_dropShadow_1_1345"
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
          in2="effect1_dropShadow_1_1345"
          result="effect2_dropShadow_1_1345"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1_1345"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
