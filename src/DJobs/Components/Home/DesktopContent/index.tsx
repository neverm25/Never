import React from "react";
import styled from "styled-components";

import { NotSignedInBg } from "./NotSignedInBg";
import { SignedInBg } from "./SignedInBg";
import { NotSignedInContent } from "./NotSignedInContent";
import { SignedInContent } from "./SignedInContent";
import { useAppSelector } from "@Redux";

export const DesktopContent = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedin);

  return (
    <Container>
      <BgWrapper>{isLoggedIn ? <SignedInBg /> : <NotSignedInBg />}</BgWrapper>
      <ContentWrapper>
        {isLoggedIn ? <SignedInContent /> : <NotSignedInContent />}
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div``;
const BgWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 67px;
`;
const ContentWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  padding: 80px;
  padding-top: 157px;
  width: 100%;

  @media (min-width: 1200px) {
    padding: 157px 80px 80px 110px;
    max-width: 1340px;
  }
  @media (min-width: 1400px) {
    padding: 157px 80px 80px 140px;
  }
  @media (min-width: 1600px) {
    padding: 157px 80px 80px 180px;
    max-width: 1500px;
  }
`;
