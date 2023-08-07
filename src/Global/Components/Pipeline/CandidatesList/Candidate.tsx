import React, { useContext } from "react";
import styled from "styled-components";

import { theme } from "@Global/Theme";
import { LocationIcon } from "@Global/Components/Icons";
import { PipelineProps } from "../Pipeline";
import { ratingIcons } from "@Global/Components/Pipeline/Utils/PipelineUtils";
import { PipelineContext } from "..";

export const Candidate = (props: PipelineProps.CandidateProps) => {
  const { setSelectedCandidate } = useContext(PipelineContext);
  const { candidate } = props;
  const { location, name, rating, role } = candidate;

  const handleClick = () => {
    setSelectedCandidate(candidate);
  };

  return (
    <CandidateWrapper onClick={handleClick}>
      <Left>
        <CandidateName>{name}</CandidateName>
        <CandidateRole>{role}</CandidateRole>
      </Left>

      <Right>
        {ratingIcons[rating]}
        <LocationIconWrapper>
          <LocationIcon size={17} color={theme.colors.black50} />
          <LocationName>{location}</LocationName>
        </LocationIconWrapper>
      </Right>
    </CandidateWrapper>
  );
};

const CandidateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white100};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  border-radius: 20px;
  padding: 16px 32px;
  margin-bottom: 10px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const CandidateName = styled.label`
  ${({ theme }) => theme.text.headingFour};
  color: ${({ theme }) => theme.colors.black100};
`;
const CandidateRole = styled.label`
  ${({ theme }) => theme.text.capitalsRegular};
  color: ${({ theme }) => theme.colors.blueGreyDark};
`;

const LocationIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 13px;
`;
const LocationName = styled.label`
  ${({ theme }) => theme.text.bodySmall};
  color: ${({ theme }) => theme.colors.black50};
`;
