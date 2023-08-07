// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { IDropdown } from "./Dropdown";
import { DJobsTypography } from "@DJobs/Components/Basic";
import { Dot, MainDiv, ContentTitle } from "./styles/DropdownStyles";
// #endregion Local Imports

const SkillOrIndustry = ({ index, value }: IDropdown.SkillOrIndustryProps) => (
  <div
    key={index}
    style={{ display: "flex", alignItems: "center", gap: "5px" }}
  >
    <Dot />
    <DJobsTypography
      styleName="djPillBold"
      color="black80"
      isLineBreakAllowed={false}
    >
      {value}
    </DJobsTypography>
  </div>
);

export const DropdownContent = ({ title, data }) => (
  <div>
    <DJobsTypography styleName="djSubHeadingTwo" color="purple100">
      {title}
    </DJobsTypography>
    <ContentTitle>
      <MainDiv>
        {data.map((value, index) => (
          <SkillOrIndustry key={index} index={index} value={value.text} />
        ))}
      </MainDiv>
    </ContentTitle>
  </div>
);
