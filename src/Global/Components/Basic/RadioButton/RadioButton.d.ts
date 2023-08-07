declare namespace IRadioButton {
  export type size = "small" | "medium" | "large";
  export type variant = "default" | "green";
  export type IProps = {
    checked: boolean;
    variant?: variant;
    size?: size;
    disabled?: boolean;
  };
}
export { IRadioButton };
