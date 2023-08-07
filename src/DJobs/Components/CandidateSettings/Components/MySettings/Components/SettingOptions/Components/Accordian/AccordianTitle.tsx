//region Global Imports
import React from "react";
//endregion Global Imports

//region Local Imports
import { djobsTheme } from "@DJobs/Theme";
import { DJobsTypography } from "@DJobs/Components/Basic";
import { DropdownArrowIcon } from "@DJobs/Components/Icons";
import {
  IconWrapper,
  Left,
  Right,
  Title,
  TitleContainer,
  SubTitleContainer,
} from "./Styles/AccordianStyles";
//endregion Local Imports

export const AccordianTitle = ({
  setAccordianOpen,
  isAccordianOpen,
  title,
  titleIcon,
  subTitle,
  option,
}) => {
  const [isMouseOverArrowIcon, setIsMouseOverArrowIcon] = React.useState(false);

  return (
    <TitleContainer
      isAccordianOpen={isAccordianOpen}
      onClick={() => setAccordianOpen(isAccordianOpen === option ? "" : option)}
    >
      <Left onClick={() => setAccordianOpen(!isAccordianOpen)}>
        <Title>
          {titleIcon}
          <DJobsTypography styleName="djCapsRegular" color="black100">
            {title}
          </DJobsTypography>
        </Title>
        <SubTitleContainer>
          <DJobsTypography styleName="djSubTitleSix" color="black80">
            {subTitle}
          </DJobsTypography>
        </SubTitleContainer>
      </Left>
      <Right>
        <IconWrapper
          onClick={event => {
            event.stopPropagation();
            setAccordianOpen(isAccordianOpen === option ? "" : option);
          }}
          isAccordianOpen={isAccordianOpen}
          option={option}
          onMouseOver={() => setIsMouseOverArrowIcon(true)}
          onMouseLeave={() => setIsMouseOverArrowIcon(false)}
        >
          <DropdownArrowIcon
            fillColor={
              isMouseOverArrowIcon
                ? djobsTheme.colors.black50
                : djobsTheme.colors.black80
            }
          />
        </IconWrapper>
      </Right>
    </TitleContainer>
  );
};
