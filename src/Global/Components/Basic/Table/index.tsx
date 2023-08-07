// #region Global Imports
import * as React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { Flex } from "reflexbox";
// #endregion Global Imports

// #region Local Imports
import { Typography } from "@Global/Components/Basic/Typography";
import { theme } from "@Global/Theme";
import {
  AngleLeftIcon,
  AngleRightIcon,
} from "@Global/Components/Icons/Unicons";
import { GradientSortAscendingIcon } from "@Global/Components/Icons";
import { ITable } from "./Table";
import {
  PaginationContainer,
  PaginationDiv,
  TableBottom,
  TableContainer,
  ThContent,
  SortHover,
} from "./Styles/TableStyles";
// #endregion Local Imports

export const Table: React.FunctionComponent<ITable.IProps> = ({
  id,
  data,
  columns,
  customRow: CustomRow,
  isPagination,
  tableDataHandler,
  updateUserRole,
}): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  }: any = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  return (
    <div>
      <TableContainer>
        <table style={{ width: "100%" }} {...getTableProps()}>
          <thead>
            {headerGroups.map(
              (
                headerGroup: {
                  getHeaderGroupProps: () => JSX.IntrinsicAttributes &
                    React.ClassAttributes<HTMLTableRowElement> &
                    React.HTMLAttributes<HTMLTableRowElement>;
                  headers: any[];
                },
                index
              ) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={index}
                    >
                      <ThContent borderColor={`${theme.colors.black90}`}>
                        <Typography styleName="tableRowHdr">
                          {column.render("Header")}
                        </Typography>
                        {column.canSort && (
                          <Flex mr="18px">
                            {column.isSorted ? (
                              <GradientSortAscendingIcon
                                isDscending={column.isSortedDesc}
                              />
                            ) : (
                              <SortHover>
                                <GradientSortAscendingIcon
                                  isDscending={column.isSortedDesc}
                                />
                              </SortHover>
                            )}
                          </Flex>
                        )}
                      </ThContent>
                    </th>
                  ))}
                </tr>
              )
            )}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: any, index) => {
              prepareRow(row);

              return (
                <CustomRow
                  id={id}
                  row={row}
                  key={index}
                  tableDataHandler={tableDataHandler}
                  updateUserRole={updateUserRole}
                />
              );
            })}
          </tbody>
        </table>
      </TableContainer>
      {isPagination ? (
        <PaginationContainer bgColor={`${theme.gradients.purple100}`}>
          <PaginationDiv bgColor={`${theme.colors.black100}`}>
            <div className="pagination">
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <AngleLeftIcon
                  color={
                    canPreviousPage
                      ? `${theme.colors.bodyTextColor}`
                      : `${theme.colors.black100}`
                  }
                />
              </button>
              <button onClick={() => previousPage()} disabled={true}>
                {pageIndex + 1}
              </button>
              {canNextPage && (
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                  {pageIndex + 2}
                </button>
              )}
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                <AngleRightIcon
                  color={
                    canNextPage
                      ? `${theme.colors.bodyTextColor}`
                      : `${theme.colors.black100}`
                  }
                />
              </button>
            </div>
          </PaginationDiv>
        </PaginationContainer>
      ) : (
        <TableBottom />
      )}
    </div>
  );
};
