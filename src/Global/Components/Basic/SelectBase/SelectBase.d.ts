declare namespace ISelectBase {
  export interface IProps {
    value: string;
    placeholder?: string;
    defaultValue?: string;
    label?: string;
    hasLabel?: boolean;
    name?: string;
    hasError?: boolean;
    errorMsg?: string;
    disabled?: boolean;
    width?: string;
    options: Array<selectOption>;
    onSelect?: (string) => void;
    onBlur?: (string) => void;
  }
  export interface selectOption {
    label: string;
    value: string;
  }
  export interface Props {
    o?: {
      width: string;
      hasError?: boolean;
    };
  }
}

export { ISelectBase };
