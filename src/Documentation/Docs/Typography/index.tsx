// # Global Imports
import React from "react";
import styled from "styled-components";
// #end Global Imports

// # Local Imports
import { ITypography } from "./Typography";
// #end Local Imports
import { theme } from "@Global/Theme";

export const TypographyContainer = (props: ITypography.IProps) => {
  //
  const { types } = props;

  const Wrapper = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    /* flex-direction: column; */
    padding-left: 0;
    border: 1px solid ${theme.colors.black90};
    border-radius: 10px;
    width: 100%;

    margin: 10px;
    padding: 20px;
  `;

  const BorderWrapper = styled.div`
    display: flex;
  `;

  const TextStyle = styled.div`
    min-width: 70%;
  `;

  const TypoInfo = styled.div`
    font-family: ${theme.text.mainFont};
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    width: 29%;
    padding-left: 20px;
    padding-right: 20px;
    min-height: 80px;
    border-left: 2px solid ${theme.colors.black100};

    p {
      color: ${theme.colors.black100};
      font-weight: 700;
      font-size: 13px;

      span {
        font-weight: 300;
        margin-left: 10px;
      }
    }
  `;

  return (
    <Wrapper>
      <BorderWrapper>
        <TextStyle>{props.children}</TextStyle>
        <TypoInfo>
          <p>
            {theme.text[types].name}
            <span></span>
          </p>
          <p>
            Text Size:
            <span>{theme.text[types].fontSize}</span>
          </p>

          <p>
            styled:
            <span>theme.text.{types}</span>
          </p>
        </TypoInfo>
      </BorderWrapper>
    </Wrapper>
  );
};
