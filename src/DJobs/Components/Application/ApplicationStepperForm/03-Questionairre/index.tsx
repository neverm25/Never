import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";

import { StepHeading } from "../Common/StepHeading";
import {
  createDjobsInputField,
  createDjobsSelectField,
  createDjobsTextArea,
  createCheckboxGroupField,
  createRadioGroupField,
  DjobsFormFieldsProps,
} from "@DJobs/Components/Basic/DjobsFormFields/";
import {
  createDatePickerField,
  createDjobsRichTextArea,
} from "@DJobs/Components/Basic/DjobsFormFields/Helpers";
import { ApplicationStepperStyles } from "../Common/Styles";
import { ApplicationProcessContext } from "..";
import { BackButton, DjobsButton } from "@DJobs/Components/Basic";
import {
  getRequiredFieldNameWithNoValue,
  handleFormSubmit,
} from "@Helpers/Formik";
import { InputGenerationProps } from "./InputGeneration";
import { QuestionairreHeadings } from "./Headings";
import { ApplicationAPI } from "@API/ApplicationAPI";
import { CandidateDetailsProps } from "@Redux/slices/CandidateDetails/CandidateDetails";
import { actions, useAppDispatch } from "@Redux";
import { getCandidateOverview } from "@Redux/slices/CandidateDetails";

const idPrefix = "questionairre_";

export const Questionairre = () => {
  const {
    setStepNumber,
    QuestionairreFields,
    setQuestionairreFields,
    applyJobData,
    UploadedFilesId,
  } = useContext(ApplicationProcessContext);

  const [submitClicked, setSubmitClicked] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmitHandler = formValues => {
    if (applyJobData.is_internal) {
      ApplicationAPI.submitApplication(
        UploadedFilesId,
        router.query.job_id,
        applyJobData.questionnaire_data,
        JSON.stringify(formValues)
      )
        .then(response => {
          const jobApplications: CandidateDetailsProps.jobApplications =
            response.data;
          dispatch(
            actions.candidateDetails.setJobApplications(jobApplications)
          );
          dispatch(getCandidateOverview());
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          setStepNumber(prev => prev + 1);
          setQuestionairreFields(formValues);
        });
    } else {
      setStepNumber(prev => prev + 1);
      setQuestionairreFields(formValues);
    }
  };

  const questionairreFields: InputGenerationProps.Iprops[] = JSON.parse(
    applyJobData.questionnaire_data
  );
  const Fields = getQuestionairreFields(questionairreFields);
  const requiredFields = {};
  questionairreFields.forEach(props => {
    const { type } = props;
    if (type === "header" || type === "paragraph") return;
    if (props.required) requiredFields[props.name] = true;
  });

  return (
    <Formik initialValues={QuestionairreFields} onSubmit={() => {}}>
      {formik => {
        //#region Logic to check whether required fields are filled
        const requiredFieldNameWithNoValue = getRequiredFieldNameWithNoValue(
          requiredFields,
          formik.values
        );
        const isFormValid = requiredFieldNameWithNoValue ? false : true;
        //#endregion

        return (
          <React.Fragment>
            <ApplicationStepperStyles.ApplicationStepContainer>
              <StepHeading
                stepHeading="Questionnaire"
                stepDescription=""
              />

              <Form>
                <FieldWrapper>{Fields}</FieldWrapper>
              </Form>
            </ApplicationStepperStyles.ApplicationStepContainer>

            <ApplicationStepperStyles.ButtonsWrapper>
              <BackButton
                handleClick={() => {
                  setStepNumber(prev => prev - 1);
                  setQuestionairreFields(formik.values);
                  window.scrollTo(0, 0);
                }}
              />
              <DjobsButton.NavActions
                variant="Stepper"
                label="Next"
                onClick={() => {
                  setSubmitClicked(true);
                  handleFormSubmit({
                    formik,
                    idPrefix,
                    onSubmitHandler,
                    requiredFields,
                  });
                  window.scroll(0, 0);
                }}
                disabled={submitClicked && !isFormValid}
              />
            </ApplicationStepperStyles.ButtonsWrapper>
          </React.Fragment>
        );
      }}
    </Formik>
  );
};

const removeHTMLTagsFromInput = (input: string) => {
  const div = document.createElement("div");
  div.innerHTML = input;
  const text = div.textContent || div.innerText || "";
  return text;
};

const getQuestionairreFields = (
  questionairreFields: InputGenerationProps.Iprops[]
) =>
  questionairreFields.map(inputProps => {
    const variant = "Questionairre" as DjobsFormFieldsProps.InputVariant;
    const { type, label } = inputProps;

    if (type === "header") {
      const props = inputProps as InputGenerationProps.header;
      if (props.subtype === "h1")
        return <QuestionairreHeadings.Heading1 {...props} />;
      if (props.subtype === "h2")
        return <QuestionairreHeadings.Heading2 {...props} />;
    }
    if (type === "paragraph") {
      const props = inputProps as InputGenerationProps.paragraph;
      return <QuestionairreHeadings.paragraph {...props} />;
    }

    if (type !== "header") {
      const { required: isRequired, name } = inputProps;
      const commonFieldProps = {
        idPrefix,
        name,
        isRequired,
        label: removeHTMLTagsFromInput(label),
        variant,
      };

      if (type === "text") {
        return createDjobsInputField({
          ...commonFieldProps,
          placeholder: inputProps.placeholder ? inputProps.placeholder : label,
        });
      }
      if (type === "select") {
        const {
          values,
          defaultValue,
        } = inputProps as InputGenerationProps.Select;
        return createDjobsSelectField({
          ...commonFieldProps,
          options: values,
          placeholder: inputProps.placeholder ? inputProps.placeholder : label,
          defaultValue,
          allowSearch: true,
        });
      }
      if (type === "date") {
        const { defaultValue } = inputProps as InputGenerationProps.Datepicker;
        return createDatePickerField({
          ...commonFieldProps,
          value: defaultValue,
        });
      }
      if (type === "textarea") {
        const {
          maxLength,
          showCount,
          rows,
        } = inputProps as InputGenerationProps.TextArea;
        return createDjobsTextArea({
          ...commonFieldProps,
          placeholder: inputProps.placeholder ? inputProps.placeholder : label,
          maxLength,
          showCount,
          maxRows: rows,
        });
      }
      if (type === "richtextarea") {
        const {
          maxLength,
          showCount,
        } = inputProps as InputGenerationProps.RichTextArea;
        return createDjobsRichTextArea({
          ...commonFieldProps,
          placeholder: inputProps.placeholder ? inputProps.placeholder : label,
          maxLength,
          showCount,
        });
      }

      if (type === "checkbox-group") {
        const { values } = inputProps as InputGenerationProps.CheckBox;
        return createCheckboxGroupField({
          ...commonFieldProps,
          options: values,
          variant,
        });
      }
      if (type === "radio-group") {
        const { values } = inputProps as InputGenerationProps.Radio;
        return createRadioGroupField({
          ...commonFieldProps,
          options: values,
          variant,
        });
      }
    }
  });

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 978px) {
    gap: 34px;
  }
`;
