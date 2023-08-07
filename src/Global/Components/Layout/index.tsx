import * as React from "react";

import { Flex, Box } from "reflexbox";
import { LayoutProps } from "./Layout";
import { SideBar } from "../SideBar";
import { TopBar } from "../TopBar";
import { AppContainer, SideBarContainer } from "./Styles/LayoutStyles";
import { getSideBarWidth } from "./Utils/LayoutUtils";
import { MyGlobalContext } from "./Context/LayoutContext";

export const Layout = ({ children }: LayoutProps.Children) => {
  const [isHideSidebar, setHideSidebar] = React.useState(false);
  const sidebarStateManagementProps = { isHideSidebar, setHideSidebar };

  return (
    <AppContainer>
      <SideBarContainer isHideSidebar={isHideSidebar}>
        <SideBar {...sidebarStateManagementProps} />
      </SideBarContainer>
      <Flex
        style={{ marginLeft: getSideBarWidth(isHideSidebar) }}
        width={["100%"]}
        flexDirection="column"
      >
        <Box width={["100%"]} id="topBar">
          <TopBar />
        </Box>
        <Box width={["100%"]} id="appContent" style={{ padding: "35px" }}>
          <MyGlobalContext.Provider value={sidebarStateManagementProps}>
            {children}
          </MyGlobalContext.Provider>
        </Box>
      </Flex>
    </AppContainer>
  );
};
