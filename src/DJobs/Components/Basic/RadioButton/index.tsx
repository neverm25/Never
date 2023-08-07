import * as React from "react";
import { Radio } from "antd";
import styled from "styled-components";

import { IRadioButton } from "./RadioButton";
import { djobsTheme } from "@DJobs/Theme";

const RadioButtonScaling = { small: 0.8, medium: 1, large: 1.3 };
export const RadioButton = (props: IRadioButton.IProps) => {
  const { checked, disabled, size = "medium" } = props;
  return (
    <StyledRadioButton checked={checked} disabled={disabled} size={size} />
  );
};

const StyledRadioButton = styled(Radio)<{
  size: IRadioButton.size;
}>`
  .ant-radio-wrapper {
    line-height: 0px;
    display: flex;
    align-items: center;
  }

  .ant-radio {
    transform: scale(${props => RadioButtonScaling[props.size]});
  }

  .ant-radio-inner {
    border: 2px solid ${djobsTheme.colors.grey20};
  }
  .ant-radio-inner::after {
    background-color: ${djobsTheme.colors.grey20};
  }

  .ant-radio-checked .ant-radio-inner {
    border: 2px solid ${djobsTheme.colors.blue50};
    border-radius: 50%;
    transform: scale(${props => RadioButtonScaling[props.size] + 0.01});
  }
  .ant-radio-checked .ant-radio-inner::after {
    width: 16px;
    height: 16px;
    transform: scale(0.8);
    background-color: ${djobsTheme.colors.green100};
    border: 2px solid white;
  }

  .ant-radio-disabled .ant-radio-inner::after {
    background-color: ${djobsTheme.colors.black80};
  }

  .ant-radio:hover .ant-radio-inner {
    border-color: ${djobsTheme.colors.green50};
  }
`;
