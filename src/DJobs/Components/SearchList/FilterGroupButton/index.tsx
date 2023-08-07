import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { DJobsTypography } from "@DJobs/Components/Basic";
import { FilterButtons } from "./FilterButtons";
import { FilterGroupButtonProps } from "./FilterGroupButton";

export const FilterGroupButton: React.FC<FilterGroupButtonProps.filterData> = ({
  filteredOptionData,
  setFilterValue,
}) => {
  return (
    <FilterGroupButtonContainer>
      <FilterGroup>
        <SearchFilterTitleWrapper>
          <DJobsTypography styleName="djTextMedium" color="textDarker">
            Search Filters:
          </DJobsTypography>
        </SearchFilterTitleWrapper>
        <FilterButtons
          setFilterValue={setFilterValue}
          filteredOptionData={filteredOptionData}
        />
      </FilterGroup>
    </FilterGroupButtonContainer>
  );
};

const FilterGroupButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 1200px) {
    width: 75%;
  }
`;

const SearchFilterTitleWrapper = styled.div`
  padding: 0 10px;
  padding-bottom: 10px;
  @media (min-width: 992px) {
    padding: 0;
  }
`;

const FilterGroup = styled.div`
  padding: 18px 31px;
  padding: 20px 10px;
  background: ${djobsTheme.colors.black10};
  border: 1px solid ${djobsTheme.colors.black20};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 567px) {
    height: 250px;
  }
  @media (min-width: 992px) {
    padding: 18px 31px;
  }
`;
