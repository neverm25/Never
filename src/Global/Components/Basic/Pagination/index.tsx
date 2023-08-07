import React from "react";
import styled from "styled-components";
import { Pagination, PaginationProps, Grid } from "antd";

import { IPagination } from "./pagination";
import { djobsTheme } from "@DJobs/Theme";

export const PaginationBase = (props: IPagination.IProps) => {
  const screen = Grid.useBreakpoint();
  const {
    itemsPerPage = 10,
    paginationType = "default",
    showQuickJumper = false,
    currentPageNumber = 1,
    totalItems,
    onChange,
  } = props;

  const paginationProps: PaginationProps = {
    total: totalItems,
    onChange,
    showQuickJumper,
    size: paginationType,
    defaultPageSize: itemsPerPage,
    current: currentPageNumber,
    showLessItems: !screen.sm,
  };

  return (
    <PaginationContainer>
      <Pagination {...paginationProps} />
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  .ant-pagination li {
    border-radius: 8px;
    min-height: 38px;
    min-width: 38px;
    border: none;
    margin-bottom: 8px;
  }
  .ant-pagination-options {
    display: none;
  }
  .ant-pagination li button {
    border-radius: 8px;
    min-height: 38px;
    min-width: 38px;
    padding: 1px;
    border: 1px solid rgba(144, 176, 187, 0.213);
    box-shadow: ${djobsTheme.effects.plainHoverState};
    background-color: ${({ theme }) => theme.colors.white100};
    color: ${djobsTheme.colors.black80};
  }
  .ant-pagination li button svg {
    stroke: ${djobsTheme.colors.black80};
    stroke-width: 100px;
  }
  .ant-pagination-item-active {
    text-shadow: ${({ theme }) => theme.effects.textShadow};
  }

  .ant-pagination-item a {
    ${({ theme }) => theme.text.djHeadingThree};
    padding: 0px 0px;
    color: ${djobsTheme.colors.black100};
    font-family: Montserrat;
    display: flex;
    font-weight: 600 !important;
    font-size: 14px;
    line-height: 18px;
    align-items: center;
    flex-direction: column;
    line-height: initial !important;
    justify-content: space-around;
    margin: 0 !important;
    padding: 10px !important;
    box-shadow: ${djobsTheme.effects.plainHoverState};
    height: 38px !important;
    border: 1px solid ${djobsTheme.colors.black05};
    border-radius: 8px;
    background: ${djobsTheme.colors.white100};
  }

  .ant-pagination-item-active a {
    color: ${({ theme }) => theme.colors.white110};
    background: ${djobsTheme.gradients.blue80};
    box-shadow: ${djobsTheme.effects.activeHoverState};
    display: flex;
    font-weight: 800 !important;
    align-items: center;
    outline: 0px solid transparent !important;
    justify-content: space-around;
    margin: 0 !important;
    padding: 10px !important;
    height: 38px !important;
    font-size: 14px;
    line-height: 19px;
    border: 0;
  }
  .ant-pagination-item-link {
    box-shadow: 0px 0px 1.16863px rgba(21, 21, 21, 0.02),
      0px 2.33726px 4.67452px rgba(21, 21, 21, 0.08) !important;
  }

  @media (min-width: 768px) {
    .ant-pagination li {
      min-height: 48px;
      min-width: 48px;
      margin-bottom: 12px;
      border-radius: 12px;
    }
    .ant-pagination li button {
      min-height: 48px;
      min-width: 48px;
      border-radius: 15px;
    }
    .ant-pagination-item a {
      height: 48px !important;
      border-radius: 14.8026px;
    }
    .ant-pagination-item-active a {
      height: 48px !important;
    }
  }
`;
