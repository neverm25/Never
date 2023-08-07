import { theme } from "@Global/Theme";
import styled from "styled-components";

export const TableBodyRow = styled.tr<{
  rowBgColor: string;
}>`
  position: relative;
  background: ${({ rowBgColor }) => rowBgColor};
  box-shadow: ${theme.effects.activeRowShadow};

  td {
    text-align: start;
    height: 55px;
    padding-left: 13px;
    color: ${theme.colors.bodyTextColor};
    border: 1px solid ${theme.colors.background};

    &:first-child {
      padding-left: 30px;
    }
  }
`;
