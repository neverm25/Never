// #Global Imports
import * as React from "react";
import styled from "styled-components";
// #Global Imports End

import ProgressBarHeader from "../Header";
import ProgressBarStatus from "./ProgressBarItems/ProgressBarStatus";
import ProgressBarRibbon from "./ProgressBarItems/ProgressBarRibbon";
import { theme } from "@Global/Theme";

import { IPostJob } from "../PostJob";

// #Export constants
export const PROGRESS_PENDING = "pending";
export const PROGRESS_ACTIVE = "active";
export const PROGRESS_COMPLETED = "completed";

export const progressBarItemBackgroundColor = {
  pending: theme.colors.black20,
  active: theme.colors.blue100,
  completed: theme.colors.green100,
};
// #Export constants end
const ProgressBar = (props: IPostJob.ProgressBarProps) => {
  return (
    <ProgressBarFrame>
      <ProgressBarItems>
        <ProgressBarHeader regularText="Job Post" boldText="Progress" />
        <ProgressBarStatus {...props} />
        <ProgressBarRibbon />
      </ProgressBarItems>
      <ProgressBarBorder />
    </ProgressBarFrame>
  );
};
export default ProgressBar;

const ProgressBarFrame = styled.div`
  background:${theme.gradients.purple50}; 
  border-radius: 22px 23px 0px 0px};
`;

const ProgressBarItems = styled.div`
  display: flex;
  margin: 0px 47px;
  flex-direction: row;
  height: 173px;
  align-items: center;
  justify-content: space-between;
`;

const ProgressBarBorder = styled.div`
  border: 3px solid rgba(34, 61, 86, 0.11);
  height: 0px;
`;
