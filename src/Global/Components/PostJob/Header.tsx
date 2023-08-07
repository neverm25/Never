import { theme } from "@Global/Theme";
import * as React from "react";
import styled from "styled-components";

type HeaderProps = { regularText: string; boldText: string };

const Header = ({ regularText, boldText }: HeaderProps) => (
  <HeaderContainer>
    <Regular>{regularText}</Regular>
    <Bold>{boldText}</Bold>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  color: ${theme.colors.black100};
`;

const Regular = styled.span`
  ${theme.text.headingTwo},
`;
const Bold = styled.span`
  font-family: Montserrat;
  font-size: 33px;
  font-style: normal;
  font-weight: 900;
  line-height: 38px;
  letter-spacing: 1.2999999523162842px;
  text-align: left;
`;
