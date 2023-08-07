import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { djobsTheme } from "@DJobs/Theme";
import { EditIcon } from "@Global/Components/Icons";
import { PhotoUploadButton } from "@Global/Components/Common/PhotoUploadButton";
import { CandidateProfilePlaceholder } from "@DJobs/Components/Icons";
import { RootState, useAppDispatch, useAppSelector } from "@Redux";
import { updateCandidatePhoto } from "@Redux/slices/CandidateDetails";

export const CandidateProfilePhoto = () => {
  const dispatch = useAppDispatch();
  const [profilePhoto, setProfilePhoto] = useState("");
  const profilePhotoPath = useAppSelector((state: RootState) => {
    const profilePhotoPath = state.candidateDetails.photo;

    if (!profilePhotoPath && profilePhoto) setProfilePhoto("");
    return profilePhotoPath;
  });

  return (
    <div style={{ width: "fit-content" }}>
      <PhotoUploadButton
        {...{
          fileContent: profilePhoto,
          setFileContent: setProfilePhoto,
          modalTitle: "Candidate profile photo",
          showFileList: false,
          allowDragAndDrop: true,
          onFileUpload: file => {
            dispatch(updateCandidatePhoto(file));
          },
        }}
      >
        <React.Fragment>
          <PhotoContainer>
            {profilePhotoPath || profilePhoto ? (
              <ProfileImage
                src={profilePhotoPath || profilePhoto}
                alt={`Profile picture`}
                layout="fill"
              />
            ) : (
              <PlaceholderWrapper>
                <CandidateProfilePlaceholder />
              </PlaceholderWrapper>
            )}
          </PhotoContainer>
          <EditIconWrapper>
            <EditIcon color={djobsTheme.colors.black90} size={16} />
          </EditIconWrapper>
        </React.Fragment>
      </PhotoUploadButton>
    </div>
  );
};

const PhotoContainer = styled.div`
  position: relative;
  height: 93px;
  width: 93px;
  border: 5px solid ${djobsTheme.colors.black10};
  border-radius: 10px;
  box-shadow: ${djobsTheme.effects.boxShadow};
  box-sizing: content-box;
  background-color: ${djobsTheme.colors.black20};
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    height: 140px;
    width: 140px;
    border: 8px solid ${djobsTheme.colors.black10};
    border-radius: 16px;
  }
`;
const ProfileImage = styled(Image)`
  border-radius: 8px;
`;
const EditIconWrapper = styled.div`
  background: ${djobsTheme.colors.white100};
  border: 0.84px solid ${djobsTheme.colors.black50};
  border-radius: 8.36px;
  width: 32px;
  height: 30px;
  box-shadow: ${djobsTheme.effects.plainButton};
  padding-top: 6px;
  cursor: pointer;
  &:hover {
    box-shadow: ${djobsTheme.effects.boxShadowActive};
  }

  position: absolute;
  top: 75px;
  left: 74px;
  @media (min-width: 768px) {
    width: 32px;
    height: 30px;
    top: 126px;
    left: 123px;
  }
`;
const PlaceholderWrapper = styled.div`
  transform: scale(0.45);
  margin-top: -12px;
  @media (min-width: 768px) {
    transform: scale(0.6);
    margin-top: 14px;
  }
`;
