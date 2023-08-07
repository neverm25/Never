import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

import { DJobsTypography } from "@DJobs/Components/Basic";

export type DescriptionContentProps = {
  title: string;
  content: string;
  contentNumberOfLines: number;
  id: string;
  is_internal: boolean;
};

export const DescriptionContent = (props: DescriptionContentProps) => {
  const { content } = props;
  return (
    <React.Fragment>
      <DescriptionContainer>
        <Clip>
          <DJobsTypography color="black90" styleName="djTextRegular">
            {ReactHtmlParser(content)}
          </DJobsTypography>
        </Clip>
      </DescriptionContainer>
    </React.Fragment>
  );
};

const DescriptionContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-right: 10px;
  padding-top: 10px;
  margin-top: 0px;
  @media (min-width: 992px) {
    min-height: 200px;
    max-height: 600px;
  }
  @media (min-width: 1600px) {
    height: 100%;
    min-height: 400px;
  }
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #8261ae52;
    border-radius: 10px;
  }
`;

const Clip = styled.div`
  overflow: hidden;
  position: relative;
`;
