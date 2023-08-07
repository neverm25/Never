import React, { useContext } from "react";
import styled from "styled-components";

import { DJobsGradientText, DJobsTypography } from "@DJobs/Components/Basic";
import { DjobsHomeContext } from "@DJobs/Components/Home";
import { djobsTheme } from "@DJobs/Theme";
import { FileListPlaceholder } from "./FileListPlaceholder";

export const Files = () => {
  const { deviceType } = useContext(DjobsHomeContext);
  return (
    <Container>
      <DJobsTypography color="black90" styleName="djHeadingTwo">
        {`Files`}
      </DJobsTypography>
      <ButtonContainer>
        <DJobsGradientText styleName="djUploadFileTextGif" gradient="purple100">
          {"Drag & drop your files or browse: (Max 5mb)"}
        </DJobsGradientText>
      </ButtonContainer>
      <UploadTitle>{`uploaded documents`}</UploadTitle>
      <FileListPlaceholder />
      <FileListPlaceholder />
      {deviceType === "large" && <FileListPlaceholder />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;
const ButtonContainer = styled.div`
  height: 48px;
  border-radius: 6px;
  background: ${djobsTheme.colors.black10};
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const UploadTitle = styled.div`
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.33000001311302185px;
  text-align: left;
  text-transform: uppercase;
  color: ${djobsTheme.colors.black100};
`;
