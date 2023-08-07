// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
// #endregion Local Imports

export const TableContainer = styled.div`
  width: 100%;
  border-spacing: 0;
  margin-top: 11px;

  th {
    background: ${theme.colors.black100};
    color: ${theme.colors.background};
    padding: 13px 0px 13px 13px;

    &:first-child {
      padding-left: 30px;
      border-top-left-radius: 10px;
    }

    &:last-child {
      border-top-right-radius: 10px;
    }
  }
`;

export const ThContent = styled.div<{
  borderColor: string;
}>`
  display: flex;
  height: 29px;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid ${({ borderColor }) => borderColor};
  position: relative;
`;
export const SortHover = styled.div`
  opacity: 0;
  transition: 0.3s;
  top: -5px;
  right: 5px;
  position: absolute;
  width: 100%;
  height: 150%;

  &:hover {
    opacity: 0.6;
  }
  & svg {
    top: 15px;
    right: 13px;
    position: absolute;
  }
`;
export const PaginationContainer = styled.div<{
  bgColor: string;
}>`
  padding-top: 3px;
  background: ${({ bgColor }) => bgColor || theme.gradients.purple100};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;

  button {
    width: 34px;
    height: 34px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-size: 12px;
    font-weight: 900;
    line-height: 11px;
    border: 1.5px;
    border-radius: 0.5rem;
    margin-right: 8px;
    overflow: hidden;
    outline: none;
    text-align: center;
    color: ${theme.colors.black100};
    cursor: pointer;

    &:disabled {
      color: ${theme.colors.black100};
      cursor: not-allowed;
    }

    &:first-child {
      color: ${theme.colors.black80};
    }

    &:nth-child(2) {
      background-color: ${theme.colors.purple80};
      color: ${theme.colors.background};
    }

    &:last-child {
      color: ${theme.colors.black80};
    }
  }
`;

export const PaginationDiv = styled.div<{
  bgColor: string;
}>`
  padding: 12px;
  background: ${({ bgColor }) => bgColor || theme.colors.black100};

  .pagination {
    display: flex;
  }
`;

export const TableBottom = styled.div`
  height: 8px;
  background: ${theme.colors.black20};
  border-radius: 0px 0px 20px 20px;
`;
