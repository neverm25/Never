import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

import { IAccordian } from "./Accordian";

export const getAccordianDescription = (entry: [string, string]) => {
  return {
    title: entry[0],
    description: entry[1],
  };
};

export const AccordianDescription = (
  props: IAccordian.AccordianDescription
) => {
  const { descriptions, reasonForLeaving } = props;
  return (
    <React.Fragment>
      <DescriptionContainer>
        <Title>Description</Title>
        <Description>{ReactHtmlParser(descriptions)}</Description>
      </DescriptionContainer>
      {reasonForLeaving && (
        <DescriptionContainer>
          <Title>Reason For Leaving</Title>
          <Description>{ReactHtmlParser(reasonForLeaving)}</Description>
        </DescriptionContainer>
      )}
    </React.Fragment>
  );
};

const DescriptionContainer = styled.div`
  padding: 20px 0px 0px;
`;
const Title = styled.div`
  ${({ theme }) => theme.text.accordianDescriptionTitle};
  color: ${({ theme }) => theme.colors.black100};
`;
const Description = styled.div`
  ${({ theme }) => theme.text.accordianDescription};
  color: ${({ theme }) => theme.colors.black90};
  padding: 27px 0px 30px 0;
`;
