import { DjobsTheme } from "@DJobs/Theme/styled";

declare namespace ListBaseProps {
  export interface Props {
    ListData: string[];
    styleName: keyof DjobsTheme.DjobsText;
    color: keyof DjobsTheme.DjobsColorsWithGlobal;
    Columns?: number;
  }
}
export { ListBaseProps };
