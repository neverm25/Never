import React, { useContext, useState } from "react";
import { Form, Formik } from "formik";
import styled from "styled-components";

import { DjobsButton } from "@DJobs/Components/Basic";
import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import {
  CreateCheckBoxField,
  createDjobsSelectField,
  createSwitchBase,
  createDjobsTextArea,
  createDatePickerField,
} from "@DJobs/Components/Basic/DjobsFormFields/Helpers";
import { AdditionalInfoData } from "../Utils";
import { AdditionalInfoContext } from "..";
import { BackButton } from "@DJobs/Components/Basic";
import { Heading } from "./Heading";
import { useAppSelector } from "@Redux";
export const AdditionalDetailsForm = () => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const AddtionalData = useAppSelector(state => state.candidateDetails);

  const { setIsEditMode, onSubmitHandler } = useContext(AdditionalInfoContext);
  const { formFields, idPrefix } = AdditionalInfoData;
  let date =
    AddtionalData.dob_day && AddtionalData.dob_month && AddtionalData.dob_year
      ? `${AddtionalData.dob_day}/${AddtionalData.dob_month}/${AddtionalData.dob_year}`
      : "";

  return (
    <Formik
      initialValues={{
        ...AddtionalData,
        dateOfBirth: date,
      }}
      onSubmit={() => {}}
    >
      {formik => {
        const { is_disabled } = formik.values;

        return (
          <Form>
            <FormWrapper>
              <DetailsContainer>
                <Heading value="Additional" />
                <Row>
                  {createDjobsSelectField({
                    ...formFields.nationality,
                    defaultValue: String(AddtionalData.nationality),
                  })}
                  {createDjobsInputField(formFields.alternate_phone)}
                </Row>
                <Row>
                  {createDjobsInputField(formFields.idnumber)}
                  {createDjobsSelectField({
                    ...formFields.citizenship,
                    defaultValue: AddtionalData.citizenship,
                  })}
                </Row>
                <Row>
                  {createDjobsInputField(formFields.passport_number)}
                  {createDatePickerField(formFields.dateOfBirth)}
                </Row>
                <Row>
                  {createDjobsInputField(formFields.work_permit)}{" "}
                  {createDjobsSelectField({
                    ...formFields.drivers_licence_code,
                    defaultValue: AddtionalData.drivers_licence_code,
                  })}
                </Row>
                <Row>
                  {createDjobsSelectField({
                    ...formFields.notice_period,
                    defaultValue: AddtionalData.notice_period,
                  })}
                  {createDjobsInputField(formFields.current_remuneration)}
                </Row>
                <Row>
                  <div style={{ width: "100%" }}>
                    <div style={{ marginBottom: "38px" }}>
                      {createSwitchBase({
                        name: "willing_to_relocate",
                        label: "Willing To Relocate",
                        checkedProp: formik.values.willing_to_relocate,
                        setCheckedProp: v => {
                          formik.setFieldValue("willing_to_relocate", !v);
                        },
                        idPrefix,
                      })}
                    </div>
                    {createSwitchBase({
                      name: "own_transport",
                      label: "Own Transport",
                      checkedProp: formik.values.own_transport,
                      setCheckedProp: v => {
                        formik.setFieldValue("own_transport", !v);
                      },
                      idPrefix,
                    })}
                  </div>
                  {createDjobsInputField(formFields.desired_remuneration)}
                </Row>
                <Row>{CreateCheckBoxField(formFields.is_disabled)}</Row>
                {is_disabled && (
                  <Row>
                    {createDjobsTextArea(formFields.disabled_description)}
                  </Row>
                )}
              </DetailsContainer>
            </FormWrapper>
            <BtnWrapper>
              <BackButton
                handleClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  setIsEditMode(false);
                }}
                buttonLabel="Cancel"
                showBackIcon={false}
              />
              <DjobsButton.Actions
                variant="Submit"
                label="Save"
                onClick={event => {
                  event.preventDefault();
                  setSubmitClicked(true);
                  onSubmitHandler(formik.values);
                }}
                disabled={
                  submitClicked && Object.keys(formik.errors).length > 0
                }
              />
            </BtnWrapper>
          </Form>
        );
      }}
    </Formik>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  .ant-select-selection-item {
    width: 100px;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 51px;
`;
