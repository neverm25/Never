import { DjobsTheme } from "@DJobs/Theme/styled";

declare namespace GradientTextProps {
  export interface props {
    gradient: keyof DjobsTheme.DjobsGradientsWithGlobal;
    styleName: keyof DjobsTheme.DjobsText;
    children: string | number;
    width?: string;
  }
}

export { GradientTextProps };
