// # Global Imports
import * as React from "react";
import { theme } from "@Global/Theme";
import { AutoComplete, Input } from "antd";

// #end Global Imports

import { IInputBase } from "./InputBase";
import { Label } from "@Styled/Global/GlobalStyled";
import { CloseIcon } from "@Global/Components/Icons";
import { SpinnerIcon } from "@Global/Components/Icons/Unicons";
import { useEffect, useState } from "react";
import {
  ErrorMsg,
  IconWrapper,
  InputContainer,
} from "./Styles/InputBaseStyles";

const { Search } = Input;

const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});

const InputBase: React.FunctionComponent<IInputBase.IProps> = ({
  type,
  label,
  hasLabel = true,
  value,
  name,
  errorMsg,
  hasError,
  disabled = false,
  placeholder,
  width = "100%",
  suffix,
  prefix,
  onChangeHandler,
  onBlur,
  isSearch,
  isAutoComplete = false,
}): JSX.Element => {
  const [searchLoaders, setSearchLoaders] = useState(false);
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [suffixHide, setSuffixHide] = useState(false);

  function onSearchHandler() {
    setSearchLoaders(true);
  }

  function onSearchAutoComplete() {
    setOptions(
      !value ? [] : [mockVal(value), mockVal(value, 2), mockVal(value, 3)]
    );
  }

  function onSearch(event) {
    setSuffixHide(true);
    if (event === "") {
      setSuffixHide(true);
    }
  }

  function onSelect() {
    setSuffixHide(false);
  }

  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (searchLoaders && isAutoComplete) {
      onSearchAutoComplete();
      setSuffixHide(true);
    }

    if (value === "") {
      setSuffixHide(false);
    }
  }, [value]);

  return (
    <InputContainer
      isSearchFocus={suffixHide}
      hasError={hasError}
      width={width}
    >
      {hasLabel ? <Label htmlFor={name}>{label}</Label> : null}

      {isSearch && isAutoComplete ? (
        <AutoComplete
          options={options}
          style={{ width: "100%" }}
          onSelect={onSelect}
          onSearch={onSearchHandler}
        >
          <Search
            placeholder="Search..."
            allowClear={{
              clearIcon: <CloseIcon color="black100" />,
            }}
            suffix={
              !suffixHide ? (
                suffix
              ) : (
                <IconWrapper>
                  <SpinnerIcon color={theme.colors.purple100} />
                </IconWrapper>
              )
            }
            onSearch={onSearchHandler}
            onChange={onChangeHandler}
            onBlur={onBlur}
            id={`${name}_input`}
            name={name}
            value={value}
          />
        </AutoComplete>
      ) : isSearch && !isAutoComplete ? (
        <Search
          type={type}
          placeholder="Search..."
          allowClear={{
            clearIcon: <CloseIcon color="black100" />,
          }}
          suffix={
            !suffixHide ? (
              suffix
            ) : (
              <IconWrapper>
                <SpinnerIcon color={theme.colors.purple100} />
              </IconWrapper>
            )
          }
          onBlur={onBlur}
          onSearch={onSearch}
          onChange={onChangeHandler}
          id={`${name}_input`}
          name={name}
          value={value}
          //ref={inputRef}
        />
      ) : (
        <Input
          id={`${name}_input`}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
          onBlur={onBlur}
          disabled={disabled}
          suffix={suffix}
          prefix={prefix}
        />
      )}

      {hasError ? <ErrorMsg theme={theme}>{errorMsg}</ErrorMsg> : null}
    </InputContainer>
  );
};

export { InputBase };
