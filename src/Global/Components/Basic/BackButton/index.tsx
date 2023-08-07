import React from "react";
import styled from "styled-components";

import { BackButtonProps } from "./Backbutton";
import { theme } from "@Global/Theme";
import { LeftArrowIcon } from "@Global/Components/Icons";

export const BackButton = (props: BackButtonProps.props) => {
  const { handleClick, buttonLabel = "BACK", isSkip = false } = props;
  return (
    <BackButtonContainer onClick={handleClick}>
      {!isSkip && <LeftArrowIcon color={theme.colors.black50} size={20} />}
      <PreviousStepLink>
        {isSkip ? "SKIP FOR NOW" : buttonLabel}
      </PreviousStepLink>
    </BackButtonContainer>
  );
};

const BackButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 15px;
  cursor: pointer;
  align-items: center;
`;

const PreviousStepLink = styled.a`
  ${theme.text.interactiveTextRegular};
  color: ${theme.colors.black80};
  text-transform: uppercase;
  width: fit-content;

  &:hover {
    ${theme.text.interactiveTextHover};
    color: ${theme.colors.blue100};
    text-transform: uppercase;
  }
`;
