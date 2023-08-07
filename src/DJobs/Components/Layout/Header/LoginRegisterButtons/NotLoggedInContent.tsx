import React from "react";
import { useDispatch } from "react-redux";

import { AuthWrapper } from "../Styles/HeaderStyles";
import { DjobsButton, DJobsTypography } from "@DJobs/Components/Basic";
import { actions } from "@Redux/slices";

export const NotLoggedInContent = () => {
  const dispatch = useDispatch();

  return (
    <AuthWrapper>
      <div
        onClick={() => dispatch(actions.login.setLoginState(true))}
        style={{ cursor: "pointer" }}
      >
        <DJobsTypography styleName="djButtonText" color="white100">
          Sign in
        </DJobsTypography>
      </div>

      <DjobsButton.Main variant="Success" label="Register" />
    </AuthWrapper>
  );
};
