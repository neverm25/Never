import React from "react";
import styled from "styled-components";

import { DJobsTypography } from "../index";
import { DjobsButton } from "@DJobs/Components/Basic";
import { DeleteModalProps } from "./DeleteModal";
import { disablePageScroll, enablePageScroll } from "@Pages/_app";

export const DeleteModal = ({
  showModal,
  setShowModal,
  onDelete,
  deletedItemName = "item",
  title = `Are you sure you want to delete this${" " + deletedItemName}?`,
}: DeleteModalProps.IProps) => {
  showModal && disablePageScroll();
  return (
    <Container>
      <BackgroundOverlay isModalOpen={showModal}>
        <ModalContainer width="282px">
          <DJobsTypography styleName={"djModal"} color="black100">
            {title}
          </DJobsTypography>
          <ModalButtonsContainer>
            <DjobsButton.Actions
              variant="Close"
              label="delete"
              onClick={() => {
                onDelete();
                enablePageScroll();
                setShowModal(false);
              }}
            />
            <DjobsButton.Actions
              variant="Cancel"
              label="cancel"
              onClick={() => {
                setShowModal(false);
                enablePageScroll();
              }}
            />
          </ModalButtonsContainer>
        </ModalContainer>
      </BackgroundOverlay>
    </Container>
  );
};

const BackgroundOverlay = styled.div<{
  isModalOpen: boolean;
}>`
  position: fixed;
  z-index: 10;
  width: 100%;
  display: ${({ isModalOpen }) => (isModalOpen ? "flex" : "none")};
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 32, 45, 0.8);
  align-items: center;
  max-height: 100%;
  overflow: auto;
`;
const ModalContainer = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: center;
  background: #ffffff;
  padding: 50px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 8px;

  animation: top-to-bottpm-slider 0.3s ease-out;
  max-width: ${({ width }) => (width ? width : "600px")};

  @keyframes top-to-bottpm-slider {
    0% {
      top: -100px;
    }

    100% {
      top: 100px;
    }
  }
`;
const Container = styled.div`
  max-width: 282px;
`;
const ModalButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  justify-content: center;
  align-items: center;
`;
