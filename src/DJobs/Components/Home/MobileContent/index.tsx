import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { NotSignedInContentMobile } from "./NotSignedInContentsMobile";
import { SignedInContentsMobile } from "./SignedInContentsMobile";
import { RootState } from "src/redux";

export const MobileContent = () => {
  const isLoggedin = useSelector((state: RootState) => state.login.isLoggedin);
  return (
    <Container>
      {isLoggedin ? <SignedInContentsMobile /> : <NotSignedInContentMobile />}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;
`;
