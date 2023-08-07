import React from "react";
import { Switch } from "antd";
import styled from "styled-components";

import { DjobsCommonFieldComponents } from "../Common/Components";
import { DJobsInputStyledComponents } from "../Common/InputStyles";
import { DjobsFormFieldsProps } from "../DjobsFormFields";

export const DjobsSwitchBase = ({
  name,
  label,
  error,
  hasError = false,
  checkedProp,
  setCheckedProp,
  defaultChecked,
  idPrefix,
}: DjobsFormFieldsProps.Switchbase) => (
  <React.Fragment>
    <SwitchContainer>
      <DJobsInputStyledComponents.LabelWrapper>
        {label && <DjobsCommonFieldComponents.InputLabel value={label} />}
      </DJobsInputStyledComponents.LabelWrapper>

      <Switch
        id={idPrefix + name}
        defaultChecked={defaultChecked}
        checked={checkedProp}
        onChange={checked =>
          !checked ? setCheckedProp(true) : setCheckedProp(false)
        }
      />
    </SwitchContainer>
    {hasError ? <DjobsCommonFieldComponents.ErrorLabel value={error} /> : null}
  </React.Fragment>
);

const SwitchContainer = styled.div`
  width: 100% !important;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
