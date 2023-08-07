import React from "react";
import styled from "styled-components";

import { DJobsTypography } from "../..";
import { DjobsFormFieldsProps } from "../DjobsFormFields";
import { createDjobsFormFields } from "../Helpers";

export const InputFieldGroup = (
  props: DjobsFormFieldsProps.InputFieldGroup
) => {
  const { groupName, formFields } = props;

  return (
    <InputFieldGroupContainer>
      {groupName && (
        <DJobsTypography styleName="djInputLabel" color="textDarker">
          {groupName}
        </DJobsTypography>
      )}
      <FieldRow>{createDjobsFormFields(formFields)}</FieldRow>
    </InputFieldGroupContainer>
  );
};
const InputFieldGroupContainer = styled.div`
  width: 100%;
`;
const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;
