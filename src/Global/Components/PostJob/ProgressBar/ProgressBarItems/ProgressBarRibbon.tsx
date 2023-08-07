import * as React from "react";
import styled from "styled-components";

import { RibbonIcon } from "@Global/Components/Icons";
import { theme } from "@Global/Theme";

const Ribbon = () => (
  <RibbonFrame>
    <RibbonIcon />
  </RibbonFrame>
);

export default Ribbon;

const RibbonFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 115px;
  width: 252px;
  border-radius: 21px;
  background: ${theme.gradients.purple100};
`;
