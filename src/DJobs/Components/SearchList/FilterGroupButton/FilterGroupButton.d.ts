import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { DjobsFormFieldsProps } from "@DJobs/Components/Basic/DjobsFormFields";

declare namespace FilterGroupButtonProps {
  interface FilterButtonRadio {
    filterType: "radio";
    name: string;
    value: string;
    setFilterValue?: Dispatch<SetStateAction<string>>;
    options: DjobsFormFieldsProps.Option[];
    count: number;
    onSearchFilter: () => void;
  }
  interface FilterButtonCheckbox {
    filterType: "checkbox";
    name: string;
    value: CheckboxValueType[];
    setFilterValue?: Dispatch<SetStateAction<CheckboxValueType[]>>;
    options: DjobsFormFieldsProps.Option[];
    count: number;
    onSearchFilter: () => void;
  }
  type FilterButton = FilterButtonRadio | FilterButtonCheckbox;

  type FilterContentsRadio = FilterButtonRadio & {
    showFilterContents: boolean;
    setShowFilterContents: Dispatch<SetStateAction<boolean>>;
    resetFilterValue: () => void;
    onSearchFilter: () => void;
  };
  type FilterContentsCheckbox = FilterButtonCheckbox & {
    showFilterContents: boolean;
    setShowFilterContents: Dispatch<SetStateAction<boolean>>;
    resetFilterValue: () => void;
  };
  type FilterButtonContent = FilterContentsRadio | FilterContentsCheckbox;
  type filterData = {
    filteredOptionData: (
      | FilterGroupButtonProps.FilterButtonRadio
      | FilterGroupButtonProps.FilterButtonCheckbox
    )[];
    setFilterValue: Dispatch<SetStateAction>;
  };
}

export { FilterGroupButtonProps };
