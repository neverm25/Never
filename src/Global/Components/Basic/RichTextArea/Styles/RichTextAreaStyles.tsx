// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
import { IRichTextArea } from "../RichTextArea";

// #endregion Local Imports

export const RichTextAreaWrapper = styled.div<IRichTextArea.Props>`
  margin-top: 15px;

  .description-editor {
    padding: 15px;
    position: relative;
    display: block;
    line-height: 28px;

    min-height: 20em;
    min-width: 400px;
    width: ${props => `${props.o?.width}% !important`};

    ${theme.inputField.fieldStyle};
    border-color: ${props =>
      props.o?.hasError ? theme.colors.red100 : theme.colors.black20};
  }
  .description-editor--focus {
    ${theme.inputField.hoverOrFocusStyle}
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    border-right-width: 1px !important;
    outline: 0;
  }

  .rdw-editor-main {
    min-height: ${props => `${props.o?.minHeight}px !important`};
    height: 100%;
  }
  .public-DraftEditorPlaceholder-inner {
    ${theme.inputField.placeholderStyle};
    margin-top: 6px;
  }

  .rdw-dropdown-wrapper {
    border: 0;
    &:hover {
      box-shadow: none;
    }
  }
  .rdw-list-wrapper {
    border: 0;
    margin: 0;
    &:hover {
      box-shadow: none;
    }
  }
  .rdw-link-wrapper {
    border: 0;
    margin: 0;
    &:hover {
      box-shadow: none;
    }
  }
  .rdw-option-wrapper {
    border: 0;
    &:hover {
      box-shadow: none;
    }
  }
`;
export const TextCount = styled.div`
  text-align: right;
  color: ${theme.colors.black50};
`;
export const ErrorMsg = styled.div`
  ${theme.text.errorMessage}
`;
