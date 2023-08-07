import * as React from "react";

import { MainLogo } from "@Global/Components/Basic/CompanyLogo";
import AuthenticationForm from "./Components/AuthenticationForm";
import {
  ContentWrapper,
  Footer,
  Header,
  LoginPageWrapper,
} from "./Styles/LoginStyles";

const login = () => (
  <LoginPageWrapper>
    <Header>
      <MainLogo />
    </Header>

    <ContentWrapper>
      <AuthenticationForm />
    </ContentWrapper>

    <Footer />
  </LoginPageWrapper>
);

export default login;
