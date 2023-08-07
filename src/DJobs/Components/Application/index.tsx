import React from "react";
import styled from "styled-components";

import { BackButton } from "@DJobs/Components/Basic";
import { ApplicationBgWrapper } from "../Layout/PageContentWrapper/Styles";
import { ApplicationStepperForm } from "./ApplicationStepperForm";

export const Application = () => {
  return (
    <ApplicationBgWrapper>
      <ContentWrapper>
        <div style={{ marginBottom: "40px" }}>
          <BackButton btnType="redirectToPreviousPage" />
        </div>
        <ApplicationStepperForm />
      </ContentWrapper>
    </ApplicationBgWrapper>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
  padding: 0px 10px;
  padding-top: 87px;
  @media (min-width: 768px) {
    width: 99%;
  }
  @media (min-width: 992px) {
    width: 95%;
    padding: 20px 30px;
    padding-top: 87px;
    margin: 0 auto;
  }
  @media (min-width: 1600px) {
    width: 1450px;
    margin: 0 auto;
  }
`;
