import React from "react";
import { Box } from "reflexbox";

import { Accordian } from "@Global/Components/Basic/Accordian";
import { IAccordian } from "@Global/Components/Basic/Accordian/Accordian";
import { GradientIcons } from "@Global/Components/Icons";
import { workHistoryData } from "./Utils/WorkHistoryUtils";

export const WorkHistory = () => (
  <Box mb="4%" width="100%">
    {workHistoryData.map(data => {
      const {
        id,
        Designation,
        CompanyName,
        Date,
        descriptions,
        reason_for_leaving,
      } = data;

      const accordianData: IAccordian.AccordianData = {
        id,
        title: Designation,
        subTitle: CompanyName,
        SubTitleIcon: GradientIcons.BuildingIcon,
        date: Date,
        descriptions,
        reasonForLeaving: reason_for_leaving,
      };

      return <Accordian Data={accordianData} key={accordianData.id} />;
    })}
  </Box>
);
