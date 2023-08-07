import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { CandidateProfilePlaceholder } from "@DJobs/Components/Icons";

export const ProfilePhoto = ({ photo }: { photo: string }) => (
  <PhotoContainer>
    {photo ? (
      <ProfileImage src={photo} alt={`Profile picture`} />
    ) : (
      <PlaceHolderWrapper>
        <CandidateProfilePlaceholder />
      </PlaceHolderWrapper>
    )}
  </PhotoContainer>
);

const PhotoContainer = styled.div`
  box-shadow: ${djobsTheme.effects.boxShadow};
  background-color: ${djobsTheme.colors.blue40};
  display: flex;
  justify-content: center;
  height: 68px;
  width: 68px;

  border-radius: 20px;
  border: 6px solid ${djobsTheme.colors.black10};

  @media (min-width: 992px) {
    height: 140px;
    width: 140px;
  }
  @media (min-width: 1600px) {
    height: 180px;
    width: 180px;
  }
`;
const ProfileImage = styled.img`
  border-radius: 12px;
  height: 52px;
  width: 52px;
  @media (min-width: 992px) {
    height: 124px;
    width: 124px;
  }
  @media (min-width: 1600px) {
    height: 164px;
    width: 164px;
  }
`;
const PlaceHolderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  transform: scale(0.2);

  @media (min-width: 992px) {
    transform: scale(0.6);
    margin-top: 21px;
  }
  @media (min-width: 1600px) {
    transform: scale(0.8);
    margin-top: 27px;
  }
`;
