import { theme } from "@Global/Theme";
import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: 10px;
  width: 100%;

  @media (min-width: 800px) {
    width: 480px;
  }
`;

export const Header = styled.div`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.black100};
  border-radius: 13px 13px 0 0;

  height: 80px;
  padding: 10px;

  @media (min-width: 800px) {
    height: 100px;
    padding: 15px;
  }
`;

export const FormContent = styled.div`
  background-color: ${theme.colors.white100};
`;

export const FormContentWrapper = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
`;

export const Footer = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100px;
  background-color: ${theme.gradients.purple100};
  border-radius: 0 0 13px 13px;

  @media (min-width: 800px) {
    height: 120px;
  }
`;
