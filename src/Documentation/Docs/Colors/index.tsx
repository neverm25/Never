// #region Global Imports
import React from "react";
import styled from "styled-components";

// #endregion Global Imports

// #region Local Imports
import { IColors } from "./Colors";
// #endregion Local Imports
import { theme } from "@Global/Theme";

interface Props {
  o?: {
    color: string;
  };
}

export const Colors: React.FunctionComponent<IColors.IProps> = props => {
  const { colorName = ["blue100"] } = props;

  const Wrapper = styled.div`
    display: flex;
    flexwrap: wrap;
    paddingleft: 0;
  `;
  const ColorBorder = styled.div`
    border: 1px solid ${theme.colors.black90};
    border-radius: 10px;
    width: 100%;
    display: flex;
    margin: 10px;
    padding: 10px;
  `;

  const ColorSwatch = styled.div<Props>`
    color: ${theme.colors.white100};
    padding: 5px 10px;
    font-weight: 800;
    font-size: 10px;
    text-align: center;
    line-height: 25px;
    background: ${props => theme.colors[`${props.o?.color}`]}};
    border: 5px solid ${theme.colors.white100};
    box-shadow: 0px 6px 4px -1px rgba(0, 0, 0, 0.1),
      0px 4px 2px -1px rgba(0, 0, 0, 0.06),
      inset 0px -1px 3px 1px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    width: 5%;
    min-height: 80px;

    p {
      color: ${props =>
        props.color === "background" || props.color === "white"
          ? "black"
          : "white"};
    }
  `;

  const ColorInfo = styled.div`
    font-family: ${theme.text.mainFont};
    width: 70%;
    padding-left: 20px;
    min-height: 80px;

    p {
      color: ${theme.colors.black100};
      font-weight: 700;
      font-size: 11px;

      span {
        font-weight: 300;
        margin-left: 10px;
      }
    }
  `;

  return (
    <Wrapper>
      {colorName.map((color, i) => {
        return (
          <ColorBorder key={i}>
            <ColorSwatch o={{ color: color }}></ColorSwatch>
            <ColorInfo>
              <p>
                Name:<span>{color}</span>
              </p>
              <p>
                Hex Value:
                <span>{theme.colors[`${color}`]}</span>
              </p>

              <p>
                styled:
                <span>theme.colors.{color}</span>
              </p>
            </ColorInfo>
          </ColorBorder>
        );
      })}
    </Wrapper>
  );
};
