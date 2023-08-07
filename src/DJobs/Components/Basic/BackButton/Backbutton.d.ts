import React from "react";

declare namespace BackButtonProps {
  type btnType = "default" | "redirectToPreviousPage";
  export interface props {
    btnType?: btnType;
    showBackIcon?: boolean;
    handleClick?: MouseEventHandler<HTMLDivElement>;
    buttonLabel?: string;
    disabled?: boolean;
  }
}

export { BackButtonProps };
