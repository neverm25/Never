// #region Global Imports
import { theme } from "@Global/Theme";
import styled from "styled-components";

//#region Local Imports
import { IDropdownMenu } from "../DropdownMenu";

export const DropdownMenuPointerContainer = styled.div`
  margin-left: 5px;
  margin-top: 25px;
  position: absolute;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: max-content;
  cursor: pointer;
`;

export const Menu = styled.div<{
  menuItemBackground: IDropdownMenu.MenuItemBackground;
}>`
  position: absolute;
  z-index:10;
  min-width: 7rem;
  transform-origin: top right;
  margin-top: 8px;
  border-radius: 6px;
  background: ${({ menuItemBackground, theme }) =>
    menuItemBackground === "gradient"
      ? theme.gradients.purpleHover
      : menuItemBackground === "primary"
      ? theme.colors.black90
      : theme.colors.black10};
      width:max-content;
 };
`;

export const MenuItemsContainer = styled.div<{
  menuItemBackground: IDropdownMenu.MenuItemBackground;
}>`
  ${({ theme }) => theme.text.dropDownMenuItem};
  text-align: start;
  color: ${({ menuItemBackground, theme }) =>
    menuItemBackground === "gradient"
      ? theme.colors.blue40
      : menuItemBackground === "primary"
      ? theme.colors.purple50
      : theme.colors.black90};

  div {
    cursor: pointer;
    padding: 0.5rem 1rem;
    &:hover {
      color: ${({ menuItemBackground, theme }) =>
        menuItemBackground === "plain"
          ? theme.colors.blue100
          : theme.colors.white110};
    }
  }

  svg {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }
`;

export const FilteredCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white100};
  height: 25px;
  width: 25px;
  font-style: normal;
  font-weight: 800;
  font-size: 9px;
  line-height: 19px;
  margin-left: 5px;
  border-radius: 100%;
  background: ${theme.colors.blue100};
`;

export const DropDownButton = styled.button<{
  selectedValue: string;
  showMenuItems: boolean;
  menuItems: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
  }>;
}>`
  display: flex;
  min-height: 31.28px;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  color: ${theme.colors.black80};
  background: ${theme.colors.white100};
  font-family: Roboto, sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: 1px solid
    ${({ showMenuItems, theme }) =>
      showMenuItems ? theme.colors.blue80 : theme.colors.black90};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  border-radius: 8.36836px;
  padding: 0px 8px;

  > span {
    margin: 0px 5px;
  }

  span > span {
    background: ${({ selectedValue }) =>
      selectedValue && theme.gradients.purpleHover};
    -webkit-background-clip: ${({ selectedValue }) => selectedValue && "text"};
    -webkit-text-fill-color: ${({ selectedValue }) =>
      selectedValue && "transparent"};
  }

  &:hover {
    background: ${theme.colors.black10};
    color: ${theme.colors.black90};
    box-shadow: 0px 1px 2px rgba(144, 163, 245, 0.25),
      inset 0px -4px 5px rgba(210, 216, 244, 0.61);
  }
`;
