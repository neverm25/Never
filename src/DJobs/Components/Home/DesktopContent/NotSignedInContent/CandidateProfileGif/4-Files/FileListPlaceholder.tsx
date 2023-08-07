import { djobsTheme } from "@DJobs/Theme";
import React from "react";
import styled from "styled-components";
import { PlaceHolder } from "../PlaceHolders";

export const FileListPlaceholder = () => (
  <Container>
    <Left>
      <PlaceHolderWrapper>
        <PlaceHolder
          type="LightGradient"
          height={14}
          width="13px"
          isHeading={false}
        />
        <PlaceHolder type="Light" height={9} width="89px" isHeading={false} />
      </PlaceHolderWrapper>
      <PlaceHolderWrapper>
        <PlaceHolder
          type="LightGradient"
          height={9}
          width="22px"
          isHeading={false}
        />
        <PlaceHolder
          type="LightGradient"
          height={9}
          width="28px"
          isHeading={false}
        />
      </PlaceHolderWrapper>
    </Left>
    <DotPlaceHolder />
    <DotPlaceHolder />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 34px;
  background: ${djobsTheme.colors.black10};
  box-shadow: ${djobsTheme.effects.modals};
  border-radius: 6px;
  padding: 0 30px;
`;
const PlaceHolderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;
const DotPlaceHolder = styled.div`
  width: 14px;
  height: 17px;
  background: ${djobsTheme.colors.black50};
  border-radius: 2px;
`;
