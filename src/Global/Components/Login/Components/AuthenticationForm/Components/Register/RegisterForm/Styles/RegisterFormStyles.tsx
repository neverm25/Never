import { theme } from "@Global/Theme";
import styled from "styled-components";

export const Title = styled.h4`
  width: fit-content;
  margin: auto;
  padding: 20px 0 5px 0;
  ${theme.text.headingFour};
`;
export const RegisterButtonWrapper = styled.div`
  padding: 40px 0;
`;

export const TermsAndConditionsWrapper = styled.div`
  padding-top: 10px;
`;
export const Label = styled.span`
  padding-left: 10px;
  theme.text.bodyRegular;
`;
export const Link = styled.a`
  theme.text.interactiveTextRegular 
  &:hover {
    theme.text.interactiveTextHover 
  }
`;
