// #region Global Imports
import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { Slide, toast } from "react-toastify";
import { Flex } from "reflexbox";
// #endregion Global Imports

// #region Local Imports
import {
  createInputFields,
  getRequiredInputFields,
} from "src/helpers/Formik/formikMultipleInputFields.helpers";
import { theme } from "@Global/Theme";
import { Button, Typography } from "@Global/Components/Basic";
import { UserPlusIcon } from "@Global/Components/Icons";
import { addUserInputFields } from "./Utils/AddUserModalFields";
import { ModalButtonsContainer } from "../Styles/ModalStyles";
import { ToastNotify } from "../Styles/TostifyStyle";
import { validationSchema } from "./Utils/AddUserModalFieldsValidation";
import { IAddUserFields } from "./AddUserModalInputs";
// #endregion Local Imports

const AddUserModalInputs: React.FunctionComponent<IAddUserFields.AddUserInputs> = (
  props: IAddUserFields.AddUserInputs
): JSX.Element => {
  const { addUserFields, addNewUser, setShowModal, teamData } = props;

  //Input Management methods
  const onSubmitHandler = (values: IAddUserFields.IProps) => {
    addNewUser({ ...values, id: (teamData.length + 1).toString() });
    toast(
      <ToastNotify>
        <UserPlusIcon color={theme.colors.green80} size={20} />
        Team Member added
      </ToastNotify>,
      {
        position: toast.POSITION.TOP_RIGHT,
        closeOnClick: false,
        closeButton: false,
        hideProgressBar: true,
        theme: "dark",
        autoClose: 3000,
        transition: Slide,
      }
    );
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <Flex pb="20px">
        <Typography styleName={"headingThree"} color="black100">
          Add new Team Member details
        </Typography>
      </Flex>
      <Formik
        initialValues={addUserFields}
        onSubmit={onSubmitHandler}
        validationSchema={validationSchema}
      >
        {formik => (
          <Form>
            <FormInputs>{createInputFields(addUserInputFields)}</FormInputs>
            <ModalButtonsContainer>
              <Button
                buttonCategory="main"
                variant="success"
                onClick={event => {
                  event.preventDefault();
                  if (Object.keys(formik.touched).length > 0) {
                    if (formik.isValid) onSubmitHandler(formik.values);
                  }
                  formik.setTouched(
                    getRequiredInputFields([...addUserInputFields])
                  );
                  formik.validateForm();
                }}
              >
                Save
              </Button>
              <Button
                buttonCategory="main"
                variant="cancel"
                onClick={() => setShowModal(false)}
              >
                cancel
              </Button>
            </ModalButtonsContainer>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};
export default AddUserModalInputs;

const FormInputs = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
