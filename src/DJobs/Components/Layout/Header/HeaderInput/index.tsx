// # Global Imports

import { DJobsTypography } from "@DJobs/Components/Basic/";
import * as React from "react";
// #end Global Imports

//# Local Imports
import { IHeaderInput } from "./Headerinput";
import { Input, InputContainer } from "./Styles/HeaderInputStyles";
//#end Local imports

const HeaderInput: React.FC<IHeaderInput.IProps> = ({
  type,
  value,
  name,
  placeholder,
  width,
  suffix,
  onChangeHandler,
  outline,
  error,
  color,
  onClick,
  autofocus = false,
  onKeyDown,
  radius,
}) => {
  return (
    <InputContainer
      value={value}
      placeholder={placeholder}
      width={width}
      outline={outline}
      error={error}
      color={color}
      radius={radius}
    >
      <div style={{ width: "100%" }}>
        <Input
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
          id={`${name}_input`}
          name={name}
          value={value}
          onClick={onClick}
          autoFocus={autofocus}
          onKeyDown={onKeyDown}
        />
        {error && (
          <DJobsTypography styleName="djInputError" color="red100">
            not a valid city
          </DJobsTypography>
        )}
      </div>
      {suffix && suffix}
    </InputContainer>
  );
};

export default HeaderInput;
