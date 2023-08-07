import * as React from "react";
import styled from "styled-components";

import { IPostTypes } from "../../../PostTypesProps";
import { BestValueIcon } from "@Global/Components/Icons/";
import ChooseButton from "./ChooseButton";
import { theme } from "@Global/Theme";

const PostType = ({
  type,
  showBestValueTag,
  selectedPostTypeName,
  setSelectedPostType,
}: IPostTypes.PostTypeProps) => {
  const currency = "$";
  return (
    <Container color={type.containerBackgroundColor}>
      <Title color={type.titleColor}>{type.postName}</Title>

      <PriceContainer>
        {showBestValueTag ? <BestValueIcon /> : null}
        <Price color={type.priceColor} leftMargin={showBestValueTag ? 10 : 0}>
          {currency}
          {type.price}
        </Price>
      </PriceContainer>

      <Description color={type.descriptionColor}>
        {type.description}
      </Description>
      <ChooseButton
        postName={type.postName}
        selectedPostTypeName={selectedPostTypeName}
        setSelectedPostType={setSelectedPostType}
      >
        Choose
      </ChooseButton>
    </Container>
  );
};
export default PostType;

export const POSTTYPE_CONTAINER_HEIGHT = 236;
export const POSTTYPE_CONTAINER_WIDTH = 280;
export const POSTTYPE_PADDING = 30;

const Container = styled.div<{ color: string }>`
  height: ${POSTTYPE_CONTAINER_HEIGHT}px;
  width: ${POSTTYPE_CONTAINER_WIDTH}px;
  border-radius: 12px;
  background: ${props => props.color};
  box-shadow: 0px 6px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 2px -1px rgba(0, 0, 0, 0.06),
    inset 0px -1px 3px 1px rgba(0, 0, 0, 0.2);

  margin: 10px 0;
`;

const Title = styled.h1<{ color: string }>`
  padding-left: ${POSTTYPE_PADDING}px;
  padding-top: ${POSTTYPE_PADDING}px;
  margin-bottom: 10px;
  ${theme.text.headingOne};

  text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1), 0px 4px 2px rgba(0, 0, 0, 0.06);
  background-color: #000000;
  background: ${props => props.color};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${POSTTYPE_PADDING}px;
`;

const Price = styled.h2<{ color: string; leftMargin: number }>`
  padding-left: ${props => props.leftMargin}px;

  ${theme.text.headingTwo};
  margin-bottom: 10px;
  background-color: #000000;
  background: ${props => props.color};
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`;

export const DESCRIPTION_HEIGHT = 25;
export const DESCRIPTION_WIDTH = 242;

const Description = styled.div<{ color: string }>`
  padding-left: ${POSTTYPE_PADDING}px;
  width: ${DESCRIPTION_WIDTH}px;
  height: ${DESCRIPTION_HEIGHT}px;

  ${theme.text.bodySmall};
  font-weight: 900;
  color: ${props => props.color};
  margin-bottom: 8px;
`;
