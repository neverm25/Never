// #region Global Imports
import styled, { keyframes } from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
// #endregion Local Imports

export const AnimationSpin = keyframes`
   0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
    `;

export const InputContainer = styled.div<{
  hasError?: boolean;
  width: string | number;
  isSearchFocus?: boolean;
}>`
  padding-top: 15px;

  input {
    display: block;
    width: 100% !important;

    ${theme.inputField.fieldStyle};
    border-color: ${({ hasError, isSearchFocus }) =>
      hasError
        ? theme.colors.red100
        : isSearchFocus
        ? theme.colors.purple100
        : theme.colors.black20};
  }

  .ant-input-group-addon {
    border: none !important;
    box-shadow: none !important;
  }

  .ant-input-affix-wrapper {
    padding: 0px !important;
    font-size: 26px;

    ${theme.inputField.fieldStyle};
    border-color: ${({ hasError }) =>
      hasError ? theme.colors.red100 : theme.colors.black20};
  }
  .ant-input-affix-wrapper-focused {
    ${theme.inputField.hoverOrFocusStyle};
    border-color: ${({ hasError, isSearchFocus }) =>
      hasError
        ? theme.colors.red100
        : isSearchFocus
        ? theme.colors.purple100
        : theme.colors.blue100};
    &:hover {
      border-color: ${({ isSearchFocus }) =>
        isSearchFocus && theme.colors.purple100};
    }
  }
  .ant-input-affix-wrapper > input.ant-input {
    margin: 12px;
    box-shadow: none;
  }

  .ant-input-suffix {
    display: flex;
    align-self: center;
    margin-right: 6px;
  }

  .ant-input-prefix {
    display: flex;
    align-self: center;
    margin-left: 6px;
  }

  .ant-input-suffix .ant-input-clear-icon {
    position: absolute;
    top: 10px;
    right: 28px;
    z-index: 999;
    transform: scale(0.8);
  }

  .ant-input-search-button:not(.ant-btn-primary) {
    background: none;
  }

  .ant-input-search > .ant-input-group > .ant-input-group-addon {
    background: transparent;
  }

  [ant-click-animating-without-extra-node="true"]::after {
    box-shadow: none !important;
  }

  .ant-input-search > .ant-input-group > .ant-input-group-addon {
    left: initial;
    padding: 0;
    position: absolute;
    right: 41px;
    top: 10px;
    z-index: 999;

    .ant-btn {
      border: 0px solid transparent;
      background: transparent;
      box-shadow: none;
    }
    .ant-input-search-button {
      .anticon-search {
        opacity: 0;
      }
      .ant-btn-loading-icon {
        opacity: 1 !important;

        .ant-btn {
          border: 0px solid transparent;
          background: transparent;
        }
      }
    }
  }
  input::placeholder {
    ${theme.inputField.placeholderStyle}
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  position: relative;
  top: -3px;
  transform: scale(1.7);
  svg {
    animation: ${AnimationSpin} 2s infinite linear;
  }
`;

export const ErrorMsg = styled.div`
  ${theme.text.errorMessage};
`;
