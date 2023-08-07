// #region Global Imports
import React from "react";
import { theme } from "@Global/Theme";
// #endregion Global Imports

// #region Local Imports
import { ICard } from "./card";
import { CardContainer } from "./Styles/CardStyles";
// #endregion Local Imports

const Card: React.FunctionComponent<ICard.IProps> = props => {
  const {
    bgColor = theme.colors.white100,
    width = "auto",
    height = "97px",
    borderRadius = "20px",
  } = props;

  return (
    <CardContainer
      width={width}
      height={height}
      bgColor={bgColor}
      borderRadius={borderRadius}
    >
      {props.children}
    </CardContainer>
  );
};

export { Card };
