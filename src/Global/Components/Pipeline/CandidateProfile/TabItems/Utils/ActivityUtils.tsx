import {
  PersonRoundedIcon,
  PersonWithPlusIcon,
} from "@Global/Components/Icons";
import { theme } from "@Global/Theme";

export const activityData = [
  {
    icon: <PersonWithPlusIcon />,
    activityName: "Moved into Shortlist",
    userIcon: <PersonRoundedIcon fillColor="green100" />,
    userName: "by John Deer",
    date: "11 January 2021",
  },
  {
    icon: <PersonWithPlusIcon fillColor={theme.colors.red100} />,
    activityName: "Removed from Screening",
    userIcon: <PersonRoundedIcon />,
    userName: "by John Deer",
    date: "11 January 2021",
  },
];
