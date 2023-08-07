import React from "react";

import { Label } from "@Styled/Global/GlobalStyled";
import { createInputBaseField } from "@Helpers/Formik/formikInputFields.helpers";
import { InputHelperProps } from "@Helpers/Formik/formikInputFields.props";
import { InputGroupContainer } from "./Styles/InputGroupStyles";

export const InputGroup = (props: InputHelperProps.CreateInputGroupProps) => {
  const { name, isRequired, inputs, label } = props;
  const inputFields = inputs.map(input =>
    createInputBaseField({ ...input, isRequired })
  );
  return (
    <InputGroupContainer key={name}>
      <Label style={{ paddingBottom: 0 }}>{label}</Label>
      {inputFields}
    </InputGroupContainer>
  );
};
