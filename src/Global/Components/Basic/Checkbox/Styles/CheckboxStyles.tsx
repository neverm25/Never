// #region Global Imports
import styled from "styled-components";
import { Checkbox } from "antd";

// #endregion Global Imports

// #region Local Imports
import { theme } from "@Global/Theme";
// #endregion Local Imports

export const StyledCheckbox = styled(Checkbox)`
    ant-checkbox-inner::after {
        background: ${theme.colors.blue100};
    }
    .ant-checkbox-checked .ant-checkbox-inner {
        border-color: ${theme.colors.blue50};
    }
    .ant-checkbox-checked::after {
        border: 1px solid ${theme.colors.purple100};
    }

    .ant-checkbox-wrapper .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
        border-color: ${theme.colors.purple100};
    }
`;
