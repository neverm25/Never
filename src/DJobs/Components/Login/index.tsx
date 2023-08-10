'use client'

import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";

import { LoginForm } from "../Common/LoginForm";
import { LoginFormProps } from "../Common/LoginForm/LoginForm";
import { LoginBgWrapper } from "../Layout/PageContentWrapper/Styles";
import { BackButton } from "@DJobs/Components/Basic";
import { LOCAL_STORAGE_KEY } from "@DJobs/DjobsUtils/LocalStorageKeys";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";
import { djobsTheme } from "@DJobs/Theme";

export const Login = (props: LoginFormProps.IProps) => {
  const router = useRouter();
  useEffect(() => {
    const checkAlreadyLoggedIn = () => {
      const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
      if (accessToken && window.location.pathname === DJOBS_ROUTES.login)
        router.push(DJOBS_ROUTES.home);
    };
    window.addEventListener("load", checkAlreadyLoggedIn);
    window.document.readyState === "complete" && checkAlreadyLoggedIn();
  }, []);
  return (
    <Container>
      <Head>
        <title>{`Let's get started | Ditto Jobs`}</title>
      </Head>
      <LoginBgWrapper>
        <div style={{ marginTop: `calc(67px + 24px)`, paddingLeft: "12px" }}>
          <BackButton btnType="redirectToPreviousPage" />
        </div>
        <FormWarpper>
          <LoginForm {...props} />
        </FormWarpper>
      </LoginBgWrapper>
    </Container>
  );
};
const Container = styled.div`
  background: ${djobsTheme.colors.white110};
`;
const FormWarpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 46px;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 60px;
`;
