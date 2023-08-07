// #region Global Imports
import React from "react";
import { Grid } from "antd";
import { useRouter } from "next/router";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";

import {
  FacebookIcon,
  LinkedlnIcon,
  TwitterIcon,
} from "@DJobs/Components/Icons";
import { DjobsButton, DJobsTypography } from "@DJobs/Components/Basic/";
import { MainContainer, SocialIcon } from "./Styles/ApplyButtonContainerStyles";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";
import { useAppSelector } from "@Redux";
import styled from "styled-components";
import { JobDetailsCommon } from "../../JobDetailsCommon";
// #endregion Local Imports

export const ApplyButtonContainer = () => {
  const router = useRouter();
  const screen = Grid.useBreakpoint();
  const { jobData, candidateDetails } = useAppSelector(store => store);
  const { applyJobData } = jobData;
  const { job_applications } = candidateDetails;
  const isAppliedJob = job_applications[applyJobData.id];
  const isGumtree = router.pathname.startsWith("/DJobs/job/gumtree");

  const socialLink = source => {
    // const path = `/job-details?id=${applyJobData.id}&source=${source}`;
    const path = `/job/${applyJobData.id}/view&source=${source}`;

    if (source === "linkedin")
      window.open(`${process.env.NEXT_PUBLIC_LINKEDIN}${path}`);
    else if (source === "facebook")
      window.open(`${process.env.NEXT_PUBLIC_FACEBOOK}${path}`);
    else if (source === "twitter")
      window.open(`${process.env.NEXT_PUBLIC_TWITTER}${path}`);
  };

  return (
    <MainContainer>
      {!screen.lg && (
        <DJobsTypography styleName="djIcons" color="purple100">
          Share:
        </DJobsTypography>
      )}
      {screen.lg && (
        <div
          style={{
            display: "flex",
            flexDirection: `${screen.md ? "row" : "column"}`,
            gap: "5px",
          }}
        >
          <DjobsButton.Main
            variant={"Primary"}
            width={"148px"}
            disabled={isAppliedJob}
            label={isAppliedJob ? "Applied" : "Apply"}
            onClick={() =>
              isGumtree
                ? window.open(
                    `${DJOBS_ROUTES.jobDetails}?id=${applyJobData.id}&source=gumtree`
                  )
                : router.push(
                    `${DJOBS_ROUTES.application}?job_id=${applyJobData.id}`
                  )
            }
          />
          {isAppliedJob && <JobDetailsCommon.ApplyMessage />}
        </div>
      )}
      <SocialIcons>
        <SocialIcon onClick={() => socialLink("facebook")}>
          <FacebookIcon color={djobsTheme.colors.black10} size={25} />
        </SocialIcon>
        <SocialIcon padding="5px" onClick={() => socialLink("linkedin")}>
          <LinkedlnIcon width={"20px"} height={"20px"} />
        </SocialIcon>
        <SocialIcon onClick={() => socialLink("twitter")}>
          <TwitterIcon color={djobsTheme.colors.black10} size={25} />
        </SocialIcon>
      </SocialIcons>
    </MainContainer>
  );
};

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
