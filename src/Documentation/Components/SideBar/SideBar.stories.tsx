import React from "react";
import { Meta, Story } from "@storybook/react";

import { SideBar } from "@Global/Components/SideBar";

const meta: Meta = {
  title: "Components/Basic/SideBar",
  component: SideBar,
  argTypes: {
    isHideSidebar: { control: "boolean" },
  },
};
export default meta;

export const Template: Story = () => {
  const [isHideSidebar, setHideSidebar] = React.useState(false);
  const sideBarStateManagementProps = { isHideSidebar, setHideSidebar };
  return <SideBar {...sideBarStateManagementProps} />;
};
