declare namespace ICheckBox {
  export interface IProps {
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  }
}

export { ICheckBox };
