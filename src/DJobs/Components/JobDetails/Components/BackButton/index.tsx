// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { DJobsTypography } from "@DJobs/Components/Basic";
import { LeftArrowIcon } from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { ArrowContainer, BackButtonContainer } from "./Styles/BackButtonStyles";
// #endregion Local Imports

const BackButton = () => {
  return (
    <BackButtonContainer>
      <ArrowContainer style={{ display: "flex", alignItems: "center" }}>
        <LeftArrowIcon color={djobsTheme.colors.black50} size={20} />
      </ArrowContainer>
      <DJobsTypography styleName={"djLinkSmall"} color="black50">
        BACK
      </DJobsTypography>
    </BackButtonContainer>
  );
};

export default BackButton;
