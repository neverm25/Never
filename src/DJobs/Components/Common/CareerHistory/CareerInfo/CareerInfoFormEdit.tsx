import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";

import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import { DateFieldGroup } from "@DJobs/Components/Basic/DjobsFormFields/DateFieldGroup";
import {
  CreateCheckBoxField,
  createDjobsRichTextArea,
  createDjobsTextArea,
} from "@DJobs/Components/Basic/DjobsFormFields/Helpers";
import { DateHelpers, months } from "@Helpers/DateHelpers";
import { BackButton, DjobsButton } from "@DJobs/Components/Basic";
import { CareerHistoryProps } from "../CareerHistory";
import { CareerInfoData } from "./Utils";

import { DeleteIconAlt } from "@Global/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { DeleteModal } from "@DJobs/Components/Basic/DeleteModal";
import { AccordianContext } from "@Global/Components/Basic/Accordian";
import { handleFormSubmit } from "@Helpers/Formik";
import { CareerHistoryContext } from "..";

export const CareerInfoFormEdit = () => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const {
    AccordianData,
    AccordianEditProps,
    AccordianDeleteProps,
  } = useContext(AccordianContext);
  const { setSaveInitiated, saveInitiated, onCancelHandlerEdit } = useContext(
    CareerHistoryContext
  );
  const { setIsEditFormOpen, updateData } = AccordianEditProps;
  const [showModal, setShowModal] = useState(false);

  //Hover effect for Delete icon
  const [isMouseOverDeleteIcon, setIsMouseOverDeleteIcon] = useState(false);
  const DELETE_ICON_COLOR = isMouseOverDeleteIcon ? "black50" : "black80";

  //#region Calculate from and To date
  const [from, to] = AccordianData.date.split(" - ");
  const [fromYear, fromMonth] = from.split(" ");
  const [toYear, toMonth] = to.split(" ");
  const fromMonthIndex = DateHelpers.monthsShortNameMap[fromMonth];
  const toMonthIndex = DateHelpers.monthsShortNameMap[toMonth];
  const [isChecked, setIsChecked] = useState(false);
  //#endregion

  const initialValues = {
    jobTitle: AccordianData.title,
    companyName: AccordianData.subTitle,
    description: AccordianData.descriptions,
    startedFrom_month: DateHelpers.months[fromMonthIndex],
    startedFrom_year: parseInt(fromYear),
    workedTill_month: DateHelpers.months[toMonthIndex],
    workedTill_year: parseInt(toYear),
    isCurrentPosition: AccordianData.isCurrentPosition,
    reasonForLeaving: AccordianData.reasonForLeaving,
  } as CareerHistoryProps.CareerInfoFormValues;

  const {
    validationSchema,
    formFields,
    initialErrors,
    idPrefix,
  } = CareerInfoData;

  const onSubmitHandler = (values: CareerHistoryProps.CareerInfoFormValues) => {
    setSaveInitiated(true);
    updateData({ ...values, id: AccordianData.id });
  };

  const requiredFields = !isChecked
    ? {
        ...CareerInfoData.requiredFields,
        workedTill_month: true,
        workedTill_year: true,
      }
    : CareerInfoData.requiredFields;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={validationSchema}
      initialErrors={initialErrors}
    >
      {formik => {
        //#region TO Date Validation
        const workedTillValidation = () => {
          const {
            startedFrom_month,
            startedFrom_year,
            workedTill_month,
            workedTill_year,
          } = formik.values;

          let isToBiggerThanFrom = true;
          if (workedTill_year || workedTill_month) {
            if (workedTill_year < startedFrom_year) isToBiggerThanFrom = false;
            if (startedFrom_year === workedTill_year && workedTill_month) {
              if (
                months.indexOf(workedTill_month) <
                months.indexOf(startedFrom_month)
              )
                isToBiggerThanFrom = false;
            }
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
        //#endregion

        const RemoveWorkedTillValidationIfCurrentPosition = () => {
          if (formik.values.isCurrentPosition) {
            delete formik.errors["workedTill_year"];
            delete formik.errors["workedTill_month"];
          }
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
            <Bottom>
              <DeleteWrapper
                onClick={() => {
                  setShowModal(true);
                  setIsMouseOverDeleteIcon(false);
                }}
                onMouseOver={() => setIsMouseOverDeleteIcon(true)}
                onMouseLeave={() => setIsMouseOverDeleteIcon(false)}
              >
                <DeleteIconAlt
                  color={djobsTheme.colors[DELETE_ICON_COLOR]}
                  size={18}
                />
              </DeleteWrapper>
              <DeleteModal
                showModal={showModal}
                setShowModal={setShowModal}
                onDelete={() => {
                  AccordianDeleteProps.deleteData(AccordianData.id);
                  setIsEditFormOpen(false);
                }}
                title={`Are you sure you want to delete your ${AccordianData.subTitle} experience?`}
              />
              <ButtonsWrapper>
                <BackButton
                  handleClick={onCancelHandlerEdit}
                  buttonLabel="Cancel"
                  showBackIcon={false}
                />
                <DjobsButton.Actions
                  variant="Submit"
                  label="Update"
                  onClick={event => {
                    setSubmitClicked(true);
                    event.preventDefault();
                    RemoveWorkedTillValidationIfCurrentPosition();
                    handleFormSubmit({
                      formik,
                      idPrefix,
                      onSubmitHandler,
                      requiredFields,
                    });
                  }}
                  disabled={(submitClicked && !formik.isValid) || saveInitiated}
                />
              </ButtonsWrapper>
            </Bottom>
          </Form>
        );
      }}
    </Formik>
  );
};

const FormFieldsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 27px 0 5px 0;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: fit-content;
`;
const DeleteWrapper = styled.div`
  cursor: pointer;
`;
