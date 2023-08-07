import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { DJobsTypography } from "@DJobs/Components/Basic";
import { LeftArrowIcon } from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { BackButtonProps } from "./Backbutton";

export const BackButton = (props: BackButtonProps.props) => {
  const router = useRouter();
  const {
    btnType = "default",
    showBackIcon = true,
    handleClick,
    buttonLabel = "BACK",
    disabled = false,
  } = props;
  const textColor = djobsTheme.colors.black50;

  return (
    <BackButtonContainer
      onClick={() => {
        if (disabled) return;

        if (btnType === "redirectToPreviousPage") {
          router.back();
          return;
        }

        if (handleClick) handleClick();
      }}
      disabled={disabled}
      textColor={textColor}
    >
      {showBackIcon && <LeftArrowIcon color={textColor} size={20} />}
      <DJobsTypography styleName="djLinkSmall" color="black50">
        {buttonLabel}
      </DJobsTypography>
    </BackButtonContainer>
  );
};

const BackButtonContainer = styled.div<{
  disabled: boolean;
  textColor: string;
}>`
  width: fit-content;
  display: flex;
  flex-direction: row;
  row-gap: 15px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  align-items: center;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ textColor }) => textColor};
  }
`;
