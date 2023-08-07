import { SearchedJobsList } from "@Redux/slices/SearchedJobsList/SearchedJobsList";
declare namespace ITagsContainer {
  export interface IProps {
    data: SearchedJobsList.filterOption[];
    gradientTag: boolean;
  }
}

export { ITagsContainer };
