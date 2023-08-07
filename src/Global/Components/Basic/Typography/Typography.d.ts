import { GlobalTheme } from "@Global/Theme/styled";

declare namespace ITypography {
  export interface IProps {
    styleName?: keyof GlobalTheme.Text;
    color?: keyof GlobalTheme.Colors;
    children?: string;
    width?: string;
  }
}

export { ITypography };
