import React, { useContext } from "react";
import styled from "styled-components";

import { IconValue } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import { getSlicedArrayUsingSubArrayLength } from "@Helpers/ArrayHelpers";
import { SearchResults } from "../SearchList";
import { DJobsGradientIcons } from "@DJobs/Components/Icons";
import { JobDescriptionContext } from ".";

export const JobMetaData = () => {
  const { JobData } = useContext(JobDescriptionContext);

  const {
    city,
    job_type,
    salary_from,
    salary_to,
    experience_from,
    experience_to,
    salary_type,
    education,
  } = JobData;

  const JobMetaDataValues = [];
  city &&
    JobMetaDataValues.push({
      value: city,
      Icon: DJobsGradientIcons.LocationPinIcon,
    });
  job_type &&
    JobMetaDataValues.push({
      value: job_type,
      Icon: DJobsGradientIcons.NewspaperIcon,
    });
  salary_from &&
    JobMetaDataValues.push({
      value: `${salary_from} ${salary_to ? "- " + salary_to : ""}`,
      Icon: DJobsGradientIcons.BillIcon,
    });
  experience_from &&
    JobMetaDataValues.push({
      value: `${experience_from} years${
        experience_to ? " - " + experience_to + " years" : ""
      }`,
      Icon: DJobsGradientIcons.ChartLineIcon,
    });
  salary_type &&
    JobMetaDataValues.push({
      value: salary_type,
      Icon: DJobsGradientIcons.BriefcaseIcon,
    });
  education &&
    JobMetaDataValues.push({
      value: education,
      Icon: DJobsGradientIcons.SeniorityIcon,
    });

  const slicedJobMetaDataValues: SearchResults.JobMetaDataValues[] = getSlicedArrayUsingSubArrayLength(
    {
      data: JobMetaDataValues,
      subArrayLength: 2,
    }
  );

  return (
    <JobMetaDataContainer>
      <MetaDataWrapper>
        {slicedJobMetaDataValues.map((metaData, index) => (
          <SubMetaData key={`SubMetaData_${index}`}>
            {metaData.map(data => (
              <IconValue
                key={data.value}
                {...data}
                isGradientIcon={true}
                textColor="black90"
              />
            ))}
          </SubMetaData>
        ))}
      </MetaDataWrapper>
    </JobMetaDataContainer>
  );
};

const JobMetaDataContainer = styled.div`
  background: ${djobsTheme.colors.white100};
  padding: 10px 30px;
  border-radius: 0 0 24px 24px;
  @media (min-width: 1200px) {
    padding: 15px 30px;
  }
  @media (min-width: 1600px) {
    padding: 20px 30px;
  }
`;

const MetaDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const SubMetaData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
