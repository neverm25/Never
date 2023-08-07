import { IIcons } from "@Global/Components/Icons/icons";
import { DjobsTheme } from "@DJobs/Theme/styled";

declare namespace IconValueProps {
  export interface Props {
    Icon: (props: IIcons.UniconsProps) => JSX.Element;
    value: string;
    isGradientIcon?: boolean;
    textColor?: keyof DjobsTheme.DjobsColorsWithGlobal;
    iconColor?: keyof DjobsTheme.DjobsColorsWithGlobal;
    textStyleName?: keyof DjobsTheme.DjobsText;
    IconSize?: number;
  }
}
export { IconValueProps };
