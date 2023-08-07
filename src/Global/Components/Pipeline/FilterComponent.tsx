import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { FilterIcon, GradientIcons } from "@Global/Components/Icons";
import { DropdownMenu } from "@Global/Components/Basic";
import {
  getCandidateCountInPipelinePhase,
  getCandidateCountInRating,
  PipelineContext,
} from ".";
import {
  pipelinePhases,
  ratingPhases,
} from "@Global/Components/Pipeline/Utils/PipelineUtils";
import { PipelineProps } from "./Pipeline";
import {
  sortDirection,
  sortListProps,
  sortListUsingDate,
  sortIcons,
} from "@Helpers/DateHelpers";
import { GradientText } from "@Global/Components/Basic/";
import { IDropdownMenu } from "@Global/Components/Basic/DropdownMenu/DropdownMenu";

export const FilterComponent = () => {
  const [sortDirection, setSortDirection] = useState<sortDirection>("desc");
  const {
    candidateList,
    setCandidateList,
    filteredCandidateList,
    setFilteredCandidateList,
    ratingFilterLabel,
    setRatingFilterLabel,
    ratingFilterValue,
    setRatingFilterValue,
    statusFilterLabel,
    setStatusFilterLabel,
    statusFilterValue,
    setStatusFilterValue,
    setSelectedCandidate,
  } = useContext(PipelineContext);

  const pipelineStatusCount = getCandidateCountInPipelinePhase(candidateList);
  const pipelineRatingCount = getCandidateCountInRating(candidateList);

  const candidateListCount = candidateList.length;
  const filteredCandidateListCount = filteredCandidateList.length;

  //#region Filter change handlers
  const getFilteredData = () =>
    candidateList.filter(candidateData => {
      let filteredRating = true;
      let filteredStatus = true;
      if (ratingFilterValue)
        filteredRating = candidateData.rating === ratingFilterValue;
      if (statusFilterValue)
        filteredStatus = candidateData.status === statusFilterValue;

      return filteredRating && filteredStatus;
    });

  const updateCandidateListData = (
    filteredCandidateList: PipelineProps.CandidateList
  ) => {
    setFilteredCandidateList(filteredCandidateList);

    if (filteredCandidateList.length > 0) {
      setSelectedCandidate(filteredCandidateList[0]);
    } else {
      setSelectedCandidate(candidateList[0]);
    }
  };

  const handleFilterValueChange = () => {
    updateCandidateListData(getFilteredData());
  };

  //Check for Filter values on every render
  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleFilterValueChange, [
    candidateList,
    ratingFilterValue,
    statusFilterValue,
    sortDirection,
  ]);
  //#endregion

  //#region Sort handlers
  const sortLabel: { [key in sortDirection]: string } = {
    asc: "Oldest",
    desc: "Latest",
  };
  const Icons: IDropdownMenu.Icons = {
    Icon: sortIcons[sortDirection],
    IconSize: 16,
  };
  const Sort = (item: IDropdownMenu.MenuiItem) => {
    const sortDirection = item.value as sortDirection;
    const sortProps: sortListProps = {
      data: candidateList,
      direction: sortDirection,
      dateFieldName: "dateApplied",
    };
    const newCandidateList = sortListUsingDate(sortProps);
    setSortDirection(sortDirection);
    setCandidateList(newCandidateList);
  };
  //#endregion

  const dropdownMenuItems: IDropdownMenu.MenuiItem[] = [
    { label: sortLabel["asc"], value: "asc" },
    { label: sortLabel["desc"], value: "desc" },
  ];
  return (
    <React.Fragment>
      <FilterResultWrapper>
        <Left>
          <CandidateListTitle>{`Candidate List:`}</CandidateListTitle>
          <GradientText gradient="purple100" styleName="filterResult">
            {`Displaying ${filteredCandidateListCount} out of ${candidateListCount}`}
          </GradientText>
        </Left>

        <Right>
          <DropdownMenu
            menuItemBackground="primary"
            onClickHandler={Sort}
            menuItems={dropdownMenuItems}
            selectedValue={sortDirection}
            selectedLabel={sortLabel[sortDirection]}
            Icons={Icons}
          />
        </Right>
      </FilterResultWrapper>

      <FilterButtonsWrapper>
        <FilterButtonTitle>Filters</FilterButtonTitle>
        <RatingButtonWrapper>
          <DropdownMenu
            Icons={{ Icon: FilterIcon, GradientIcon: GradientIcons.FilterIcon }}
            menuItemBackground="primary"
            menuItems={[{ label: "ALL", value: "" }, ...ratingPhases]}
            name="rating"
            selectedValue={ratingFilterValue}
            selectedLabel={ratingFilterLabel}
            count={ratingFilterValue && pipelineRatingCount[ratingFilterValue]}
            onClickHandler={(item: IDropdownMenu.MenuiItem) => {
              setRatingFilterValue(item.value);
              setRatingFilterLabel(item.label as PipelineProps.Rating | "ALL");
            }}
          />
        </RatingButtonWrapper>
        <DropdownMenu
          Icons={{ Icon: FilterIcon, GradientIcon: GradientIcons.FilterIcon }}
          menuItemBackground="primary"
          menuItems={[{ label: "ALL", value: "" }, ...pipelinePhases]}
          name="status"
          selectedValue={statusFilterValue}
          selectedLabel={statusFilterLabel}
          count={statusFilterValue && pipelineStatusCount[statusFilterValue]}
          onClickHandler={(item: IDropdownMenu.MenuiItem) => {
            setStatusFilterValue(item.value);
            setStatusFilterLabel(
              item.label as PipelineProps.PipelineStatus | "ALL"
            );
          }}
        />
      </FilterButtonsWrapper>
    </React.Fragment>
  );
};

const FilterResultWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 1rem 0 1.4rem 0;
  padding: 0 5px;
`;
const CandidateListTitle = styled.label`
  color: ${({ theme }) => theme.colors.black90};
  ${({ theme }) => theme.text.headingFour};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const FilterButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  background-color: ${({ theme }) => theme.colors.black10};
  border: 1px solid ${({ theme }) => theme.colors.black20};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  margin-bottom: 10px;
  padding: 10px 20px;
`;
const FilterButtonTitle = styled.label`
  color: ${({ theme }) => theme.colors.black100};
  ${({ theme }) => theme.text.capitalsRegular};
  text-transform: none;
  padding-bottom: 12px;
`;
const RatingButtonWrapper = styled.span`
  padding-right: 10px;
  padding-bottom: 5px;
`;
