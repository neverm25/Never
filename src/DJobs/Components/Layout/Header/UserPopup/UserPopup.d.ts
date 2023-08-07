import React from "react";

declare namespace IUserPopup {
    export interface IProps {
        setIsModalOpen: React.Dispatch<boolean>;
        rotate: string;
        ref: MutableRefObject<HTMLInputElement>
    }
}

export { IUserPopup };