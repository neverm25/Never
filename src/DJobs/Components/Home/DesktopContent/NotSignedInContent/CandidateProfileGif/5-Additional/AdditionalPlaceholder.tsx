import React from "react";
import styled from "styled-components";
import { PlaceHolder } from "../PlaceHolders";

export const AdditionalPlaceholder = () => (
  <Container>
    <PlaceHolder
      type="LightGradient"
      isHeading={false}
      height={8}
      width="22px"
    />
    <PlaceHolder
      type="DarkGradient"
      isHeading={false}
      height={8}
      width="60px"
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
