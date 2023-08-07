import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { IIcons } from "@DJobs/Components/Icons/Iocn";
import { DJobsTypography } from "@DJobs/Components/Basic/";
import { DeviceTypeHelpers } from "@Helpers/DeviceTypeHelpers";

type MetaDataProps = {
  Icon: (props: IIcons.UniconsProps) => JSX.Element;
  value: string;
};

export const MetaData = (props: MetaDataProps) => {
  const { Icon, value } = props;

  return (
    <MetaDataContainer>
      <Icon
        color={djobsTheme.colors.black50}
        size={DeviceTypeHelpers.isDesktop() ? 16 : 9}
      />
      <DJobsTypography styleName="djIconsText" color="black80">
        {value}
      </DJobsTypography>
    </MetaDataContainer>
  );
};

const MetaDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
`;
