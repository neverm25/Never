import { theme } from "@Global/Theme";
import styled from "styled-components";

export const ToastNotify = styled.div`
  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:${theme.colors.white110}
  ${theme.text.filterResult}

  svg {
    margin-right: 10px;
  }
`;
