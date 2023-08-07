import React from "react";
import styled from "styled-components";

import { CandidateProfilePlaceholder } from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { PlaceHolder } from "../PlaceHolders";

export const Profile = () => (
  <ProfileWrapper>
    <CandidateProfilePlaceholderContainer>
      <PlaceHolderWrapper>
        <CandidateProfilePlaceholder />
      </PlaceHolderWrapper>
    </CandidateProfilePlaceholderContainer>
    <div
      style={{
        padding: "20px 0",
      }}
    >
      <PlaceHolder type="Dark" height={18} width={"120px"} isHeading={true} />
      <div style={{ marginTop: "10px" }}>
        <PlaceHolder
          type="Light"
          height={9}
          width={"120px"}
          isHeading={false}
        />
        <PlaceHolder
          type="Light"
          height={9}
          width={"120px"}
          isHeading={false}
        />
        <PlaceHolder
          type="Light"
          height={9}
          width={"120px"}
          isHeading={false}
        />
      </div>
    </div>
  </ProfileWrapper>
);

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
`;
const CandidateProfilePlaceholderContainer = styled.div`
  height: 120px;
  width: 120px;
  background: #cae6fa;
  border: 6px solid ${djobsTheme.colors.black10};
  box-shadow: 0px 1px 4px rgba(21, 21, 21, 0.02),
    0px 8px 12px rgba(21, 21, 21, 0.08);
  border-radius: 32px;
  display: flex;
  justify-content: center;
`;
const PlaceHolderWrapper = styled.div`
  transform: scale(0.4);
  position: relative;
  top: 8px;
`;
