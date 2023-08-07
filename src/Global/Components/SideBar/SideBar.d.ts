declare namespace ISideBar {
    export interface IProps {
        isHideSidebar: boolean;
        setHideSidebar: (value: boolean) => void;
    }
    export interface SideBarMenuItem {
        value: string;
        label: string;
        subMenu?: Array<{ value: string; label: string }>;
    }
}

export { ISideBar };
