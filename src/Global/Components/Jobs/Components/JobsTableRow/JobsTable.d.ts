declare namespace IJobsTableRow {
  export type RowValues = {
    status: string;
    datePosted: string;
    jobTitle: string;
    location: string;
    unread: string;
    applied: string;
    endDate: string;
  };
  export interface IProps {
    row?: {
      getRowProps: () => { key?: Key | null | undefined; role?: string };
      values: RowValues;
    };
  }
}

export { IJobsTableRow };
