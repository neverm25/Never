// # Global Imports
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Flex } from "reflexbox";
import Image from "next/image";
// #end Global Imports

// # Local Imports
import { ISideBar } from "./SideBar";
import {
  LogoContainer,
  SublineText,
  MenuItemContainer,
  MenuItems,
  MenuLabel,
  LogoutButton,
  ActiveMenuBorder,
  LogoImage,
  SubMenuLabel,
  MenuContainer,
  MenuItemRow,
  ShowSubMenuButton,
} from "./Styles/SideBarStyle";
import { theme } from "@Global/Theme";
import {
  LogoutIcon,
  LoginIcon,
  DownCircleIcon,
  UpCircleIcon,
  SideBarIcons,
} from "../Icons";
import { menuItems } from "./Utils/SideBarUtils";
// #end Local Imports

const SideBar: React.FunctionComponent<ISideBar.IProps> = ({
  isHideSidebar,
  setHideSidebar,
}): JSX.Element => {
  const router = useRouter();
  const activeTab = router.pathname === "/" ? "/" : router.pathname.slice(1);

  const [showSubMenu, setSubMenu] = React.useState<string>("");
  return (
    <div className="sidebar">
      <LogoContainer>
        <LogoImage>
          <Image
            src={`/static/images/${
              isHideSidebar ? "ditto-white-badge-logo" : "ditto-white-logo"
            }.png`}
            alt="company-logo"
            width={isHideSidebar ? 38 : 170}
            height={isHideSidebar ? 33 : 36}
            onClick={() => router.push("/")}
            loading="lazy"
          />
        </LogoImage>
        {!isHideSidebar && <SublineText>Talent Solutions</SublineText>}
      </LogoContainer>
      <MenuItemContainer isHideSidebar={isHideSidebar}>
        {menuItems.map((item, index) => {
          return (
            <MenuItemRow
              key={index}
              onClick={() =>
                setSubMenu(preValue => {
                  return preValue !== item.label ? item.label : "";
                })
              }
            >
              <MenuItems isActiveTab={item.value === activeTab}>
                <Link href={`/${item.value}`} prefetch={false}>
                  <a>
                    <SideBarIcons
                      value={item.value}
                      fillColor={
                        item.value === activeTab
                          ? theme.colors.blue80
                          : theme.colors.black80
                      }
                    />
                  </a>
                </Link>
                {!isHideSidebar && (
                  <MenuContainer>
                    <Link href={`/${item.value}`} prefetch={false}>
                      <a>
                        <MenuLabel isActiveTab={item.value === activeTab}>
                          {item.label}
                        </MenuLabel>
                      </a>
                    </Link>
                    {item?.subMenu &&
                      showSubMenu === item.label &&
                      item?.subMenu.map((subitem, index) => {
                        return (
                          <Link key={index} href={`/${subitem.value}`} prefetch={false}>
                            <a>
                              <SubMenuLabel
                                key={index}
                                isActiveTab={subitem.value === activeTab}
                              >
                                {subitem.label}
                              </SubMenuLabel>
                            </a>
                          </Link>
                        );
                      })}
                  </MenuContainer>
                )}
              </MenuItems>
              <Flex>
                {!isHideSidebar && item.subMenu && (
                  <ShowSubMenuButton>
                    {showSubMenu === item.label ? (
                      <UpCircleIcon />
                    ) : (
                      <DownCircleIcon fillColor={theme.colors.black80} />
                    )}
                  </ShowSubMenuButton>
                )}
                {!isHideSidebar && (
                  <ActiveMenuBorder
                    isActiveTab={activeTab.startsWith(item.value)}
                  />
                )}
              </Flex>
            </MenuItemRow>
          );
        })}
        <LogoutButton onClick={() => setHideSidebar(!isHideSidebar)}>
          {isHideSidebar ? <LoginIcon /> : <LogoutIcon />}
        </LogoutButton>
      </MenuItemContainer>
    </div>
  );
};

export { SideBar };
