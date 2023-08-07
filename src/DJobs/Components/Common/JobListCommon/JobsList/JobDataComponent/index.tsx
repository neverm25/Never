import React, { createContext, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Grid } from "antd";

import { djobsTheme } from "@DJobs/Theme";
import { JobDataContainerLeft } from "./JobDataContainerLeft";
import { JobDataContainerRight } from "./JobDataContainerRight";
import { DJobsTypography } from "@DJobs/Components/Basic";
import { JobDataPreview } from "./JobDataPreview";
import { SearchResults } from "@DJobs/Components/SearchList/SearchList";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";
import { useAppSelector } from "@Redux";

export const JobDataContext = createContext(
  {} as SearchResults.JobDataContextProps
);
export const JobDataComponent = (props: SearchResults.JobDataProps) => {
  const screen = Grid.useBreakpoint();
  const router = useRouter();
  const { selectedJobId } = useAppSelector(store => store.jobData);
  const {
    jobData,
    isApplied,
    onClickJobDetails,
    redirectToJobPage,
    setJobSelId,
    allowPreview,
  } = props;
  const [showPreview, setShowPreview] = useState(false);

  const JobDataContextValue: SearchResults.JobDataContextProps = {
    showPreview,
    setShowPreview,
    jobData,
    onClickJobDetails,
    setJobSelId,
    allowPreview,
  };

  const isMobile = !screen.md;

  return (
    <JobDataContext.Provider value={JobDataContextValue}>
      <JobDataComponentWrapper>
        <JobDataContainer
          id={`job_${selectedJobId}`}
          isSelectedJob={!isMobile && selectedJobId === jobData?.id.toString()}
          showPreview={showPreview}
          onClick={e => {
            e.stopPropagation();
            if (redirectToJobPage)
              router.push(`${DJOBS_ROUTES.jobDetails}?id=${jobData?.id}`);
          }}
          isApplied={isApplied}
        >
          {isApplied && (
            <AppliedTag>
              <DJobsTypography styleName="djSmallText" color="yellow180">
                Applied
              </DJobsTypography>
            </AppliedTag>
          )}
          <JobDataContainerLeft />

          {isMobile && allowPreview && <JobDataContainerRight />}
        </JobDataContainer>
        {isMobile && showPreview && <JobDataPreview />}
      </JobDataComponentWrapper>
    </JobDataContext.Provider>
  );
};

const JobDataComponentWrapper = styled.div`
  width: 100%;
  transition: transform 0.2s;

  @media (min-width: 992px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;
const JobDataContainer = styled.div<{
  showPreview: boolean;
  isSelectedJob: boolean;
  isApplied: boolean;
}>`
  position: relative;
  z-index: 2;
  background: ${djobsTheme.colors.white100};
  transition: all 300ms ease-in-out;
  border-radius: 20px;
  outline: none;
  border: ${({ isSelectedJob, isApplied }) => {
    if (isApplied && !isSelectedJob) return `2px solid #FFB23F40`;
    return isSelectedJob
      ? `1px solid ${djobsTheme.colors.dittoBlue}`
      : `1px solid ${djobsTheme.colors.black10}`;
  }};

  display: flex;
  box-shadow: ${({ isSelectedJob }) =>
    isSelectedJob
      ? djobsTheme.effects.activeBorder
      : djobsTheme.effects.jobCardShadow};
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  height: 98px;

  &:hover {
    background: ${({ isSelectedJob, showPreview }) =>
      showPreview && !isSelectedJob && djobsTheme.colors.black10};
    box-shadow: ${({ isSelectedJob }) =>
      isSelectedJob
        ? djobsTheme.effects.jobTilesShadow
        : djobsTheme.effects.jobCardShadow};
    cursor: pointer;
  }
  @media (min-width: 992px) {
    padding: 20px 30px;
    height: 150px;
  }
`;

const AppliedTag = styled.div`
  width: 60px;
  height: 17px;
  background: ${djobsTheme.colors.yellow100};
  box-shadow: ${djobsTheme.effects.boxShadow};
  border-radius: 0px 0px 5px 5px;
  position: absolute;
  top: 0px;
  padding: 0 10px;
`;
