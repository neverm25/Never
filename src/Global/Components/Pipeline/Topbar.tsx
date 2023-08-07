import React, { useContext } from "react";
import styled from "styled-components";

import PipelineCards from "@Global/Components/PipelineCards";
import { AngleRightIcon, MailBoxIcon } from "@Global/Components/Icons";
import { theme } from "@Global/Theme";
import { PipelineContext } from ".";

export const Topbar = () => {
  const { candidateList, selectedCandidate, jobData } = useContext(
    PipelineContext
  );
  const { role } = selectedCandidate;
  return (
    <TopBarContainer>
      <CandidateRole>{role}</CandidateRole>
      <DateApplied>{` Posted: ${jobData.postedDate}`}</DateApplied>
      <PipelineCardContainer>
        <InboxMessageContainer>
          <MailBoxIcon color={theme.colors.black90} size={30} />
          <InboxText>INBOX</InboxText>
          <InboxMessageCount>0</InboxMessageCount>
        </InboxMessageContainer>
        <AngleIconsWrapper>
          <AngleRightIcon size={25} />
          <AngleRightIcon size={25} />
        </AngleIconsWrapper>
        <PipelineCards variant="secondary" candidateList={candidateList} />
      </PipelineCardContainer>
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div`
  background: ${({ theme }) => theme.colors.white100};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  padding: 13px 14px;
  border-radius: 14px;
  margin-bottom: 40px;
`;
const CandidateRole = styled.label`
  ${({ theme }) => theme.text.headingFour};
  color: ${({ theme }) => theme.colors.black90};
`;
const DateApplied = styled.label`
  ${({ theme }) => theme.text.captionSmall};
  color: ${({ theme }) => theme.colors.black50};
`;
const PipelineCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 20px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.black10};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  width: fit-content;
`;
const InboxMessageContainer = styled.div`
  width: 175px;
  height: 65px;
  background: ${({ theme }) => theme.colors.white100};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  border: 1px solid ${({ theme }) => theme.colors.green150};
  border-radius: 12.6173px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;
const InboxText = styled.label`
  ${({ theme }) => theme.text.lexendTitle};
  color: ${({ theme }) => theme.colors.black90};
  text-shadow: ${({ theme }) => theme.effects.textShadow};
`;
const InboxMessageCount = styled.div`
  height: 35px;
  width: 35px;
  background-color: ${({ theme }) => theme.colors.green80};
  border: 5px solid ${({ theme }) => theme.colors.green50};
  border-radius: 50%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white100};
  padding-top: 3px;
`;
const AngleIconsWrapper = styled.div`
  padding: 0 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
