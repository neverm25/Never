import React from "react";

declare namespace ITable {
  export interface IProps {
    id?: string;
    data: Array<{}>;
    columns: Array<{ Header: string; accessor: string }>;
    customRow: React.ComponentType<P>;
    isPagination: boolean;
    tableDataHandler?: (value: string) => void;
    updateUserRole?: (id: string, value: string) => void;
  }
}

export { ITable };
