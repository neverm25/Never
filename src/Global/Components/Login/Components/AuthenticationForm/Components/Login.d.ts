declare namespace ILogin {
  export interface existingUserProps {
    existingUser: boolean;
    setExistingUser: Dispatch<SetStateAction<boolean>>;
  }
}
export { ILogin };
