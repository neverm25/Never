import React from "react";
import styled from "styled-components";
import RibbonIcon from "./RibbonIcon";

const BestValueIcon = () => {
  return (
    <BestValueContainer>
      <RibbonContainer>
        <RibbonIcon />
      </RibbonContainer>
      <BestValue>{"Best Value"}</BestValue>
    </BestValueContainer>
  );
};
export default BestValueIcon;

const BestValueContainer = styled.div`
  display: flex;
  flex-direction: row;

  height: 27.2px;
  width: 102px;
  background: linear-gradient(211.29deg, #ffdd75 18.9%, #ffb23f 156.93%);
  border-radius: 10.5778px;
`;

const BestValue = styled.div`
  position: relative;
  align-self: center;
  left: 5px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 10.5778px;
  line-height: 14px;

  color: #985b00;
`;

const RibbonContainer = styled.div`
  transform: rotate(-12deg) scale(0.4);
  width: 25px;
  position: relative;
  top: -2px;
  left: -8px;
  filter: drop-shadow(-3px -2px 5px rgba(0, 0, 0, 0.3));
`;
