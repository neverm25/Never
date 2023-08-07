import React from "react";
import styled from "styled-components";

import { FilterButton } from "./FilterButton";
import { FilterGroupButtonProps } from "./FilterGroupButton";

export const FilterButtons: React.FC<FilterGroupButtonProps.filterData> = ({
  filteredOptionData,
  setFilterValue,
}) => {
  return (
    <React.Fragment>
      {filteredOptionData.length > 0 && (
        <FilterButtonsContainer>
          {filteredOptionData.map((buttonProps, index) => (
            <Row key={index}>
              <FilterButton
                setFilterValue={setFilterValue}
                key={buttonProps.name}
                {...buttonProps}
              />
            </Row>
          ))}
        </FilterButtonsContainer>
      )}
    </React.Fragment>
  );
};

const FilterButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100% !important;

  @media (min-width: 568px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    min-width: 31%;
  }
`;
