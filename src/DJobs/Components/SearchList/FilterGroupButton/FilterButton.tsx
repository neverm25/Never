import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { FilterIcon } from "@Global/Components/Icons";
import { FilterGroupButtonProps } from "./FilterGroupButton";
import { FilterContentsRadio, FilterContentsCheckbox } from "./FilterContents";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

export const FilterButton = (props: FilterGroupButtonProps.FilterButton) => {
  const [showFilterContents, setShowFilterContents] = useState(false);
  const { name, value, filterType, setFilterValue, onSearchFilter } = props;
  const displayValue = Array.isArray(value) ? value.join(", ") : value;
  const resetFilterValue = () => {
    if (filterType === "checkbox") {
      setFilterValue(prev => ({
        ...prev,
        [name.toLocaleLowerCase().replace(" ", "_")]: [],
      }));
    }
    if (filterType === "radio") {
      setFilterValue(prev => ({
        ...prev,
        [name.toLocaleLowerCase().replace(" ", "_")]: "",
      }));
    }
  };

  //Add Event handlers for menu items to detect clicking outside of menu items
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (
        showFilterContents &&
        ref.current &&
        !ref?.current?.contains(e.target)
      ) {
        setShowFilterContents(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showFilterContents]);

  return (
    <FilterButtonContainer ref={ref}>
      <FilterButtonElement onClick={() => setShowFilterContents(prev => !prev)}>
        <div style={{ display: "flex", alignItems: "center", minWidth: "86%" }}>
          <div
            style={{
              paddingRight: "5px",
              paddingTop: "1px",
              height: "20px",
            }}
          >
            <FilterIcon color={djobsTheme.colors.purple110} size={16} />
          </div>
          <Left>
            <Name>{`${name}: `}</Name>
            {!showFilterContents && filterType === "radio" && (
              <Value>{displayValue}</Value>
            )}
            {!showFilterContents && filterType === "checkbox" && (
              <Value>{value.length === 1 && value[0]}</Value>
            )}
          </Left>
        </div>
        {!showFilterContents && filterType === "checkbox" && value.length > 1 && (
          <CountWrapper>
            <Count>{value.length}</Count>
          </CountWrapper>
        )}
      </FilterButtonElement>
      {showFilterContents && filterType === "radio" && (
        <FilterContentsRadio
          {...props}
          value={value as string}
          {...{
            setFilterValue,
            showFilterContents,
            setShowFilterContents,
            resetFilterValue,
            onSearchFilter,
          }}
        />
      )}
      {showFilterContents && filterType === "checkbox" && (
        <FilterContentsCheckbox
          {...props}
          value={value as CheckboxValueType[]}
          {...{
            setFilterValue,
            showFilterContents,
            setShowFilterContents,
            resetFilterValue,
            onSearchFilter,
          }}
        />
      )}
    </FilterButtonContainer>
  );
};

const FilterButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media screen and (min-width: 568px) {
    min-width: 48%;
  }
`;

const FilterButtonElement = styled.button`
  background: ${djobsTheme.colors.white100};
  border: 1px solid ${djobsTheme.colors.black20};
  border-radius: 9px;
  box-shadow: ${djobsTheme.effects.boxShadow};
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 15px;

  width: 100%;

  &:hover {
    box-shadow: ${djobsTheme.effects.boxShadowActive};
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  min-height: 30px;
  min-width: 90%;
`;

const Name = styled.span`
  ${({ theme }) => theme.text.lexendRegularCaps};
  color: ${djobsTheme.colors.black100};
  white-space: nowrap;
`;
const Value = styled.label`
  ${({ theme }) => theme.text.lexendBoldCaps};
  text-align: left;
  color: ${djobsTheme.colors.purple110};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 7px 0;
  align-items: center;
`;

const CountWrapper = styled.div`
  /* height: 100vh; */
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Count = styled.span`
  /* display: block !important; */
  background: ${djobsTheme.colors.black10};
  border: 1.5px solid ${djobsTheme.colors.purple110};
  border-radius: 50%;
  color: ${djobsTheme.colors.purple110};
  padding: 0;
  /* padding-top: 7px; */
  height: 30px;
  width: 30px;
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 0px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  /* width: 100px; */
  /* height: 100px; */

  /* border-radius: 50%; */
  /* border: 2px solid rgb(96, 231, 255); */
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: white; */
  /* font-weight: bold; */
  /* font-size: 20px; */
  /* font-family: verdana; */
  float: left;
  /* margin: 30px; */
`;
