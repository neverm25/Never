// #region Global Imports
import React, { useState } from "react";
import { Grid } from "antd";
import { Box } from "reflexbox";
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { djobsTheme } from "@DJobs/Theme";
import { LeftArrowIcon, RightArrowIcon } from "../../Icons";
import IRecommendation from "./Recommendation";
import { DJobsTypography } from "@DJobs/Components/Basic/";
import { JobListCommon } from "../JobListCommon/JobListCommon";
import { JobDataComponent } from "../JobListCommon/JobsList/JobDataComponent";
import { useAppSelector } from "@Redux";
// #endregion Local Imports

export const RecommendationCarousel = ({
  setJobSelId,
  align = "center",
}: IRecommendation.IProps) => {
  const { candidateDetails } = useAppSelector(store => store);
  const { job_recommendations } = candidateDetails;

  const screen = Grid.useBreakpoint();
  const [current, setCurrent] = useState(0);
  const TOTAL_DATA_PER_SLIDE = 3;
  const TOTAL_DATA_LENGTH = job_recommendations?.length;
  const TOTAL_SLIDES = Math.ceil(TOTAL_DATA_LENGTH / TOTAL_DATA_PER_SLIDE - 1);
  const ref = React.useRef(null);

  // To divide data based on TOTAL_DATA_PER_SLIDE
  const recomendedJobslist = React.useMemo(() => {
    let slideData = [];
    let tempData = [];
    for (let jobItem = 0; jobItem < TOTAL_DATA_LENGTH; jobItem++) {
      tempData.length === TOTAL_DATA_PER_SLIDE // push data as per size of TOTAL_DATA_PER_SLIDE
        ? (slideData.push(tempData),
          ((tempData = []), tempData.push(job_recommendations[jobItem])))
        : tempData.push(job_recommendations[jobItem]);
      jobItem + 1 === TOTAL_DATA_LENGTH && slideData.push(tempData); // push remain data
    }
    return slideData; // return modified data of array
  }, [TOTAL_DATA_LENGTH, job_recommendations]);

  const prevClick = () => {
    if (current === 0) setCurrent(TOTAL_SLIDES);
    else setCurrent(current - 1);
  };

  const nextClick = () => {
    if (current >= TOTAL_SLIDES) setCurrent(0);
    else setCurrent(current + 1);
  };

  React.useEffect(() => {
    ref.current.style.transition = "all 0.8s ease-in-out";
    ref.current.style.transform = `translateX(-${current}00%)`;
  }, [current]);
  let candidateDataProps: JobListCommon.candidateData;
  const ArrowIconSize = screen.sm && screen.md ? 30 : 15;

  const recommendationExists = job_recommendations.length > 0;

  return (
    <div>
      {recommendationExists && (
        <RecommendationTextContainer align={align}>
          <DJobsTypography styleName="djTitleTwo" color="blue100">
            Recommended for you
          </DJobsTypography>
        </RecommendationTextContainer>
      )}
      <RecommendationDataListContainer>
        {recommendationExists && (
          <CourselButton onClick={prevClick}>
            <LeftArrowIcon
              color={djobsTheme.colors.black10}
              size={ArrowIconSize}
            />
          </CourselButton>
        )}
        <RecommendationSlideContainer>
          <RecommendationSlide ref={ref}>
            {recomendedJobslist.map((recommendedJobsPerSlide, index) => (
              <JobItem key={index}>
                {recommendedJobsPerSlide.map((recommendedJob, index) => (
                  <Box key={index}>
                    <JobDataContainer>
                      <JobDataComponent
                        redirectToJobPage={true}
                        setJobSelId={setJobSelId}
                        key={`jobData_${recommendedJob.jobId}_${index}`}
                        jobData={recommendedJob}
                        isApplied={
                          candidateDataProps !== undefined
                            ? candidateDataProps.appliedJobIds.includes(
                                recommendedJob.jobId
                              )
                            : false
                        }
                      />
                    </JobDataContainer>
                  </Box>
                ))}
              </JobItem>
            ))}
          </RecommendationSlide>
        </RecommendationSlideContainer>
        {recommendationExists && (
          <CourselButton onClick={nextClick}>
            <RightArrowIcon
              color={djobsTheme.colors.black10}
              size={ArrowIconSize}
            />
          </CourselButton>
        )}
      </RecommendationDataListContainer>
    </div>
  );
};

const RecommendationDataListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;
const RecommendationTextContainer = styled.div<{ align: "center" | "left" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  @media (min-width: 992px) {
    padding-top: 53px;
  }
`;

const CourselButton = styled.div`
  margin: auto;
  padding: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background: ${djobsTheme.colors.dittoBlue};
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 992px) {
    padding: 6px;
  }
`;

const JobDataContainer = styled.div`
  padding-bottom: 10px;
  margin: 0px 6px;
  @media (min-width: 992px) {
    margin: 0px 25px;
  }
`;
const RecommendationSlideContainer = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden; // to hide the other boxs
`;

const JobItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  margin-top: 10px;
  gap: 12px;
  @media (min-width: 992px) {
    gap: 15px;
  }
`;

export const RecommendationSlide = styled.div`
  display: flex;
`;
