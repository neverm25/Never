import React, { useState } from "react";
import styled from "styled-components";

import { TabBar } from "./TabBar";
import { PipelineProps } from "../Pipeline";
import { CandidateBasicDetails } from "./CandidateBasicDetails";
import {
  TabbarComponents,
  tabBarData,
} from "@Global/Components/Pipeline/Utils/PipelineUtils";

export const CandidateProfile = () => {
  const [activeTab, setActiveTab] = useState<PipelineProps.TabBarType>(
    "work-history"
  );

  return (
    <CandidateProfileContainer>
      <CandidateBasicDetails />

      <TabBar
        tabs={tabBarData}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      {TabbarComponents[activeTab]}
    </CandidateProfileContainer>
  );
};

const CandidateProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white100};
  margin-top: 10px;
  padding: 50px;
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
`;
