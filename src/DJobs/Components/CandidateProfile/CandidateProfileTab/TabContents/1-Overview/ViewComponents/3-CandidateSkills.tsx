import React, { useContext } from "react";
import styled from "styled-components";

import { Pills } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import { CandidateOverviewContext } from "..";
import { OverviewCommonComponents } from "./Common/Components";

export const CandidateSkills = () => {
  const { getSkills } = useContext(CandidateOverviewContext);
  const candidateSkills = getSkills();

  return (
    <Container>
      <Title>
        <OverviewCommonComponents.Title name="Skills" />
        <OverviewCommonComponents.Count count={candidateSkills.length} />
      </Title>
      <Pills pillColor="blue50" data={candidateSkills} textColor="blue100" />
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
const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
