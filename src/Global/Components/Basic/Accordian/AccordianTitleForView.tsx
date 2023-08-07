import React, { useContext, useState } from "react";
import styled from "styled-components";

import { theme } from "@Global/Theme";
import { DownCircleIcon, UpCircleIcon } from "@Global/Components/Icons";
import { AccordianContext } from ".";
import { AccordianCommon } from "./Common";

export const AccordianTitleForView = () => {
  const { isAccordianOpen, setAccordianOpen } = useContext(AccordianContext);

  //Hover effect for UpCircle and downcircle
  const [isMouseOverArrowIcon, setIsMouseOverArrowIcon] = useState(false);
  const ARROW_ICON_COLOR = isMouseOverArrowIcon ? "black50" : "black80";

  return (
    <TitleContainer>
      <AccordianCommon.AccordianLeft />
      <Right>
        <ArrowIconWrapper
          onClick={() => setAccordianOpen(!isAccordianOpen)}
          onMouseOver={() => setIsMouseOverArrowIcon(true)}
          onMouseLeave={() => setIsMouseOverArrowIcon(false)}
        >
          {isAccordianOpen ? (
            <UpCircleIcon fillColor={theme.colors[ARROW_ICON_COLOR]} />
          ) : (
            <DownCircleIcon fillColor={theme.colors[ARROW_ICON_COLOR]} />
          )}
        </ArrowIconWrapper>
      </Right>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-radius: 16px;
  background-color: transparent;

  padding: 10px 0px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: end;
  align-items: center;
  height: fit-content;
  cursor: pointer;
`;
const ArrowIconWrapper = styled.span`
  cursor: pointer;
  height: 25px;
`;
