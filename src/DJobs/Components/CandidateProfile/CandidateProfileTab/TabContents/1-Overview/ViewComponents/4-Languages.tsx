import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Pills } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import { RootState } from "@Redux";
import { OverviewCommonComponents } from "./Common/Components";

export const Languages = () => {
  const candidateLanguages = useSelector(
    (state: RootState) => state.languages.candidateLanguages
  );

  return (
    <Container>
      <Title>
        <OverviewCommonComponents.Title name="Languages" />
        <OverviewCommonComponents.Count count={candidateLanguages.length} />
      </Title>
      <Pills
        pillColor="blue50"
        data={candidateLanguages.map(
          data => `${data.name}: ${data.proficiency}`
        )}
        textColor="blue100"
      />
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
