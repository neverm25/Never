declare namespace ISwitchBase {
  export interface IProps {
    label?: string;
    hasLabel?: boolean;
    errorMsg?: string;
    hasError?: boolean;
    checkedProp: boolean;
    setCheckedProp: (checked: boolean) => void;
    defaultChecked?: boolean;
  }
}

export { ISwitchBase };
