//region Global Imports
import React from "react";
import styled from "styled-components";
//endregion Global Imports

//region Local Imports
import { IAccordian } from "./Accordian";
import { AccordianTitle } from "./AccordianTitle";
//endregion Local Imports

const Accordian: React.FC<IAccordian.IProps> = ({
  title,
  titleIcon,
  subTitle,
  children,
  isAccordianOpen,
  setAccordianOpen,
  option,
}) => {
  return (
    <AccordianMainDiv>
      <AccordianTitle
        title={title}
        subTitle={subTitle}
        titleIcon={titleIcon}
        isAccordianOpen={isAccordianOpen}
        setAccordianOpen={setAccordianOpen}
        option={option}
      />
      {isAccordianOpen === option && children}
    </AccordianMainDiv>
  );
};

const AccordianMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 25px 18px 30px 26px;

  @media (min-width: 992px) {
    padding: 35px 25px 30px 25px;
  }
`;

export default Accordian;
