import React, { useEffect } from "react";
import styled from "styled-components";

import { DJobsTypography } from "@DJobs/Components/Basic/";
import { SocialMediaIcons } from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { socialAuth } from "../../../../API/LoginAPI/SocialAuth";

export const SocialMediaButtons = () => {
  useEffect(() => {
    window.addEventListener("load", socialAuth.initializeGoogle);
    window.document.readyState === "complete" && socialAuth.initializeGoogle();
  });

  return (
    <React.Fragment>
      <HorizontalRuler>
        <DJobsTypography styleName="djCapitalBold" color="black80">
          or continue with
        </DJobsTypography>
      </HorizontalRuler>

      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <SocialMediaButton onClick={socialAuth.handleLinkedinClick}>
          <div style={{ transform: "scale(0.80)", paddingTop: "2px" }}>
            <SocialMediaIcons.LinkedIn />
          </div>
        </SocialMediaButton>
        {/* <div id="GoogleLoginButton" /> */}
        <SocialMediaButton onClick={socialAuth.handleGoogleClick}>
          <div
            style={{
              transform: "scale(0.90)",
              marginRight: "1px",
              paddingTop: "3px",
            }}
          >
            <SocialMediaIcons.Google />
          </div>
        </SocialMediaButton>
        <SocialMediaButton onClick={socialAuth.handleFacebookClick}>
          <div
            style={{
              transform: "scale(0.95)",
              marginRight: "1px",
              paddingTop: "3px",
            }}
          >
            <SocialMediaIcons.Facebook />
          </div>
        </SocialMediaButton>
      </div>
    </React.Fragment>
  );
};
const SocialMediaButton = styled.div`
  width: 42px;
  height: 40px;
  border: 1px solid #dadce0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3c4043;
  &:hover {
    border: 1px solid #d2e3fc;
    background-color: #f8fafe;
    cursor: pointer;
  }
  &:active {
    background-color: #ecf2fe;
  }
`;

const HorizontalRuler = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${djobsTheme.colors.black80};
  line-height: 0.1em;
  margin: 0 0 27px;
  margin-top: 40px;

  div {
    margin: 0 10px !important;
    line-height: 0px !important;
    display: inline;
    padding: 0 30px;
    background: ${djobsTheme.colors.white100};
  }
`;
