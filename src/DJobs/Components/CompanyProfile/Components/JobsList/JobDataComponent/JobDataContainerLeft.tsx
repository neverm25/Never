import React from "react";

import {
  BuildingIcon,
  LocationPinIcon,
  CoinsIcon,
  ClockIcon,
} from "@DJobs/Components/Icons";
import { DJobsTypography } from "@DJobs/Components/Basic/";
import { MetaData } from "../MetaData";
import { djobsTheme } from "@DJobs/Theme";
import { JobListTypes } from "../../JobsList/JobsList";
import {
  LeftContainer,
  TextEllipsisContainer,
  IconTextWrapper,
} from "./JobDataStyle";

export const JobDataContainerLeft: React.FC<JobListTypes.JobDataProps> = ({
  jobData,
}) => {
  const {
    title,
    company_name,
    location,
    salary_from,
    salary_to,
    job_type,
  } = jobData;

  return (
    <LeftContainer>
      <TextEllipsisContainer>{title}</TextEllipsisContainer>
      <IconTextWrapper>
        <BuildingIcon color={djobsTheme.colors.blue90} size={9} />
        <DJobsTypography styleName="djCardsCompany" color="blue80">
          {company_name}
        </DJobsTypography>
      </IconTextWrapper>
      <IconTextWrapper>
        {location && <MetaData Icon={LocationPinIcon} value={location} />}
        {salary_from && (
          <MetaData
            Icon={CoinsIcon}
            value={`${salary_from} - ${salary_to ? "- " + salary_to : ""}`}
          />
        )}
        {job_type && <MetaData Icon={ClockIcon} value={job_type} />}
      </IconTextWrapper>
    </LeftContainer>
  );
};
