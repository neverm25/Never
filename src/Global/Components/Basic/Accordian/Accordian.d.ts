import React from "react";

import { IIcons } from "@Global/Components/Icons/icons";

declare namespace IAccordian {
  interface AccordianDescription {
    reasonForLeaving?: string;
    descriptions: string;
  }
  interface AccordianData {
    id: number;
    title: string;
    subTitle: string;
    SubTitleIcon: (props: IIcons.UniconsProps) => JSX.Element;
    date: string;
    descriptions: string;
    isCurrentPosition?: boolean;
    reasonForLeaving?: string;
  }

  //State management Props within accordian
  interface AccordianOpenState {
    isAccordianOpen: boolean;
    setAccordianOpen: Dispatch<SetStateAction<boolean>>;
  }
  interface AccordianDataState {
    AccordianData: AccordianData;
    setAccordianData: Dispatch<SetStateAction<AccordianData>>;
  }
  interface ShowDeleteConfirmationState {
    showDeleteConfirmation: boolean;
    setShowDeleteConfirmation: Dispatch<SetStateAction<boolean>>;
  }

  //Props to be included if edit needed
  interface IsAddFormOpenState {
    isAddFormOpen: boolean;
    setIsAddFormOpen: Dispatch<SetStateAction<boolean>>;
  }
  interface IsEditFormOpenState {
    isEditFormOpen: boolean;
    setIsEditFormOpen: Dispatch<SetStateAction<boolean>>;
  }
  interface EditComponentIdState {
    editComponentId: number;
    setEditComponentId: Dispatch<SetStateAction<number>>;
  }
  interface EducationData {
    qualification: string;
    institution: string;
    startedFrom_month: string;
    startedFrom_year: number;
    studiedTill_month: string;
    studiedTill_year: number;
    description: string;
    id: string;
  }

  type AccordianEditProps = IsAddFormOpenState &
    IsEditFormOpenState &
    EditComponentIdState & {
      allowDataEditing: boolean;
      EditComponent: () => JSX.Element;
      updateData: (EducationData) => void;
      onCancelHandlerEdit: () => void;
    };
  interface AccordianDeleteProps {
    deleteData: (string) => void;
    deleteTitle: string;
  }
  //Context

  type Context = AccordianDataState &
    AccordianOpenState &
    ShowDeleteConfirmationState & {
      AccordianEditProps: AccordianEditProps;
      AccordianDeleteProps: AccordianDeleteProps;
    };

  type IProps = {
    AccordianEditProps?: AccordianEditProps;
    AccordianDeleteProps?: AccordianDeleteProps;
    Data: AccordianData;
  };
}

export { IAccordian };
