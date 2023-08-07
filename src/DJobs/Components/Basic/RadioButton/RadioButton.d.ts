declare namespace IRadioButton {
  export type size = "small" | "medium" | "large";
  export type variant = "default" | "green";
  export type IProps = {
    checked: boolean;
    size?: size;
    variant: variant;
    disabled?: boolean;
    variant?: variant;
  };
}
export { IRadioButton };
