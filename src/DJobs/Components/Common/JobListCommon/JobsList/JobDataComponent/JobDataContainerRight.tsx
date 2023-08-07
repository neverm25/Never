import React, { useContext } from "react";
import styled from "styled-components";
import { djobsTheme } from "@DJobs/Theme";
import { EyeIcon } from "@Global/Components/Icons";
import { JobDataContext } from ".";

export const JobDataContainerRight = () => {
  const { showPreview, setShowPreview } = useContext(JobDataContext);
  return (
    <Container>
      <PreviewWrapper
        showPreview={showPreview}
        onClick={e => {
          e.stopPropagation();
          setShowPreview((showPreview: boolean) => !showPreview);
        }}
      >
        <EyeIcon size={16} color={djobsTheme.colors.purple110} />
      </PreviewWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const PreviewWrapper = styled.div<{ showPreview: boolean }>`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${djobsTheme.colors.black10};
  box-shadow: ${({ showPreview }) =>
    showPreview
      ? djobsTheme.effects.boxShadowActive
      : djobsTheme.effects.buttons};
  border: 1px solid
    ${({ showPreview }) =>
      showPreview ? djobsTheme.colors.black10 : djobsTheme.colors.black20};
  border-radius: 6px;
  cursor: pointer;
`;
