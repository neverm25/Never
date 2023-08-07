import React, { useContext } from "react";
import styled from "styled-components";

import { DJobsTypography } from "@DJobs/Components/Basic";
import { DjobsHomeContext } from "@DJobs/Components/Home";
import { AddIcon } from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { EducationPlaceholder } from "./EducationPlaceholder";

export const Education = () => {
  const { deviceType } = useContext(DjobsHomeContext);
  return (
    <Container>
      <HeaderWrapper>
        <DJobsTypography color="black90" styleName="djHeadingTwo">
          {`Education History`}
        </DJobsTypography>
        <AddButton>
          <AddIcon />
          <DJobsTypography color="blue80" styleName="djButtonIcon">
            {`Add`}
          </DJobsTypography>
        </AddButton>
      </HeaderWrapper>
      <PlaceHolderWrapper>
        <EducationPlaceholder />
        <EducationPlaceholder />
        <EducationPlaceholder />
        {deviceType === "large" && <EducationPlaceholder />}
      </PlaceHolderWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const PlaceHolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1600px) {
    gap: 25px;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 51.85px;
  height: 25.37px;
  background: rgba(223, 234, 241, 0.17);
  box-shadow: ${djobsTheme.effects.modals};
  border-radius: 8px;
  border: 1px solid ${djobsTheme.colors.blue80};
  padding: 3px 5px;
`;
