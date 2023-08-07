import React from "react";
import styled from "styled-components";

import { MobileGradientContentsNotSignedIn } from "./MobileGradientContents";
import { SignedInBgCircle } from "../../Common";

export const NotSignedInContentMobile = () => (
  <React.Fragment>
    <CandidateSearchBgMobileWrapper>
      <CandidateSearchBgMobile>
        <Container>
          <SignedInBgCircle />
        </Container> 
      </CandidateSearchBgMobile>
    </CandidateSearchBgMobileWrapper>
    <MobileGradientContentsNotSignedIn />
  </React.Fragment>
);

const Container = styled.div`
  float: left;
  margin-left: 250px;
`;
const CandidateSearchBgMobileWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px 10px;
`;
const CandidateSearchBgMobile = styled.div`
  height: 364px;
  background: url(/static/images/ditto-candidatesearch-mobile.svg);
  background-repeat: no-repeat;
  background-position: 0 30px;
`;
