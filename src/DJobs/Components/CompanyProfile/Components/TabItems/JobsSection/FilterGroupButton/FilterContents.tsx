import React from "react";
import styled from "styled-components";

import { DjobsRadioGroup } from "@DJobs/Components/Basic/DjobsFormFields/";
import { djobsTheme } from "@DJobs/Theme";
import DjCheckboxGroup from "@DJobs/Components/Basic/Checkbox";
import { FilterGroupButtonProps } from "./FilterGroupButton";
import { DJobsTypography } from "@DJobs/Components/Basic";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { RadioChangeEvent } from "antd";

export const FilterContentsRadio = (
  props: FilterGroupButtonProps.FilterContentsRadio
) => <FilterContents {...props} />;
export const FilterContentsCheckbox = (
  props: FilterGroupButtonProps.FilterContentsCheckbox
) => <FilterContents {...props} />;

const FilterContents = (props: FilterGroupButtonProps.FilterButtonContent) => {
  const { name, filterType, onSearchFilter } = props;
  const {
    value,
    options,
    setFilterValue,
    setShowFilterContents,
    resetFilterValue,
  } = props;

  return (
    <FilterContentsContainer>
      {filterType === "radio" && (
        <DjobsRadioGroup
          value={value as string}
          options={options}
          handleChange={(e: RadioChangeEvent) =>
            setFilterValue(prev => {
              return {
                ...prev,
                [name.toLocaleLowerCase().replace(" ", "_")]: e.target.value,
              };
            })
          }
          name={name}
          idPrefix="filter_content_"
        />
      )}
      {filterType === "checkbox" && (
        <DjCheckboxGroup
          value={value as CheckboxValueType[]}
          options={options}
          onChange={value =>
            setFilterValue(prev => ({
              ...prev,
              [name.toLocaleLowerCase().replace(" ", "_")]: value,
            }))
          }
        />
      )}
      <Line />
      <ButtonsWrapper>
        <ResetButtonContainer onClick={resetFilterValue}>
          <DJobsTypography styleName="djLinkBold" color="black100">
            reset
          </DJobsTypography>
        </ResetButtonContainer>
        <FilterMenuButton
          onClick={() => {
            setShowFilterContents(false);
            onSearchFilter();
          }}
        >
          show results
        </FilterMenuButton>
      </ButtonsWrapper>
    </FilterContentsContainer>
  );
};

const FilterContentsContainer = styled.div`
  z-index: 4;
  padding: 20px 27px;

  background: ${djobsTheme.colors.white110};
  border: 1px solid ${djobsTheme.colors.black20};
  box-shadow: ${djobsTheme.effects.cardShadow};
  border-radius: 6px;
  min-height: 100px;

  position: absolute;
  min-width: 100%;
  top: 50px;
  @media (min-width: 1600px) {
    top: 55px;
  }
  ${djobsTheme.text.djSubTitleThree.lg}

  .ant-checkbox-group {
    padding-top: 5px;
    gap: 0px;
    display: flex;
    padding-bottom: 5px;
    height: 140px;
    overflow: auto;
    .ant-space-vertical {
      gap: 15px !important;
    }
  }
  .ant-checkbox-wrapper span:nth-child(1) {
    margin-right: 10px;
  }

  .ant-checkbox-wrapper span {
    color: ${djobsTheme.colors.textDarker};
  }
`;
const FilterMenuButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 14px;
  gap: 4px;

  width: 114px;
  height: 30px;
  ${djobsTheme.text.djButtonIcon.sm};
  /* dj 🟣 / Purple / 100 */
  color: ${djobsTheme.colors.white100};
  background: linear-gradient(
      156.57deg,
      #fbd0b5 -25.55%,
      #614edb 21.53%,
      rgba(32, 95, 217, 0.65) 78.68%,
      #6367c0 111.03%
    ),
    #fbd0b5;
  /* PlainButton */

  box-shadow: inset 0px -0.836836px 2.51051px 0.836836px rgba(0, 0, 0, 0.2);
  border-radius: 8.36836px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  :hover {
    opacity: 0.9;
  }
`;

const Line = styled.div`
  margin-top: 20px;
  height: 1px;
  background: ${djobsTheme.colors.blue200};
  border: 0.5px solid ${djobsTheme.colors.blue200};
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  padding: 10px 0;
`;
const ResetButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 15px;
  cursor: pointer;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;
