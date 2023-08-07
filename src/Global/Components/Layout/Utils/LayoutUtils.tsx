import { theme } from "@Global/Theme";
export const getSideBarWidth = (isHideSidebar: boolean) => {
  return isHideSidebar
    ? theme.padding.hiddenSideBarWidth
    : theme.padding.sideBarWidth;
};
