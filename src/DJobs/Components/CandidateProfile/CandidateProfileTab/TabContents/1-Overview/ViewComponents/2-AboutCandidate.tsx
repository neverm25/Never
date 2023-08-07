import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { DJobsTypography } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import { RootState } from "@Redux";
import {
  getInitialContentState_WithHTML,
  getPlainTextFromEditorState,
} from "@Helpers/Formik/richTextEditor.helpers";
import { OverviewCommonComponents } from "./Common/Components";

export const AboutCandidate = () => {
  const { candidateDetails } = useSelector((state: RootState) => state);

  return (
    <Container>
      <OverviewCommonComponents.Title name="About Me" />
      <DJobsTypography styleName="djTextMedium" color="textDefault">
        {getPlainTextFromEditorState(
          getInitialContentState_WithHTML(candidateDetails.bio ?? "")
        )}
      </DJobsTypography>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: ${djobsTheme.effects.boxShadow};
  min-height: 100px;
  width: 100%;
  border-radius: 7px;
  background: ${djobsTheme.colors.white100};
  padding: 31px 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
