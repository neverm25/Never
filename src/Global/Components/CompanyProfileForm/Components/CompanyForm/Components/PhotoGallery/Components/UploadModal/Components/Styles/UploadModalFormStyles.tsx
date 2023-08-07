import { theme } from "@Global/Theme";
import styled from "styled-components";

export const FormInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: 600px) {
    width: 97%;
  }
  @media (min-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ErrorMessage = styled.div`
  ${theme.text.errorMessage};
  width: fit-content;
  height: fit-content;
  margin: 0;
  margin-left: 10px;
`;
export const ButtonContainer = styled.div`
  padding: 15px 0 50px 0;
  display: flex;
  flex-direction: row;
`;
export const SaveButtonWrapper = styled.div`
  padding-right: 20px;
`;
