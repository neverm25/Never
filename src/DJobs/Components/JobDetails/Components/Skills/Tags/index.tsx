// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports

import { DJobsTypography } from "@DJobs/Components/Basic/";
import { ITagsContainer } from "./TagsContainer";
import { GradientBorderTag, MainContainer, Tag } from "./Styles/TagsStyles";
// #endregion Local Imports

const TagsContainer = ({ data, gradientTag }: ITagsContainer.IProps) => {
  return (
    <MainContainer>
      {gradientTag
        ? data.map(value => (
            <GradientBorderTag key={value.text}>
              <Tag gradientTag={gradientTag}>
                <DJobsTypography styleName="djTagsRegular" color="blue100">
                  {value.text}
                </DJobsTypography>
              </Tag>
            </GradientBorderTag>
          ))
        : data.map(value => (
            <Tag gradientTag={gradientTag} key={value.text}>
              <DJobsTypography styleName="djTagsRegular" color="purple110">
                {value.text}
              </DJobsTypography>
            </Tag>
          ))}
    </MainContainer>
  );
};

export default TagsContainer;
