import React, { createContext, useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "@Global/Theme";
import { IAccordian } from "./Accordian";
import { AccordianTitleForView } from "./AccordianTitleForView";
import { AccordianTitleForEdit } from "./AccordianTitleForEdit";
import { AccordianEdit } from "./AccordianEdit";
import { AccordianDescription } from "./AccordianDescription";

export const AccordianContext = createContext({} as IAccordian.Context);

export const Accordian = (props: IAccordian.IProps) => {
  const [isAccordianOpen, setAccordianOpen] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const { Data, AccordianEditProps, AccordianDeleteProps } = props;
  const [AccordianData, setAccordianData] = useState(Data);
  useEffect(() => setAccordianData(Data), [Data]);
  const accordianContextValue: IAccordian.Context = {
    AccordianData,
    setAccordianData,
    isAccordianOpen,
    setAccordianOpen,
    showDeleteConfirmation,
    setShowDeleteConfirmation,
    AccordianEditProps,
    AccordianDeleteProps,
  };

  return (
    <AccordianContext.Provider value={accordianContextValue}>
      <AccordianGradientBorder>
        <AccordianMainDiv
          isEditFormOpen={AccordianEditProps?.isEditFormOpen ? true : false}
        >
          {AccordianEditProps?.allowDataEditing ? (
            <AccordianTitleForEdit />
          ) : (
            <AccordianTitleForView />
          )}
          {AccordianEditProps?.isEditFormOpen &&
            AccordianData.id === AccordianEditProps?.editComponentId && (
              <AccordianEdit />
            )}
          {!AccordianEditProps?.isEditFormOpen &&
            isAccordianOpen &&
            Data.reasonForLeaving && (
              <AccordianDescription
                descriptions={Data.descriptions}
                reasonForLeaving={Data.reasonForLeaving}
              />
            )}
          {!AccordianEditProps?.isEditFormOpen &&
            isAccordianOpen &&
            !Data.reasonForLeaving && (
              <AccordianDescription descriptions={Data.descriptions} />
            )}
        </AccordianMainDiv>
      </AccordianGradientBorder>
    </AccordianContext.Provider>
  );
};

const AccordianGradientBorder = styled.div`
  background: ${theme.gradients.purpleHover};
  border: 1px solid transparent;
  border-radius: 13px;
`;
const AccordianMainDiv = styled.div<{ isEditFormOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: auto;
  border-radius: 13px;

  background: ${({ isEditFormOpen }) =>
    isEditFormOpen ? theme.colors.white110 : theme.colors.white100};
  box-shadow: ${theme.effects.boxShadow};

  padding: 10px;
  @media (min-width: 768px) {
    padding: 20px 23px;
  }
`;
