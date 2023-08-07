import React from "react";
import styled from "styled-components";

import { DjobsButton } from "@DJobs/Components/Basic";
import { useRouter } from "next/router";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";
import { useAppDispatch } from "@Redux";
import { loginActions } from "@Redux/slices/Login";

export const RegisterAndLoginButtons = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <Container>
      <DjobsButton.Apply
        variant="Primary"
        label="Get Started"
        onClick={() => {
          router.push(DJOBS_ROUTES.login);
          dispatch(
            loginActions.setUrlBeforeInitiatinLogin(window.location.href)
          );
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 976px) {
    padding-top: 38px;
  }
`;
