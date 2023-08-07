import React from "react";
import styled from "styled-components";

import { AdditionalContainer } from "../Styles/AdditionalStyle";
import { AdditionalView } from "./1_Additional";

export const AdditionalDetailView = () => {
  return (
    <AdditionalDetailContainer>
      <AdditionalContainer>
        <AdditionalView />
      </AdditionalContainer>
    </AdditionalDetailContainer>
  );
};

const AdditionalDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
