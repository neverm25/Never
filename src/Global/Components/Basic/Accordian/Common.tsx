import { TextWithLeadingEllipsis } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import { useContext } from "react";
import { Flex } from "reflexbox";
import styled from "styled-components";
import { AccordianContext } from ".";
import { Typography } from "../Typography";

const AccordianLeft = () => {
  const { isAccordianOpen, setAccordianOpen, AccordianData } = useContext(
    AccordianContext
  );

  return (
    <Left onClick={() => setAccordianOpen(!isAccordianOpen)}>
      <TextWithLeadingEllipsis
        styleName="djSubHeadingTwo"
        color="black100"
        content={AccordianData.title}
        maxLineLength={2}
      />
      <Flex flexDirection="row" alignItems={"end"} style={{ gap: "7px" }}>
        <AccordianData.SubTitleIcon color={djobsTheme.colors.black80} />
        <TextWithLeadingEllipsis
          styleName="accordianSubTitle"
          color="black80"
          content={AccordianData.subTitle}
        />
      </Flex>
      <Typography styleName="accordianDate" color="black50">
        {AccordianData.isCurrentPosition
          ? `${AccordianData.date.split("-")[0]}- Present`
          : AccordianData.date}
      </Typography>
    </Left>
  );
};

const Left = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
  gap: 10px;
  @media (min-width: 992px) {
    gap: 14px;
  }
`;

export const AccordianCommon = { AccordianLeft };
