import { FormikValues, FormikProps, FormikTouched } from "formik";
export const getRequiredFieldNameWithNoValue = (
  requiredInputFields: Object,
  formikValues: FormikValues
) => {
  const keys = Object.keys(requiredInputFields);
  const isRequiredFieldNameWithNoValue = keys.find(key => {
    if (Array.isArray(formikValues[key])) {
      return formikValues[key].length === 0;
    }
    return formikValues[key] ? false : true;
  });
  return isRequiredFieldNameWithNoValue;
};

export const setFocusOnErrorNode = (errorNodeId: string) => {
  const errorNode = document.getElementById(errorNodeId);
  if (errorNode) {
    errorNode.scrollIntoView();
    errorNode.focus();
  }
};

type handleFormSubmitProps = {
  onSubmitHandler: (values: FormikValues) => void;
  requiredFields: FormikTouched<any>;
  formik: FormikProps<any>;
  idPrefix: string;
};
export const handleFormSubmit = (props: handleFormSubmitProps) => {
  const { formik, requiredFields, onSubmitHandler, idPrefix } = props;

  formik.setTouched(requiredFields);
  formik.validateForm();
  const requiredFieldNameWithNoValue = getRequiredFieldNameWithNoValue(
    requiredFields,
    formik.values
  );
  const isFormUnTouched = Object.keys(formik.touched).length === 0;
  const isNoErrors = isFormUnTouched || Object.keys(formik.errors).length === 0;
  const isValidForm = !requiredFieldNameWithNoValue && isNoErrors;
  !isValidForm && setFocusOnErrorNode(idPrefix + requiredFieldNameWithNoValue);
  isValidForm && onSubmitHandler(formik.values);
};
