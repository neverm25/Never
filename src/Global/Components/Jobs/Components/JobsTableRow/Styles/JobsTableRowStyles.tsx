import styled from "styled-components";
import { theme } from "@Global/Theme";

export const TableBodyRow = styled.tr<{
  status: string;
}>`
  position: relative;
  background: ${theme.colors.white100};
  box-shadow: ${({ status }) =>
    status === "Draft"
      ? theme.effects.draftRowShadow
      : status === "Expired"
      ? theme.effects.expiredRowShadow
      : theme.effects.activeRowShadow};

  td {
    text-align: start;
    padding: 11px;
    color: ${theme.colors.bodyTextColor};
    border: 1px solid ${theme.colors.background};

    &:first-child {
      padding-left: 30px;
    }
  }

  &:hover {
    box-shadow: ${({ status }) =>
      status === "Active" && theme.effects.rowHoverShadow};
  }
`;

export const StatusDot = styled.div<{
  status: string;
}>`
  display: inline-block;
  padding: 6px;
  background: ${({ status }) =>
    status === "Expired"
      ? theme.gradients.red100
      : status === "Active"
      ? theme.gradients.green100
      : theme.gradients.yellow100};
  border-radius: 100%;
  margin-right: 10px;
`;
