import { theme } from "@Global/Theme";
import styled from "styled-components";

export const DatePickerContainer = styled.div<{
  width: string;
}>`
  .ant-picker {
    width: ${({ width }) => width};
    padding: 10px 15px;
    background: ${theme.colors.white100};
    border: 1px solid ${theme.colors.black20};
    box-shadow: ${theme.effects.inputInnerShadow};
    border-radius: 6px;

    input {
      ${theme.text.activeregular};
      color: ${theme.colors.black100};
    }

    input::placeholder {
      ${theme.inputField.placeholderStyle};
    }

    .ant-picker-clear {
      background: transparent;
      opacity: 1;
    }

    .anticon-close-circle {
      svg {
        width: 1.3em;
        height: 1.3em;
        fill: ${theme.colors.black80};
        margin-right: 30px;
      }
    }
  }

  .ant-picker-focused {
    border: 1px solid ${theme.colors.blue50}!important;
    box-shadow: ${theme.effects.inputActiveShadow}!important;
  }
`;

export const Label = styled.div`
  display: block;
  position: relative;
  padding: 12px 0px;
  ${theme.text.regularBold};
  text-align: start;
`;
