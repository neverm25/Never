import React, { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import { Grid } from "antd";
import Head from "next/head";

import { djobsTheme } from "@DJobs/Theme";
import { JobTitleBar } from "@DJobs/Components/Common/JobTitleBar";
import { ApplicationStepperFormProps } from "./ApplicationStepperForm";
import { RecommendationCarousel } from "@DJobs/Components/Common/RecommendationCarousel";
import { UserDetails } from "./01-UserDetails";
import { UploadFilesStepTwo } from "./02-UploadFiles";
import { Questionairre } from "./03-Questionairre";
import { ReviewInfoStepOne, ReviewInfoStepTwo } from "./04-ReviewInfo";
import { ApplicationSubmitted } from "./05-ApplicationSubmitted";
import { useAppSelector } from "@Redux";
import { adSlots } from "@DJobs/Components/Basic/AdUnit/Ad_slots";
import { AdUnit } from "@DJobs/Components/Basic";

export const ApplicationProcessContext = createContext(
  {} as ApplicationStepperFormProps.Context
);
const initialQuestionairreFields = {};

export const ApplicationStepperForm = () => {
  const screens = Grid.useBreakpoint();
  const [stepNumber, setStepNumber] = useState(1);
  const { files, jobData, candidateDetails } = useAppSelector(state => state);
  const { applyJobData } = jobData;
  const { filesData } = files;

  //Managing Steps state here
  const [UploadedFilesId, setUploadedFilesId] = useState(null);
  const [QuestionairreFields, setQuestionairreFields] = useState(
    initialQuestionairreFields
  );
  const applicationSteps = [
    {
      title: "User Details",
      content: <UserDetails />,
      adSlots: {
        top: adSlots.userDetailsTop,
        bottom: adSlots.userDetailsBottom,
      },
    },
    {
      title: "Upload files Step Two",
      content: <UploadFilesStepTwo />,
      adSlots: {
        top: adSlots.fileUploadTop,
        bottom: adSlots.fileUploadBottom,
      },
    },
    {
      title: "Questionairre",
      content: <Questionairre />,
      adSlots: {},
    },
    {
      title: "Review your Career info",
      content: <ReviewInfoStepOne />,
      adSlots: {
        top: adSlots.workHistoryTop,
        bottom: adSlots.workHitsoryBottom,
      },
    },
    {
      title: "Review your Education info",
      content: <ReviewInfoStepTwo />,
      adSlots: {
        top: adSlots.educationTop,
        bottom: adSlots.educationBottom,
      },
    },
    {
      title: "Submitted",
      content: <ApplicationSubmitted />,
      adSlots: {
        top: adSlots.applicationSuccessTop,
      },
    },
  ];
  const ApplicationProcessContextValue: ApplicationStepperFormProps.Context = {
    stepNumber,
    setStepNumber,
    UploadedFilesId,
    setUploadedFilesId,
    QuestionairreFields,
    setQuestionairreFields,
    applyJobData,
  };

  useEffect(() => setUploadedFilesId(filesData[0]?.id ?? null), [filesData]);

  const applicationStepContent = applicationSteps[stepNumber - 1];
  const { title = "", content = <React.Fragment /> } = applicationStepContent;
  const pageAd = applicationStepContent.adSlots;

  return (
    <ApplicationProcessContext.Provider value={ApplicationProcessContextValue}>
      <Head>
        <title>{title + " | " + applyJobData?.company_name}</title>
      </Head>
      <Container id="candidateTabItem">
        {pageAd.top && (
          <AdUnit.GoogleAdSense
            type={screens.xs ? "rectangle" : "banner"}
            adSlot={pageAd.top}
            showAd={!applyJobData.is_advertised}
          />
        )}
        {stepNumber === 6 ? (
          <React.Fragment>
            <ContentPaddingForSuccess>{content}</ContentPaddingForSuccess>
            {candidateDetails.job_recommendations.length > 0 && (
              <RecommendationContainer>
                <RecommendationCarousel
                  align={screens.lg ? "left" : "center"}
                />
              </RecommendationContainer>
            )}
          </React.Fragment>
        ) : (
          <StepsContentContainer>
            <JobTitleBar
              jobData={{
                photo: applyJobData?.company_photo,
                title: applyJobData?.title,
                name: applyJobData?.company_name,
              }}
            />
            <ContentPadding>{content}</ContentPadding>
          </StepsContentContainer>
        )}
        {pageAd.bottom && (
          <AdUnit.GoogleAdSense
            type={screens.xs ? "rectangle" : "banner"}
            adSlot={pageAd.bottom}
            showAd={!applyJobData.is_advertised}
          />
        )}
      </Container>
    </ApplicationProcessContext.Provider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    width: 910px;
    margin: auto;
    margin-bottom: 47px !important;
  }
`;
const ContentWidth = styled.div`
  margin: auto;
  width: 100%;
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 992px) {
    min-width: 684px;
    width: 70%;
    max-width: 785px;
  }
  @media (min-width: 1200px) {
    min-width: 785px;
    width: 63%;
    max-width: 1000px;
  }
`;
const StepsContentContainer = styled(ContentWidth)`
  display: flex;
  flex-direction: column;
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.cardShadow};
  border-radius: 24px;
  overflow: hidden;
`;
const RecommendationContainer = styled(ContentWidth)`
  padding-bottom: 162px;
`;
const ContentPadding = styled.div`
  min-height: 500px;
  padding: 40px 25px;
  padding-bottom: 26px;

  @media (min-width: 768px) {
    padding: 48px;
    padding-bottom: 26px;
  }
`;
const ContentPaddingForSuccess = styled.div`
  @media (min-width: 992px) {
    padding: 0px 114px;
  }
`;
