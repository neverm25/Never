//# Local Imports
import { BuildingIcon } from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
//end Local Imports

export const settingOptionsData = [
  {
    title: "Email Updates",
    titleIcon: <BuildingIcon color={djobsTheme.colors.black100} size={17} />,
    subTitle: "Type of updates and messages you receive",
    optionName: "emailUpdate",
  },
  {
    title: "Update password",
    titleIcon: <BuildingIcon color={djobsTheme.colors.black100} size={17} />,
    subTitle: "Create a new password for your account",
    optionName: "resetPassword",
  },
  {
    title: "other",
    titleIcon: <BuildingIcon color={djobsTheme.colors.black100} size={17} />,
    subTitle: "Advanced options",
    optionName: "other",
  },
];
