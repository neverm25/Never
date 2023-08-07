// #Global Imports
import * as React from "react";
import { Box } from "reflexbox";
import styled from "styled-components";
// #Global Imports

// #region Local Imports
import { Card } from "@Global/Components/Basic/Card";
import { theme } from "@Global/Theme";
import { IModal } from "./Modal";
// #region Local Imports

export const Modal = ({ children, isModalOpen }: IModal.IProps) => {
  return (
    <BackgroundOverlay isModalOpen={isModalOpen}>
      <ModalContainer>
        <Card
          bgColor={theme.colors.white100}
          width={"inherit"}
          height={"fit-content"}
        >
          <Box width="100%" py="94px" px="73px">
            {children}
          </Box>
        </Card>
      </ModalContainer>
    </BackgroundOverlay>
  );
};

const BackgroundOverlay = styled.div<{
  isModalOpen: boolean;
}>`
  position: fixed;
  width: 100%;
  display: ${({ isModalOpen }) => (isModalOpen ? "flex" : "none")};
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 32, 45, 0.8);
  z-index: 2;
  align-items: center;
  max-height: 100%;
  overflow: auto;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: top-to-bottpm-slider 0.3s ease-out;
  width: 600px;

  @keyframes top-to-bottpm-slider {
    0% {
      top: -100px;
    }

    100% {
      top: 100px;
    }
  }
`;
