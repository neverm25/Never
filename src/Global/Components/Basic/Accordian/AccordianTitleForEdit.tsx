import React, { useContext, useState } from "react";
import styled from "styled-components";

import { theme } from "@Global/Theme";
import {
  DeleteIconAlt,
  DownCircleIcon,
  GradientIcons,
  UpCircleIcon,
} from "@Global/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { DeleteModal } from "@DJobs/Components/Basic/DeleteModal";
import { AccordianContext } from ".";
import { AccordianCommon } from "./Common";
import { XDeleteButton } from "@DJobs/Components/Basic";

export const AccordianTitleForEdit = () => {
  const {
    isAccordianOpen,
    setAccordianOpen,
    showDeleteConfirmation,
    setShowDeleteConfirmation,
    AccordianData,
    AccordianEditProps,
    AccordianDeleteProps,
  } = useContext(AccordianContext);
  const {
    allowDataEditing,
    editComponentId,
    isAddFormOpen,
    isEditFormOpen,
    setEditComponentId,
    setIsEditFormOpen,
    onCancelHandlerEdit,
  } = AccordianEditProps;
  const { deleteTitle, deleteData } = AccordianDeleteProps;

  //Hover effect for ArrowIcon
  const [isMouseOverArrowIcon, setIsMouseOverArrowIcon] = useState(false);
  const ARROW_ICON_COLOR = isMouseOverArrowIcon ? "black50" : "black80";

  //Hover effect for EditIcon
  const [isMouseOverEditIcon, setIsMouseOverEditIcon] = useState(false);

  //Hover effect for Delete icon
  const [isMouseOverDeleteIcon, setIsMouseOverDeleteIcon] = useState(false);
  const DELETE_ICON_COLOR = isMouseOverDeleteIcon ? "black50" : "black80";

  return (
    <TitleContainer>
      <AccordianCommon.AccordianLeft />
      {!(isEditFormOpen && AccordianData.id === editComponentId) && (
        <Right>
          {!isEditFormOpen && !isAddFormOpen && allowDataEditing && (
            <IconWrapper
              onClick={() => {
                setIsEditFormOpen(true);
                setEditComponentId(AccordianData.id);
                setIsMouseOverEditIcon(false);
              }}
              onMouseOver={() => setIsMouseOverEditIcon(true)}
              onMouseLeave={() => setIsMouseOverEditIcon(false)}
            >
              {isMouseOverEditIcon ? (
                <GradientIcons.EditIconHover />
              ) : (
                <GradientIcons.EditIcon />
              )}
            </IconWrapper>
          )}
          <IconWrapper
            onClick={() => setAccordianOpen(!isAccordianOpen)}
            onMouseOver={() => setIsMouseOverArrowIcon(true)}
            onMouseLeave={() => setIsMouseOverArrowIcon(false)}
          >
            {isAccordianOpen ? (
              <UpCircleIcon fillColor={theme.colors[ARROW_ICON_COLOR]} />
            ) : (
              <DownCircleIcon fillColor={theme.colors[ARROW_ICON_COLOR]} />
            )}
          </IconWrapper>
        </Right>
      )}
      {isEditFormOpen && AccordianData.id === editComponentId && (
        <ButtonsWrapper>
          <XDeleteButton onClick={onCancelHandlerEdit} />
          <DeleteWrapper
            onClick={() => {
              setShowDeleteConfirmation(true);
              setIsMouseOverDeleteIcon(false);
            }}
            onMouseOver={() => setIsMouseOverDeleteIcon(true)}
            onMouseLeave={() => setIsMouseOverDeleteIcon(false)}
          >
            <DeleteIconAlt
              color={djobsTheme.colors[DELETE_ICON_COLOR]}
              size={18}
            />
          </DeleteWrapper>
        </ButtonsWrapper>
      )}
      <DeleteModal
        showModal={showDeleteConfirmation}
        setShowModal={setShowDeleteConfirmation}
        onDelete={() => {
          deleteData(AccordianData.id);
          setIsEditFormOpen(false);
        }}
        title={deleteTitle}
      />
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-radius: 16px;
  background-color: transparent;

  padding: 10px 0px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: end;
  align-items: center;
  height: fit-content;
  cursor: pointer;
`;
const IconWrapper = styled.span`
  cursor: pointer;
  height: 25px;
`;
const DeleteWrapper = styled.div`
  cursor: pointer;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
