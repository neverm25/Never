// #region Global Imports
import styled from "styled-components";
import { Radio } from "antd";

// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
import { IRadioButton } from "../RadioButton";

// #endregion Local Imports
const RadioButtonScaling = { small: 0.8, medium: 1, large: 1.3 };

export const StyledRadioButton = styled(Radio)<{
  size: IRadioButton.size;
  variant: IRadioButton.variant;
}>`
  .ant-radio {
    transform: scale(${props => RadioButtonScaling[props.size]});
  }

  .ant-radio-inner {
    border-width: 2px;
    border-color: ${({ variant }) =>
      variant === "default" ? theme.colors.blue50 : theme.colors.green50};
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: ${({ variant }) =>
      variant === "default" ? theme.colors.blue100 : theme.colors.green80};
  }
  .ant-radio-checked .ant-radio-inner:after {
    background-color: ${({ variant }) =>
      variant === "default" ? theme.colors.blue100 : theme.colors.green80};
  }

  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: ${({ variant }) =>
      variant === "default"
        ? `0 0 0 1px` + theme.colors.blue100
        : `0 0 0 1px` + theme.colors.green50};
  }

  .ant-radio-disabled .ant-radio-inner:after {
    background-color: theme.colors.black80};
  }

  .ant-radio:hover .ant-radio-inner {
    border-color: ${({ variant }) =>
      variant === "default" ? theme.colors.blue100 : theme.colors.green80};
  }
`;
