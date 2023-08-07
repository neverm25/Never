import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { FilterIcon } from "@Global/Components/Icons";

type SkillFilterProps = {
  value: { key: string; value: number }[];
};

export const SkillFilter = (props: SkillFilterProps) => {
  const { value } = props;
  return (
    <SkillFilterElement>
      <Title>
        <FilterIcon color={djobsTheme.colors.purple110} size={16} />
        <Name>Skills:</Name>
      </Title>

      {value.map((skill, index) => (
        <Skill key={index}>
          <Value>{skill.key}</Value>
          <CountWrapper>
            <Count>{skill.value}</Count>
          </CountWrapper>
        </Skill>
      ))}
    </SkillFilterElement>
  );
};

const SkillFilterElement = styled.div`
  width: 100%;
  background: ${djobsTheme.colors.white100};
  border-radius: 9px;
  border: none;
  box-shadow: 1px 2px 1px rgba(120, 127, 150, 0.03),
    1px 4px 3px rgba(120, 127, 150, 0.05), 0px 1px 0px rgba(106, 112, 255, 0.12),
    0px 8px 4px rgba(102, 95, 136, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 19px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 5px;
  width: 100%;
  margin-top: 10px;
`;
const Skill = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`;
const Name = styled.span`
  ${({ theme }) => theme.text.lexendRegularCaps};
  color: ${djobsTheme.colors.black100};
`;
const Value = styled.span`
  min-width: fit-content;
  padding-right: 7px;
  ${({ theme }) => theme.text.lexendBoldCaps};
  color: ${djobsTheme.colors.purple110};
`;
const CountWrapper = styled.div`
  align-content: center;
  padding-top: 2px;
  padding-bottom: 3px;
  background: ${djobsTheme.colors.black20};
  border: 1px solid ${djobsTheme.colors.purple110};
  border-radius: 37px;
`;
const Count = styled.span`
  color: ${djobsTheme.colors.purple110};
  ${({ theme }) => theme.text.lexendBoldCaps};
  padding: 2px 10px;
`;
