import { DjobsTheme } from "@DJobs/Theme/styled";

declare namespace TextWithLeadingEllipsisProps {
  export type Props = {
    width?: string;
    maxLineLength?: number;
    content: string;
    styleName: keyof DjobsTheme.DjobsText;
    color: keyof DjobsTheme.DjobsColorsWithGlobal;
  };
}
export { TextWithLeadingEllipsisProps };
