declare namespace IAddUserFields {
  export interface IProps {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  }
  export interface AddUserInputs {
    addUserFields: IProps;
    addNewUser: React.Dispatch<React.SetStateAction<{}>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    teamData: Array<IProps>;
  }
}

export { IAddUserFields };
