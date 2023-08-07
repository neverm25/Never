import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";
import { BackButton, Pills, DjobsButton } from "@DJobs/Components/Basic";
import {
  createDjobsInputField,
  createDjobsRichTextArea,
  DjobsFormFieldsProps,
} from "@DJobs/Components/Basic/DjobsFormFields";
import { CandidateOverviewContext } from "..";
import { CandidateOverview } from "../Overview";
import { CandidateProfileOverviewData } from "../Utils";
import {
  createDjobsAutocompleteInputField,
  createDjobsSelectField,
} from "@DJobs/Components/Basic/DjobsFormFields/Helpers";
import { CandidateLanguagesAPI, CandidateSkillsAPI } from "@API";
import { handleFormSubmit } from "@Helpers/Formik";
import { HeaderAPI } from "@API/CityAPI";
import { djobsTheme } from "@DJobs/Theme";
import store, { useAppDispatch, useAppSelector } from "@Redux";
import { CandidateDetailsProps } from "@Redux/slices/CandidateDetails/CandidateDetails";
import { Languages } from "@Redux/slices/Languages/Languages";
import { updateCandidateData } from "@Redux/slices/CandidateDetails";

export const EditForm = () => {
  const { languages, skills, candidateDetails } = useAppSelector(
    store => store
  );
  const dispatch = useAppDispatch();
  //#region Contexts and State
  const { setIsEditMode, getSkills } = useContext(CandidateOverviewContext);
  const initialSkills = getSkills();

  const [submitClicked, setSubmitClicked] = useState(false);
  const [candidateSkills, setCandidateSkills] = useState(initialSkills);
  const [languageOptions, setLanguageOptions] = useState(
    getLanguageOptions({})
  );
  const [candidateLanguages, setCandidateLanguages] = useState(
    languages.candidateLanguages
  );

  const [cityOptions, setCityOptions] = useState(
    [] as DjobsFormFieldsProps.SelectOption[]
  );
  //#endregion

  //#region Skills
  const removeSkillsFromCandidateSkills = (index: number) => {
    const newSkills = [...candidateSkills];
    newSkills.splice(index, 1);
    setCandidateSkills(newSkills);
  };
  //#endregion

  //#region Languages
  const addSelectedLanguageToCandidateLanguages = (
    languageName: string,
    proficiency: string
  ) => {
    const selectedLanguage = languages.langugagesList.find(
      data => data.name == languageName
    );
    const selectedCandidateLanguage: Languages.CandidateLanguage = {
      language_id: selectedLanguage.id,
      name: selectedLanguage.name,
      proficiency,
    };
    const newCandidateLanguages = [
      ...candidateLanguages,
      selectedCandidateLanguage,
    ];
    setCandidateLanguages(newCandidateLanguages);
    setLanguageOptions(
      getLanguageOptions({ candidateLanguages: newCandidateLanguages })
    );
  };

  const removeSelectedLanguageFromCandidateLanguages = (index: number) => {
    const newcandidateLanguages = [...candidateLanguages];
    newcandidateLanguages.splice(index, 1);
    setCandidateLanguages(newcandidateLanguages);
    setLanguageOptions(getLanguageOptions({ candidateLanguages }));
  };
  //#endregion

  //#region Initial values
  const initialValues: CandidateOverview.OverviewForm = {
    country: candidateDetails.country,
    city: candidateDetails.city_name,
    description: candidateDetails.bio,
    email: candidateDetails.email,
    firstName: candidateDetails.first_name,
    lastName: candidateDetails.last_name,
    phoneNumber: isNaN(parseInt(candidateDetails.phone))
      ? ""
      : candidateDetails.phone,
    skills: "",
    language: "",
    proficiency: "",
  };
  //#endregion

  const {
    validationSchema,
    formFields,
    requiredFields,
    idPrefix,
    initialErrors,
  } = CandidateProfileOverviewData;

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={validationSchema}
        initialErrors={initialErrors}
      >
        {formik => {
          //#region Language field handling
          const { language, proficiency } = formik.values;
          if (language && proficiency) {
            addSelectedLanguageToCandidateLanguages(language, proficiency);
            formik.values.language = "";
            formik.values.proficiency = "";
          }
          //#endregion

          //#region Handling city search
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
          //#endregion

          //#region Submit Handler
          const onSubmitHandler = (values: CandidateOverview.OverviewForm) => {
            const isLanguageChanged =
              languages.candidateLanguages !== candidateLanguages;
            if (isLanguageChanged)
              CandidateLanguagesAPI.updateLanguages(candidateLanguages);

            const isSkillsChanged = initialSkills !== candidateSkills;
            if (isSkillsChanged)
              CandidateSkillsAPI.updateSkills(candidateSkills);

            //Update Overview Data
            const newCandidate: CandidateDetailsProps.OverviewData = {
              country: values.country,
              city:
                values.city === candidateDetails.city_name
                  ? candidateDetails.city
                  : values.city,
              bio: values.description,
              first_name: values.firstName,
              last_name: values.lastName,
              phone: `${values.phoneNumber}`,
            };
            dispatch(updateCandidateData(newCandidate));

            setIsEditMode(false);
            window.scrollTo({
              top: 250,
              behavior: "smooth",
            });
          };
          //#endregion
          const isValidForm = Object.keys(formik.errors).length === 0;

          return (
            <Form style={{ width: "100%" }}>
              <FormFieldsWrapper style={{ marginTop: "50px" }}>
                <FieldRow>
                  <Left>{createDjobsInputField(formFields.firstName)}</Left>
                  <Right>{createDjobsInputField(formFields.lastName)}</Right>
                </FieldRow>
                <FieldRow>
                  <Right>
                    {createDjobsSelectField({
                      ...formFields.country,
                      customValidation,
                    })}
                  </Right>
                  <Left>
                    {createDjobsSelectField({
                      ...formFields.city,
                      options: cityOptions,
                      handleChange: updateCityOptions,
                    })}
                  </Left>
                </FieldRow>
                <FieldRow>
                  <Left>{createDjobsInputField(formFields.phoneNumber)}</Left>
                  <Right>{createDjobsInputField(formFields.email)}</Right>
                </FieldRow>
                <FieldRow>
                  <div style={{ width: "100%" }}>
                    {createDjobsRichTextArea(formFields.description)}
                  </div>
                </FieldRow>
                <div>
                  <Pills
                    pillColor="blue50"
                    data={candidateSkills}
                    editProps={{
                      isEdit: true,
                      setData: removeSkillsFromCandidateSkills,
                    }}
                    heading="Skills"
                    textColor="blue100"
                  />
                  <FieldRow style={{ marginTop: "-16px" }}>
                    <Left>
                      {createDjobsAutocompleteInputField({
                        ...formFields.searchSkills,
                        options: skills.skillsOptions,
                        data: candidateSkills,
                        setData: setCandidateSkills,
                      })}
                    </Left>
                    <Right />
                  </FieldRow>
                </div>
                {candidateLanguages.length !== 0 && (
                  <Pills
                    pillColor="blue50"
                    heading="Languages"
                    data={candidateLanguages.map(
                      data => `${data.name}: ${data.proficiency}`
                    )}
                    textColor="blue100"
                    editProps={{
                      isEdit: true,
                      setData: removeSelectedLanguageFromCandidateLanguages,
                    }}
                  />
                )}
                <FieldRow>
                  <Left>
                    {createDjobsSelectField({
                      ...formFields.language,
                      options: languageOptions,
                    })}
                  </Left>
                  <Right>
                    {createDjobsSelectField(formFields.proficiency)}
                  </Right>
                </FieldRow>
              </FormFieldsWrapper>
              <ButtonsWrapper>
                <BackButton
                  handleClick={() => {
                    setIsEditMode(false);
                    window.scrollTo({
                      top: 250,
                      behavior: "smooth",
                    });
                  }}
                  buttonLabel="Cancel"
                  showBackIcon={false}
                />
                <DjobsButton.Actions
                  variant="Submit"
                  onClick={event => {
                    event.preventDefault();
                    setSubmitClicked(true);

                    handleFormSubmit({
                      formik,
                      idPrefix,
                      onSubmitHandler,
                      requiredFields,
                    });
                  }}
                  disabled={submitClicked && !isValidForm}
                  label="Save"
                />
              </ButtonsWrapper>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

type getLanguageOptionsProps = {
  candidateLanguages?: Languages.CandidateLanguage[];
};
const getLanguageOptions = (props: getLanguageOptionsProps) => {
  const defaultLanguage = [{ label: "English", value: "English" }];
  const { languages } = store.getState();
  const candidateLanguages = props.candidateLanguages
    ? props.candidateLanguages
    : languages.candidateLanguages;

  let existingLanguageNames = candidateLanguages.map(lang => lang.name);
  const newLanguageOptions = languages.languageOptions.filter(
    lang => existingLanguageNames.indexOf(lang.label) === -1
  );

  return newLanguageOptions.length > 0 ? newLanguageOptions : defaultLanguage;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 20px;
  background-color: ${djobsTheme.colors.white110};
  border-radius: 15px;
  box-shadow: ${djobsTheme.effects.cards};
`;
const FormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const FieldRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  gap: 25px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  gap: 25px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: fit-content;
  float: right;
  margin: 50px 0 25px 0;
`;
