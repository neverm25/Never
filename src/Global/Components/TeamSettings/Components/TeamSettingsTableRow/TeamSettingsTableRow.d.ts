declare namespace ITeamSettingsTableRow {
  export type RowValues = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    actions: string;
  };
  export interface IProps {
    id: string;
    row?: {
      getRowProps: () => { key?: Key | null | undefined; role?: string };
      values: RowValues;
      original: RowValues;
    };
    tableDataHandler: (string: string) => string;
    updateUserRole?: (id: string, value: string) => void;
  }
}

export { ITeamSettingsTableRow };
