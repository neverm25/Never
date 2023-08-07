import { InputHelperProps } from "src/helpers/Formik/formikInputFields.props";
import { getRichTextAreaMinHeight } from "src/helpers/Formik/richTextEditor.helpers";
import { SearchIcon } from "@Global/Components/Icons";

//SelectBase options
const WorkSituationOptions: InputHelperProps.SelectOption[] = [
  { label: "On-site", value: "onSite" },
  { label: "Hybrid", value: "hybrid" },
  { label: "Remote", value: "remote" },
];
const EmploymentTypeOptions: InputHelperProps.SelectOption[] = [
  { label: "Full Time", value: "fullTime" },
  { label: "Part-Time", value: "partTime" },
  { label: "Freelance", value: "freelance" },
  { label: "Contract", value: "contract" },
];
const ExperienceOptions: InputHelperProps.SelectOption[] = [
  { label: "1", value: "1" },
  { label: "3", value: "3" },
  { label: "5", value: "5" },
];

//Job Details Fields
const jobTitleFieldProps: InputHelperProps.CreateInputBaseProps = {
  label: "Job Title*",
  name: "jobTitle",
  placeholder: "Job Title",
  isRequired: true,
};
const jobTitle: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: jobTitleFieldProps,
};

const locationFieldProps: InputHelperProps.CreateInputBaseProps = {
  label: "Location*",
  name: "location",
  placeholder: "Search City",
  isSearch: true,
  suffix: <SearchIcon />,
  isRequired: true,
  isAutoComplete: true,
};
const location: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: locationFieldProps,
};

const workSituationFieldProps: InputHelperProps.CreateSelectBaseProps = {
  label: "Work Situation*",
  name: "workSituation",
  options: WorkSituationOptions,
  isRequired: true,
  placeholder: "Select Work situation",
};
const workSituation: InputHelperProps.FieldProps = {
  fieldType: "select",
  inputFieldProps: workSituationFieldProps,
};

const employmentTypeFieldProps: InputHelperProps.CreateSelectBaseProps = {
  label: "Employment Type*",
  name: "employmentType",
  options: EmploymentTypeOptions,
  isRequired: true,
  defaultValue: "fullTime",
  placeholder: "Select Employment type",
};
const employmentType: InputHelperProps.FieldProps = {
  fieldType: "select",
  inputFieldProps: employmentTypeFieldProps,
};

const industryFieldProps: InputHelperProps.CreateInputBaseProps = {
  label: "Industry*",
  name: "industry",
  placeholder: "Search Industry",
  isSearch: true,
  suffix: <SearchIcon />,
  isRequired: true,
};
const industry: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: industryFieldProps,
};

const skillsRequiredFieldProps: InputHelperProps.CreateInputBaseProps = {
  label: "Skills Required*",
  name: "skillsRequired",
  placeholder: "Skills Required*",
  isSearch: true,
  isAutoComplete: false,
  suffix: <SearchIcon />,
  isRequired: true,
};
const skillsRequired: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: skillsRequiredFieldProps,
};

const experienceRequiredFieldProps: InputHelperProps.CreateSelectBaseProps = {
  label: "Experience (Years)*",
  name: "experienceRequired",
  options: ExperienceOptions,
  isRequired: true,
  defaultValue: "1",
  placeholder: "Select Experience",
};
const experienceRequired: InputHelperProps.FieldProps = {
  fieldType: "select",
  inputFieldProps: experienceRequiredFieldProps,
};

const jobDescriptionFieldProps: InputHelperProps.CreateRichTextAreaProps = {
  name: "jobDescription",
  initialHTMLValue: "",
  label: "Job Description*",
  placeholder: "Enter text here...",
  minHeight: getRichTextAreaMinHeight(),
  isRequired: true,
};
const jobDescription: InputHelperProps.FieldProps = {
  fieldType: "richTextArea",
  inputFieldProps: jobDescriptionFieldProps,
};

export const leftInputFields = [
  jobTitle,
  location,
  workSituation,
  employmentType,
  industry,
  skillsRequired,
  experienceRequired,
];

export const rightInputFields = [jobDescription];
