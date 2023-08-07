// #Global Imports
import React from "react";
import styled from "styled-components";
// #Global Imports

// #region Local Imports
import { IModal } from "./Modal";
// #region Local Imports

export const Modal = ({
  children,
  isModalOpen,
  setIsModalOpen,
}: IModal.IProps) => {
  const ref = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isModalOpen && ref.current && !ref?.current?.contains(e.target)) {
        setIsModalOpen(false);
        document.querySelector("body").style.overflow = "auto";
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <BackgroundOverlay isModalOpen={isModalOpen}>
      <div ref={ref}>{children}</div>
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
  align-items: center;
  padding-bottom: 20px;
  top: 0px;
  bottom: 0;
  padding-top: 67px;
  background: rgba(30, 32, 45, 0.6);
  z-index: 10;
  max-height: 100%;
  overflow: auto;
`;
