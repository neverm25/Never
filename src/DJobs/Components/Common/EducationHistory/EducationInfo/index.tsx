import React, { useContext } from "react";

import { Accordian } from "@Global/Components/Basic/Accordian";
import { BuildingIcon } from "@Global/Components/Icons";
import { IAccordian } from "@Global/Components/Basic/Accordian/Accordian";
import { EducationHistoryProps } from "../EducationHistory";
import { EducationInfoFormEdit } from "./EducationInfoFormEdit";
import { EducationHistoryContext } from "..";

export const EducationInfo: React.FC<EducationHistoryProps.EducationInfo> = ({
  educationHistory,
  updateData,
  deleteData,
}) => {
  const {
    isAddFormOpen,
    setIsAddFormOpen,
    isEditFormOpen,
    setIsEditFormOpen,
    editComponentId,
    setEditComponentId,
    onCancelHandlerEdit,
  } = useContext(EducationHistoryContext);

  const accordianData = {
    id: educationHistory?.id,
    title: educationHistory?.qualification,
    subTitle: educationHistory?.institution,
    SubTitleIcon: BuildingIcon,
    date: educationHistory?.year_from + "-" + educationHistory?.year_to,
    descriptions: educationHistory?.description,
  };

  const accordianProps: IAccordian.IProps = {
    Data: accordianData,
    AccordianEditProps: {
      allowDataEditing: true,
      EditComponent: EducationInfoFormEdit,
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
      deleteTitle: `Are you sure you want to delete your ${educationHistory?.institution} education?`,
    },
  };

  return <Accordian {...accordianProps}></Accordian>;
};
