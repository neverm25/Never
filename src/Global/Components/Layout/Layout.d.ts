declare namespace LayoutProps {
  export interface Children {
    children: JSX.Element[] | JSX.Element;
  }
  export type SideBarProps = {
    isHideSidebar: boolean;
    setHideSidebar: Dispatch<SetStateAction<boolean>> | undefined;
  };
  export type ContextProps = SideBarProps;
}

export { LayoutProps };
