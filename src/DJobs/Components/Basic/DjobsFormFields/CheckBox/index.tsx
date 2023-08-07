import React from "react";
import { Checkbox } from "antd";

import { DjobsFormFieldsProps } from "../DjobsFormFields";
import { DJobsTypography, DJobsGradientText } from "../..";

export const DjobsCheckBox = (props: DjobsFormFieldsProps.CheckBoxField) => {
  const { name, checked, label, onChange, hasError, error } = props;
  return (
    <div>
      <Checkbox {...{ name, onChange, checked }}>
        {label && (
          <DJobsTypography styleName="djInputLabel" color="blueGreyDark">
            {label}
          </DJobsTypography>
        )}
      </Checkbox>
      {hasError && (
        <DJobsGradientText styleName="djInputError" gradient="red100">
          {error}
        </DJobsGradientText>
      )}
    </div>
  );
};
