import React, { useContext } from "react";
import styled from "styled-components";

import { theme } from "@Global/Theme";
import { AccordianContext } from ".";

export const AccordianEdit = () => {
  const { AccordianEditProps } = useContext(AccordianContext);

  return (
    <AccordianEditContainer>
      <Line />
      <AccordianEditProps.EditComponent />
    </AccordianEditContainer>
  );
};

const AccordianEditContainer = styled.div`
  background: transparent;
  margin: 10px;
  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;
const Line = styled.div`
  margin: 10px 0;
  border: 1px solid ${theme.colors.black20};
`;
