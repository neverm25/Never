import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";

import {
  createDjobsInputField,
  createDjobsSelectField,
  DjobsFormFieldsProps,
} from "@DJobs/Components/Basic/DjobsFormFields";
import { UserDetailsFormUtils } from "./Utils/01-UserDetailsForm";
import { DateFieldGroup } from "@DJobs/Components/Basic/DjobsFormFields/DateFieldGroup";
import { StepHeading } from "./Common/StepHeading";
import { ApplicationStepperStyles } from "./Common/Styles";
import { ApplicationProcessContext } from ".";
import { DjobsButton } from "@DJobs/Components/Basic";
import { ApplicationStepperFormProps } from "./ApplicationStepperForm";
import { handleFormSubmit } from "@Helpers/Formik";
import { HeaderAPI } from "@API/CityAPI";
import { useAppDispatch, useAppSelector } from "@Redux";
import { updateCandidateData } from "@Redux/slices/CandidateDetails";
import moment from "moment";

export const UserDetails = () => {
  const userData = useAppSelector(state => state.candidateDetails);
  const dispatch = useAppDispatch();
  const { setStepNumber } = useContext(ApplicationProcessContext);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [cityOptions, setCityOptions] = useState(
    [] as DjobsFormFieldsProps.SelectOption[]
  );
  const {
    formFields,
    requiredFields,
    validationSchema,
    idPrefix,
  } = UserDetailsFormUtils;

  const onSubmitHandler = (
    formValues: ApplicationStepperFormProps.UserDetailsFields
  ) => {
    setStepNumber(prev => prev + 1);
    dispatch(
      updateCandidateData({
        ...formValues,
        city:
          formValues.city === userData.city_name
            ? userData.city
            : formValues.city,
        dob_month:
          formValues.dob_month &&
          moment()
            .month(formValues.dob_month)
            .format("M"),
      })
    );
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        city: userData?.city_name,
        country: userData?.country,
        dob_day: userData?.dob_day,
        dob_month:
          userData?.dob_month &&
          moment()
            .month(Number(userData?.dob_month) - 1)
            .format("MMMM"),
        dob_year: userData?.dob_year,
        first_name: userData?.first_name,
        last_name: userData?.last_name,
      }}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      {formik => {
        const customValidation = () => {
          const { country, city } = formik.values;
          //Don't throw custom error when city is not searched
          if (!city) return "";
          return country ? "" : "Please select country to search city";
        };

        const updateCityOptions = async (city: string) => {
          if (!formik.values.country) {
            formik.setFieldTouched(formFields.country.name);
            return;
          }
          const cities = await HeaderAPI.getCityOptions(
            city,
            formik.values.country
          );
          const cityOptions: DjobsFormFieldsProps.SelectOption[] = cities.map(
            city => ({ label: city.name, value: city.id.toString() })
          );
          setCityOptions(cityOptions);
        };
        if (formik.values.country === null) {
          delete formik.errors["country"];
        }
        return (
          <React.Fragment>
            <ApplicationStepperStyles.ApplicationStepContainerSmall>
              <StepHeading
                stepHeading="User Details"
                stepDescription="Tell us more about yourself."
              />

              <Form>
                <FormWrapper>
                  <FieldWrapper>
                    {createDjobsInputField(formFields.firstName)}
                    {createDjobsInputField(formFields.lastName)}
                  </FieldWrapper>
                  <FieldWrapper>
                    {createDjobsSelectField({
                      ...formFields.country,
                      customValidation,
                    })}
                    {createDjobsSelectField({
                      ...formFields.city,
                      options: cityOptions,
                      handleChange: updateCityOptions,
                      notFoundMsg: "Please enter a location",
                    })}
                  </FieldWrapper>
                  <FieldWrapper>
                    <DateFieldGroup
                      groupName="dob"
                      groupLabel="Date of birth (optional)"
                      isRequired={true}
                      dateAcceptance="past"
                    />
                  </FieldWrapper>
                </FormWrapper>
              </Form>
            </ApplicationStepperStyles.ApplicationStepContainerSmall>

            <ApplicationStepperStyles.ButtonsWrapper>
              <DjobsButton.NavActions
                variant="Stepper"
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
                disabled={
                  submitClicked && Object.keys(formik.errors).length !== 0
                }
                label="Next"
              />
            </ApplicationStepperStyles.ButtonsWrapper>
          </React.Fragment>
        );
      }}
    </Formik>
  );
};

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 35px;
  }
`;
const FormWrapper = styled.div`
  display: flex;
  gap: 44px;
  flex-direction: column;
`;
