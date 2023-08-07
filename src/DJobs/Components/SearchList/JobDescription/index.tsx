import React, { createContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { JobMetaData } from "./JobMetaData";
import { JobTitleBar } from "@DJobs/Components/Common/JobTitleBar";
import { DescriptionContent } from "./JobDescriptionContent";
// import { JobDescription as JobDescriptionType } from "./JobDescription";
import { JobDescriptionProps } from "./JobDescription";
import { DjobsButton } from "@DJobs/Components/Basic";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";

export const JobDescriptionContext = createContext(
  {} as JobDescriptionProps.ContextProps
);
export const JobDescription = ({ JobData }: JobDescriptionProps.Iprops) => {
  const router = useRouter();
  return (
    <JobDescriptionContext.Provider value={{ JobData }}>
      <JobDescriptionContainer>
        <JobTitleWrapper id="JobDescription_jobTitle">
          <JobTitleBar
            jobData={{
              photo: JobData?.logo,
              title: JobData?.title,
              name: JobData?.company_name,
            }}
          />
          <JobMetaData />
        </JobTitleWrapper>

        <JobInformationWrapper>
          <DescriptionContent
            title={JobData?.title}
            content={JobData?.description}
            contentNumberOfLines={20}
            id={JobData?.id}
            is_internal={JobData?.is_internal}
          />
        </JobInformationWrapper>
        <ViewMoreButton>
          <DjobsButton.NavActions
            variant="View"
            label="View More"
            onClick={() =>
              router.push(
                `${DJOBS_ROUTES.jobDetails}?id=${JobData?.id}&is_internal=${JobData?.is_internal}`
              )
            }
            btnType="button"
          />
        </ViewMoreButton>
      </JobDescriptionContainer>
    </JobDescriptionContext.Provider>
  );
};

const JobDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 25px;
  gap: 15px;
  height: fit-content;
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.boxShadow};
  border-radius: 23px;

  @media (min-width: 992px) {
    position: sticky;
    top: 107px;
    width: 100%;
    min-width: 500px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    width: 100%;
    min-width: 700px;
    margin: 0 auto;
  }

  @media (min-width: 1600px) {
    width: 100%;
    margin: 0 auto;
    min-width: 800px;
    margin: 0 auto;
    gap: 20px;
  }
`;
const JobTitleWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  box-shadow: ${djobsTheme.effects.cardShadow};
`;

const JobInformationWrapper = styled.div`
  background: ${djobsTheme.colors.white110};
  border: 1px solid ${djobsTheme.colors.black20};
  width: 100%;
  border-radius: 24px;
  padding: 5px 30px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  overflow: hidden;

  min-height: 120px;
  height: 40vh;
  @media (min-height: 550px) {
    max-height: 54vh;
  }

  &:after {
    content: "";
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0.000001%,
      #fbfbfe 100%
    );
    height: 100px;
    bottom: 0px;
    width: 95%;
    position: absolute;
    z-index: 2;
  }
`;

const ViewMoreButton = styled.div`
  position: absolute;
  z-index: 3;
  left: 40%;
  margin: 0 auto;
  bottom: 30px;
`;
