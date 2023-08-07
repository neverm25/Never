import React from "react";

import { JobDataComponent } from "./JobDataComponent";
import { JobListTypes } from "../JobsList/JobsList";
import { getSlicedArrayUsingSubArrayLength } from "@Helpers/ArrayHelpers";
import {
  JobsListContainer,
  JobSubList,
  PaginationWrapper,
} from "./JobListStyle";
import { PaginationBase } from "@Global/Components/Basic";

export const JobsList = (props: JobListTypes.JobsListProps) => {
  const { jobsList } = props;
  const [pageNumber, setPageNumber] = React.useState(1);

  //JobList rendering based on pagination
  const itemsPerPage = 20;
  const itemsForNextAd = 10;
  const jobListLength = jobsList.length;

  const jobsListSlicedForPagination = getSlicedArrayUsingSubArrayLength({
    data: jobsList,
    subArrayLength: itemsPerPage,
  }) as JobListTypes.jobsList[];
  const jobsListWithinPageSlicedForAdSeparation = getSlicedArrayUsingSubArrayLength(
    {
      data: jobsListSlicedForPagination[pageNumber - 1],
      subArrayLength: itemsForNextAd,
    }
  ) as JobListTypes.jobsList[];

  return (
    <JobsListContainer>
      {jobsListWithinPageSlicedForAdSeparation.map((jobsSubList, index) => (
        <JobSubList key={`JobSubList_${index}`}>
          {jobsSubList.map(jobData => (
            <JobDataComponent key={`jobData_${jobData.id}`} jobData={jobData} />
          ))}
        </JobSubList>
      ))}

      <PaginationWrapper>
        <PaginationBase
          itemsPerPage={itemsPerPage}
          totalItems={jobListLength}
          currentPageNumber={pageNumber}
          onChange={selectedPageNumber => setPageNumber(selectedPageNumber)}
        />
      </PaginationWrapper>
    </JobsListContainer>
  );
};
