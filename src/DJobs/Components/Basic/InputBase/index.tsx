// # Global Imports

import * as React from "react";
// #end Global Imports

//# Local Imports
import { IInputBase } from "./InputBase";
import { Input, InputContainer } from "./Styles/InputBaseStyles";
//#end Local imports

const InputBase: React.FC<IInputBase.IProps> = ({
  type,
  value,
  name,
  placeholder,
  width,
  suffix,
  prefix,
  onChangeHandler,
}) => {
  return (
    <InputContainer width={width}>
      {prefix && prefix}
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        id={`${name}_input`}
        name={name}
        value={value}
      />
      {suffix && suffix}
    </InputContainer>
  );
};

export default InputBase;
