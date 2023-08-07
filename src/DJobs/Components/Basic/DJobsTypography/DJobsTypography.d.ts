import { DjobsTheme } from "@DJobs/Theme/styled";
declare namespace ITypography {
  interface TextStyleProps {
    styleName: keyof DjobsTheme.DjobsText;
    color?: keyof DjobsTheme.DjobsColorsWithGlobal;
  }
  interface IProps {
    styleName: keyof DjobsTheme.DjobsText;
    color?: keyof DjobsTheme.DjobsColorsWithGlobal;
    children: string | Moment;
    showTextShadow?: boolean;
    isLink?: boolean;
    isLineBreakAllowed?: boolean;
  }
}

export { ITypography };
