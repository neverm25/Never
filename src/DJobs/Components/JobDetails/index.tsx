'use client'

// #region Global Imports
import React, { useEffect } from "react";
import { Grid } from "antd";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
// #endregion Global Imports

// #region Local Imports
// import Header from "@DJobs/Components/Layout/Header";
import JobTitleContainer from "./Components/JobTitle";
import QualificationContainer from "./Components/Qualification";
import SkillsContainer from "./Components/Skills";
import { DescriptionContainer } from "./Components/Description";
import { ApplyButtonContainer } from "./Components/ApplyButtonContainer";
import { DjobsButton, AdUnit, BackButton } from "@DJobs/Components/Basic/";
import { RecommendationCarousel } from "@DJobs/Components/Common/RecommendationCarousel";
import { PageContentWrapper } from "../Layout/PageContentWrapper/Styles";
import { IJobView } from "./JobDetails";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";
import styled from "styled-components";
import { djobsTheme } from "@DJobs/Theme";
import { actions, useAppDispatch, useAppSelector } from "@Redux";
import { adSlots } from "../Basic/AdUnit/Ad_slots";
import { JobDetailsCommon } from "./JobDetailsCommon";
// #endregion Local Imports

export const JobDetails = ({ jobData, source }: IJobView.IProps) => {
  // #endregion Local Imports
  const screen = Grid.useBreakpoint();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.jobData.setApplyJobData(jobData));
    dispatch(actions.jobData.setSource(source));
  }, [dispatch, jobData, source]);
  const store = useAppSelector(store => store);
  const { job_applications } = store.candidateDetails;
  const { applyJobData } = store.jobData;
  const isAppliedJob = job_applications[applyJobData.id];
  const isGumtree = router.pathname.startsWith("/DJobs/job/gumtree");

  const ogImageUrl = () => {
    let params = new URLSearchParams();
    params.set("companyLogo", applyJobData.company_photo || "");
    params.set("city", applyJobData.city?.split(",")[0]?.trim() || "");
    params.set("jobTitle", applyJobData.title?.replace("&", " ") || "");
    let url = new URL(process.env.NEXT_PUBLIC_BASE_URL + "/api/job-details/");
    url.search = params.toString();

    return url.href;
  };

  const seoRender =
    applyJobData !== undefined ? (
      <NextSeo
        title={applyJobData.title + " | " + applyJobData.company_name}
        description="Ready to move up? Welcome to Ditto Jobs. Discover thousands of new opportunities daily! Sign up and kickstart your job search today."
        openGraph={{
          site_name: "Ditto Jobs",
          type: "website",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/job-details?id=${applyJobData.id}`,
          title: `${
            applyJobData?.title
          } at ${applyJobData?.company_name?.trim()}${applyJobData?.city &&
            ", " + applyJobData?.city?.split(",")[0]?.trim()}`,
          description: `${applyJobData?.company_name} is hiring! Sound like you? Sign up today and discover thousands of new vacancies on Ditto Jobs.`,
          images: [
            {
              url: ogImageUrl(),
              width: 1200,
              height: 630,
              alt: "Og Image Alt",
            },
          ],
        }}
      />
    ) : (
      ""
    );

  return (
    <JobDetailsContainer>
      {seoRender}
      <PageContentWrapper>
        <Container>
          <div style={{ marginBottom: "40px" }}>
            <BackButton btnType="redirectToPreviousPage" />
          </div>
          <ContentWrapper>
            <div>
              <AdUnit.GoogleAdSense
                type="rectangle"
                adSlot={adSlots.jobViewTop}
                showAd={applyJobData.is_advertised}
              />
            </div>
            <MetaDataWrapper>
              <JobTitleContainer />
              <QualificationContainer />
              {screen.lg && <SkillsContainer />}
            </MetaDataWrapper>
            <ContentWrapper>
              {!screen.lg && <SkillsContainer />}
              <AdUnit.GoogleAdSense
                type="rectangle"
                adSlot={adSlots.jobViewMiddle}
                showAd={applyJobData.is_advertised}
              />
              {applyJobData.job_description && (
                <DescriptionContainer
                  title="Job Description"
                  content={applyJobData.job_description}
                />
              )}
              {!screen.lg && (
                <AdUnit.GoogleAdSense
                  type="banner"
                  adSlot={adSlots.jobViewBottom}
                  showAd={applyJobData.is_advertised}
                />
              )}
              {!screen.lg && (
                <div style={{ margin: "0 auto", width: "100%" }}>
                  {isAppliedJob && <JobDetailsCommon.ApplyMessage />}
                  <DjobsButton.Apply
                    variant={"Primary"}
                    label={isAppliedJob ? "Applied" : "Apply"}
                    disabled={isAppliedJob}
                    width="100%"
                    onClick={() => {
                      isGumtree
                        ? window.open(
                            `${DJOBS_ROUTES.jobDetails}?id=${applyJobData.id}&source=gumtree`
                          )
                        : router.push(
                            `${DJOBS_ROUTES.application}?job_id=${applyJobData.id}`
                          );
                    }}
                  />
                </div>
              )}
              {applyJobData.company_description && (
                <DescriptionContainer
                  title="Company Description"
                  content={applyJobData.company_description}
                />
              )}
              {screen.lg && (
                <AdUnit.GoogleAdSense
                  type="banner"
                  adSlot={adSlots.jobViewBottom}
                  showAd={applyJobData.is_advertised}
                />
              )}
            </ContentWrapper>
            <ApplyButtonContainer />
            <RecommendationCarousel />
          </ContentWrapper>
        </Container>
      </PageContentWrapper>
    </JobDetailsContainer>
  );
};

const JobDetailsContainer = styled.div`
  background: ${djobsTheme.colors.white110};
`;
const Container = styled.div`
  padding: 87px 10px 20px 10px;
  @media (min-width: 768px) {
    padding: 87px 20px 20px 20px;
  }
`;
const MetaDataWrapper = styled.div`
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.cardShadow};
  border-radius: 10px;
  padding: 22px 15px 36px 15px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;

  @media (min-width: 976px) {
    padding: 32px 48px;
    margin: auto;
    margin-top: 27px;
    gap: 47px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    max-width: 800px;
  }
`;
