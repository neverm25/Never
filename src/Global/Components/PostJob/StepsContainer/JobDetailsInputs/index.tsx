import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";

import { Button } from "@Global/Components/Basic/Button/";
import { IPostJob } from "@Global/Components/PostJob/PostJob";

import { leftInputFields, rightInputFields } from "./JobDetailsFormFields";
import { validationSchema } from "./jobDetailsInputHelperValues";
import {
  createInputFields,
  getRequiredInputFields,
} from "src/helpers/Formik/formikMultipleInputFields.helpers";

const JobDetailInputs = (props: IPostJob.StepComponentProps) => {
  const { setActiveStepNumber } = props;
  const { setPostJobApplicationInputs } = props;
  const { jobDetailInputs, setJobDetailInputs } = props;
  const { advertiseInputs } = props;

  //Input Management methods
  const onSubmitHandler = (values: IPostJob.JobDetailInputsProps) => {
    setActiveStepNumber(2);
    setJobDetailInputs(values);
    const newPostJobInputs = { advertiseInputs, JobDetailInputs };
    setPostJobApplicationInputs(newPostJobInputs);
  };

  const JobDetailFields = [...leftInputFields, ...rightInputFields];

  return (
    <Formik
      initialValues={jobDetailInputs}
      onSubmit={onSubmitHandler}
      validationSchema={validationSchema}
    >
      {formik => (
        <Form>
          <FormInputs>
            <Left>{createInputFields(leftInputFields)}</Left>
            <Right>{createInputFields(rightInputFields)}</Right>
          </FormInputs>
          <ButtonWrapper>
            <Button
              buttonCategory="main"
              variant="primary"
              onClick={event => {
                event.preventDefault();
                if (Object.keys(formik.touched).length > 0) {
                  if (formik.isValid) onSubmitHandler(formik.values);
                }
                formik.setTouched(getRequiredInputFields(JobDetailFields));
                formik.validateForm();
              }}
            >
              Continue
            </Button>
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};
export default JobDetailInputs;

const ButtonWrapper = styled.div`
  margin: 50px 0;
`;
const FormInputs = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 600px) {
    width: 90%;
  }
  @media (min-width: 800px) {
    width: 100%;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
const Left = styled.div`
  width: 90%;
  align-items: stretch;
  @media (min-width: 1000px) {
    width: 45%;
  }
`;
const Right = styled.div`
  width: 90%;
  @media (min-width: 1000px) {
    width: 55%;
    margin-left: 30px;
  }
`;
