import React from "react";

declare namespace ISettingOptionsProps {
  interface IProps {
    data: Array<{
      title: string;
      titleIcon: React.ReactElement;
      subTitle: string;
      optionName: string;
    }>;
  }
}

export { ISettingOptionsProps };
