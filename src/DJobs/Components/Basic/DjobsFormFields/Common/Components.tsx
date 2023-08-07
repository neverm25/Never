import React from "react";

import { DJobsTypography } from "../..";

type LabelProps = { value: string };
const InputLabel = ({ value }: LabelProps) => (
  <DJobsTypography styleName="djInputLabel" color="blueGreyDark">
    {value}
  </DJobsTypography>
);
const RequiredLabel = ({ value }: LabelProps) => (
  <DJobsTypography styleName="djInputRequiredLabel" color="blue150">
    {value}
  </DJobsTypography>
);

type ErrorLabelProps = { value: string };
const ErrorLabel = (props: ErrorLabelProps) => {
  const { value } = props;

  return (
    <div style={{ paddingTop: "5px" }}>
      <DJobsTypography styleName="djInputError" color="red100">
        {value}
      </DJobsTypography>
    </div>
  );
};
const Description = (props: LabelProps) => {
  const { value } = props;

  return (
    <DJobsTypography styleName="djInputError" color="black80">
      {value}
    </DJobsTypography>
  );
};

export const DjobsCommonFieldComponents = {
  InputLabel,
  ErrorLabel,
  RequiredLabel,
  Description,
};
