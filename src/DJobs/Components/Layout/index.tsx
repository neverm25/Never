import React, { useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";
import { setCookie, hasCookie } from "cookies-next";
import dynamic from "next/dynamic";
const Footer = dynamic(import("./Footer").then(module => module));
import { LayoutProps } from "./Layout";
import { actions, useAppDispatch, useAppSelector } from "@Redux";
import { Loading } from "../Common/Loading";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";
import { LOCAL_STORAGE_KEY } from "@DJobs/DjobsUtils/LocalStorageKeys";
import { LoginAPI } from "@API";

const setAccessTokenInCookie = () => {
  let accessToken = null;
  if (typeof window !== "undefined")
    accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

  if (accessToken && !hasCookie(LOCAL_STORAGE_KEY.ACCESS_TOKEN))
    setCookie(LOCAL_STORAGE_KEY.ACCESS_TOKEN, accessToken);
};

export const Layout = ({ children }: LayoutProps.Children) => {
  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const isHomepage =
    typeof window === "object" &&
    window.location.pathname === DJOBS_ROUTES.home;

  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.loading.setIsLoading(false));
      dispatch(actions.loading.setIsHomepageLoading(false));
    }, 0);
  });

  const isTokenExpired = token => {
    if (token) {
      return Date.now() >= JSON.parse(atob(token.split(".")[1])).exp * 1000;
    }
  };

  useEffect(() => {
    const { loading, login } = state;
    if (!isHomepage && loading.isHomepageLoading) {
      dispatch(actions.loading.setIsHomepageLoading(false));
    }
    let existingAccessToken = localStorage.getItem(
      LOCAL_STORAGE_KEY.ACCESS_TOKEN
    );
    if (isTokenExpired(existingAccessToken)) {
      existingAccessToken = "";
      localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, "");
    }
    if (existingAccessToken && !login.isLoggedin) {
      LoginAPI.handleAuthSuccess(existingAccessToken, window.location.href);
    }
    setAccessTokenInCookie();
  }, [state, isHomepage, dispatch]);


  return (
    <Container>
      <div>
        <Header />
        <Loading
          isLoading={state.loading.isHomepageLoading || state.loading.isLoading}
        />
        <div>{children}</div>
      </div>
      {!state.loading.isHomepageLoading && <Footer />}
    </Container>
  );
};

const Container = styled.div`
  min-width: 360px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
