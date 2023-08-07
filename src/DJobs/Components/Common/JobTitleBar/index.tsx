import React from "react";
import Image from 'next/image'
import styled from "styled-components";
import { Grid } from "antd";

import { djobsTheme } from "@DJobs/Theme";
import { BuildingIcon } from "@DJobs/Components/Icons";
import { IconValue, DJobsTypography } from "@DJobs/Components/Basic";

export const JobTitleBar = ({ jobData }) => {
  const screen = Grid.useBreakpoint();
  const size = screen.lg ? 60 : 40;
  const borderSize = screen.lg ? 5 : 2;
  return (
    <React.Fragment>
      <JobTitleContainer>
        <Image
          src={jobData?.photo || "/static/jobViewImages/ditto-logo-small.svg"}
          alt="company-logo"
          width={size}
          height={size}
          style={{
            border: `${borderSize}px solid ${djobsTheme.colors.white100}`,
            borderRadius: "5px",
          }}
          loading="lazy"
        />

        <JobTitleContents>
          <DJobsTypography styleName="djSubTitleOne" color="white100">
            {jobData?.title}
          </DJobsTypography>
          <IconValue
            Icon={BuildingIcon}
            value={jobData?.name}
            textColor="white100"
            iconColor="white100"
            IconSize={17}
            textStyleName="djCardsCompanyAlt"
          />
        </JobTitleContents>
      </JobTitleContainer>
    </React.Fragment>
  );
};

const JobTitleContainer = styled.div`
  background: ${djobsTheme.colors.dittoBlue};
  padding: 16px 22px;
  border-radius: 24px 24px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 10px;
  position: relative;
  box-sizing: content-box;
  @media (min-width: 992px) {
    gap: 20px;
    padding: 28px 53px;
  }
  @media (min-width: 1600px) {
    padding: 20px 30px;
  }
`;

const JobTitleContents = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  @media (min-width: 978px) {
    gap: 5px;
  }
`;
