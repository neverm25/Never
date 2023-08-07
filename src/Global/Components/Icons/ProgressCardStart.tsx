const SvgProgressCardStart = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 225 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#progress_card_start_svg__a)">
      <path
        d="M0 27C0 12.088 12.088 0 27 0h141.697a26.999 26.999 0 0 1 23.04 12.924L216.6 53.621a27.001 27.001 0 0 1 .288 27.67l-25.234 43.303A27 27 0 0 1 168.326 138H27c-14.912 0-27-12.088-27-27V27Z"
        fill="#242938"
      />
    </g>
    <defs>
      <filter
        id="progress_card_start_svg__a"
        x={-12}
        y={-4}
        width={244.56}
        height={162}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={8} />
        <feGaussianBlur stdDeviation={6} />
        <feColorMatrix values="0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_129_183" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix values="0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0.02 0" />
        <feBlend
          in2="effect1_dropShadow_129_183"
          result="effect2_dropShadow_129_183"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_129_183"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgProgressCardStart;
