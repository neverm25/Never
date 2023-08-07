import * as React from "react";
import { Box } from "reflexbox";

import { Accordian } from "@Global/Components/Basic/Accordian";
import { GraduationCapIcon } from "@Global/Components/Icons";
import { IAccordian } from "@Global/Components/Basic/Accordian/Accordian";
import { educationData } from "./Utils/EducationHistoryUtils";

export const EducationHistory = () => (
  <Box mb="4%" width="100%">
    {educationData.map(data => {
      const { id, Designation, CollegeName, Date, descriptions } = data;

      const accordianData: IAccordian.AccordianData = {
        id,
        title: Designation,
        subTitle: CollegeName,
        SubTitleIcon: GraduationCapIcon,
        date: Date,
        descriptions,
      };

      return <Accordian Data={accordianData} key={accordianData.id} />;
    })}
  </Box>
);
