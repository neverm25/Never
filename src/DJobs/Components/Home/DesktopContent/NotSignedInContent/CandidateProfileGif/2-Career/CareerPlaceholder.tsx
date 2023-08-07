import React from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { PlaceHolder } from "../PlaceHolders";

export const CareerPlaceHolder = () => (
  <Container>
    <Left>
      <PlaceHolder
        isHeading={false}
        width="100px"
        height={10}
        type="DarkGradient"
      />
      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <PlaceHolder
          isHeading={false}
          width="10px"
          height={10}
          type="LightGradient"
        />

        <PlaceHolder
          isHeading={false}
          width="60px"
          height={10}
          type="LightGradient"
        />
      </div>
      <PlaceHolder
        isHeading={false}
        width="100px"
        height={10}
        type="LightGradient"
      />
    </Left>
    <Right>
      <RightButton />
      <RightButton />
    </Right>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: ${djobsTheme.colors.black10};
  border-radius: 8px;
  padding: 9px 17px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-grow: 1;
`;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 50px;
`;
const RightButton = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 6px;
  background: ${djobsTheme.gradients.purple100};
`;
