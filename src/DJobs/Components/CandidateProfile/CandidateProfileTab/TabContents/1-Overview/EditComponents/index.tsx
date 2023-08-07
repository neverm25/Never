import React, { useContext } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { djobsTheme } from "@DJobs/Theme";
import { CandidateProfilePhoto } from "../CandidateProfilePhoto";
import { EditForm } from "./EditForm";
import { CandidateProfileContext } from "../../..";
import { DeviceTypeHelpers } from "@Helpers/DeviceTypeHelpers";
import { RootState } from "@Redux";

export const EditComponents = () => {
  const profilePhoto = useSelector(
    (state: RootState) => state.candidateDetails.photo
  );
  const { deviceType } = useContext(CandidateProfileContext);
  const isMobileorSmall = DeviceTypeHelpers.isDeviceIsOrSmall({
    comparedTo: "mobile",
    currentDevice: deviceType,
  });

  return (
    <React.Fragment>
      {isMobileorSmall ? (
        <CandidateProfilePhotoWrapper profilePhoto={profilePhoto}>
          <CandidateProfilePhoto />
        </CandidateProfilePhotoWrapper>
      ) : (
        <CandidateProfilePhoto />
      )}
      <EditFormWrapper>
        <EditForm />
      </EditFormWrapper>
    </React.Fragment>
  );
};

const CandidateProfilePhotoWrapper = styled.div<{ profilePhoto: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 138px;
  background: ${djobsTheme.colors.black10};
  border-radius: 18px 18px 0px 0px;
`;
const EditFormWrapper = styled.div`
  padding: 0 12px;
`;
