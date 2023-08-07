import React from "react";
import styled from "styled-components";

import { TextWithLeadingEllipsis } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import { IconValueProps } from "./IconValue";

export const IconValue = (props: IconValueProps.Props) => {
  const {
    Icon,
    value,
    isGradientIcon = false,
    textColor = "textDefault",
    iconColor = "textDefault",
    textStyleName = "djIconsText",
    IconSize = 16,
  } = props;

  return (
    <IconValueContainer>
      {isGradientIcon ? (
        <Icon />
      ) : (
        <Icon color={djobsTheme.colors[iconColor]} size={IconSize} />
      )}

      <TextWithLeadingEllipsis
        styleName={textStyleName}
        color={textColor}
        maxLineLength={1}
        content={value}
      />
    </IconValueContainer>
  );
};

const IconValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
