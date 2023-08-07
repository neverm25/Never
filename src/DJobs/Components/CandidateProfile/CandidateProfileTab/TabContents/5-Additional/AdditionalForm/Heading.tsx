import React from "react";

import { DJobsTypography } from "@DJobs/Components/Basic";

type HeadingProps = { value: string };
export const Heading = ({ value }: HeadingProps) => (
  <DJobsTypography styleName="djAdSubTitleThree" color="black100">
    {value}
  </DJobsTypography>
);
