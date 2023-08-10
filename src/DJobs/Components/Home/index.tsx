import React, { useState, createContext, useEffect } from "react";
import styled from "styled-components";

import { djobsTheme } from "@DJobs/Theme";
import { DjobsHome } from "./Home";
import { DeviceTypeHelpers, DeviceTypes } from "@Helpers/DeviceTypeHelpers";
import { DesktopContent } from "./DesktopContent";
import { MobileContent } from "./MobileContent";
import { store, useAppDispatch, useAppSelector } from "@Redux";
import { reduxActions } from "@Redux/actions";
import { fetchCareerDataThunk } from "@Redux/slices/Career";
import { getCandidateOverview } from "@Redux/slices/CandidateDetails";

export const DjobsHomeContext = createContext({} as DjobsHome.Context);

export const Home = () => {
  const dispatch = useAppDispatch();
  const { login, loading, career, candidateDetails } = useAppSelector(
    state => state
  );
  const { isLoggedin } = login;

  const [isLoading, setIsLoading] = useState(loading.isHomepageLoading);
  //Logic to update component when device width changes
  const [deviceWidth, setWidth] = useState(0);
  const [deviceType, setDeviceType] = useState("mobile" as DeviceTypes);
  const handleWindowResize = () => setWidth(window.innerWidth);

  store.subscribe(() => {
    const state = store.getState();
    setIsLoading(state.loading.isHomepageLoading);
  });

  useEffect(() => {
    window.document.title = "Ditto Jobs";
    //#region Loading event handler
    isLoading && reduxActions.loading.enableHomepageLoading();
    const onLoad = () => {
      reduxActions.loading.disableHomepageLoading();
      setIsLoading(false);
    };
    window.addEventListener("load", onLoad);
    window.document.readyState !== "loading" && onLoad();
    //#endregion

    //#region Resize event handler
    window.addEventListener("resize", handleWindowResize);
    setDeviceType(DeviceTypeHelpers.getDeviceType(deviceWidth));
    handleWindowResize();
    //#endregion

    if (isLoggedin) {
      career.careerList.length === 0 && dispatch(fetchCareerDataThunk());
      candidateDetails.job_recommendations.length === 0 &&
        dispatch(getCandidateOverview());
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("load", onLoad);
    };
  }, [deviceWidth, deviceType, isLoggedin, isLoading]);

  const isDesktopOrBigger = deviceType === "desktop" || deviceType === "large";
  const djobsHomeContextValue: DjobsHome.Context = {
    deviceWidth,
    deviceType,
    isDesktopOrBigger,
  };

  return isLoading ? (
    <React.Fragment></React.Fragment>
  ) : (
    <DjobsHomeContext.Provider value={djobsHomeContextValue}>
      <Container>
        {isDesktopOrBigger ? <DesktopContent /> : <MobileContent />}
      </Container>
    </DjobsHomeContext.Provider>
  );
};

const Container = styled.div`
  background: ${djobsTheme.colors.white110};
  min-width: 360px;
`;
