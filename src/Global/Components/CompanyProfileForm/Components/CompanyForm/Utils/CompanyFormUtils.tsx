import * as Yup from "yup";

import { theme } from "@Global/Theme";
import { InputHelperProps } from "@Helpers/Formik/formikInputFields.props";
import { SearchIcon } from "@Global/Components/Icons";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  TwitterIcon,
} from "@Global/Components/Icons/SocialMedia";

//#region Company Fields
//#region Left Fields
const companyDisplayNameProps: InputHelperProps.CreateInputBaseProps = {
  label: "Company Display Name*",
  name: "companyDisplayName",
  placeholder: "Display Name",
  isRequired: true,
};
const companyDisplayName: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: companyDisplayNameProps,
};

const locationsFieldProps: InputHelperProps.CreateInputBaseProps = {
  label: "Locations*",
  name: "locations",
  placeholder: "Search City",
  isSearch: true,
  suffix: <SearchIcon />,
  isRequired: true,
};
const locations: InputHelperProps.FieldProps = {
  fieldType: "input",
  inputFieldProps: locationsFieldProps,
};

const companySizeOptions: InputHelperProps.SelectOption[] = [
  { label: "1 - 10", value: "Below10" },
  { label: "11 - 50", value: "Below50" },
  { label: "51 - 200", value: "Below200" },
  { label: "201 - 500", value: "Below500" },
  { label: "501 - 1000", value: "Below1000" },
  { label: "1001 - 5000", value: "Below5000" },
  { label: "5001+", value: "Above5000" },
];
const companySizeFieldProps: InputHelperProps.CreateSelectBaseProps = {
  label: "Company Size*",
  name: "companySize",
  options: companySizeOptions,
  isRequired: true,
  placeholder: "Make a selection...",
};
const companySize: InputHelperProps.FieldProps = {
  fieldType: "select",
  inputFieldProps: companySizeFieldProps,
};

//#region Social Media Group
const linkedinFieldProps: InputHelperProps.CreateInputBaseProps = {
  name: "linkedin",
  isRequired: false,
  placeholder: "Enter url",
  prefix: <LinkedInIcon color={theme.colors.black90} />,
};
const facebookFieldProps: InputHelperProps.CreateInputBaseProps = {
  name: "facebook",
  isRequired: false,
  placeholder: "Enter url",
  prefix: <FacebookIcon color={theme.colors.black90} />,
};
const twitterFieldProps: InputHelperProps.CreateInputBaseProps = {
  name: "twitter",
  isRequired: false,
  placeholder: "Enter url",
  prefix: <TwitterIcon color={theme.colors.black90} />,
};
const instagramFieldProps: InputHelperProps.CreateInputBaseProps = {
  name: "instagram",
  isRequired: false,
  placeholder: "Enter url",
  prefix: <InstagramIcon color={theme.colors.black90} />,
};
const youtubeFieldProps: InputHelperProps.CreateInputBaseProps = {
  name: "youtube",
  isRequired: false,
  placeholder: "Enter url",
  prefix: <YouTubeIcon color={theme.colors.black90} />,
};
export const socialMediaFields = [
  linkedinFieldProps,
  facebookFieldProps,
  twitterFieldProps,
  instagramFieldProps,
  youtubeFieldProps,
];
const socialMediaGroupProps: InputHelperProps.CreateInputGroupProps = {
  name: "socialMedia",
  label: "Social",
  inputs: socialMediaFields,
  isRequired: false,
};
export const socialMediaGroup: InputHelperProps.FieldProps = {
  fieldType: "inputGroup",
  inputFieldProps: socialMediaGroupProps,
};
//#endregion

export const leftInputFields: InputHelperProps.FieldProps[] = [
  companyDisplayName,
  locations,
  companySize,
  socialMediaGroup,
];
//#endregion

//#region Right Fields
const companyBioFieldProps: InputHelperProps.CreateTextAreaProps = {
  name: "companyBio",
  label: "Company Bio",
  placeholder: "Company Bio",
  isRequired: true,
};
const companyBio: InputHelperProps.FieldProps = {
  fieldType: "qf_textArea",
  inputFieldProps: companyBioFieldProps,
};

const companyDescriptionFieldProps: InputHelperProps.CreateRichTextAreaProps = {
  name: "companyDescription",
  initialHTMLValue: "",
  label: "Company Description",
  placeholder: "Enter text here...",
  minHeight: 300,
  isRequired: true,
  showCount: true,
  textLimit: 2000,
};
const companyDescription: InputHelperProps.FieldProps = {
  fieldType: "richTextArea",
  inputFieldProps: companyDescriptionFieldProps,
};
export const rightInputFields: InputHelperProps.FieldProps[] = [
  companyBio,
  companyDescription,
];
//#endregion

export const companyProfileFields = [...leftInputFields, ...rightInputFields];
//#endregion

export const companyProfileValidationSchema = Yup.object({
  companyDisplayName: Yup.string().required(
    "Please enter Company display name"
  ),
  locations: Yup.string().required("Please enter Locations"),
  companySize: Yup.string().required("Please select Company size"),
  companyBio: Yup.string().required("Please enter Company bio"),
  companyDescription: Yup.string()
    .max(2000, "Description text limit reached")
    .required("Please enter companyDescription"),
});
