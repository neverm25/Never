// # Global Imports
import * as React from "react";
import { Switch } from "antd";

// #end Global Imports
import { Label } from "@Styled/Global/GlobalStyled";
import { ISwitchBase } from "./SwitchBase";
import { ErrorMsg, SwitchContainer } from "./Styles/SwitchBaseStyles";

export const SwitchBase: React.FunctionComponent<ISwitchBase.IProps> = ({
  label,
  hasLabel,
  errorMsg,
  hasError = false,
  checkedProp,
  setCheckedProp,
  defaultChecked,
}): JSX.Element => {
  //

  return (
    <React.Fragment>
      <SwitchContainer>
        {hasLabel ? <Label style={{ left: "0px" }}>{label}</Label> : null}

        <Switch
          defaultChecked={defaultChecked}
          checked={checkedProp}
          onChange={checked =>
            !checked ? setCheckedProp(true) : setCheckedProp(false)
          }
        />
      </SwitchContainer>
      {hasError ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
    </React.Fragment>
  );
};
