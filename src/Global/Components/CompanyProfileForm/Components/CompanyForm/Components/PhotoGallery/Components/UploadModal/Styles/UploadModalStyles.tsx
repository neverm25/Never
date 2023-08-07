import { theme } from "@Global/Theme";
import styled from "styled-components";

export const ModalContainer = styled.div`
  min-height: 475px;
  width: calc(100% - 40px);

  border: 1px solid ${theme.colors.black20};
  border-radius: 10px;
  box-shadow: ${theme.effects.boxShadow};
  background-color: ${theme.colors.white100};
  margin: 20px;
  padding: 20px;

  @media (min-width: 800px) {
    width: 800px;
  }
`;
export const Title = styled.div`
  ${theme.text.headingThree};
`;
