import React from "react";

declare namespace IModal {
  export interface IProps {
    children: React.ReactNode;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
}

export { IModal };
