import { theme } from "@Global/Theme";
import styled from "styled-components";

export const LoginFooterTitle = styled.h4`
  ${theme.text.subTitleTwo};
  color: ${theme.colors.white100};
  padding: 10px 0;
  margin: 0;

  @media (min-width: 800px) {
    padding: 15px 0;
  }
`;
export const RegisterButtonWrapper = styled.div`
  margin: 0;
`;
