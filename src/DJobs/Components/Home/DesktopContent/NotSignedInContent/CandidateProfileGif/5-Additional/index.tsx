import { DJobsTypography } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import React from "react";
import styled from "styled-components";
import { AdditionalPlaceholder } from "./AdditionalPlaceholder";

const createPlaceHolders = (count: number) => {
  const placeholderArray = Array.from(Array(count), (_, index) => (
    <AdditionalPlaceholder key={index} />
  ));
  return <PlaceholderWrapper>{placeholderArray}</PlaceholderWrapper>;
};

export const Additional = () => (
  <Container>
    <DJobsTypography color="black90" styleName="djHeadingTwo">
      {`Additional Information`}
    </DJobsTypography>
    <Content>
      <ContentContainer>
        <ContainerTitle>Additional</ContainerTitle>
        <PlaceholderContainer>
          {createPlaceHolders(4)}
          {createPlaceHolders(4)}
        </PlaceholderContainer>
      </ContentContainer>
      <Right>
        <ContentContainer>
          <ContainerTitle>Personal Details</ContainerTitle>
          <PlaceholderContainer>
            {createPlaceHolders(2)}
            {createPlaceHolders(2)}
          </PlaceholderContainer>
        </ContentContainer>
        <ContentContainer>
          <ContainerTitle>Work</ContainerTitle>
          <PlaceholderContainer>
            {createPlaceHolders(2)}
            {createPlaceHolders(2)}
          </PlaceholderContainer>
        </ContentContainer>
      </Right>
    </Content>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  height: 100%;
`;
const ContentContainer = styled.div`
  padding: 10px 20px;
  background: ${djobsTheme.colors.black10};
  border-radius: 7px;
  box-shadow: ${djobsTheme.effects.modals};
  flex-grow: 1;
  height: 100%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  gap: 15px;
  flex-grow: 1;
`;
const PlaceholderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 5px;
`;
const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ContainerTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0.3px;
  color: #000000;
`;
