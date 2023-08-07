import * as React from "react";

import { ISelectBase } from "./SelectBase";
import { Select } from "antd";
import { DownCircleIcon } from "@Global/Components/Icons";
import { Label } from "@Styled/Global/GlobalStyled";
import { ErrorMsg, SelectContainer } from "./Styles/SelectBaseStyles";

const { Option } = Select;

export const SelectBase = ({
  defaultValue,
  label,
  hasLabel = false,
  name,
  errorMsg,
  hasError = false,
  disabled = false,
  width = "100%",
  options,
  onSelect,
  onBlur,
  placeholder,
}: ISelectBase.IProps) => {
  return (
    <React.Fragment>
      <SelectContainer o={{ width: width, hasError: hasError }}>
        {hasLabel ? <Label htmlFor={name}>{label}</Label> : null}
        <Select
          className="selectBoi"
          defaultValue={defaultValue}
          disabled={disabled}
          suffixIcon={<DownCircleIcon />}
          onSelect={onSelect}
          onBlur={onBlur}
          placeholder={placeholder}
        >
          {options.map(({ value, label }) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
        </Select>
        {hasError ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
      </SelectContainer>
    </React.Fragment>
  );
};
