import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";

import { djobsTheme } from "@DJobs/Theme";
import {
  DJobsTypography,
  TextWithLeadingEllipsis,
} from "@DJobs/Components/Basic";
import { AngleRightIcon } from "@Global/Components/Icons";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";
import { JobDataContext } from ".";

export const JobDataPreview = () => {
  const { description, id } = useContext(JobDataContext).jobData;
  const [isMouseOverJobViewLink, setMouseOverJobViewLink] = useState(false);
  const router = useRouter();

  return (
    <JobDataPreviewContainer>
      <DJobsTypography styleName="djBold" color="textDarker">
        {`Job Description`}
      </DJobsTypography>

      <TextWithLeadingEllipsis
        styleName="djTextRegular"
        color="textDefault"
        maxLineLength={7}
        content={ReactHtmlParser(description)}
      />
      <TitleBorder />
      <GoToJobViewLink
        onMouseOver={() => setMouseOverJobViewLink(true)}
        onMouseLeave={() => setMouseOverJobViewLink(false)}
        onClick={() => router.push(`/${DJOBS_ROUTES.jobDetails}?id=${id}`)}
      >
        {`view all details`}
        <AngleRightIcon
          color={
            isMouseOverJobViewLink
              ? djobsTheme.colors.purple110
              : djobsTheme.colors.black80
          }
        />
      </GoToJobViewLink>
    </JobDataPreviewContainer>
  );
};

const JobDataPreviewContainer = styled.div`
  z-index: 1;
  position: relative;
  bottom: 40px;
  min-height: 300px;
  background: ${djobsTheme.gradients.purple20};
  border: 1px solid ${djobsTheme.colors.black20};
  box-shadow: ${djobsTheme.effects.boxShadow};
  border-radius: 0px 0px 20px 20px;
  padding: 60px 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TitleBorder = styled.div`
  margin: 5px 0;
  border: 1px solid ${djobsTheme.colors.black20};
`;

const GoToJobViewLink = styled.a`
  display: flex;
  align-items: center;
  ${djobsTheme.text.interactiveTextRegular};
  color: ${djobsTheme.colors.black80};
  text-transform: uppercase;
  width: fit-content;

  &:hover {
    ${djobsTheme.text.interactiveTextHover};
    background: ${djobsTheme.gradients.purple100};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: ${djobsTheme.colors.blue100};
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: ${djobsTheme.colors.purple110};
  }
`;
