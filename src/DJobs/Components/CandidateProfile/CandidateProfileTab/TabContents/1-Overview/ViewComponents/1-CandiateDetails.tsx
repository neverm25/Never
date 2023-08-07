import React, { useContext } from "react";
import styled from "styled-components";

import {
  DjobsButton,
  DJobsTypography,
  TextWithLeadingEllipsis,
} from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import {
  TelephoneIcon,
  MailIcon,
  MapPinIcon,
  EditIconWithCircle,
} from "@Global/Components/Icons";
import { DJobsTextLink } from "@DJobs/Components/Basic/DjobsTextLink";
import { CandidateOverviewContext } from "..";
import { CandidateProfilePhoto } from "../CandidateProfilePhoto";
import { useAppSelector } from "@Redux";
import { ITypography } from "@DJobs/Components/Basic/DJobsTypography/DJobsTypography";
import { Grid } from "antd";

const placeholder = "";
const CandidateMetaData = ({ isMobile }: { isMobile: boolean }) => {
  const textColor = "black80";
  const iconColor = isMobile ? "black80" : "black50";
  const iconSize = isMobile ? 14 : 18;
  const textStyleName = "djIconRegular";

  //#region Candidate Data
  const { candidateDetails } = useAppSelector(state => state);
  const { city_name_country, phone, email } = candidateDetails;

  const candidateLocation = city_name_country;
  const candidatePhone = !phone || phone === "null" ? placeholder : phone;
  const candidateEmail = email || placeholder;
  //#endregion
  const iconProps = { color: djobsTheme.colors[iconColor], size: iconSize };
  const textStyleProps: ITypography.TextStyleProps = {
    styleName: textStyleName,
    color: textColor,
  };

  return (
    <React.Fragment>
      {candidateLocation && (
        <CandidateData>
          <MapPinIconWrapper>
            <MapPinIcon {...iconProps} />
          </MapPinIconWrapper>
          <DJobsTypography {...textStyleProps}>
            {candidateLocation}
          </DJobsTypography>
        </CandidateData>
      )}
      {candidatePhone && (
        <CandidateData>
          <TelephoneIcon {...iconProps} />
          <DJobsTextLink {...textStyleProps} onClick={() => {}}>
            {candidatePhone}
          </DJobsTextLink>
        </CandidateData>
      )}
      {candidateEmail && (
        <CandidateData>
          <MailIcon {...iconProps} />
          <DJobsTextLink {...textStyleProps} onClick={() => {}}>
            {candidateEmail}
          </DJobsTextLink>
        </CandidateData>
      )}
    </React.Fragment>
  );
};

export const CandidateDetails = () => {
  const { setIsEditMode } = useContext(CandidateOverviewContext);

  const screen = Grid.useBreakpoint();
  const isMobile = !screen.md;
  const headingColor = isMobile ? "white100" : "black100";

  //#region Candidate Data
  const { candidateDetails } = useAppSelector(state => state);
  const { first_name, last_name } = candidateDetails;

  const candidateFullName =
    `${first_name.charAt(0).toLocaleUpperCase()}${first_name.slice(
      1
    )} ${last_name}` || placeholder;
  //#endregion

  return (
    <div>
      <Content>
        <CandidateProfilePhoto />
        <CandidateProfileDetails>
          <div style={{ width: "80%" }}>
            <TextWithLeadingEllipsis
              styleName="djSubTitleTwo"
              color={headingColor}
              content={candidateFullName}
              maxLineLength={4}
            />
          </div>
          {!isMobile && <CandidateMetaData isMobile={isMobile} />}
        </CandidateProfileDetails>
        {isMobile && (
          <EditIconWrapper onClick={() => setIsEditMode(true)}>
            <EditIconWithCircle />
          </EditIconWrapper>
        )}
      </Content>
      {isMobile && (
        <React.Fragment>
          <Line />
          <CandidateMetaDataWrapper>
            <CandidateMetaData isMobile={isMobile} />
          </CandidateMetaDataWrapper>
          <ButtonWrapper>
            <DjobsButton.Main variant="Primary" label="Download" />
          </ButtonWrapper>
        </React.Fragment>
      )}
    </div>
  );
};

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 24px;

  background: ${djobsTheme.colors.black100};
  padding: 19px 15px 23px 15px;
  border-radius: 18px 18px 0px 0px;
  @media (min-width: 768px) {
    background: none;
    padding: 0;
    border-radius: 0;
  }
`;
const Line = styled.div`
  height: 4px;
  background: ${djobsTheme.gradients.purpleBorder};
  border: 4px solid ${djobsTheme.gradients.purpleBorder};
`;
const CandidateProfileDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  flex-direction: column;
  width: 70%;
  gap: 10px;
  @media (min-width: 992px) {
    gap: 13px;
    padding-top: 10px;
  }
`;
const CandidateData = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const MapPinIconWrapper = styled.span`
  position: relative;
  top: 1px;
  right: 2px;
  height: 16px;
`;
const EditIconWrapper = styled.span`
  position: absolute;
  top: 24px;
  right: 20px;
  cursor: pointer;
  @media (min-width: 768px) {
    top: none;
  }
`;
const ButtonWrapper = styled.div`
  padding-top: 10px;
  width: fit-content;
  float: right;
`;
const CandidateMetaDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 18px;
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.cards};
  border-radius: 0px 0px 16px 16px;
`;
