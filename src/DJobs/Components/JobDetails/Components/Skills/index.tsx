// #region Global Imports
import React, { useState } from "react";
import { Grid } from "antd";
// #endregion Global Imports

// #region Local Imports
import { DJobsTypography } from "@DJobs/Components/Basic/";
import Dropdown from "./Dropdown";
import TagsContainer from "./Tags";
import { useAppSelector } from "@Redux";
import { SearchedJobsList } from "@Redux/slices/SearchedJobsList/SearchedJobsList";
import styled from "styled-components";
// #endregion Local Imports

type TagsProps = {
  title: string;
  data: SearchedJobsList.filterOption[];
  gradientTag: boolean;
};

const Title = ({ title }) => (
  <DJobsTypography styleName="djPillTitle" color="black100">
    {title}
  </DJobsTypography>
);
const Tags = ({ title, data, gradientTag }: TagsProps) => (
  <div>
    <Title title={title} />
    <TagsContainer data={data} gradientTag={gradientTag} />
  </div>
);

const SkillsContainer = () => {
  const screen = Grid.useBreakpoint();
  const { jobData } = useAppSelector(store => store);
  const { applyJobData } = jobData;
  const { skills, industries } = applyJobData;

  const [isOpen, setIsOpen] = useState(false);

  return screen.lg ? (
    <MainContainer className="skills-container">
      {skills?.length > 0 && (
        <Tags title="Skills" data={skills} gradientTag={false} />
      )}
      {industries?.length > 0 && (
        <Tags title="Industries" data={industries} gradientTag={true} />
      )}
    </MainContainer>
  ) : (
    (skills?.length > 0 || industries?.length > 0) && (
      <Dropdown data={applyJobData} isOpen={isOpen} setIsOpen={setIsOpen} />
    )
  );
};

export default SkillsContainer;

const MainContainer = styled.div`
  border-radius: 10px;
  @media (min-width: 992px) {
    padding-left: 20px;
  }
`;
