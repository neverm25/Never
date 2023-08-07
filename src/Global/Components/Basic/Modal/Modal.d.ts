import React from "react";

declare namespace IModal {
  export interface IProps {
    children: React.ReactNode;
    isModalOpen: boolean;
  }
}

export { IModal };
