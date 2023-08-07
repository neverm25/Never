import React, { useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import {
  DJobsTypography,
  DjobsButton,
  TextWithLeadingEllipsis,
} from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import { DjobsHomeContext } from "../..";
import { GradientIcons } from "@Global/Components/Icons";
import { ProfilePhoto } from "./ProfilePhoto";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";
import { useAppSelector } from "@Redux";
import { Career } from "@Redux/slices/Career/Career";

export const CandidateSummary = () => {
  const router = useRouter();

  const { isDesktopOrBigger } = useContext(DjobsHomeContext);
  const { career, candidateDetails } = useAppSelector(state => state);
  let currentCareer = {} as Career.CareerHistory;
  if (career.careerList.length > 0) {
    currentCareer = career.careerList[0];
  }
  const {
    job_title,
    company,
    from_year,
    to_year,
    is_to_present,
  } = currentCareer;
  const name =
    "Hi " +
    candidateDetails.first_name.charAt(0).toLocaleUpperCase() +
    candidateDetails.first_name.slice(1);

  return (
    <Container>
      <Header>
        <TextWithLeadingEllipsis
          styleName="djHeadingTwo"
          color="white100"
          content={name}
        />
      </Header>
      <Content>
        <ProfilePhoto photo={candidateDetails.photo} />
        <ProfileDetails>
          {job_title && company ? (
            <TitleWrapper>
              <TextWithLeadingEllipsis
                styleName="djCardsTitle"
                color="black90"
                content={`${job_title} at ${company}`}
                maxLineLength={2}
              />
              <DJobsTypography styleName="djIconRegular" color="black80">
                {`${from_year} - ${is_to_present ? "present" : to_year}`}
              </DJobsTypography>
            </TitleWrapper>
          ) : (
            <div />
          )}
          {isDesktopOrBigger && (
            <UpdateButtonWrapper>
              <DjobsButton.Actions
                variant="Submit"
                label="update profile"
                onClick={async () => router.push(DJOBS_ROUTES.userProfile)}
              />
            </UpdateButtonWrapper>
          )}
        </ProfileDetails>
        {!isDesktopOrBigger && (
          <UpdateButtonWrapper
            onClick={async () => router.push(DJOBS_ROUTES.userProfile)}
          >
            <GradientIcons.EditIcon />
          </UpdateButtonWrapper>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 8px;
  background: #ffffff;
  height: fit-content;

  @media (min-width: 992px) {
    border-radius: 8px 8px 0px 0px;
    width: 45%;
    max-width: 530px;
    min-width: 423px;
    margin-top: 60px;
  }
  @media (min-width: 1600px) {
    max-width: 591px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 61px;
  background: ${djobsTheme.colors.blue100};
  box-shadow: ${djobsTheme.effects.dropShadow};
  border-radius: 8px 8px 0 0;
  padding: 0 25px;
`;
const Content = styled.div`
  display: flex;
  gap: 22px;
  flex-direction: row;
  padding: 8px 30px;
  align-items: flex-start;

  @media (min-width: 992px) {
    height: auto;
    padding: 41px 30px;
    gap: 30px;
  }
`;
const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  @media (min-width: 992px) {
    padding-top: 10px;
    height: 140px;
  }
  @media (min-width: 1600px) {
    padding-top: 13px;
    height: 180px;
  }
`;
const UpdateButtonWrapper = styled.div`
  padding-top: 10px;

  @media (min-width: 1600px) {
    padding-bottom: 13px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-top: 12px;
`;
