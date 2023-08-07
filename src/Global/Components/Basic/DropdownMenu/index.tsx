import React, { useState } from "react";
import { Flex } from "reflexbox";
import { IDropdownMenu } from "./DropdownMenu";
import { theme } from "@Global/Theme";
import DropdownMenuPointer from "./DropdownMenuPointer";
import {
  DropdownContainer,
  DropDownButton,
  DropdownMenuPointerContainer,
  FilteredCount,
  Menu,
  MenuItemsContainer,
} from "./Styles/DropdownMenuStyled";
import { AngleUpIcon } from "@Global/Components/Icons/GradientIcons";
import { DropdownIcon } from "@Global/Components/Icons";

const menuItemBackgrounds = {
  plain: theme.colors.black10,
  primary: theme.colors.black80,
  gradient: theme.colors.blue110,
};

export const DropdownMenu = ({
  menuItemBackground,
  menuItems,
  selectedValue,
  name,
  selectedLabel,
  count,
  Icons,
  onClickHandler,
}: IDropdownMenu.IProps) => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const iconColor = isHovering ? theme.colors.black90 : theme.colors.black80;

  const MenuItems = () => (
    <Menu menuItemBackground={menuItemBackground}>
      <MenuItemsContainer menuItemBackground={menuItemBackground}>
        {menuItems.map((item, index) => (
          <Flex
            key={index}
            onClick={() => {
              onClickHandler(item);
              setShowMenuItems(false);
            }}
            alignItems="center"
          >
            {item.label}
          </Flex>
        ))}
      </MenuItemsContainer>
    </Menu>
  );

  //Add Event handlers for menu items to detect clicking outside of menu items
  const ref = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    const checkIfClickedOutside = e => {
      if (showMenuItems && ref.current && !ref?.current?.contains(e.target)) {
        setShowMenuItems(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showMenuItems]);

  const iconsize = Icons?.IconSize ? { size: Icons.IconSize } : {};

  return (
    <DropdownContainer
      ref={ref}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Flex flexDirection="column">
        <DropDownButton
          selectedValue={selectedValue}
          menuItems={menuItems}
          showMenuItems={showMenuItems}
          onClick={() => setShowMenuItems(showMenuItems => !showMenuItems)}
        >
          <Flex py="6px" alignItems="center">
            {Icons?.Icon && (
              <Flex pr="5px">
                {showMenuItems || selectedValue !== "" ? (
                  Icons?.GradientIcon ? (
                    <Icons.GradientIcon {...iconsize} />
                  ) : (
                    <Icons.Icon color={iconColor} {...iconsize} />
                  )
                ) : (
                  <Icons.Icon color={iconColor} {...iconsize} />
                )}
              </Flex>
            )}

            <div>
              <span>
                {name ? name + ": " : ""}
                <span>{selectedLabel ? selectedLabel : ""}</span>
              </span>
            </div>
          </Flex>

          {selectedValue !== "" && count && (
            <FilteredCount>{`${count ? count : 0}`}</FilteredCount>
          )}

          <Flex py="6px" pl="5px" alignItems="center">
            {showMenuItems ? (
              <AngleUpIcon />
            ) : (
              <DropdownIcon fillColor={iconColor} />
            )}
          </Flex>
        </DropDownButton>

        {showMenuItems && (
          <DropdownMenuPointerContainer>
            <DropdownMenuPointer
              fill={menuItemBackgrounds[menuItemBackground]}
            />
          </DropdownMenuPointerContainer>
        )}
      </Flex>
      {showMenuItems && <MenuItems />}
    </DropdownContainer>
  );
};
