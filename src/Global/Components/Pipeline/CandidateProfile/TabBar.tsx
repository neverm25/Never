import * as React from "react";
import { Flex } from "reflexbox";
import styled from "styled-components";
import { PipelineProps } from "../Pipeline";

export const TabBar = (props: PipelineProps.TabbarProps) => {
  const { tabs, setActiveTab, activeTab } = props;

  return (
    <TabBarContainer>
      {tabs.map((tabData, index) => {
        const isActiveTab = tabData.labelValue === activeTab;
        const handleClick = () => setActiveTab(tabData.labelValue);
        return (
          <TabItem key={index} onClick={handleClick}>
            <Flex flexDirection="row" justifyContent="space-between">
              <TabName isActiveTab={isActiveTab}>{tabData.label}</TabName>
              <FilteredCounter isActiveTab={isActiveTab}>
                <FilterCount>{`${tabData.value}`}</FilterCount>
              </FilteredCounter>
            </Flex>
            {isActiveTab && <ActiveTabBorder />}
          </TabItem>
        );
      })}
    </TabBarContainer>
  );
};

const TabBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.black100};
  border-radius: 10px;
  height: 42px;
  padding: 0 30px;
`;
const TabItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  margin-right: 15px;
`;
const TabName = styled.a<{
  isActiveTab: boolean;
}>`
  ${({ theme }) => theme.text.smallBold};
  color: ${({ isActiveTab, theme }) =>
    isActiveTab ? theme.colors.blue60 : theme.colors.white100};
  padding-right: 10px;
  position: relative;
  top: ${({ isActiveTab }) => (isActiveTab ? "2px" : 0)};

  &:hover {
    ${({ theme }) => theme.text.smallBold};
    color: ${({ isActiveTab, theme }) =>
      isActiveTab ? theme.colors.blue60 : theme.colors.white100};
  }
`;

const FilteredCounter = styled.div<{
  isActiveTab: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 15px;
  height: 15px;
  background: ${({ theme }) => theme.colors.blue100};
  position: relative;
  top: ${({ isActiveTab }) => (isActiveTab ? "2px" : 0)};
  border-radius: 50%;
`;
const FilterCount = styled.label`
  ${({ theme }) => theme.text.editButtonText};
  color: ${({ theme }) => theme.colors.white100};
`;

const ActiveTabBorder = styled.div`
  height: 5px;
  background: ${({ theme }) => theme.colors.blue100};
  position: relative;
  top: 11px;
`;
