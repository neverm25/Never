import React from "react";

import { DJobsTypography } from "@DJobs/Components/Basic";
import { InputGenerationProps } from "./InputGeneration";
import { DjobsCommonFieldComponents } from "@DJobs/Components/Basic/DjobsFormFields/Common/Components";

const Heading1 = (props: InputGenerationProps.header) => (
  <div>
    <DJobsTypography styleName="djSubTitleOne" color="blueGreyDark">
      {props.label}
    </DJobsTypography>
    <DjobsCommonFieldComponents.Description value={props.label} />
  </div>
);
const Heading2 = (props: InputGenerationProps.header) => (
  <div>
    <DJobsTypography styleName="djHeadingTwo" color="blueGreyDark">
      {props.label}
    </DJobsTypography>
    <DjobsCommonFieldComponents.Description value={props.label} />
  </div>
);
const paragraph = (props: InputGenerationProps.paragraph) => (
  <div>
    <DJobsTypography styleName="djSubTitleFour" color="blueGreyDark">
      {props.label}
    </DJobsTypography>
    <DjobsCommonFieldComponents.Description value={props.label} />
  </div>
);

export const QuestionairreHeadings = { Heading1, Heading2, paragraph };
