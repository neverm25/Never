import React, { useContext } from "react";

import { Accordian } from "@Global/Components/Basic/Accordian";
import { BuildingIcon } from "@Global/Components/Icons";
import { IAccordian } from "@Global/Components/Basic/Accordian/Accordian";
import { CareerHistoryProps } from "../CareerHistory";
import { CareerInfoFormEdit } from "./CareerInfoFormEdit";
import { CareerHistoryContext } from "..";
import { DateHelpers } from "@Helpers/index";

export const CareerInfo: React.FC<CareerHistoryProps.CareerInfo> = ({
  careerHistory,
  deleteData,
  updateData,
}) => {
  const {
    isAddFormOpen,
    setIsAddFormOpen,
    isEditFormOpen,
    setIsEditFormOpen,
    editComponentId,
    setEditComponentId,
    onCancelHandlerEdit,
  } = useContext(CareerHistoryContext);

  const fromYear = careerHistory.from_year;
  const fromMonth = DateHelpers.monthsShortName[careerHistory.from_month - 1];
  const toYear = careerHistory.to_year;
  const toMonth = DateHelpers.monthsShortName[careerHistory.to_month - 1];

  const accordianData: IAccordian.AccordianData = {
    id: careerHistory.id,
    title: careerHistory.job_title,
    subTitle: careerHistory.company,
    SubTitleIcon: BuildingIcon,
    date: `${fromYear} ${fromMonth} - ${toYear} ${toMonth}`,
    descriptions: careerHistory.description,
    isCurrentPosition: careerHistory.is_to_present,
    reasonForLeaving: careerHistory.reason_for_leaving,
  };

  //Accordian props
  const accordianProps: IAccordian.IProps = {
    Data: accordianData,
    AccordianEditProps: {
      allowDataEditing: true,
      EditComponent: CareerInfoFormEdit,
      isAddFormOpen,
      setIsAddFormOpen,
      isEditFormOpen,
      setIsEditFormOpen,
      editComponentId,
      setEditComponentId,
      updateData,
      onCancelHandlerEdit,
    },
    AccordianDeleteProps: {
      deleteData,
      deleteTitle: `Are you sure you want to delete your ${careerHistory.company} experience?`,
    },
  };

  return <Accordian {...accordianProps} />;
};
