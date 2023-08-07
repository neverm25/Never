import styled from "styled-components";
import { theme } from "@Global/Theme";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 130px;
  border-top: 0px solid transparent;
  border-bottom: 1px solid ${theme.colors.black90};
`;

export const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const SublineText = styled.div`
  font-family: ${theme.text.mainFont};
  font-style: italic;
  font-weight: 900;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: 0.045em;
  text-transform: capitalize;
  margin-left: 62px;
  color: ${theme.colors.white100};
`;

export const MenuItemContainer = styled.div<{ isHideSidebar?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ isHideSidebar }) => isHideSidebar && "center"};
  margin-top: 40px;
  margin-left: ${({ isHideSidebar }) => !isHideSidebar && "50px"};
  transition: all 0.3s ease-in-out;
`;
export const MenuItemRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuItems = styled.div<{ isActiveTab?: boolean }>`
  display: flex;
  margin-bottom: 32px;
  cursor: pointer;
  align-items: start;

  a {
    width: 30px;
    display: flex;
    text-decoration: none;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  a:nth-child(2) {
    div {
      margin-top: 20px;
    }
  }
  a {
    width: 100%;
  }
`;

export const ActiveMenuBorder = styled.div<{ isActiveTab?: boolean }>`
  display: flex;
  background: ${({ isActiveTab }) =>
    isActiveTab ? theme.colors.blue80 : theme.colors.black100};
  width: 8px;
  height: 36px;
  position: relative;
  top: -5px;
  border-bottom-left-radius: 50% 12%;
  border-bottom-right-radius: 50% 12%;
  border-top-left-radius: 50% 12%;
  border-top-right-radius: 50% 12%;
`;

export const MenuLabel = styled.div<{ isActiveTab?: boolean }>`
  font-family: ${theme.text.mainFont};
  font-weight: bold;
  font-size: 18px;
  line-height: 1.3;
  color: ${({ theme, isActiveTab }) =>
    isActiveTab ? theme.colors.black20 : theme.colors.black50};
  padding-left: 15px;
`;

export const SubMenuLabel = styled.div<{ isActiveTab?: boolean }>`
  font-family: ${theme.text.mainFont};
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme, isActiveTab }) =>
    isActiveTab ? theme.colors.black10 : theme.colors.black50};
  padding-left: 15px;
  line-height: 30px;
`;

export const LogoutButton = styled.div`
  cursor: pointer;
`;

export const ShowSubMenuButton = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;
