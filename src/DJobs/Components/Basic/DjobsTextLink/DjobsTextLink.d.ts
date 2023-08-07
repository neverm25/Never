import { DjobsTheme } from "@DJobs/Theme/styled";

declare namespace DJobsTextLinkProps {
  export interface IProps {
    styleName: keyof DjobsTheme.DjobsText;
    children: string;
    color?: keyof DjobsTheme.DjobsColorsWithGlobal;
    showTextShadow?: boolean;
    onClick: () => void;
  }
}

export { DJobsTextLinkProps };
