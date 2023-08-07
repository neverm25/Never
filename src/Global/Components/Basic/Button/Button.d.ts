declare namespace IButton {
  type buttonCategory = "main" | "icon" | "dropdown";
  export type mainButtonvariant =
    | "plain"
    | "success"
    | "cancel"
    | "primary"
    | "disabled";
  export type iconButtonvariant = "plain" | "success" | "cancel" | "disabled";
  export type dropDownButtonvariant = "plain" | "primary" | "disabled";

  export interface IconButtonProps {
    variant: iconButtonvariant;
    prefixIcon?: React.ReactElement;
  }

  export type DropDownButtonProps = {
    variant: dropDownButtonvariant;
    prefixIcon?: React.ReactElement;
    suffixIcon?: React.ReactElement;
  };

  export interface MainButtonProps {
    variant: mainButtonvariant;
  }

  export interface IProps {
    variant: mainButtonvariant;
    buttonCategory: buttonCategory;
    btnType?: "button" | "submit" | "reset";
    children?: React.ReactNode;
    prefixIcon?: React.ReactElement;
    suffixIcon?: React.ReactElement;
    onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }
}

export { IButton };
