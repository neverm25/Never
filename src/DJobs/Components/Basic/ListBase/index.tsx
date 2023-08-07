import React from "react";
import styled from "styled-components";

import { DjobsTheme } from "@DJobs/Theme/styled";
import { djobsTheme } from "@DJobs/Theme";
import { getSlicedArrayUsingNumberOfSplits } from "@Helpers/ArrayHelpers";
import { ListBaseProps } from "./ListBase";

export const ListBase = (props: ListBaseProps.Props) => {
  const { ListData, styleName, color, Columns = 1 } = props;
  const slicedArray = getSlicedArrayUsingNumberOfSplits({
    data: ListData,
    numberOfSplitsNeeded: Columns,
  });

  return (
    <ListWrapper>
      {slicedArray.map((subList, index) => (
        <ListItem key={index} styleName={styleName} color={color}>
          {subList.map((ListItem, index) => (
            <li key={index}>{ListItem}</li>
          ))}
        </ListItem>
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ListItem = styled.ul<{
  color: keyof DjobsTheme.DjobsColorsWithGlobal;
  styleName: keyof DjobsTheme.DjobsText;
}>`
  ${props => djobsTheme.text[props.styleName]};
  color: ${props => djobsTheme.colors[props.color]};
  li {
    padding: 10px;
  }
`;
