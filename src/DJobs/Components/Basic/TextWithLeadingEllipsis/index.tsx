import React from "react";
import styled from "styled-components";

import { TextWithLeadingEllipsisProps } from "./TextWithLeadingEllipsis";
import { DJobsTypography } from "@DJobs/Components/Basic";

export const TextWithLeadingEllipsis = ({
  content,
  maxLineLength = 1,
  styleName,
  color,
  width = "100%",
}: TextWithLeadingEllipsisProps.Props) => (
  <Container width={width} maxLineLength={maxLineLength}>
    <DJobsTypography styleName={styleName} color={color}>
      {content}
    </DJobsTypography>
  </Container>
);

const Container = styled.div<{
  maxLineLength?: number;
  width: string;
}>`
  width: ${({ width }) => width};
  // display: -webkit-box !important;
  // -webkit-box-orient: vertical;
  // -webkit-line-clamp: ${({ maxLineLength }) => maxLineLength};
  // white-space: normal;
  // overflow: hidden;
  // text-overflow: ellipsis;
`;
