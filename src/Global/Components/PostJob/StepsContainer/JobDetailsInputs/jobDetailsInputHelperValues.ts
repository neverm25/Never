import * as Yup from "yup";
export const requiredInputFields = {
  jobTitle: true,
  location: true,
  workSituation: true,
  employmentType: true,
  industry: true,
  skillsRequired: true,
  experienceRequired: true,
  jobDescription: true,
};

export const validationSchema = Yup.object({
  jobTitle: Yup.string().required("Please enter job title"),
  location: Yup.string().required("Please enter location"),
  workSituation: Yup.string().required("Please select work situation"),
  employmentType: Yup.string().required("Please select employment type"),
  industry: Yup.string().required("Please enter industry"),
  skillsRequired: Yup.string().required("Please enter skills"),
  experienceRequired: Yup.string().required("Please select experience"),
  jobDescription: Yup.string().required("Please enter job description"),
});
