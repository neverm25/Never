import * as Yup from "yup";
import { getCurrentYear } from "@Helpers/DateHelpers";

//Sample Validation schema
export const getDateFieldValidationSchema = {
  day: Yup.number().required("Please enter the day"),
  month: Yup.string().required("Please select the month"),
  year: Yup.number()
    .required("Please enter the year")
    .moreThan(1900 - 1, "Year should be above 1900")
    .lessThan(getCurrentYear() + 1, "Can't enter future"),
};
