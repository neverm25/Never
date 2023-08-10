import React from "react";
import { Menu } from "antd";
import { theme } from "@Global/Theme";
import {
  UserOutlined,
  TagOutlined,
  LockOutlined,
  LogoutOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

export const TopBarMenu = (
  <Menu style={{ borderRadius: 8 }}>
    <Menu.Item
      key="0"
      icon={UserOutlined}
      style={{
        color: theme.colors.blue80,
        borderLeft: `3px solid ${theme.colors.blue80}`,
      }}
    >
      Profile
    </Menu.Item>
    <Menu.Item
      key="1"
      icon={TagOutlined}
      style={{ color: theme.colors.black100 }}
    >
      Tags
    </Menu.Item>
    <Menu.Item
      key="2"
      icon={LockOutlined}
      style={{ color: theme.colors.black100 }}
    >
      Privacy
    </Menu.Item>
    <Menu.Item
      key="3"
      icon={MessageOutlined}
      style={{ color: theme.colors.black100 }}
    >
      Chat
    </Menu.Item>
    <Menu.Item
      key="4"
      icon={QuestionCircleOutlined}
      style={{ color: theme.colors.black100 }}
    >
      Help?
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item
      key="5"
      icon={LogoutOutlined}
      style={{ color: theme.colors.black100 }}
    >
      Logout
    </Menu.Item>
  </Menu>
);
