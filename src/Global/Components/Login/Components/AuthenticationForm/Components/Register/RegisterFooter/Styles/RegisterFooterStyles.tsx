import { theme } from "@Global/Theme";
import styled from "styled-components";

export const RegisterFooterTitle = styled.h4`
  ${theme.text.subTitleTwo};
  color: ${theme.colors.white100};
  padding: 10px 0;
  margin: 0;

  @media (min-width: 800px) {
    padding: 15px 0;
  }
`;
export const LoginButtonWrapper = styled.div`
  margin: 0;
`;
