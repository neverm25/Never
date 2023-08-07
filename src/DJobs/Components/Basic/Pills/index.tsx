import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { PillsProps } from "./PillsContainer";
import { DJobsTypography } from "@DJobs/Components/Basic";
import { DjobsTheme } from "@DJobs/Theme/styled";
import { RemoveIcon } from "@Global/Components/Icons";

export const Pills = (props: PillsProps.props) => {
  const {
    heading,
    pillColor,
    textColor = pillColor,
    data,
    styleName = "djPillLabel",
    editProps,
  } = props;

  return (
    <MainContainer>
      {heading && (
        <div style={{ marginBottom: "10px" }}>
          <DJobsTypography styleName="djInputLabel" color="textDarker">
            {heading}
          </DJobsTypography>
        </div>
      )}
      <PillData>
        {data.map((value, index) => (
          <Pill key={index} pillColor={pillColor} isEdit={editProps?.isEdit}>
            <DJobsTypography styleName={styleName} color={textColor}>
              {value}
            </DJobsTypography>
            {editProps?.isEdit && (
              <RemoveIconWrapper
                pillColor={pillColor}
                onClick={() => {
                  editProps?.setData(index);
                }}
              >
                <RemoveIcon color={djobsTheme.colors.white100} />
              </RemoveIconWrapper>
            )}
          </Pill>
        ))}
      </PillData>
    </MainContainer>
  );
};

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Pill = styled.div<{
  pillColor: keyof DjobsTheme.DjobsColorsWithGlobal;
  isEdit: boolean;
}>`
  position: relative;
  width: fit-content;
  height: 30px;
  padding: 8px 20px;
  padding-right: ${({ isEdit }) => isEdit && "10px"};
  margin-right: 10px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${({ pillColor }) => djobsTheme.colors[pillColor]};
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.tagsShadow};
  border-radius: 20px;
  box-sizing: border-box;

  @media (min-width: 1600px) {
    height: 37px;
    padding: 11px 20px;
  }
`;
const PillData = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`;
const RemoveIconWrapper = styled.div<{
  pillColor: keyof DjobsTheme.DjobsColorsWithGlobal;
}>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ pillColor }) => djobsTheme.colors[pillColor]};
  cursor: pointer;
`;
