import React from "react";
import { Input } from "antd";

import { Label } from "@Styled/Global/GlobalStyled";
import { TextAreaProps } from "./TextArea";
import { ErrorMsg, TextAreaContainer } from "./Styles/TextAreaStyles";

const { TextArea } = Input;

export const TextAreaInput = (props: TextAreaProps.IProps) => {
  const {
    name,
    hasLabel,
    label,
    value,
    placeholder,
    disabled,
    onChangeHandler,
    onBlur,
    hasError,
    errorMsg,
    showCount = true,
    maxLength = 100,
    minRows = 3,
    maxRows = 6,
  } = props;
  return (
    <TextAreaContainer hasError={hasError}>
      {hasLabel ? <Label htmlFor={name}>{label}</Label> : null}
      <TextArea
        id={`${name}_textArea`}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        onBlur={onBlur}
        disabled={disabled}
        showCount={showCount}
        maxLength={maxLength}
        autoSize={{ minRows, maxRows }}
      />
      {hasError ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
    </TextAreaContainer>
  );
};
