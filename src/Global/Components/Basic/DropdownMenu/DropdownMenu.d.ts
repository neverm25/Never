import { IIcons } from "@Global/Components/Icons/icons";
import React from "react";

declare namespace IDropdownMenu {
  export type MenuItemBackground = "plain" | "primary" | "gradient";
  export type MenuiItem = { value: string; label: string };
  export type MenuItemsAlignment = "end" | "start";
  export type IconProps = (
    props: IIcons.UniconsProps | IIcons.IconProps
  ) => JSX.Element;
  export type Icons = {
    Icon: IconProps;
    GradientIcon?: IconProps;
    IconSize?: number;
  };

  export interface IProps {
    menuItemBackground: MenuItemBackground;
    menuItems: MenuiItem[];
    onClickHandler: (string) => void;
    selectedValue: string;

    Icons?: Icons;
    name?: string;
    selectedLabel?: string;
    count?: number;
  }
}

export { IDropdownMenu };
