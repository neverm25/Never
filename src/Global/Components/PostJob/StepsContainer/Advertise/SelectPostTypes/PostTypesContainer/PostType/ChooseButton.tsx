import * as React from "react";
import styled from "styled-components";

import { POSTTYPE_PADDING, DESCRIPTION_HEIGHT } from ".";
import { IPostTypes } from "../../../PostTypesProps";
import { RadioButton } from "@Global/Components/Basic";
import { theme } from "@Global/Theme";

const ChooseButton = ({
  postName,
  selectedPostTypeName,
  setSelectedPostType,
}: IPostTypes.ChooseButtonProps) => {
  const selectPostType = () => {
    setSelectedPostType(postName);
  };
  return (
    <Button
      style={{
        marginLeft: POSTTYPE_PADDING + "px",
        marginTop: DESCRIPTION_HEIGHT + "px",
      }}
      onClick={selectPostType}
    >
      <ButtonText>Choose </ButtonText>
      <RadioButton
        variant="green"
        checked={postName === selectedPostTypeName}
        size="large"
      />
    </Button>
  );
};
export default ChooseButton;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 33px;
  width: 122px;

  border: none;
  border-radius: 8px;
  background: ${theme.gradients.purple100};

  &:focus-visible {
    outline: 0px solid transparent;
  }
`;

const ButtonText = styled.span`
  ${theme.text.headingFour};
  color: ${theme.colors.black10};
  padding-left: 5px;
`;
