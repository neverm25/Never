import React from "react";
import styled from "styled-components";
import { Grid } from "antd";

import { djobsTheme } from "@DJobs/Theme";
import {
  FacebookIcon,
  LinkedlnIcon,
  TwitterIcon,
} from "@DJobs/Components/Icons";
import { CompanyProfileProps } from "@Redux/slices/CompanyProfile/CompanyProfile";

export const SocilaIcons: React.FC<CompanyProfileProps.ISocialIcons> = ({
  id,
  companyData,
}) => {
  const screen = Grid.useBreakpoint();

  const {
    social_facebook = "",
    social_linkedin = "",
    social_twitter = "",
  } = companyData;

  const ditto_linkedin_url = "https://www.linkedin.com/company/dittojobs/";
  const ditto_facebook_url = "https://www.facebook.com/DittoJobs/";
  const ditto_twitter_url = "https://twitter.com/dittojobs";
  const endPoints = {
    linkedin: id === "" ? ditto_linkedin_url : social_linkedin,
    facebook: id === "" ? ditto_facebook_url : social_facebook,
    twitter: id === "" ? ditto_twitter_url : social_twitter,
  };
  const socialLinks = source => window.open(endPoints[source]);

  const isFaceBookExists = social_facebook !== "";
  const isLinkedinExists = social_linkedin !== "";
  const isTwitterExists = social_twitter !== "";
  const iconSize = screen.lg ? 22 : 14;

  return (
    <MainContainer>
      {isFaceBookExists && (
        <SocialIcon onClick={() => socialLinks("facebook")}>
          <div style={{ marginTop: "4px" }}>
            <FacebookIcon color={djobsTheme.colors.black10} size={iconSize} />
          </div>
        </SocialIcon>
      )}
      {isLinkedinExists && (
        <SocialIcon onClick={() => socialLinks("linkedin")}>
          <div style={{ marginTop: "2px" }}>
            <LinkedlnIcon size={iconSize} />
          </div>
        </SocialIcon>
      )}
      {isTwitterExists && (
        <SocialIcon onClick={() => socialLinks("twitter")}>
          <div style={{ marginTop: "6px" }}>
            <TwitterIcon color={djobsTheme.colors.black10} size={iconSize} />
          </div>
        </SocialIcon>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin-top: 27px;
  gap: 15px;
  display: inline-flex;
  @media (min-width: 992px) {
    margin-top: 0px;
  }
`;
const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  background: ${djobsTheme.colors.purple100};
  box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.1),
    inset 0px 1px 2px rgba(255, 255, 255, 0.55);

  width: 30px;
  height: 30px;
  @media (min-width: 992px) {
    width: 37px;
    height: 37px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
