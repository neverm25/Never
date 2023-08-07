import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import {
  FacebookIcon,
  LinkedlnIcon,
  TwitterIcon,
} from "@DJobs/Components/Icons";

export const SocilaIcons: React.FC<{ id: string }> = () => {
  const redirectTo = link => window.open(link);

  return (
    <MainContainer>
      <SocialIcon
        onClick={() => redirectTo(process.env.NEXT_PUBLIC_FACEBOOK_PAGE)}
      >
        <div style={{ marginTop: "4px" }}>
          <FacebookIcon color={djobsTheme.colors.black10} size={22} />
        </div>
      </SocialIcon>
      <SocialIcon
        onClick={() => redirectTo(process.env.NEXT_PUBLIC_LINKEDIN_PAGE)}
      >
        <div style={{ marginTop: "2px" }}>
          <LinkedlnIcon size={22} />
        </div>
      </SocialIcon>
      <SocialIcon
        onClick={() => redirectTo(process.env.NEXT_PUBLIC_TWITTER_PAGE)}
      >
        <div style={{ marginTop: "6px" }}>
          <TwitterIcon color={djobsTheme.colors.black10} size={22} />
        </div>
      </SocialIcon>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  gap: 40px;
  @media (min-width: 992px) {
    gap: 45px;
  }
`;
const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
