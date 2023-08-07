declare namespace ILinkButton {
  export type buttonvariant = "forgotPassword" | "cancel" | "closeAccount";

  export interface IProps {
    variant: buttonvariant;
    children: string;
    onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }
}

export { ILinkButton };
