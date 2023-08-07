// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
// #endregion Local Imports
export const TextAreaContainer = styled.div<{ hasError: boolean }>`
  padding-top: 15px;
  textarea {
    ${theme.inputField.fieldStyle};
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.red100 : theme.colors.black20};
  }
  textarea::placeholder {
    ${theme.inputField.placeholderStyle}
  }
  .ant-input-textarea-show-count::after {
    color: ${theme.colors.black50};
  }
`;

export const ErrorMsg = styled.div`
  ${theme.text.errorMessage};
`;
