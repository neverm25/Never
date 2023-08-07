import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { djobsTheme } from "@DJobs/Theme";

const Hiring = dynamic(import("../Common").then(module => module.Hiring));
export const NotSignedInBg = () => (
  <React.Fragment>
    <CandidateSearchBg />
    <NotSignedInTopGRadientBg />
    <WorkingManBg>
      <HiringContainer>
        <Hiring />
      </HiringContainer>
    </WorkingManBg>
  </React.Fragment>
);

const NotSignedInTopGRadientBg = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  background: ${djobsTheme.gradients.purple50};
  clip-path: polygon(0 0, 0 487px, 100% 702px, 100% 0);
  height: 58%;
  @media (min-width: 992px) {
    height: 58%;
    min-height: 702px;
  }
  @media (min-width: 1600px) {
    height: 863px;
  }
`;
const CandidateSearchBg = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
  height: 58%;
  @media (min-width: 992px) {
    height: 58%;
    min-height: 702px;
    max-width: 1340px;
  }
  @media (min-width: 1600px) {
    height: 863px;
    max-width: 1500px;
  }

  @media (min-width: 992px) {
    background: url(/static/images/ditto-candidatesearch.svg);
    background-position: calc(100% - 81px) 76px;
    background-size: 507px 379px;
    background-repeat: no-repeat;
  }
  @media (min-width: 1600px) {
    background: url(/static/images/ditto-candidatesearch.svg);
    background-position: calc(100% - 81px) 76px;
    background-size: 606px 453px;
    background-repeat: no-repeat;
  }
`;
const WorkingManBg = styled.div`
  @media (min-width: 992px) {
    height: 715px;
    background: url(/static/images/working-man.svg);
    background-position: -372px 289px;
    background-size: 849px 586px;
    background-repeat: no-repeat;
  }
  @media (min-width: 1600px) {
    background: url(/static/images/working-man.svg);
    background-position: -430px 235px;
    background-size: 989px 649px;
    background-repeat: no-repeat;
  }
`;
const HiringContainer = styled.div`
  position: relative;
  top: calc(100% - 350px);
  width: 100%;
  @media (min-width: 992px) {
    top: calc(100% - 334px);
  }
`;
