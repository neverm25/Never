// #region Global Imports
import React from "react";
import ReactHtmlParser from "react-html-parser";

// #endregion Global Imports

// #region Local Imports
import { DJobsTypography } from "@DJobs/Components/Basic";
import { MainContainer, TextEllipsisContainer } from "./DescriptionStyles";

// #endregion Local Imports

interface DescriptionContainerProps {
  clampLine?: number;
  title: string;
  content: string;
}

export const DescriptionContainer = ({
  clampLine,
  title,
  content,
}: DescriptionContainerProps) => (
  <MainContainer>
    <DJobsTypography styleName="djSubTitleOne" color="blue100">
      {title}
    </DJobsTypography>
    <div style={{ marginTop: "30px" }} className="social-icon">
      <TextEllipsisContainer clampLine={clampLine}>
        {ReactHtmlParser(content)}
      </TextEllipsisContainer>
    </div>
  </MainContainer>
);
