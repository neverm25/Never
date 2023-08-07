import { theme } from "@Global/Theme";
import styled from "styled-components";

export const CompanyFormContainer = styled.div`
  margin: 0 50px;
`;
export const FormInputs = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 600px) {
    width: 90%;
  }
  @media (min-width: 800px) {
    width: 100%;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
export const Left = styled.div`
  width: 90%;
  align-items: stretch;
  @media (min-width: 1000px) {
    width: 45%;
  }
`;
export const Right = styled.div`
  width: 90%;
  @media (min-width: 1000px) {
    width: 55%;
    margin-left: 30px;
  }
`;
export const ButtonWrapper = styled.div`
  padding-bottom: 30px;
`;
export const SaveProfileButtonWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
`;
export const ViewProfileButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WarningWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;

  &:hover .warning-message {
    opacity: 1;
  }
`;

export const WarningMessage = styled.span`
  margin-left: 10px;
  padding: 6px 20px;
  text-align: center;
  color: ${theme.colors.yellow150};
  border: 1px solid ${theme.colors.yellow100};
  border-radius: 6px;
  ${theme.text.captionSmall};

  opacity: 0;
  transition: opacity 300ms ease-in-out;
`;

export const DataWrapper = styled.div`
  width: 80%;
  margin: auto;
  border: 1.5px solid ${theme.colors.red80};
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
`;
