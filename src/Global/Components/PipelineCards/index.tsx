import React, { useContext } from "react";

import { PipelineCard } from "./PipelineCard";
import { PipelineCardsProps } from "./PipelineCards";
import { pipelineData } from "./PipelineHelper";
import {
  getCandidateCountInPipelinePhase,
  PipelineContext,
} from "@Global/Components/Pipeline";
import styled from "styled-components";
import { candidateListInitialData } from "../Pipeline/Utils/PipelineUtils";

const PipelineCards = (props: PipelineCardsProps.IProps) => {
  const { statusFilterValue } = useContext(PipelineContext);
  const { variant, candidateList = candidateListInitialData } = props;
  const pipelineStatusCount = getCandidateCountInPipelinePhase(candidateList);

  return (
    <Container variant={variant}>
      {Object.keys(pipelineData).map(
        (pipelineStatus: PipelineCardsProps.PipelineStatus) => (
          <PipelineCard
            key={pipelineStatus}
            pipelineStatus={pipelineStatus}
            variant={variant}
            candidateCount={pipelineStatusCount[pipelineStatus]}
            isActivePhase={pipelineStatus === statusFilterValue}
          />
        )
      )}
    </Container>
  );
};

export default PipelineCards;

const Container = styled.div<{ variant: PipelineCardsProps.Variant }>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  transform: scale(${({ variant }) => (variant === "primary" ? 1.5 : 1)});
`;
