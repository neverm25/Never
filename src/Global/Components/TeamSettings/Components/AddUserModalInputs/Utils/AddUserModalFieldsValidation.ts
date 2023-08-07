import * as Yup from "yup";
export const requiredInputFields = {
  firstName: true,
  lastName: true,
  email: true,
  role: true,
};

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Please enter Firstname"),
  lastName: Yup.string().required("Please enter Lastname"),
  email: Yup.string()
    .email()
    .required("Please enter email"),
  role: Yup.string().required("Please select role"),
});
