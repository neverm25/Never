import React from "react";

declare namespace IAccordian {
  interface IProps {
    title: string;
    titleIcon: React.ReactElement;
    subTitle: string;
    children: React.ReactNode;
    setAccordianOpen: React.Dispatch<string>;
    isAccordianOpen: string,
    option: string,
  }
}

export { IAccordian };
