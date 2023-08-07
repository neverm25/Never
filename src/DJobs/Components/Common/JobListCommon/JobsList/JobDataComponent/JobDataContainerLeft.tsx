import React, { useContext } from "react";
import styled from "styled-components";
import { Grid } from "antd";

import { IconValue, TextWithLeadingEllipsis } from "@DJobs/Components/Basic";
import { IconValueProps } from "@DJobs/Components/Basic/IconValue/IconValue";
import { BuildingIcon, MapPinIcon } from "@Global/Components/Icons";
import { JobDataContext } from ".";

export const JobDataContainerLeft = () => {
  const screen = Grid.useBreakpoint();
  const { jobData, onClickJobDetails, setJobSelId } = useContext(
    JobDataContext
  );
  const { title, company_name, city, id } = jobData;

  const IconSize = screen.lg ? 16 : 12;

  const iconValueProps: IconValueProps.Props = {
    Icon: BuildingIcon,
    value: company_name?.toLocaleUpperCase(),
    textStyleName: "djCardsCompany",
    textColor: "blue80",
    iconColor: "textDefault",
    IconSize,
  };

  return (
    <Container
      onClick={e => {
        e.preventDefault();
        setJobSelId && setJobSelId(id);
        onClickJobDetails && onClickJobDetails(id);
      }}
    >
      <JobTitleWrapper>
        <TextWithLeadingEllipsis
          styleName="djCardsTitle"
          color="black90"
          maxLineLength={1}
          content={title}
        />

        <IconValue {...iconValueProps} />
      </JobTitleWrapper>
      <IconTextWrapper>
        {city && (
          <IconValue
            Icon={MapPinIcon}
            value={city}
            IconSize={IconSize}
            textColor="black80"
            textStyleName="djIconRegular"
          />
        )}
      </IconTextWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  isolation: isolate;
  width: calc(100% - 45px);
  cursor: pointer;
`;
const JobTitleWrapper = styled.div`
  padding: 0;
  paddingtop: 10px;
  display: flex;
  flex-direction: column;
  height: 85px;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 7px;
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
