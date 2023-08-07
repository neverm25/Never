import React from "react";

declare namespace BackButtonProps {
  export interface props {
    handleClick: MouseEventHandler<HTMLDivElement>;
    buttonLabel?: string;
    isSkip?: Boolean;
  }
}

export { BackButtonProps };
