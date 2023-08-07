declare namespace IPagination {
  export interface IProps {
    totalItems: number;
    onChange?: (page: number, pageSize: number) => void;
    currentPageNumber?: number;
    showQuickJumper?: boolean;
    paginationType?: "default" | "small";
    itemsPerPage?: number;
  }
}

export { IPagination };
