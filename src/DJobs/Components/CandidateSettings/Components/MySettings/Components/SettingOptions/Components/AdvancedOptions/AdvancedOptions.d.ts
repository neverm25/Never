import React from "react";

declare namespace IAdvancedOptionsProps {
  interface IProps {
    closeAccountPhase: boolean;
    setCloseAccountPhase: Dispatch<React.SetStateAction<boolean>>;
  }
}

export { IAdvancedOptionsProps };
