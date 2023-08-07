import * as React from "react";

import { MainLogo } from "@Global/Components/Basic/CompanyLogo";
import { LoginForm } from "./Components/Login/LoginForm";
import { LoginFooter } from "./Components/Login/LoginFooter";
import { RegisterForm } from "./Components/Register/RegisterForm";
import {
  Footer,
  FormContent,
  FormContentWrapper,
  FormWrapper,
  Header,
} from "./Styles/LoginFormStyles";
import { RegisterFooter } from "./Components/Register/RegisterFooter";

const AuthenticationForm = () => {
  const [existingUser, setExistingUser] = React.useState(true);
  const stateProps = { existingUser, setExistingUser };

  return (
    <FormWrapper>
      <Header>
        <MainLogo />
      </Header>

      <FormContent>
        <FormContentWrapper>
          {existingUser ? <LoginForm /> : <RegisterForm />}
        </FormContentWrapper>
      </FormContent>

      <Footer>
        {existingUser ? (
          <LoginFooter {...stateProps} />
        ) : (
          <RegisterFooter {...stateProps} />
        )}
      </Footer>
    </FormWrapper>
  );
};
export default AuthenticationForm;
