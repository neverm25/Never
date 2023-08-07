// #region Global Imports
import React from "react";
import Image from 'next/image'
import { Grid } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
import {
  DJobsTypography,
  TextWithLeadingEllipsis,
} from "@DJobs/Components/Basic";
import { BuildingIcon } from "@DJobs/Components/Icons";
import { JobTitleStyles } from "./Styles/JobTitleStyles";
import { useAppSelector } from "@Redux";
import { DateHelpers } from "@Helpers/DateHelpers";
// #endregion Local Imports

const JobTitleContainer = () => {
  const screens = Grid.useBreakpoint();
  const router = useRouter();
  const { jobData } = useAppSelector(store => store);
  const { applyJobData } = jobData;
  const {
    company_photo,
    title,
    company_id,
    company_name,
    date_active,
    is_internal,
  } = applyJobData;
  const dateActive = moment(date_active);
  const postedDate = dateActive.date();
  const postedMonth = DateHelpers.months[dateActive.month()];
  const postedYear = dateActive.year();

  return (
    <JobTitleStyles.MainContainer>
      <JobTitleStyles.CompanyLogo>
        <Image
          src={company_photo}
          alt="company-logo"
          width={80}
          height={80}
          style={{ borderRadius: "10px" }}
          loading="lazy"
        />
      </JobTitleStyles.CompanyLogo>
      <JobTitleStyles.JobTitle>
        <TextWithLeadingEllipsis
          content={title}
          styleName="djSubTitleOne"
          color="black100"
          maxLineLength={2}
        />
        <JobTitleStyles.CompanyNameWrapper>
          <BuildingIcon color={djobsTheme.colors.black110} size={14} />
          <div
            style={{ cursor: is_internal ? "pointer" : "default" }}
            onClick={() => {
              is_internal && router.push(`/company-profile?id=${company_id}`);
            }}
          >
            <DJobsTypography styleName="djCardsCompanyAlt" color="blue100">
              {company_name}
            </DJobsTypography>
          </div>
        </JobTitleStyles.CompanyNameWrapper>
        {screens.lg && (
          <DJobsTypography styleName="djCardStamp" color="black80">
            Posted: {`${postedDate} ${postedMonth} ${postedYear}`}
          </DJobsTypography>
        )}
      </JobTitleStyles.JobTitle>
    </JobTitleStyles.MainContainer>
  );
};

export default JobTitleContainer;
