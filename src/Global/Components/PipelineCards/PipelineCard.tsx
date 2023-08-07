import React, { useContext, useState } from "react";
import styled from "styled-components";

import { Typography } from "@Global/Components/Basic/Typography";
import { PipelineCardsProps } from "./PipelineCards";
import { PipelineContext } from "@Global/Components/Pipeline";
import * as Secondary from "./Assets/Backgrounds";
import { AssetProps } from "./Assets/Assets";
import { pipelineData } from "./PipelineHelper";

export const PipelineCard = ({
  pipelineStatus,
  candidateCount,
  isActivePhase,
}: PipelineCardsProps.PipelineCardProps) => {
  const {
    candidateList,
    setStatusFilterValue,
    setStatusFilterLabel,
    updateSelectedCandidateField,
  } = useContext(PipelineContext);

  const [showCandidateAdded, setShowCandidateAdded] = useState(false);
  const [showStroke, setShowStroke] = useState(false);

  const backgroundProps: AssetProps.Pipecard = {
    showStroke: showStroke || isActivePhase,
    fillColor: pipelineData[pipelineStatus].FillColor,
  };
  const BACKGROUND: {
    [key in PipelineCardsProps.PipelineStatus]: JSX.Element;
  } = {
    screening: <Secondary.Start {...backgroundProps} />,
    shortlist: <Secondary.Middle {...backgroundProps} />,
    interview: <Secondary.Middle {...backgroundProps} />,
    "offer made": <Secondary.Middle {...backgroundProps} />,
    onboarding: <Secondary.End {...backgroundProps} />,
  };

  //#region Handlers
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setShowStroke(true);
  };
  const onDrop = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    updateSelectedCandidateField({
      fieldName: "status",
      fieldValue: pipelineStatus,
    });
    setShowCandidateAdded(true);
    setTimeout(() => {
      setShowCandidateAdded(false);
    }, 2000);
    setShowStroke(false);
  };
  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setShowStroke(false);
  };
  const onClick = () => {
    setStatusFilterValue(pipelineStatus);
    setStatusFilterLabel(pipelineStatus);
  };
  //Add handlers only if the context is provided
  let handlers = {};
  if (candidateList) handlers = { onDrop, onDragOver, onDragLeave, onClick };
  //#endregion

  const PipelineIcon = pipelineData[pipelineStatus].Icon;
  const IconFillColor = pipelineData[pipelineStatus].TextColor;
  const TextColor = showCandidateAdded
    ? pipelineData[pipelineStatus].SuccessColor
    : pipelineData[pipelineStatus].TextColor;

  return (
    <Container {...handlers}>
      <div>{BACKGROUND[pipelineStatus]}</div>

      <PipelineDataWrapper>
        <PipelineIcon fillColor={IconFillColor} />
        <Info>
          <Typography styleName="header" color={TextColor}>
            {pipelineStatus}
          </Typography>
          <Typography styleName="headingFour" color={TextColor}>
            {`${candidateCount ? candidateCount : 0}`}
          </Typography>
        </Info>
        <CandidateAddedMessageWrapper>
          <Typography styleName="smallRegular" color={TextColor}>
            {showCandidateAdded ? `Candidate added` : " "}
          </Typography>
        </CandidateAddedMessageWrapper>
      </PipelineDataWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  align-self: center;
  margin-top: 10px;
`;
const Info = styled.div``;

const PipelineDataWrapper = styled.div`
  width: 80%;
  height: 100%;

  text-align: right;
  position: absolute;
  bottom: 5px;
  left: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const CandidateAddedMessageWrapper = styled.label`
  z-index: 2;
  position: absolute;
  top: 54px;
  left: 34px;
`;
