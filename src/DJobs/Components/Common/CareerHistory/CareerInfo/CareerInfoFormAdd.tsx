import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";

import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import { CareerInfoData } from "./Utils";
import { DateFieldGroup } from "@DJobs/Components/Basic/DjobsFormFields/DateFieldGroup";
import {
  CreateCheckBoxField,
  createDjobsRichTextArea,
  createDjobsTextArea,
} from "@DJobs/Components/Basic/DjobsFormFields/Helpers";
import {
  BackButton,
  DjobsButton,
  XDeleteButton,
} from "@DJobs/Components/Basic";
import { CareerHistoryProps } from "../CareerHistory";
import { djobsTheme } from "@DJobs/Theme";
import { CareerHistoryContext } from "..";
import { handleFormSubmit } from "@Helpers/Formik";
import { DateHelpers } from "@Helpers/DateHelpers";

export const CareerInfoFormAdd = ({
  createCareerData,
}: CareerHistoryProps.CareerInfoFormAdd) => {
  const { setSaveInitiated, saveInitiated, onCancelHandlerAdd } = useContext(
    CareerHistoryContext
  );

  const [submitClicked, setSubmitClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const initialValues = {
    jobTitle: "",
    companyName: "",
    description: "",
    startedFrom_month: null,
    workedTill_month: null,
    startedFrom_year: null,
    workedTill_year: null,
    isCurrentPosition: false,
    reasonForLeaving: "",
  } as CareerHistoryProps.CareerInfoFormValues;

  const {
    validationSchema,
    formFields,
    initialErrors,
    idPrefix,
  } = CareerInfoData;

  const onSubmitHandler = (values: CareerHistoryProps.CareerInfoFormValues) => {
    setSaveInitiated(true);
    createCareerData(values);
  };

  const requiredFields = !isChecked
    ? {
        ...CareerInfoData.requiredFields,
        workedTill_month: true,
        workedTill_year: true,
      }
    : CareerInfoData.requiredFields;

  return (
    <Container>
      <XDeleteButton onClick={onCancelHandlerAdd} />
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={validationSchema}
        initialErrors={initialErrors}
      >
        {formik => {
          const {
            startedFrom_month,
            startedFrom_year,
            workedTill_month,
            workedTill_year,
          } = formik.values;

          const workedTillValidation = () => {
            let isToBiggerThanFrom = true;
            const startedFrom_monthIndex = startedFrom_month
              ? DateHelpers.monthsMap[startedFrom_month]
              : 0;
            const workedTill_monthIndex = workedTill_month
              ? DateHelpers.monthsMap[workedTill_month]
              : 0;

            const isWorkedTillHasValue = workedTill_year || workedTill_month;
            if (!isWorkedTillHasValue) return "";
            if (workedTill_year < startedFrom_year) isToBiggerThanFrom = false;

            if (startedFrom_year === workedTill_year && workedTill_month) {
              if (workedTill_monthIndex < startedFrom_monthIndex)
                isToBiggerThanFrom = false;
            }
            !isToBiggerThanFrom &&
              !formik.errors["isToBiggerThanFrom"] &&
              formik.setFieldError(
                "isToBiggerThanFrom",
                `End date can’t be earlier than start date`
              );

            return isToBiggerThanFrom
              ? ""
              : "End date can’t be earlier than start date";
          };
          const ValidateWorkedTillField = () => {
            if (formik.values.isCurrentPosition) {
              delete formik.errors["workedTill_year"];
              delete formik.errors["workedTill_month"];
            }
          };
          const isValidForm = () => {
            ValidateWorkedTillField();
            return Object.keys(formik.errors).length === 0;
          };
          return (
            <Form>
              <FormFieldsContainer>
                {createDjobsInputField(formFields.jobTitle)}
                {createDjobsInputField(formFields.companyName)}
                <DateFieldGroup
                  groupName="startedFrom"
                  groupLabel="From"
                  isDayRequired={false}
                  isRequired={true}
                  variant="WhiteBackground"
                />
                {setIsChecked(formik.values.isCurrentPosition)}
                {!formik.values.isCurrentPosition && (
                  <DateFieldGroup
                    groupName="workedTill"
                    groupLabel="To"
                    isDayRequired={false}
                    customValidation={workedTillValidation}
                    addNumberOfFutureYears={1}
                    isRequired={!formik.values.isCurrentPosition ? true : false}
                    variant="WhiteBackground"
                  />
                )}
                {CreateCheckBoxField(formFields.isCurrentPositionCheckBox)}
                {createDjobsRichTextArea(formFields.description)}
                {!formik.values.isCurrentPosition &&
                  createDjobsTextArea(formFields.reasonForLeaving)}
              </FormFieldsContainer>
              <ButtonsWrapper>
                <BackButton
                  handleClick={onCancelHandlerAdd}
                  buttonLabel="Cancel"
                  showBackIcon={false}
                />
                <DjobsButton.Actions
                  variant="Submit"
                  label="Save"
                  onClick={event => {
                    event.preventDefault();
                    setSubmitClicked(true);
                    ValidateWorkedTillField();

                    handleFormSubmit({
                      formik,
                      idPrefix,
                      onSubmitHandler,
                      requiredFields,
                    });
                  }}
                  disabled={(submitClicked && !isValidForm()) || saveInitiated}
                />
              </ButtonsWrapper>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

const FormFieldsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: fit-content;
  float: right;
  margin: 50px 0 25px 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: auto;
  border: 1px solid ${djobsTheme.colors.black20};
  border-radius: 13px;
  margin-top: 25px;
  padding: 20px 23px;
  background: ${djobsTheme.gradients.purpleHoverWithHalfOpacity};
  box-shadow: ${djobsTheme.effects.boxShadow};
`;
