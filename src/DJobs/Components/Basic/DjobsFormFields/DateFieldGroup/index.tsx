import React, { useState } from "react";
import styled from "styled-components";

import {
  getAllMonths,
  getFutureMonths,
  getMaxDayOfMonth,
  getPastMonths,
  getYearOptions,
} from "@Helpers/DateHelpers";
import * as DateHelpers from "@Helpers/DateHelpers";
import { Field, FieldProps } from "formik";

import { DjobsFormFieldsProps } from "../DjobsFormFields";
import { createDjobsSelectField } from "../Helpers";
import { DJobsInputStyledComponents } from "../Common/InputStyles";
import { DjobsCommonFieldComponents } from "../Common/Components";

export const DateFieldGroup = (props: DjobsFormFieldsProps.DateFieldGroup) => {
  const {
    groupName,
    groupLabel,
    isDayRequired = true,
    isMonthRequired = true,
    isYearRequired = true,
    dateAcceptance = "any",
    customValidation,
    addNumberOfFutureYears = 0,
    removeNumberOfPastYears = 0,
    isRequired,
    variant = "default",
    description,
  } = props;

  const [yearOptions] = useState(
    getYearOptions(
      addNumberOfFutureYears > 0
        ? { years: addNumberOfFutureYears, yearsOperation: "add" }
        : { years: removeNumberOfPastYears, yearsOperation: "subtract" }
    )
  );
  const [canAutoCorrectDate, setCanAutoCorrectDate] = useState(false);

  const handleChange = () => setCanAutoCorrectDate(true);

  //NOTE: We combine groupname along with fieldname here, Hence you must also give validation schema correctly
  //e.g groupName = "dateOfBirth", then you should give dateOfBirth_day as fieldname in your validation schema
  const dayFieldName = groupName + "_day";
  const monthFieldName = groupName + "_month";
  const yearFieldName = groupName + "_year";

  const dayFieldWidth = "140px";
  const monthFieldWidth = isDayRequired ? "250px" : "50%";
  const yearFieldWidth = isDayRequired ? "140px" : "50%";

  return (
    <Field name={groupName} key={groupName}>
      {({ form }: FieldProps) => {
        const { getFieldMeta, setFieldValue, setFieldError } = form;

        //#region Fields data
        const dayMetaData = getFieldMeta(dayFieldName);
        const monthMetaData = getFieldMeta(monthFieldName);
        const yearMetaData = getFieldMeta(yearFieldName);
        const dayValue = (dayMetaData.value as any) as string;
        const monthValue = (monthMetaData.value as any) as string;
        const yearValue = (yearMetaData.value as any) as string;
        //#endregion

        //#region Error validation
        const isDayEmpty = isDayRequired ? !dayMetaData.value : true;
        const isMonthEmpty = isMonthRequired ? !monthMetaData.value : true;
        const isYearEmpty = isYearRequired ? !yearMetaData.value : true;
        const AllFieldsEmpty = isDayEmpty && isMonthEmpty && isYearEmpty;
        const hasError =
          isRequired &&
          ((dayMetaData.touched && isDayEmpty) ||
            (monthMetaData.touched && isMonthEmpty) ||
            (yearMetaData.touched && isYearEmpty));

        let errorLabel = "";
        if (hasError) {
          if (AllFieldsEmpty) {
            errorLabel = groupLabel ? `${groupLabel} is required` : `Required`;
          } else {
            errorLabel = `The selected date is not valid`;
          }
        }
        let customError = customValidation ? customValidation() : "";
        if (hasError && !form.errors[groupName]) {
          setFieldError(
            groupName,
            hasError || customError ? (hasError ? errorLabel : customError) : ""
          );
        }

        //#endregion

        //#region Generate month options
        const getMonths = () => {
          if (dateAcceptance === "past")
            return getPastMonths({
              year: yearValue && parseInt(yearValue),
            });
          if (dateAcceptance === "future")
            return getFutureMonths({
              year: yearValue && parseInt(yearValue),
            });
          return getAllMonths();
        };
        const months = getMonths();
        const monthOptions = months.map(monthName => {
          return {
            label: monthName,
            value: monthName,
          };
        });

        //Update the month to reflect past or future dates
        if (monthValue && canAutoCorrectDate) {
          const today = new Date();
          const thisYear = today.getFullYear();
          const isCurrentYearSelected =
            yearValue && parseInt(yearValue) === thisYear;

          const thisMonth = today.getMonth();
          const allMonths = getAllMonths();
          const monthValueIndex = allMonths.findIndex(
            month => month === monthValue
          );

          if (isCurrentYearSelected) {
            if (dateAcceptance === "past" && monthValueIndex > thisMonth)
              setFieldValue(monthFieldName, months[months.length - 1]);
            else if (dateAcceptance === "future" && monthValueIndex < thisMonth)
              setFieldValue(monthFieldName, months[0]);
          }
          setCanAutoCorrectDate(false);
        }
        //#endregion

        //#region Generate Day options
        const maxDateOfDayField = getMaxDayOfMonth({
          year: yearValue ? parseInt(yearValue) : 1900,
          month: monthValue ? DateHelpers.months.indexOf(monthValue) : 0,
          isPast: dateAcceptance === "past",
        });
        const parsedDate = parseInt(dayValue);
        const isValidDate = dayValue && parseInt(dayValue) <= maxDateOfDayField;
        if (!isValidDate && parsedDate) {
          setFieldValue(dayFieldName, maxDateOfDayField);
        }
        const dayOptions = [] as DjobsFormFieldsProps.SelectOption[];
        for (let date = 1; date <= maxDateOfDayField; date++) {
          dayOptions.push({
            label: date,
            value: date,
          });
        }

        //Update the day to reflect past or future dates
        if (dayValue && canAutoCorrectDate) {
          const today = new Date();
          const thisYear = today.getFullYear();
          const isCurrentYearSelected =
            yearValue && parseInt(yearValue) === thisYear;

          const thisMonth = today.getMonth();
          const allMonths = getAllMonths();
          const isCurrentMonthSelected = allMonths[thisMonth] === monthValue;

          const thisDay = today.getDate();

          if (isCurrentYearSelected && isCurrentMonthSelected) {
            if (dateAcceptance === "past" && parseInt(dayValue) > thisDay) {
              setFieldValue(dayFieldName, dayOptions[dayOptions.length - 1]);
            } else if (
              dateAcceptance === "future" &&
              parseInt(dayValue) < thisDay
            ) {
              setFieldValue(dayFieldName, dayOptions[0]);
            }
          }
          setCanAutoCorrectDate(false);
        }
        //#endregion

        return (
          <DateFieldGroupContainer isDayRequired={isDayRequired}>
            <DJobsInputStyledComponents.LabelWrapper>
              {groupLabel && (
                <DjobsCommonFieldComponents.InputLabel value={groupLabel} />
              )}
              {isRequired && (
                <DjobsCommonFieldComponents.RequiredLabel value="Required" />
              )}
            </DJobsInputStyledComponents.LabelWrapper>
            <FieldRow isDayRequired={isDayRequired}>
              {isYearRequired &&
                createDjobsSelectField({
                  name: yearFieldName,
                  variant,
                  width: yearFieldWidth,
                  placeholder: "year",
                  isRequired: isRequired,
                  showRequired: false,
                  showError: false,
                  options: yearOptions,
                  defaultValue: yearValue,
                  allowSearch: true,
                  idPrefix: "date_",
                  handleChange,
                })}
              {isMonthRequired &&
                createDjobsSelectField({
                  name: monthFieldName,
                  variant,
                  width: monthFieldWidth,
                  placeholder: "month",
                  isRequired: isRequired,
                  showRequired: false,
                  showError: false,
                  options: monthOptions,
                  defaultValue: monthValue,
                  allowSearch: true,
                  idPrefix: "date_",
                  handleChange,
                })}
              {isDayRequired &&
                createDjobsSelectField({
                  name: dayFieldName,
                  variant,
                  width: dayFieldWidth,
                  placeholder: "day",
                  isRequired: isRequired,
                  showRequired: false,
                  showError: false,
                  options: dayOptions,
                  allowSearch: true,
                  idPrefix: "date_",
                  handleChange,
                })}
            </FieldRow>
            {description && (
              <DjobsCommonFieldComponents.Description value={description} />
            )}
            {hasError || customError ? (
              <DjobsCommonFieldComponents.ErrorLabel
                value={hasError ? errorLabel : customError}
              />
            ) : null}
          </DateFieldGroupContainer>
        );
      }}
    </Field>
  );
};

const DateFieldGroupContainer = styled.div<{ isDayRequired: boolean }>`
  width: 100%;

  @media (min-width: 768px) {
    width: ${({ isDayRequired }) => isDayRequired && "560px"};
    gap: 30px;
  }
`;
const FieldRow = styled.div<{ isDayRequired: boolean }>`
  display: flex;
  flex-direction: ${({ isDayRequired }) => (isDayRequired ? "column" : "row")};
  justify-content: space-between;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;
