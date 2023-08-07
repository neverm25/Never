// #Global Imports
import styled from "styled-components";
// #endGlobal Imports

export const LegalMainContainer = styled.div`
  margin: 47px 20px 0px 26px;

  @media (min-width: 1200px) {
    margin: 39px 111px 44px 48px;
  }
  @media (min-width: 1600px) {
    margin: 39px 48px 44px 48px;
  }
`;

export const LegalSubHeadingContainer = styled.div`
  margin: 18px 0px;

  @media (min-width: 1200px) {
    margin: 28px 0px;
  }
`;

export const OrderList = styled.ol`
  counter-reset: item;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: Montserrat;
`;
export const ListItem = styled.li`
  display: table;
  counter-increment: item;
  word-break: break-word;

  margin-bottom: 0.6em;
  &:before {
    content: counters(item, ".") ". ";
    display: table-cell;
    padding-right: 0.6em;
    word-break: initial;
  }
  li {
    margin: 5px 0px;
    &:before {
      margin: 0;
    }
    &:after {
      word-break: break-word;
    }
  }
`;

export const BoldFontContainer = styled.div`
  font-weight: bold;
`;
export const NormalFontContainer = styled.div`
  font-weight: normal;
`;
export const TableContainer = styled.table`
  border: 1px solid #bfbfbf;
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  table-layout: fixed;
  @media screen and (max-width: 768px) {
    border: 0;
  }
`;

export const TableHeaderContainer = styled.thead`
  @media screen and (max-width: 768px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
export const TableRow = styled.tr`
  border: 1px solid #bfbfbf;
  padding: 0.35em;
  @media screen and (max-width: 768px) {
    display: block;
    border: none;
    padding: 0;
    &:first-child {
      border-top: 1px solid #bfbfbf;
    }
  }
`;
export const TableHeading = styled.th`
  border: 1px solid white;
  background-color: #bfbfbf;
  text-transform: uppercase;
`;
export const TableData = styled.td`
  border: 1px solid #bfbfbf;
  @media screen and (max-width: 768px) {
    border-top: none;

    display: block;
    // text-align: right;
    &:before {
      content: attr(data-label);
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
export const MainCondition = styled.ol`
  li {
    margin: 10px;
    width: fit-content;
  }
`;
export const UnOrderList = styled.ul`
  padding: 20px;
  li {
    margin: 10px 0px;
    width: fit-content;
  }
`;
export const LinkTagContainer = styled.a`
  width: fit-content;
  text-decoration: underline;
  margin: 5px;
`;
export const LawfulBasisContainer = styled.div`
  word-break: initial;
  display: flex;
  gap: 5px;
`;
