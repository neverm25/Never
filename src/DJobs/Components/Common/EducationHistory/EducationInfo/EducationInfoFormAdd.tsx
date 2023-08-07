import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";

import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import { EducationInfoData } from "./Utils";
import { DateFieldGroup } from "@DJobs/Components/Basic/DjobsFormFields/DateFieldGroup";
import { createDjobsRichTextArea } from "@DJobs/Components/Basic/DjobsFormFields/Helpers";
import {
  BackButton,
  DjobsButton,
  XDeleteButton,
} from "@DJobs/Components/Basic";
import { EducationHistoryProps } from "../EducationHistory";
import { djobsTheme } from "@DJobs/Theme";
import { EducationHistoryContext } from "..";
import { handleFormSubmit } from "@Helpers/Formik";

export const EducationInfoFormAdd = ({
  createEducationData,
}: EducationHistoryProps.EducationInfoFormAddProps) => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const initialValues = {
    qualification: "",
    institution: "",
    description: "",
    startedFrom_year: null,
    studiedTill_year: null,
  } as EducationHistoryProps.EducationInfoFormValues;
  const {
    setIsAddFormOpen,
    saveInitiated,
    setSaveInitiated,
    onCancelHandlerAdd,
  } = useContext(EducationHistoryContext);

  const {
    validationSchema,
    formFields,
    requiredFields,
    idPrefix,
    initialErrors,
  } = EducationInfoData;

  const onSubmitHandler = (
    values: EducationHistoryProps.EducationInfoFormValues
  ) => {
    setSaveInitiated(true);
    createEducationData(values);
    setTimeout(() => {
      setIsAddFormOpen(false);
    }, 300);
  };

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
          const { startedFrom_year, studiedTill_year } = formik.values;

          let isToBiggerThanFrom = true;
          const studiedTillValidation = () => {
            isToBiggerThanFrom = true;
            if (studiedTill_year) {
              if (studiedTill_year < startedFrom_year)
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

          return (
            <Form>
              <FormFieldsContainer>
                {createDjobsInputField(formFields.qualification)}
                {createDjobsInputField(formFields.institution)}
                <div style={{ display: "flex", gap: "30px" }}>
                  <DateFieldGroup
                    groupName="startedFrom"
                    isDayRequired={false}
                    isMonthRequired={false}
                    isRequired={true}
                    variant="WhiteBackground"
                    groupLabel="From"
                  />
                  <DateFieldGroup
                    groupName="studiedTill"
                    isDayRequired={false}
                    isMonthRequired={false}
                    customValidation={studiedTillValidation}
                    addNumberOfFutureYears={10}
                    isRequired={true}
                    variant="WhiteBackground"
                    groupLabel="To"
                  />
                </div>
                {createDjobsRichTextArea(formFields.description)}
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
                    setSubmitClicked(true);
                    event.preventDefault();
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
