import { DjobsTheme } from "@DJobs/Theme/styled";
import { Dispatch } from "react";

declare namespace PillsProps {
  type editProps = {
    isEdit: boolean;
    setData: (index: number) => void;
  };
  interface props {
    heading?: string;
    data: string[];
    styleName?: keyof DjobsTheme.DjobsText;
    pillColor: keyof DjobsTheme.DjobsColorsWithGlobal;
    textColor?: keyof DjobsTheme.DjobsColorsWithGlobal;
    editProps?: editProps;
  }
}

export { PillsProps };
