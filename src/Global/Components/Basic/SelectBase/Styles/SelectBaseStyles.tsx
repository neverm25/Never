// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
import { ISelectBase } from "../SelectBase";

// #endregion Local Imports
export const SelectContainer = styled.div<ISelectBase.Props>`
  margin-top: 15px;
  div.ant-select {
    display: block;
    border-radius: 6px !important;
    width: ${props => `${props.o?.width} !important`};
  }
  div.ant-select-selector {
    height: 46px !important;

    ${theme.inputField.fieldStyle};
    padding: 20px !important;
    padding-left: 15px !important;
    border-color: ${props =>
      props.o?.hasError ? theme.colors.red100 : theme.colors.black20};
  }

  .selectBoi .ant-select-arrow {
    color: transparent;
    width: fit-content;
    height: fit-content;
    top: 16px;
    right: 5px;
    background-repeat: no-repeat;
    background-image-size: 40px;
  }

  .ant-select-selection-item {
    padding-right: 18px;
    height: fit-content;
    top: -12px;
  }
  .ant-select-selection-placeholder {
    position: relative;
    bottom: 12px;
    overflow: visible;
  }
  .ant-select-selection-placeholder {
    ${theme.inputField.placeholderStyle}
  }
`;

export const ErrorMsg = styled.div`
  ${theme.text.errorMessage};
`;
