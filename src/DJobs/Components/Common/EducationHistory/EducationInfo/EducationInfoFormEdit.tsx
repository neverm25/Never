import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";

import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import { DateFieldGroup } from "@DJobs/Components/Basic/DjobsFormFields/DateFieldGroup";
import { createDjobsRichTextArea } from "@DJobs/Components/Basic/DjobsFormFields/Helpers";
import { BackButton, DjobsButton } from "@DJobs/Components/Basic";
import { EducationHistoryProps } from "../EducationHistory";
import { EducationInfoData } from "./Utils";
import { DeleteIconAlt } from "@Global/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { DeleteModal } from "@DJobs/Components/Basic/DeleteModal";
import { AccordianContext } from "@Global/Components/Basic/Accordian";
import { handleFormSubmit } from "@Helpers/Formik";
import { EducationHistoryContext } from "..";

export const EducationInfoFormEdit = () => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const { saveInitiated, setSaveInitiated, onCancelHandlerEdit } = useContext(
    EducationHistoryContext
  );

  const {
    AccordianData,
    AccordianEditProps,
    AccordianDeleteProps,
  } = useContext(AccordianContext);
  const { setEditComponentId, updateData } = AccordianEditProps;
  const [showModal, setShowModal] = useState(false);

  //Hover effect for Delete icon
  const [isMouseOverDeleteIcon, setIsMouseOverDeleteIcon] = useState(false);
  const DELETE_ICON_COLOR = isMouseOverDeleteIcon ? "black50" : "black80";

  //#region Calculate from and To date
  const [from, to] = AccordianData.date.split("-");
  //#endregion

  const initialValues = {
    qualification: AccordianData.title,
    institution: AccordianData.subTitle,
    description: AccordianData.descriptions,
    startedFrom_year: parseInt(from),
    studiedTill_year: parseInt(to),
  } as EducationHistoryProps.EducationInfoFormValues;

  const {
    validationSchema,
    formFields,
    requiredFields,
    idPrefix,
    initialErrors,
  } = EducationInfoData;
  const { qualification, institution, description } = formFields;

  const onSubmitHandler = (
    values: EducationHistoryProps.EducationInfoFormValues
  ) => {
    setSaveInitiated(true);
    updateData({ ...values, id: AccordianData.id });
    setEditComponentId(0);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={validationSchema}
      initialErrors={initialErrors}
    >
      {formik => {
        //#region TO Date Validation
        const { startedFrom_year, studiedTill_year } = formik.values;
        const studiedTillValidation = () => {
          let isToBiggerThanFrom = true;

          if (studiedTill_year) {
            if (studiedTill_year < startedFrom_year) isToBiggerThanFrom = false;
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

        return (
          <Form>
            <FormFieldsContainer>
              {createDjobsInputField(qualification)}
              {createDjobsInputField(institution)}
              <div style={{ display: "flex", gap: "30px" }}>
                <DateFieldGroup
                  groupName="startedFrom"
                  groupLabel="From"
                  isDayRequired={false}
                  isMonthRequired={false}
                  isRequired={true}
                  variant="WhiteBackground"
                />
                <DateFieldGroup
                  groupName="studiedTill"
                  groupLabel="To"
                  isDayRequired={false}
                  isMonthRequired={false}
                  customValidation={studiedTillValidation}
                  addNumberOfFutureYears={10}
                  isRequired={true}
                  variant="WhiteBackground"
                />
              </div>
              {createDjobsRichTextArea(description)}
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
                }}
                title={`Are you sure you want to delete your ${AccordianData.subTitle} education?`}
              />
              <ButtonsWrapper>
                <BackButton
                  handleClick={onCancelHandlerEdit}
                  buttonLabel="Cancel"
                  showBackIcon={false}
                />
                <DjobsButton.Actions
                  variant="Submit"
                  label="update"
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
