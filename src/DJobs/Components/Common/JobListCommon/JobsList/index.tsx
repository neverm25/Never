import React, { useEffect } from "react";
import styled from "styled-components";

import { getSlicedArrayUsingSubArrayLength } from "@Helpers/ArrayHelpers";
import { JobDataComponent } from "./JobDataComponent";
import { JobListCommon } from "../JobListCommon";
import { useAppSelector } from "@Redux";

export const JobsList = (props: JobListCommon.JobsListProps) => {
  const {
    jobsList,
    allowPreview = true,
    itemsForNextAd = 10,
    onClickJobDetails,
    redirectToJobPage,
    setJobSelId,
    jobSelId,
  } = props;
  const jobsListWithinPageSlicedForAdSeparation = getSlicedArrayUsingSubArrayLength(
    {
      data: jobsList,
      subArrayLength: itemsForNextAd,
    }
  ) as JobListCommon.jobsList[];
  useEffect(() => {}, [jobsList]);

  const { candidateDetails } = useAppSelector(store => store);
  const { job_applications } = candidateDetails;

  return (
    <JobsListContainer>
      {jobsListWithinPageSlicedForAdSeparation.map((jobsSubList, index) => (
        <JobSubList key={`JobSubList_${index}`}>
          {jobsSubList.map((jobData, index) => (
            <JobDataComponent
              key={`jobData_${jobData.id}_${index}`}
              isApplied={job_applications[jobData.id]}
              {...{
                setJobSelId,
                jobSelId,
                onClickJobDetails,
                jobData,
                allowPreview,
                redirectToJobPage,
              }}
            />
          ))}
        </JobSubList>
      ))}
    </JobsListContainer>
  );
};

const JobsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
  width: 100%;

  @media (min-width: 992px) {
    width: 100%;
    gap: 20px;
  }

  @media (min-width: 1200px) {
    width: 100%;
    gap: 20px;
  }

  @media (min-width: 1600px) {
    width: 100%;
    gap: 20px;
  }
`;

const JobSubList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 1200px) {
    gap: 20px;
  }
`;
